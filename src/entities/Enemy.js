import * as THREE from 'three';
import { MathUtils } from '../utils/MathUtils.js';

export const EnemyTypes = {
  CHASER: 'chaser',
  SHOOTER: 'shooter',
  BOMBER: 'bomber',
  SPAWNER: 'spawner',
  TANK: 'tank',
  BOSS: 'boss'
};

const EnemyConfigs = {
  [EnemyTypes.CHASER]: {
    health: 20,
    damage: 10,
    speed: 2.5,
    xpValue: 10,
    color: 0xe74c3c,
    size: 0.4,
    shape: 'box'
  },
  [EnemyTypes.SHOOTER]: {
    health: 15,
    damage: 8,
    speed: 1.5,
    xpValue: 15,
    color: 0x9b59b6,
    size: 0.35,
    shape: 'octahedron',
    attackRange: 8,
    attackCooldown: 2,
    projectileSpeed: 6
  },
  [EnemyTypes.BOMBER]: {
    health: 25,
    damage: 20,
    speed: 3,
    xpValue: 20,
    color: 0xf39c12,
    size: 0.45,
    shape: 'sphere',
    explosionRadius: 2,
    explosionDamage: 25
  },
  [EnemyTypes.SPAWNER]: {
    health: 40,
    damage: 5,
    speed: 0,
    xpValue: 30,
    color: 0x1abc9c,
    size: 0.6,
    shape: 'cylinder',
    spawnCooldown: 4,
    spawnType: EnemyTypes.CHASER
  },
  [EnemyTypes.TANK]: {
    health: 80,
    damage: 20,
    speed: 1,
    xpValue: 40,
    color: 0x7f8c8d,
    size: 0.7,
    shape: 'box'
  },
  [EnemyTypes.BOSS]: {
    health: 500,
    damage: 30,
    speed: 1.5,
    xpValue: 200,
    color: 0x8e44ad,
    size: 1.2,
    shape: 'dodecahedron',
    attackRange: 10,
    attackCooldown: 1.5,
    projectileSpeed: 8,
    phases: 3
  }
};

export class Enemy {
  constructor(scene, type, position, difficultyMultiplier = 1) {
    this.scene = scene;
    this.type = type;
    this.config = { ...EnemyConfigs[type] };

    this.config.health *= difficultyMultiplier;
    this.config.damage *= difficultyMultiplier;
    this.config.xpValue = Math.floor(this.config.xpValue * difficultyMultiplier);

    this.health = this.config.health;
    this.maxHealth = this.config.health;
    this.damage = this.config.damage;
    this.speed = this.config.speed;
    this.xpValue = this.config.xpValue;

    this.isAlive = true;
    this.velocity = new THREE.Vector3();
    this.knockbackVelocity = new THREE.Vector3();

    this.attackTimer = Math.random() * (this.config.attackCooldown || 2);
    this.spawnTimer = Math.random() * (this.config.spawnCooldown || 4);

    this.hitFlashTimer = 0;
    this.deathTimer = 0;
    this.isDying = false;

    if (type === EnemyTypes.BOSS) {
      this.phase = 1;
      this.phaseHealthThresholds = [0.66, 0.33, 0];
      this.attackPattern = 0;
    }

    this.createMesh(position);
    this.createHealthBar();
  }

