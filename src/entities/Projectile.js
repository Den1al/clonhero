import * as THREE from 'three';
import { ObjectPool } from '../utils/ObjectPool.js';
import { MathUtils } from '../utils/MathUtils.js';
import { StatusEffectTypes } from '../systems/StatusEffectSystem.js';

// Color configurations for elemental projectiles
const ElementalColors = {
  [StatusEffectTypes.BURN]: {
    core: 0xff4500,
    emissive: 0xff6600,
    glow: 0xff8c00,
    trail: 0xffa500
  },
  [StatusEffectTypes.FREEZE]: {
    core: 0x00bfff,
    emissive: 0x87ceeb,
    glow: 0xadd8e6,
    trail: 0xe0ffff
  },
  [StatusEffectTypes.POISON]: {
    core: 0x32cd32,
    emissive: 0x228b22,
    glow: 0x90ee90,
    trail: 0x9acd32
  },
  default: {
    core: 0xf1c40f,
    emissive: 0xf39c12,
    glow: 0xf1c40f,
    trail: 0xf39c12
  },
  enemy: {
    core: 0xe74c3c,
    emissive: 0xc0392b,
    glow: 0xe74c3c,
    trail: 0xc0392b
  }
};

export class Projectile {
  constructor() {
    this.mesh = null;
    this.velocity = new THREE.Vector3();
    this.damage = 0;
    this.speed = 0;
    this.pierce = 0;
    this.piercedEnemies = new Set();
    this.isActive = false;
    this.lifetime = 0;
    this.maxLifetime = 3;
    this.isPlayerProjectile = true;

    this.bouncyWalls = false;
    this.ricochet = false;
    this.homing = false;
    this.homingStrength = 2;

    // Elemental properties
    this.elementalType = null;
    this.trailTimer = 0;

    this.createMesh();
  }

  createMesh() {
    const group = new THREE.Group();

    const coreGeometry = new THREE.SphereGeometry(0.15, 8, 8);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1c40f,
      emissive: 0xf39c12,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const glowGeometry = new THREE.SphereGeometry(0.25, 8, 8);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xf1c40f,
      transparent: true,
      opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    const trailGeometry = new THREE.ConeGeometry(0.1, 0.4, 8);
    const trailMaterial = new THREE.MeshBasicMaterial({
      color: 0xf39c12,
      transparent: true,
      opacity: 0.5
    });
    const trail = new THREE.Mesh(trailGeometry, trailMaterial);
    trail.rotation.x = Math.PI / 2;
    trail.position.z = 0.3;
    group.add(trail);

    this.mesh = group;
    this.mesh.visible = false;
  }

  fire(position, direction, damage, speed, pierce, options = {}) {
    this.mesh.position.copy(position);
    this.mesh.position.y = 0.5;

    this.velocity.set(direction.x * speed, 0, direction.z * speed);
    this.damage = damage;
    this.speed = speed;
    this.pierce = pierce;
    this.piercedEnemies.clear();
    this.isActive = true;
    this.lifetime = 0;
    this.trailTimer = 0;
    this.mesh.visible = true;
    this.isPlayerProjectile = options.isPlayerProjectile !== false;

    this.bouncyWalls = options.bouncyWalls || false;
    this.ricochet = options.ricochet || false;
    this.homing = options.homing || false;

    // Elemental type
    this.elementalType = options.elementalType || null;

    // Set colors based on elemental type or default
    let colors;
    if (!this.isPlayerProjectile) {
      colors = ElementalColors.enemy;
    } else if (this.elementalType && ElementalColors[this.elementalType]) {
      colors = ElementalColors[this.elementalType];
    } else {
      colors = ElementalColors.default;
    }

    // Apply colors to mesh components
    const core = this.mesh.children[0];
    const glow = this.mesh.children[1];
    const trail = this.mesh.children[2];

    core.material.color.setHex(colors.core);
    core.material.emissive.setHex(colors.emissive);
    glow.material.color.setHex(colors.glow);
    trail.material.color.setHex(colors.trail);

    const angle = Math.atan2(this.velocity.x, this.velocity.z);
    this.mesh.rotation.y = angle;
  }

  getTrailColor() {
    if (this.elementalType && ElementalColors[this.elementalType]) {
      return ElementalColors[this.elementalType].trail;
    }
    return this.isPlayerProjectile ? ElementalColors.default.trail : ElementalColors.enemy.trail;
  }

