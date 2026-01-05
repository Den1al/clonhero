import * as THREE from 'three';
import { MathUtils } from '../utils/MathUtils.js';

export class Player {
  constructor(scene) {
    this.scene = scene;

    this.health = 100;
    this.maxHealth = 100;
    this.speed = 5;
    this.attackSpeed = 1.5;
    this.attackDamage = 10;
    this.attackRange = 15;
    this.projectileSpeed = 12;
    this.projectileCount = 1;
    this.projectilePierce = 0;
    this.critChance = 0.05;
    this.critMultiplier = 2;
    this.dodge = 0;
    this.xp = 0;
    this.level = 1;
    this.xpToNextLevel = 100;

    this.knockbackResistance = 0;
    this.xpMagnetRange = 2;
    this.xpMultiplier = 1;

    this.velocity = new THREE.Vector3();
    this.targetRotation = 0;
    this.attackTimer = 0;
    this.isAttacking = false;
    this.invulnerable = false;
    this.invulnerableTimer = 0;

    this.diagonalArrows = false;
    this.rearArrow = false;
    this.sideArrows = false;
    this.bouncyWalls = false;
    this.ricochet = false;
    this.homing = false;

    this.shield = 0;
    this.orbitals = [];

    // Elemental abilities
    this.fireArrows = false;
    this.iceArrows = false;
    this.poisonArrows = false;
    this.elementalType = null;

    // Fire upgrades
    this.burnDamageMultiplier = 1;
    this.burnDurationBonus = 0;
    this.infernoExplosion = false;

    // Ice upgrades
    this.freezeSlowBonus = 0;
    this.freezeDurationBonus = 0;
    this.shatterBonus = false;

    // Poison upgrades
    this.poisonDamageMultiplier = 1;
    this.poisonDurationBonus = 0;
    this.plagueSpread = false;

    this.createMesh();
    this.createHealthBar();
  }