  createMesh(position) {
    const group = new THREE.Group();

    let geometry;
    switch (this.config.shape) {
      case 'box':
        geometry = new THREE.BoxGeometry(
          this.config.size * 2,
          this.config.size * 2,
          this.config.size * 2
        );
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(this.config.size, 16, 16);
        break;
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(this.config.size);
        break;
      case 'cylinder':
        geometry = new THREE.CylinderGeometry(
          this.config.size,
          this.config.size,
          this.config.size * 2,
          8
        );
        break;
      case 'dodecahedron':
        geometry = new THREE.DodecahedronGeometry(this.config.size);
        break;
      default:
        geometry = new THREE.BoxGeometry(
          this.config.size * 2,
          this.config.size * 2,
          this.config.size * 2
        );
    }

    const material = new THREE.MeshStandardMaterial({
      color: this.config.color,
      metalness: 0.3,
      roughness: 0.7
    });

    const body = new THREE.Mesh(geometry, material);
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    if (this.type === EnemyTypes.SHOOTER) {
      const eyeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
      eye1.position.set(-0.15, 0.1, this.config.size);
      const eye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
      eye2.position.set(0.15, 0.1, this.config.size);
      group.add(eye1, eye2);

      const pupilGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const pupil1 = new THREE.Mesh(pupilGeometry, pupilMaterial);
      pupil1.position.z = 0.05;
      eye1.add(pupil1);
      const pupil2 = new THREE.Mesh(pupilGeometry, pupilMaterial);
      pupil2.position.z = 0.05;
      eye2.add(pupil2);
    }

    if (this.type === EnemyTypes.BOMBER) {
      const fuseGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.2, 8);
      const fuseMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
      const fuse = new THREE.Mesh(fuseGeometry, fuseMaterial);
      fuse.position.y = this.config.size + 0.1;
      group.add(fuse);

      const sparkGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      const sparkMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.8
      });
      this.spark = new THREE.Mesh(sparkGeometry, sparkMaterial);
      this.spark.position.y = this.config.size + 0.25;
      group.add(this.spark);
    }

    if (this.type === EnemyTypes.BOSS) {
      const crownGeometry = new THREE.ConeGeometry(0.3, 0.5, 5);
      const crownMaterial = new THREE.MeshStandardMaterial({
        color: 0xf1c40f,
        metalness: 0.8,
        roughness: 0.2
      });
      const crown = new THREE.Mesh(crownGeometry, crownMaterial);
      crown.position.y = this.config.size + 0.3;
      group.add(crown);
    }

    this.mesh = group;
    this.mesh.position.set(position.x, this.config.size, position.z);
    this.body = body;
    this.originalColor = this.config.color;

    this.scene.add(this.mesh);
  }

  createHealthBar() {
    const barWidth = this.config.size * 2;
    const barHeight = 0.1;

    const bgGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
    const bgMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    this.healthBarBg = new THREE.Mesh(bgGeometry, bgMaterial);
    this.healthBarBg.position.y = this.config.size * 2 + 0.3;
    this.healthBarBg.rotation.x = -Math.PI / 4;
    this.mesh.add(this.healthBarBg);

    const fgGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
    const fgMaterial = new THREE.MeshBasicMaterial({ color: 0xe74c3c });
    this.healthBar = new THREE.Mesh(fgGeometry, fgMaterial);
    this.healthBar.position.z = 0.01;
    this.healthBarBg.add(this.healthBar);
  }

  update(delta, player, projectileSystem) {
    // Handle death animation first (isDying is true but isAlive is false)
    if (this.isDying) {
      this.deathTimer += delta;
      const scale = 1 - this.deathTimer / 0.3;
      this.mesh.scale.setScalar(Math.max(0, scale));

      if (this.deathTimer >= 0.3) {
        return 'dead';
      }
      return null;
    }

    // Skip update if not alive (and not in dying state)
    if (!this.isAlive) return null;

    this.knockbackVelocity.multiplyScalar(0.9);

    if (this.hitFlashTimer > 0) {
      this.hitFlashTimer -= delta;
      if (this.hitFlashTimer <= 0) {
        this.body.material.color.setHex(this.originalColor);
      }
    }

    const toPlayer = new THREE.Vector3(
      player.mesh.position.x - this.mesh.position.x,
      0,
      player.mesh.position.z - this.mesh.position.z
    );
    const distanceToPlayer = toPlayer.length();
    toPlayer.normalize();

    let spawnRequest = null;

    switch (this.type) {
      case EnemyTypes.CHASER:
        this.velocity.copy(toPlayer).multiplyScalar(this.speed);
        break;

      case EnemyTypes.SHOOTER:
        if (distanceToPlayer > this.config.attackRange) {
          this.velocity.copy(toPlayer).multiplyScalar(this.speed);
        } else if (distanceToPlayer < this.config.attackRange * 0.5) {
          this.velocity.copy(toPlayer).multiplyScalar(-this.speed);
        } else {
          this.velocity.set(0, 0, 0);
        }

        this.attackTimer -= delta;
        if (this.attackTimer <= 0 && distanceToPlayer <= this.config.attackRange) {
          this.attackTimer = this.config.attackCooldown;
          this.fireProjectile(toPlayer, projectileSystem);
        }
        break;

      case EnemyTypes.BOMBER:
        this.velocity.copy(toPlayer).multiplyScalar(this.speed);
        if (this.spark) {
          this.spark.material.opacity = 0.5 + Math.sin(Date.now() * 0.01) * 0.5;
        }
        break;

      case EnemyTypes.SPAWNER:
        this.velocity.set(0, 0, 0);
        this.spawnTimer -= delta;
        if (this.spawnTimer <= 0) {
          this.spawnTimer = this.config.spawnCooldown;
          spawnRequest = {
            type: this.config.spawnType,
            position: this.mesh.position.clone()
          };
        }
        break;

      case EnemyTypes.TANK:
        this.velocity.copy(toPlayer).multiplyScalar(this.speed);
        break;

      case EnemyTypes.BOSS:
        this.updateBoss(delta, player, toPlayer, distanceToPlayer, projectileSystem);
        break;
    }

    this.mesh.position.x += (this.velocity.x + this.knockbackVelocity.x) * delta;
    this.mesh.position.z += (this.velocity.z + this.knockbackVelocity.z) * delta;

    if (this.velocity.lengthSq() > 0.01) {
      const angle = Math.atan2(this.velocity.x, this.velocity.z);
      this.mesh.rotation.y = angle;
    }

    if (this.type !== EnemyTypes.BOSS) {
      this.mesh.rotation.y += delta * 0.5;
    }

    return spawnRequest;
  }

  updateBoss(delta, player, toPlayer, distanceToPlayer, projectileSystem) {
    const healthPercent = this.health / this.maxHealth;
    for (let i = 0; i < this.phaseHealthThresholds.length; i++) {
      if (healthPercent <= this.phaseHealthThresholds[i] && this.phase <= i + 1) {
        this.phase = i + 2;
        this.onPhaseChange();
      }
    }

    const phaseSpeedMultiplier = 1 + (this.phase - 1) * 0.2;

    if (distanceToPlayer > 3) {
      this.velocity.copy(toPlayer).multiplyScalar(this.speed * phaseSpeedMultiplier);
    } else {
      this.velocity.set(0, 0, 0);
    }

    this.attackTimer -= delta;
    const phaseCooldownMultiplier = 1 / this.phase;

    if (this.attackTimer <= 0) {
      this.attackTimer = this.config.attackCooldown * phaseCooldownMultiplier;
      this.performBossAttack(toPlayer, projectileSystem);
    }
  }

  performBossAttack(toPlayer, projectileSystem) {
    this.attackPattern = (this.attackPattern + 1) % 3;

    switch (this.attackPattern) {
      case 0:
        this.fireProjectile(toPlayer, projectileSystem);
        break;

      case 1:
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const dir = {
            x: Math.sin(angle),
            z: Math.cos(angle)
          };
          this.fireProjectile(dir, projectileSystem);
        }
        break;

      case 2:
        for (let i = -2; i <= 2; i++) {
          const angle = Math.atan2(toPlayer.x, toPlayer.z) + i * 0.2;
          const dir = {
            x: Math.sin(angle),
            z: Math.cos(angle)
          };
          this.fireProjectile(dir, projectileSystem);
        }
        break;
    }
  }

  onPhaseChange() {
    this.body.material.emissive = new THREE.Color(0xff0000);
    this.body.material.emissiveIntensity = 0.3;

    setTimeout(() => {
      this.body.material.emissiveIntensity = 0;
    }, 500);
  }

  fireProjectile(direction, projectileSystem) {
    const spawnPos = this.mesh.position.clone();
    spawnPos.y = 0.5;

    projectileSystem.fire(
      spawnPos,
      { x: direction.x, z: direction.z },
      this.damage,
      this.config.projectileSpeed || 6,
      0,
      { isPlayerProjectile: false }
    );
  }

  takeDamage(amount, knockbackDir = null) {
    if (!this.isAlive || this.isDying) return false;

    this.health -= amount;
    this.health = Math.max(0, this.health);

    this.updateHealthBar();
    this.flashDamage();

    if (knockbackDir) {
      const knockbackStrength = this.type === EnemyTypes.BOSS ? 1 : 3;
      this.knockbackVelocity.x = knockbackDir.x * knockbackStrength;
      this.knockbackVelocity.z = knockbackDir.z * knockbackStrength;
    }

    if (this.health <= 0) {
      this.die();
      return true;
    }

    return false;
  }

  flashDamage() {
    this.body.material.color.setHex(0xffffff);
    this.hitFlashTimer = 0.1;
  }

  updateHealthBar() {
    const healthPercent = this.health / this.maxHealth;
    this.healthBar.scale.x = Math.max(0.01, healthPercent);
    this.healthBar.position.x = (healthPercent - 1) * this.config.size;
  }

  die() {
    this.isDying = true;
    this.isAlive = false;

    if (this.type === EnemyTypes.BOMBER) {
      return {
        type: 'explosion',
        position: this.mesh.position.clone(),
        radius: this.config.explosionRadius,
        damage: this.config.explosionDamage
      };
    }

    return null;
  }

  getCollisionRadius() {
    return this.config ? this.config.size : 0.4;
  }

  remove() {
    this.scene.remove(this.mesh);
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.mesh.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }
}