  update(delta, enemies, player, arenaSize) {
    if (!this.isActive) return;

    this.lifetime += delta;
    if (this.lifetime > this.maxLifetime) {
      this.deactivate();
      return;
    }

    if (this.homing && this.isPlayerProjectile) {
      const nearest = this.findNearestTarget(enemies);
      if (nearest) {
        const toTarget = new THREE.Vector3(
          nearest.mesh.position.x - this.mesh.position.x,
          0,
          nearest.mesh.position.z - this.mesh.position.z
        ).normalize();

        this.velocity.x += toTarget.x * this.homingStrength * delta;
        this.velocity.z += toTarget.z * this.homingStrength * delta;
        this.velocity.normalize().multiplyScalar(this.speed);
      }
    }

    this.mesh.position.add(this.velocity.clone().multiplyScalar(delta));

    const angle = Math.atan2(this.velocity.x, this.velocity.z);
    this.mesh.rotation.y = angle;

    if (this.bouncyWalls) {
      const halfSize = arenaSize / 2 - 0.5;
      if (Math.abs(this.mesh.position.x) > halfSize) {
        this.velocity.x *= -1;
        this.mesh.position.x = Math.sign(this.mesh.position.x) * halfSize;
      }
      if (Math.abs(this.mesh.position.z) > halfSize) {
        this.velocity.z *= -1;
        this.mesh.position.z = Math.sign(this.mesh.position.z) * halfSize;
      }
    } else {
      const halfSize = arenaSize / 2;
      if (Math.abs(this.mesh.position.x) > halfSize ||
          Math.abs(this.mesh.position.z) > halfSize) {
        this.deactivate();
      }
    }
  }

  findNearestTarget(enemies) {
    let nearest = null;
    let nearestDist = 10;

    for (const enemy of enemies) {
      if (!enemy.isAlive || this.piercedEnemies.has(enemy)) continue;

      const dist = MathUtils.distanceXZ(this.mesh.position, enemy.mesh.position);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = enemy;
      }
    }

    return nearest;
  }

  onHitEnemy(enemy, enemies) {
    this.piercedEnemies.add(enemy);

    if (this.ricochet) {
      const nearest = this.findNearestTarget(enemies);
      if (nearest) {
        const toTarget = new THREE.Vector3(
          nearest.mesh.position.x - this.mesh.position.x,
          0,
          nearest.mesh.position.z - this.mesh.position.z
        ).normalize();

        this.velocity.set(toTarget.x * this.speed, 0, toTarget.z * this.speed);
      }
    }

    if (this.piercedEnemies.size > this.pierce) {
      this.deactivate();
    }
  }

  deactivate() {
    this.isActive = false;
    this.mesh.visible = false;
  }

  reset() {
    this.isActive = false;
    this.mesh.visible = false;
    this.piercedEnemies.clear();
    this.lifetime = 0;
    this.trailTimer = 0;
    this.velocity.set(0, 0, 0);
    this.elementalType = null;
  }
}

export class ProjectileSystem {
  constructor(scene) {
    this.scene = scene;

    this.pool = new ObjectPool(
      () => {
        const projectile = new Projectile();
        this.scene.add(projectile.mesh);
        return projectile;
      },
      (projectile) => {
        projectile.reset();
      },
      50
    );
  }

  fire(position, direction, damage, speed, pierce, options = {}) {
    const projectile = this.pool.get();
    projectile.fire(position, direction, damage, speed, pierce, options);
    return projectile;
  }

  update(delta, enemies, player, arenaSize) {
    const toRelease = [];

    for (const projectile of this.pool.active) {
      projectile.update(delta, enemies, player, arenaSize);

      if (!projectile.isActive) {
        toRelease.push(projectile);
      }
    }

    for (const projectile of toRelease) {
      this.pool.release(projectile);
    }
  }

  getActiveProjectiles() {
    return this.pool.active;
  }

  clear() {
    this.pool.releaseAll();
  }

  dispose() {
    for (const projectile of this.pool.active) {
      this.scene.remove(projectile.mesh);
      projectile.mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
    for (const projectile of this.pool.pool) {
      this.scene.remove(projectile.mesh);
      projectile.mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
  }
}
