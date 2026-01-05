import * as THREE from 'three';
import { GameScene } from './Scene.js';
import { Input } from './Input.js';
import { Audio } from './Audio.js';
import { Player } from '../entities/Player.js';
import { Enemy, EnemyTypes } from '../entities/Enemy.js';
import { ProjectileSystem } from '../entities/Projectile.js';
import { XPGemSystem } from '../entities/XPGem.js';
import { ParticleSystem } from '../entities/Particle.js';
import { Arena } from '../entities/Arena.js';
import { CollisionSystem } from '../systems/CollisionSystem.js';
import { AbilitySystem } from '../systems/AbilitySystem.js';
import { WaveSystem } from '../systems/WaveSystem.js';
import { UI } from '../ui/UI.js';
import { MathUtils } from '../utils/MathUtils.js';

export const GameState = {
  MENU: 'menu',
  PLAYING: 'playing',
  PAUSED: 'paused',
  LEVELUP: 'levelup',
  GAMEOVER: 'gameover',
  VICTORY: 'victory',
  ROOM_TRANSITION: 'room_transition'
};

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = GameState.MENU;

    this.scene = new GameScene(canvas);
    this.input = new Input();
    this.ui = new UI();

    this.arenaSize = 20;
    this.arena = new Arena(this.scene.scene, this.arenaSize);

    this.player = new Player(this.scene.scene);
    this.projectileSystem = new ProjectileSystem(this.scene.scene);
    this.xpGemSystem = new XPGemSystem(this.scene.scene);
    this.particleSystem = new ParticleSystem(this.scene.scene);
    this.collisionSystem = new CollisionSystem();
    this.abilitySystem = new AbilitySystem();
    this.waveSystem = new WaveSystem();

    this.enemies = [];
    this.enemiesKilled = 0;
    this.totalTime = 0;

    this.roomTransitionTimer = 0;
    this.waveStartDelay = 0;
    this.pendingLevelUp = false;

    this.lastTime = 0;
    this.deltaTime = 0;

    this.setupUICallbacks();
    this.ui.showStartMenu();

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setupUICallbacks() {
    this.ui.on('start', () => this.startGame());
    this.ui.on('pause', () => this.pauseGame());
    this.ui.on('resume', () => this.resumeGame());
    this.ui.on('quit', () => this.quitToMenu());
    this.ui.on('restart', () => this.restartGame());
  }

  startGame() {
    Audio.init();
    Audio.playMusic();

    this.resetGame();
    this.state = GameState.PLAYING;
    this.ui.hideAllMenus();

    this.startRoom();
  }

  resetGame() {
    this.player.reset();
    this.projectileSystem.clear();
    this.xpGemSystem.clear();
    this.particleSystem.clear();
    this.abilitySystem.reset();
    this.waveSystem.reset();

    for (const enemy of this.enemies) {
      enemy.dispose();
    }
    this.enemies = [];

    this.enemiesKilled = 0;
    this.totalTime = 0;
    this.pendingLevelUp = false;

    this.ui.reset();
  }

  startRoom() {
    // Clear existing entities from previous room
    for (const enemy of this.enemies) {
      enemy.dispose();
    }
    this.enemies = [];
    this.projectileSystem.clear();
    this.xpGemSystem.clear();
    this.particleSystem.clear();

    // Reset transition timer
    this.roomTransitionTimer = 0;

    const roomData = this.waveSystem.startRoom();

    this.arena.setColors(roomData.floorColor, roomData.wallColor);
    this.arena.addObstacles(roomData.obstacles);

    this.player.setPosition(0, 5);

    this.ui.updateStageInfo(roomData.stage, roomData.room);

    if (roomData.isBossRoom) {
      this.ui.showWaveAnnouncement('BOSS BATTLE!');
      Audio.play('bossSpawn');
    } else {
      this.ui.showWaveAnnouncement(`Room ${roomData.room}`);
    }

    this.waveStartDelay = 1.5;
  }

  startWave() {
    const waveData = this.waveSystem.startWave();

    if (waveData) {
      if (waveData.isBossWave) {
        this.scene.shake(0.5, 0.5);
      }
    }
  }

  pauseGame() {
    if (this.state === GameState.PLAYING) {
      this.state = GameState.PAUSED;
      this.ui.showPauseMenu();
      Audio.pauseMusic();
    }
  }

  resumeGame() {
    if (this.state === GameState.PAUSED) {
      this.state = GameState.PLAYING;
      this.ui.hideAllMenus();
      Audio.resumeMusic();
    }
  }

  quitToMenu() {
    this.state = GameState.MENU;
    this.ui.showStartMenu();
    Audio.stopMusic();
  }

  restartGame() {
    this.startGame();
  }

  showLevelUp() {
    this.state = GameState.LEVELUP;

    const abilities = this.abilitySystem.getRandomAbilities(3, this.player);

    Audio.play('levelUp');
    this.particleSystem.emitLevelUp(this.player.mesh.position);

    this.ui.showLevelUpScreen(abilities, (ability) => {
      this.selectAbility(ability);
    });
  }

  selectAbility(ability) {
    this.abilitySystem.applyAbility(ability, this.player);

    Audio.play('abilitySelect');

    const acquired = this.abilitySystem.getAcquiredAbilities();
    this.ui.updateAbilityBar(acquired);

    this.player.levelUp();
    this.ui.updateLevel(this.player.level);
    this.ui.updateXP(this.player.xp, this.player.xpToNextLevel);

    this.pendingLevelUp = false;
    this.state = GameState.PLAYING;
  }

  gameOver() {
    this.state = GameState.GAMEOVER;
    Audio.stopMusic();

    this.ui.showGameOver({
      level: this.player.level,
      kills: this.enemiesKilled,
      time: this.totalTime
    });
  }

  victory() {
    this.state = GameState.VICTORY;
    Audio.stopMusic();

    this.ui.showVictory({
      level: this.player.level,
      kills: this.enemiesKilled,
      time: this.totalTime
    });
  }

  update(delta) {
    if (this.state !== GameState.PLAYING) return;

    this.totalTime += delta;
    this.input.update();

    this.player.update(delta, this.input, this.enemies);

    const constrainedPos = this.arena.constrainToArena(this.player.mesh.position, 0.4);
    this.player.mesh.position.x = constrainedPos.x;
    this.player.mesh.position.z = constrainedPos.z;

    this.handlePlayerAttack(delta);

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      const result = enemy.update(delta, this.player, this.projectileSystem);

      if (result === 'dead') {
        this.onEnemyDeath(enemy);
        enemy.dispose();
        this.enemies.splice(i, 1);
        continue;
      }

      if (result && result.type === 'spawn') {
        this.spawnEnemy(result);
      }

      const constrainedEnemy = this.arena.constrainToArena(enemy.mesh.position, enemy.getCollisionRadius());
      enemy.mesh.position.x = constrainedEnemy.x;
      enemy.mesh.position.z = constrainedEnemy.z;
    }

    this.collisionSystem.separateEnemies(this.enemies);

    this.projectileSystem.update(delta, this.enemies, this.player, this.arenaSize);
    this.particleSystem.update(delta);

    const collectedXP = this.xpGemSystem.update(
      delta,
      this.player.mesh.position,
      this.player.xpMagnetRange
    );

    if (collectedXP > 0) {
      Audio.play('xpPickup');
      const leveledUp = this.player.addXP(collectedXP);

      this.ui.updateXP(this.player.xp, this.player.xpToNextLevel);

      if (leveledUp) {
        this.pendingLevelUp = true;
      }
    }

    this.handleCollisions();

    this.handleWaveLogic(delta);

    if (this.pendingLevelUp && !this.waveSystem.isWaveInProgress()) {
      this.showLevelUp();
    }

    if (!this.player.isAlive()) {
      this.gameOver();
    }

    this.scene.followTarget(this.player, 0.1);
    this.scene.updateScreenShake(delta);

    this.ui.updateHealth(this.player.health, this.player.maxHealth);
  }

  handlePlayerAttack(delta) {
    this.player.updateAttackTimer(delta);

    if (this.player.canAttack(this.input) && this.player.isReadyToAttack()) {
      const nearestEnemy = this.player.findNearestEnemy(this.enemies);

      if (nearestEnemy) {
        const directions = this.player.getAttackDirections(nearestEnemy);

        for (const dir of directions) {
          const isCrit = Math.random() < this.player.critChance;
          const damage = isCrit
            ? this.player.attackDamage * this.player.critMultiplier
            : this.player.attackDamage;

          this.projectileSystem.fire(
            this.player.mesh.position,
            dir,
            damage,
            this.player.projectileSpeed,
            this.player.projectilePierce,
            {
              isPlayerProjectile: true,
              bouncyWalls: this.player.bouncyWalls,
              ricochet: this.player.ricochet,
              homing: this.player.homing,
              isCrit
            }
          );
        }

        this.player.resetAttackTimer();
        Audio.play('shoot');
      }
    }
  }

  handleCollisions() {
    const playerEnemyCollisions = this.collisionSystem.checkPlayerEnemyCollisions(
      this.player,
      this.enemies
    );

    for (const collision of playerEnemyCollisions) {
      const dir = MathUtils.normalize(collision.direction.x, collision.direction.z);
      const damaged = this.player.takeDamage(collision.enemy.damage, { x: dir.x, z: dir.y });

      if (damaged) {
        Audio.play('playerHit');
        this.scene.shake(0.3, 0.2);
        this.particleSystem.emitHit(this.player.mesh.position, 0xe74c3c);
      }
    }

    const projectileEnemyCollisions = this.collisionSystem.checkProjectileEnemyCollisions(
      this.projectileSystem.getActiveProjectiles(),
      this.enemies
    );

    for (const collision of projectileEnemyCollisions) {
      const { projectile, enemy, position } = collision;

      // Skip if enemy is already dying
      if (enemy.isDying) continue;

      const knockbackDir = {
        x: enemy.mesh.position.x - this.player.mesh.position.x,
        z: enemy.mesh.position.z - this.player.mesh.position.z
      };
      const len = Math.sqrt(knockbackDir.x ** 2 + knockbackDir.z ** 2);
      if (len > 0) {
        knockbackDir.x /= len;
        knockbackDir.z /= len;
      }

      // Store bomber info before takeDamage since die() is called internally
      const isBomber = enemy.type === EnemyTypes.BOMBER;
      const bomberConfig = isBomber ? {
        position: enemy.mesh.position.clone(),
        radius: enemy.config.explosionRadius,
        damage: enemy.config.explosionDamage
      } : null;

      const killed = enemy.takeDamage(projectile.damage, knockbackDir);

      projectile.onHitEnemy(enemy, this.enemies);

      Audio.play('hit');
      this.particleSystem.emitHit(position, 0xffffff);

      const screenPos = this.scene.worldToScreen(position);
      this.ui.showDamageNumber(
        screenPos.x,
        screenPos.y,
        projectile.damage,
        projectile.isCrit
      );

      // Handle bomber explosion - die() was already called by takeDamage
      if (killed && isBomber && bomberConfig) {
        this.handleExplosion({
          type: 'explosion',
          ...bomberConfig
        });
      }
    }

    const projectilePlayerCollisions = this.collisionSystem.checkProjectilePlayerCollisions(
      this.projectileSystem.getActiveProjectiles(),
      this.player
    );

    for (const collision of projectilePlayerCollisions) {
      const { projectile, position } = collision;

      const knockbackDir = {
        x: this.player.mesh.position.x - projectile.mesh.position.x,
        z: this.player.mesh.position.z - projectile.mesh.position.z
      };
      const len = Math.sqrt(knockbackDir.x ** 2 + knockbackDir.z ** 2);
      if (len > 0) {
        knockbackDir.x /= len;
        knockbackDir.z /= len;
      }

      const damaged = this.player.takeDamage(projectile.damage, knockbackDir);
      projectile.deactivate();

      if (damaged) {
        Audio.play('playerHit');
        this.scene.shake(0.3, 0.2);
        this.particleSystem.emitHit(position, 0xe74c3c);
      }
    }
  }

  handleExplosion(explosion) {
    const result = this.collisionSystem.checkExplosionCollisions(
      explosion.position,
      explosion.radius,
      this.player,
      this.enemies
    );

    this.particleSystem.emitExplosion(explosion.position, explosion.radius);
    this.scene.shake(0.5, 0.3);

    if (result.hitPlayer) {
      this.player.takeDamage(explosion.damage);
      Audio.play('playerHit');
    }

    for (const enemy of result.hitEnemies) {
      enemy.takeDamage(explosion.damage);
    }
  }

  handleWaveLogic(delta) {
    if (this.waveStartDelay > 0) {
      this.waveStartDelay -= delta;
      if (this.waveStartDelay <= 0) {
        this.startWave();
      }
      return;
    }

    const spawnData = this.waveSystem.getNextSpawn(delta);
    if (spawnData) {
      this.spawnEnemy(spawnData);
    }

    if (this.waveSystem.isRoomCleared()) {
      if (this.roomTransitionTimer === 0) {
        Audio.play('doorOpen');
        this.ui.showWaveAnnouncement('Room Cleared!');

        const autoCollectedXP = this.xpGemSystem.collectAll();
        if (autoCollectedXP > 0) {
          Audio.play('xpPickup');
          const leveledUp = this.player.addXP(autoCollectedXP);
          this.ui.updateXP(this.player.xp, this.player.xpToNextLevel);
          this.ui.showXPCollected(autoCollectedXP);

          if (leveledUp) {
            this.pendingLevelUp = true;
          }
        }
      }

      this.roomTransitionTimer += delta;

      if (this.roomTransitionTimer >= 2) {
        this.roomTransitionTimer = 0;

        const result = this.waveSystem.advanceRoom();

        if (result.type === 'victory') {
          this.victory();
        } else {
          this.startRoom();
        }
      }
    } else if (!this.waveSystem.isWaveInProgress() && this.waveSystem.currentWave < this.waveSystem.wavesInRoom) {
      this.waveStartDelay = 1;
    }
  }

  spawnEnemy(spawnData) {
    const enemy = new Enemy(
      this.scene.scene,
      spawnData.type,
      spawnData.position,
      spawnData.difficultyMultiplier
    );

    this.enemies.push(enemy);
  }

  onEnemyDeath(enemy) {
    this.enemiesKilled++;
    this.waveSystem.onEnemyKilled();

    Audio.play('enemyDeath');

    // Safely get color with fallback
    const color = enemy.config ? enemy.config.color : 0xe74c3c;
    this.particleSystem.emitDeath(enemy.mesh.position, color);

    this.xpGemSystem.spawnMultiple(enemy.mesh.position, enemy.xpValue || 10);
  }

  animate(time) {
    requestAnimationFrame(this.animate);

    try {
      this.deltaTime = Math.min((time - this.lastTime) / 1000, 0.1);
      this.lastTime = time;

      this.update(this.deltaTime);
      this.scene.render();
    } catch (error) {
      console.error('Game loop error:', error);
    }
  }
}
