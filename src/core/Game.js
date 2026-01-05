import * as THREE from 'three';
import { GameScene } from './Scene.js';
import { Input } from './Input.js';
import { Audio } from './Audio.js';
import { Player } from '../entities/Player.js';
import { Enemy, EnemyTypes } from '../entities/Enemy.js';
import { StatusEffectTypes } from '../systems/StatusEffectSystem.js';
import { ProjectileSystem } from '../entities/Projectile.js';
import { XPGemSystem } from '../entities/XPGem.js';
import { HealthPotionSystem } from '../entities/HealthPotion.js';
import { ParticleSystem } from '../entities/Particle.js';
import { Arena } from '../entities/Arena.js';
import { RoomGate } from '../entities/RoomGate.js';
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
  ROOM_TRANSITION: 'room_transition',
  REWARD_WHEEL: 'reward_wheel'
};

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = GameState.MENU;

    // Check for god mode via query param
    const urlParams = new URLSearchParams(window.location.search);
    this.godMode = urlParams.get('godmode') === 'true';

    // God mode key state tracking
    this.godModeKeyPressed_S = false;
    this.godModeKeyPressed_E = false;
    this.godModeKeyPressed_X = false;

    this.scene = new GameScene(canvas);
    this.input = new Input();
    this.ui = new UI();

    // Show god mode UI indicator
    if (this.godMode) {
      console.log('%c🔥 GOD MODE ENABLED 🔥', 'color: gold; font-size: 20px; font-weight: bold;');
      console.log('Press S = New Skill, E = Victory, X = Die');
      this.ui.showGodModeIndicator();
    }

    this.arenaSize = 20;
    this.arena = new Arena(this.scene.scene, this.arenaSize);

    this.player = new Player(this.scene.scene);
    this.projectileSystem = new ProjectileSystem(this.scene.scene);
    this.xpGemSystem = new XPGemSystem(this.scene.scene);
    this.healthPotionSystem = new HealthPotionSystem(this.scene.scene);
    this.particleSystem = new ParticleSystem(this.scene.scene);
    this.collisionSystem = new CollisionSystem();
    this.abilitySystem = new AbilitySystem();
    this.waveSystem = new WaveSystem();
    this.roomGate = new RoomGate(this.scene.scene);

    this.enemies = [];
    this.enemiesKilled = 0;
    this.totalTime = 0;

    this.roomTransitionTimer = 0;
    this.waveStartDelay = 0;

    // Gate transition state
    this.gateActive = false;
    this.gateTransitioning = false;
    this.gateTransitionProgress = 0;
    this.playerEnteredGate = false;

    // Reward wheel state
    this.pendingWheelReward = false;

    // Minor bonus rewards (one will be offered alongside health)
    this.bonusRewards = [
      { id: 'max_hp', name: 'Max HP Up', description: '+10 Max HP', icon: '💖' },
      { id: 'speed', name: 'Speed Boost', description: '+8% Speed', icon: '⚡' },
      { id: 'attack', name: 'Attack Up', description: '+5% Damage', icon: '⚔️' },
      { id: 'attack_speed', name: 'Faster Attack', description: '+8% Attack Speed', icon: '🏹' },
      { id: 'crit', name: 'Critical Eye', description: '+3% Crit', icon: '🎯' },
      { id: 'regen', name: 'Regeneration', description: '+0.5 HP/sec', icon: '💚' },
      { id: 'magnet', name: 'Magnetism', description: '+15% XP Range', icon: '🧲' }
    ];

    // Health option always offered
    this.healthBonus = { id: 'heal', name: 'Health Restore', description: '+25 HP', icon: '❤️' };

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
    this.input.setTouchControlsEnabled(true); // Enable touch controls when game starts

    this.startRoom();
  }

  resetGame() {
    this.player.reset();
    this.projectileSystem.clear();
    this.xpGemSystem.clear();
    this.healthPotionSystem.clear();
    this.particleSystem.clear();
    this.abilitySystem.reset();
    this.waveSystem.reset();
    this.roomGate.despawn();

    for (const enemy of this.enemies) {
      enemy.dispose();
    }
    this.enemies = [];

    this.enemiesKilled = 0;
    this.totalTime = 0;

    // Reset gate state
    this.gateActive = false;
    this.gateTransitioning = false;
    this.gateTransitionProgress = 0;
    this.playerEnteredGate = false;

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
    this.healthPotionSystem.clear();
    this.particleSystem.clear();

    // Reset transition timer and gate state
    this.roomTransitionTimer = 0;
    this.roomGate.despawn();
    this.gateActive = false;
    this.gateTransitioning = false;
    this.gateTransitionProgress = 0;
    this.playerEnteredGate = false;

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
      this.input.setTouchControlsEnabled(false); // Disable touch controls when paused
    }
  }

  resumeGame() {
    if (this.state === GameState.PAUSED) {
      this.state = GameState.PLAYING;
      this.ui.hideAllMenus();
      Audio.resumeMusic();
      this.input.setTouchControlsEnabled(true); // Re-enable touch controls when resumed
    }
  }

  quitToMenu() {
    this.state = GameState.MENU;
    this.ui.showStartMenu();
    Audio.stopMusic();
    this.input.setTouchControlsEnabled(false); // Disable touch controls when back to menu
  }

  restartGame() {
    this.startGame();
  }

  showLevelUp() {
    this.state = GameState.LEVELUP;
    this.input.setTouchControlsEnabled(false); // Disable touch controls during level up

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

    this.state = GameState.PLAYING;
    this.input.setTouchControlsEnabled(true); // Re-enable touch controls after ability selection
  }

  showRoomBonus() {
    this.state = GameState.REWARD_WHEEL;
    this.input.setTouchControlsEnabled(false);

    // Pick one random bonus reward
    const randomIndex = Math.floor(Math.random() * this.bonusRewards.length);
    const randomBonus = this.bonusRewards[randomIndex];

    // Always offer health + one random bonus
    const options = [this.healthBonus, randomBonus];

    this.ui.showBonusSelection(options, (bonus) => {
      this.applyBonus(bonus);
    });
  }

  applyBonus(bonus) {
    switch (bonus.id) {
      case 'heal':
        this.player.heal(25);
        this.ui.updateHealth(this.player.health, this.player.maxHealth);
        break;
      case 'max_hp':
        this.player.maxHealth += 10;
        this.player.health += 10;
        this.ui.updateHealth(this.player.health, this.player.maxHealth);
        break;
      case 'speed':
        this.player.speed *= 1.08;
        break;
      case 'attack':
        this.player.attackDamage *= 1.05;
        break;
      case 'attack_speed':
        this.player.attackSpeed *= 1.08;
        break;
      case 'crit':
        this.player.critChance += 0.03;
        break;
      case 'regen':
        this.player.hpRegen = (this.player.hpRegen || 0) + 0.5;
        break;
      case 'magnet':
        this.player.xpMagnetRange *= 1.15;
        break;
    }

    Audio.play('abilitySelect');
    this.pendingWheelReward = false;

    // Start the new room after bonus selection
    this.startRoom();

    this.state = GameState.PLAYING;
    this.input.setTouchControlsEnabled(true);
  }

  gameOver() {
    this.state = GameState.GAMEOVER;
    Audio.stopMusic();
    this.input.setTouchControlsEnabled(false); // Disable touch controls on game over

    this.ui.showGameOver({
      level: this.player.level,
      kills: this.enemiesKilled,
      time: this.totalTime
    });
  }

  victory() {
    this.state = GameState.VICTORY;
    Audio.stopMusic();
    this.input.setTouchControlsEnabled(false); // Disable touch controls on victory

    this.ui.showVictory({
      level: this.player.level,
      kills: this.enemiesKilled,
      time: this.totalTime
    });
  }

  update(delta) {
    if (this.state !== GameState.PLAYING) return;

    // God mode key handling
    if (this.godMode) {
      this.handleGodModeKeys();
    }

    this.totalTime += delta;
    this.input.update();

    this.player.update(delta, this.input, this.enemies);

    const constrainedPos = this.arena.constrainToArena(this.player.mesh.position, 0.4);
    this.player.mesh.position.x = constrainedPos.x;
    this.player.mesh.position.z = constrainedPos.z;

    this.handlePlayerAttack(delta);

    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      const result = enemy.update(delta, this.player, this.projectileSystem, this.particleSystem);

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

    this.projectileSystem.update(delta, this.enemies, this.player, this.arenaSize, this.arena.getObstacles());
    this.particleSystem.update(delta);

    // During combat: small pickup radius (must walk over gems to collect)
    // When gate appears: full magnet range + all gems get magnetized
    const magnetRange = this.gateActive ? this.player.xpMagnetRange : 0.8;
    const collectedXP = this.xpGemSystem.update(
      delta,
      this.player.mesh.position,
      magnetRange
    );

    if (collectedXP > 0) {
      Audio.play('xpPickup');
      const leveledUp = this.player.addXP(collectedXP);

      this.ui.updateXP(this.player.xp, this.player.xpToNextLevel);

      if (leveledUp) {
        // Immediately show level up screen when XP threshold is reached
        this.showLevelUp();
        return; // Skip the rest of the update while in level up screen
      }
    }

    // Update health potions and check for pickup
    const healAmount = this.healthPotionSystem.update(
      delta,
      this.player.mesh.position
    );

    if (healAmount > 0) {
      this.player.heal(healAmount);
      Audio.play('xpPickup'); // Reuse pickup sound
      this.ui.updateHealth(this.player.health, this.player.maxHealth);

      // Show heal number
      const screenPos = this.scene.worldToScreen(this.player.mesh.position);
      this.ui.showHealNumber(healAmount, screenPos.x, screenPos.y);

      // Emit healing particles
      this.particleSystem.emitBurst(this.player.mesh.position, 10, {
        color: 0xff4444,
        speed: 2,
        lifetime: 0.6,
        startScale: 0.15,
        endScale: 0,
        gravity: -3,
        elevation: 0.5
      });
    }

    this.handleCollisions();

    this.handleWaveLogic(delta);

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
              isCrit,
              elementalType: this.player.elementalType
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
      const damage = collision.enemy.damage;
      const damaged = this.player.takeDamage(damage, { x: dir.x, z: dir.y });

      if (damaged) {
        Audio.play('playerHit');
        this.scene.shake(0.3, 0.2);
        this.particleSystem.emitHit(this.player.mesh.position, 0xe74c3c);
        const screenPos = this.scene.worldToScreen(this.player.mesh.position);
        this.ui.showPlayerDamage(damage, screenPos.x, screenPos.y);
        this.ui.updateHealth(this.player.health, this.player.maxHealth);
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

      // Check for inferno explosion (burning enemy dying)
      const hadBurn = enemy.hasStatusEffect(StatusEffectTypes.BURN);

      // Calculate damage with shatter bonus
      let finalDamage = projectile.damage;
      if (this.player.shatterBonus && enemy.hasStatusEffect(StatusEffectTypes.FREEZE)) {
        finalDamage *= 1.3; // 30% bonus damage to frozen enemies
      }

      const killed = enemy.takeDamage(finalDamage, knockbackDir);

      // Apply status effect from elemental projectile
      if (projectile.elementalType && projectile.isPlayerProjectile && !killed) {
        enemy.applyStatusEffect(projectile.elementalType, 1);

        // Emit elemental hit particles
        this.emitElementalHitParticles(position, projectile.elementalType);
      }

      // Handle plague spread (poison spreads to nearby enemies)
      if (projectile.elementalType === StatusEffectTypes.POISON && this.player.plagueSpread) {
        this.spreadPoison(enemy, position);
      }

      projectile.onHitEnemy(enemy, this.enemies);

      Audio.play('hit');

      // Use elemental color for hit particles if applicable
      const hitColor = projectile.elementalType ?
        this.getElementalColor(projectile.elementalType) : 0xffffff;
      this.particleSystem.emitHit(position, hitColor);

      const screenPos = this.scene.worldToScreen(position);
      this.ui.showDamageNumber(
        screenPos.x,
        screenPos.y,
        Math.floor(finalDamage),
        projectile.isCrit
      );

      // Handle bomber explosion - die() was already called by takeDamage
      if (killed && isBomber && bomberConfig) {
        this.handleExplosion({
          type: 'explosion',
          ...bomberConfig
        });
      }

      // Handle inferno explosion (burning enemy explodes on death)
      if (killed && hadBurn && this.player.infernoExplosion && !isBomber) {
        this.handleExplosion({
          type: 'explosion',
          position: enemy.mesh.position.clone(),
          radius: 1.5,
          damage: 15
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

      const damage = projectile.damage;
      const damaged = this.player.takeDamage(damage, knockbackDir);
      projectile.deactivate();

      if (damaged) {
        Audio.play('playerHit');
        this.scene.shake(0.3, 0.2);
        this.particleSystem.emitHit(position, 0xe74c3c);
        const screenPos = this.scene.worldToScreen(this.player.mesh.position);
        this.ui.showPlayerDamage(damage, screenPos.x, screenPos.y);
        this.ui.updateHealth(this.player.health, this.player.maxHealth);
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
      const damaged = this.player.takeDamage(explosion.damage);
      if (damaged) {
        Audio.play('playerHit');
        const screenPos = this.scene.worldToScreen(this.player.mesh.position);
        this.ui.showPlayerDamage(explosion.damage, screenPos.x, screenPos.y);
        this.ui.updateHealth(this.player.health, this.player.maxHealth);
      }
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

    // Handle gate transition animation
    if (this.gateTransitioning) {
      this.gateTransitionProgress += delta * 2; // ~0.5 second transition

      // Screen fade effect via UI
      this.ui.setScreenFade(Math.min(1, this.gateTransitionProgress));

      if (this.gateTransitionProgress >= 1) {
        // Transition complete - advance to next room
        this.gateTransitioning = false;
        this.gateTransitionProgress = 0;

        const result = this.waveSystem.advanceRoom();

        if (result.type === 'victory') {
          this.ui.setScreenFade(0);
          this.victory();
        } else {
          // Mark that we need to show the wheel after fade
          this.pendingWheelReward = true;
          // Fade back in and then show wheel
          this.ui.fadeScreenIn(0.3);

          // Delay showing bonus selection until fade completes
          setTimeout(() => {
            if (this.pendingWheelReward && this.state !== GameState.GAMEOVER) {
              this.showRoomBonus();
            }
          }, 350);
        }
      }
      return;
    }

    if (this.waveSystem.isRoomCleared()) {
      // First frame of room cleared - spawn the gate
      if (!this.gateActive) {
        this.gateActive = true;
        Audio.play('doorOpen');
        this.ui.showWaveAnnouncement('Room Cleared!');

        // Spawn the gate at the top of the arena FIRST
        const gatePosition = new THREE.Vector3(0, 0, -this.arenaSize / 2 + 2);
        this.roomGate.spawn(gatePosition);
        Audio.play('gateSpawn');

        // Magnetize all XP gems so they fly to the player with visual effect
        this.xpGemSystem.magnetizeAll(this.player.mesh.position);

        // Show UI hint to go through gate
        this.ui.showWaveAnnouncement('Enter the Gate!', 3000);
      }

      // Update gate and check for player entering
      const gateResult = this.roomGate.update(delta, this.player.mesh.position);

      // Player just entered the gate
      if (gateResult.playerInside && !this.playerEnteredGate) {
        this.playerEnteredGate = true;
        Audio.play('gateEnter');
      } else if (!gateResult.playerInside) {
        this.playerEnteredGate = false;
      }

      // Player has fully entered - trigger transition
      if (gateResult.shouldTransition) {
        this.gateTransitioning = true;
        this.gateTransitionProgress = 0;
        Audio.play('gateTransition');
        this.scene.shake(0.3, 0.3);

        // Emit particles for dramatic effect
        this.particleSystem.emitBurst(this.player.mesh.position, 20, {
          color: 0x6fdac9,
          speed: 4,
          lifetime: 0.8,
          startScale: 0.2,
          endScale: 0,
          gravity: -3,
          elevation: 0.5
        });
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

    // Check for health potion drop (every 10-15 kills)
    this.healthPotionSystem.onEnemyKilled(enemy.mesh.position);
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

  // God mode methods

  handleGodModeKeys() {
    // S = Show skill selection
    if (this.input.isKeyPressed('KeyS') && !this.godModeKeyPressed_S) {
      this.godModeKeyPressed_S = true;
      this.showLevelUp();
    } else if (!this.input.isKeyPressed('KeyS')) {
      this.godModeKeyPressed_S = false;
    }

    // E = Victory (end level)
    if (this.input.isKeyPressed('KeyE') && !this.godModeKeyPressed_E) {
      this.godModeKeyPressed_E = true;
      this.victory();
    } else if (!this.input.isKeyPressed('KeyE')) {
      this.godModeKeyPressed_E = false;
    }

    // X = Die (game over)
    if (this.input.isKeyPressed('KeyX') && !this.godModeKeyPressed_X) {
      this.godModeKeyPressed_X = true;
      this.player.health = 0;
      this.gameOver();
    } else if (!this.input.isKeyPressed('KeyX')) {
      this.godModeKeyPressed_X = false;
    }

    // R = Clear room (kill all enemies)
    if (this.input.isKeyPressed('KeyR') && !this.godModeKeyPressed_R) {
      this.godModeKeyPressed_R = true;
      this.godModeClearRoom();
    } else if (!this.input.isKeyPressed('KeyR')) {
      this.godModeKeyPressed_R = false;
    }
  }

  godModeClearRoom() {
    // Kill all enemies and dispose them
    for (const enemy of this.enemies) {
      enemy.health = 0;
      // Spawn XP gems for each enemy
      this.xpGemSystem.spawnMultiple(enemy.mesh.position, enemy.xpValue || 10);
      // Emit death particles
      const color = enemy.config ? enemy.config.color : 0xe74c3c;
      this.particleSystem.emitDeath(enemy.mesh.position, color);
      enemy.dispose();
    }
    // Clear the enemies array
    this.enemies = [];

    // Clear spawn queue
    this.waveSystem.spawnQueue = [];

    // Force wave system to cleared state
    this.waveSystem.currentWave = this.waveSystem.wavesInRoom;
    this.waveSystem.enemiesRemaining = 0;
    this.waveSystem.roomCleared = true;
    this.waveSystem.waveInProgress = false;

    // Play sound effect
    Audio.play('doorOpen');

    // Show feedback
    this.ui.showWaveAnnouncement('Room Cleared! (God Mode)');
  }

  // Helper methods for elemental effects

  getElementalColor(elementalType) {
    switch (elementalType) {
      case StatusEffectTypes.BURN:
        return 0xff4500;
      case StatusEffectTypes.FREEZE:
        return 0x00bfff;
      case StatusEffectTypes.POISON:
        return 0x32cd32;
      default:
        return 0xffffff;
    }
  }

  emitElementalHitParticles(position, elementalType) {
    const color = this.getElementalColor(elementalType);
    const count = 5;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const config = {
        position: position.clone(),
        color,
        speed: MathUtils.randomRange(2, 4),
        lifetime: 0.4,
        startScale: 0.12,
        endScale: 0,
        angle,
        elevation: elementalType === StatusEffectTypes.BURN ? 0.8 : 0.3,
        gravity: elementalType === StatusEffectTypes.BURN ? -2 : 5
      };

      this.particleSystem.emit(config);
    }
  }

  spreadPoison(sourceEnemy, position) {
    const spreadRadius = 3;
    const spreadCount = 0;

    for (const enemy of this.enemies) {
      if (enemy === sourceEnemy || !enemy.isAlive || enemy.isDying) continue;

      const dist = MathUtils.distanceXZ(position, enemy.mesh.position);
      if (dist <= spreadRadius && spreadCount < 3) {
        // Only spread if enemy doesn't already have poison
        if (!enemy.hasStatusEffect(StatusEffectTypes.POISON)) {
          enemy.applyStatusEffect(StatusEffectTypes.POISON, 1);

          // Visual effect for spread
          this.particleSystem.emitBurst(enemy.mesh.position, 6, {
            color: 0x32cd32,
            speed: 1,
            lifetime: 0.3,
            startScale: 0.1,
            endScale: 0,
            gravity: -2
          });
        }
      }
    }
  }
}