  createMesh() {
    const group = new THREE.Group();

    // Enhanced body with vibrant blue and metallic sheen
    const bodyGeometry = new THREE.CapsuleGeometry(0.4, 0.8, 12, 24);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      metalness: 0.5,
      roughness: 0.4,
      envMapIntensity: 1.0
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.6;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    // Body accent ring for visual interest
    const accentRingGeometry = new THREE.TorusGeometry(0.42, 0.03, 8, 32);
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2
    });
    const accentRing = new THREE.Mesh(accentRingGeometry, accentMaterial);
    accentRing.position.y = 0.6;
    accentRing.rotation.x = Math.PI / 2;
    group.add(accentRing);
    this.accentRing = accentRing;

    // Enhanced head with better skin tone and subsurface look
    const headGeometry = new THREE.SphereGeometry(0.25, 24, 24);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xf0d0c0,
      metalness: 0.05,
      roughness: 0.7
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.35;
    head.castShadow = true;
    group.add(head);

    // Add simple hair/helmet accent
    const hairGeometry = new THREE.SphereGeometry(0.23, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const hairMaterial = new THREE.MeshStandardMaterial({
      color: 0x2d2d4a,
      metalness: 0.3,
      roughness: 0.6
    });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.y = 1.38;
    hair.rotation.x = Math.PI;
    group.add(hair);

    // Enhanced bow with golden accents
    const bowGeometry = new THREE.TorusGeometry(0.32, 0.04, 8, 24, Math.PI);
    const bowMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0xfbbf24,
      emissiveIntensity: 0.15
    });
    const bow = new THREE.Mesh(bowGeometry, bowMaterial);
    bow.position.set(0.5, 0.8, 0);
    bow.rotation.z = Math.PI / 2;
    bow.rotation.y = Math.PI / 2;
    bow.castShadow = true;
    group.add(bow);

    // Bow string (simple line)
    const stringGeometry = new THREE.CylinderGeometry(0.008, 0.008, 0.64, 8);
    const stringMaterial = new THREE.MeshStandardMaterial({
      color: 0xe5e5e5,
      metalness: 0.1,
      roughness: 0.8
    });
    const bowString = new THREE.Mesh(stringGeometry, stringMaterial);
    bowString.position.set(0.5, 0.8, 0);
    bowString.rotation.z = Math.PI / 2;
    group.add(bowString);

    // Add subtle glow effect underneath player
    const glowGeometry = new THREE.CircleGeometry(0.6, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.15
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = 0.02;
    group.add(glow);
    this.glowMesh = glow;

    this.mesh = group;
    this.mesh.position.y = 0;
    this.scene.add(this.mesh);

    this.body = body;
    this.originalColor = bodyMaterial.color.getHex();
  }

  createHealthBar() {
    const barWidth = 1;
    const barHeight = 0.1;

    const bgGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
    const bgMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    this.healthBarBg = new THREE.Mesh(bgGeometry, bgMaterial);
    this.healthBarBg.position.y = 1.8;
    this.healthBarBg.rotation.x = -Math.PI / 4;
    this.mesh.add(this.healthBarBg);

    const fgGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
    const fgMaterial = new THREE.MeshBasicMaterial({ color: 0x2ecc71 });
    this.healthBar = new THREE.Mesh(fgGeometry, fgMaterial);
    this.healthBar.position.z = 0.01;
    this.healthBarBg.add(this.healthBar);

    this.healthBarBg.visible = false;
  }

  update(delta, input, enemies) {
    const movement = input.getMovement();
    const isMoving = input.isMoving();

    if (isMoving) {
      this.velocity.x = movement.x * this.speed;
      this.velocity.z = movement.y * this.speed;

      this.targetRotation = Math.atan2(movement.x, movement.y);
    } else {
      this.velocity.x *= 0.8;
      this.velocity.z *= 0.8;

      const nearestEnemy = this.findNearestEnemy(enemies);
      if (nearestEnemy) {
        const dx = nearestEnemy.mesh.position.x - this.mesh.position.x;
        const dz = nearestEnemy.mesh.position.z - this.mesh.position.z;
        this.targetRotation = Math.atan2(dx, dz);
      }
    }

    this.mesh.position.x += this.velocity.x * delta;
    this.mesh.position.z += this.velocity.z * delta;

    const currentRotation = this.mesh.rotation.y;
    let rotationDiff = this.targetRotation - currentRotation;
    while (rotationDiff > Math.PI) rotationDiff -= Math.PI * 2;
    while (rotationDiff < -Math.PI) rotationDiff += Math.PI * 2;
    this.mesh.rotation.y += rotationDiff * 10 * delta;

    if (this.invulnerable) {
      this.invulnerableTimer -= delta;
      this.body.material.opacity = Math.sin(this.invulnerableTimer * 20) > 0 ? 1 : 0.3;
      this.body.material.transparent = true;

      if (this.invulnerableTimer <= 0) {
        this.invulnerable = false;
        this.body.material.opacity = 1;
        this.body.material.transparent = false;
      }
    }

    this.updateHealthBar();
  }

  findNearestEnemy(enemies) {
    let nearest = null;
    let nearestDist = this.attackRange;

    for (const enemy of enemies) {
      if (!enemy.isAlive) continue;

      const dist = MathUtils.distanceXZ(this.mesh.position, enemy.mesh.position);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = enemy;
      }
    }

    return nearest;
  }

  canAttack(input) {
    return !input.isMoving();
  }

  updateAttackTimer(delta) {
    this.attackTimer -= delta;
  }

  isReadyToAttack() {
    return this.attackTimer <= 0;
  }

  resetAttackTimer() {
    this.attackTimer = 1 / this.attackSpeed;
  }

  getAttackDirections(targetEnemy) {
    const directions = [];

    if (targetEnemy) {
      const dx = targetEnemy.mesh.position.x - this.mesh.position.x;
      const dz = targetEnemy.mesh.position.z - this.mesh.position.z;
      const length = Math.sqrt(dx * dx + dz * dz);

      if (length > 0) {
        const mainDir = { x: dx / length, z: dz / length };
        directions.push(mainDir);

        if (this.projectileCount > 1) {
          const spreadAngle = 0.2;
          for (let i = 1; i < this.projectileCount; i++) {
            const angle = Math.atan2(mainDir.x, mainDir.z);
            const offset = ((i % 2 === 0 ? 1 : -1) * Math.ceil(i / 2)) * spreadAngle;
            directions.push({
              x: Math.sin(angle + offset),
              z: Math.cos(angle + offset)
            });
          }
        }

        if (this.diagonalArrows) {
          const angle = Math.atan2(mainDir.x, mainDir.z);
          directions.push({
            x: Math.sin(angle + Math.PI / 4),
            z: Math.cos(angle + Math.PI / 4)
          });
          directions.push({
            x: Math.sin(angle - Math.PI / 4),
            z: Math.cos(angle - Math.PI / 4)
          });
        }

        if (this.rearArrow) {
          directions.push({ x: -mainDir.x, z: -mainDir.z });
        }

        if (this.sideArrows) {
          directions.push({ x: mainDir.z, z: -mainDir.x });
          directions.push({ x: -mainDir.z, z: mainDir.x });
        }
      }
    }

    return directions;
  }

  takeDamage(amount, knockbackDir = null) {
    if (this.invulnerable) return false;

    if (Math.random() < this.dodge) {
      return false;
    }

    if (this.shield > 0) {
      this.shield--;
      return false;
    }

    this.health -= amount;
    this.health = Math.max(0, this.health);

    this.invulnerable = true;
    this.invulnerableTimer = 1;

    this.flashDamage();

    if (knockbackDir) {
      const knockbackStrength = 2 * (1 - this.knockbackResistance);
      this.velocity.x += knockbackDir.x * knockbackStrength;
      this.velocity.z += knockbackDir.z * knockbackStrength;
    }

    this.healthBarBg.visible = true;

    return true;
  }

  flashDamage() {
    this.body.material.color.setHex(0xff0000);
    setTimeout(() => {
      this.body.material.color.setHex(this.originalColor);
    }, 100);
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
    this.updateHealthBar();
  }

  addXP(amount) {
    this.xp += amount * this.xpMultiplier;

    if (this.xp >= this.xpToNextLevel) {
      return true;
    }
    return false;
  }

  levelUp() {
    this.level++;
    this.xp -= this.xpToNextLevel;
    this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.2);
  }

  updateHealthBar() {
    const healthPercent = this.health / this.maxHealth;
    this.healthBar.scale.x = healthPercent;
    this.healthBar.position.x = (healthPercent - 1) * 0.5;

    if (healthPercent > 0.5) {
      this.healthBar.material.color.setHex(0x2ecc71);
    } else if (healthPercent > 0.25) {
      this.healthBar.material.color.setHex(0xf39c12);
    } else {
      this.healthBar.material.color.setHex(0xe74c3c);
    }

    if (this.health >= this.maxHealth) {
      this.healthBarBg.visible = false;
    }
  }

  isAlive() {
    return this.health > 0;
  }

  getPosition() {
    return this.mesh.position.clone();
  }

  setPosition(x, z) {
    this.mesh.position.x = x;
    this.mesh.position.z = z;
  }

  reset() {
    this.health = this.maxHealth;
    this.xp = 0;
    this.level = 1;
    this.xpToNextLevel = 100;
    this.attackTimer = 0;
    this.invulnerable = false;
    this.invulnerableTimer = 0;
    this.velocity.set(0, 0, 0);
    this.mesh.position.set(0, 0, 0);
    this.mesh.rotation.set(0, 0, 0);

    this.projectileCount = 1;
    this.projectilePierce = 0;
    this.diagonalArrows = false;
    this.rearArrow = false;
    this.sideArrows = false;
    this.bouncyWalls = false;
    this.ricochet = false;
    this.homing = false;
    this.shield = 0;

    // Reset elemental abilities
    this.fireArrows = false;
    this.iceArrows = false;
    this.poisonArrows = false;
    this.elementalType = null;
    this.burnDamageMultiplier = 1;
    this.burnDurationBonus = 0;
    this.infernoExplosion = false;
    this.freezeSlowBonus = 0;
    this.freezeDurationBonus = 0;
    this.shatterBonus = false;
    this.poisonDamageMultiplier = 1;
    this.poisonDurationBonus = 0;
    this.plagueSpread = false;

    this.updateHealthBar();
    this.healthBarBg.visible = false;
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.mesh.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }
}
