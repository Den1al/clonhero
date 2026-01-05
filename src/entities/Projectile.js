import * as THREE from 'three';
import { ObjectPool } from '../utils/ObjectPool.js';
import { MathUtils } from '../utils/MathUtils.js';
import { StatusEffectTypes } from '../systems/StatusEffectSystem.js';

// Enhanced color configurations for elemental projectiles
const ElementalColors = {
  [StatusEffectTypes.BURN]: {
    core: 0xf97316,           // Vivid orange
    emissive: 0xfb923c,
    glow: 0xfdba74,
    trail: 0xfed7aa,
    intensity: 0.8
  },
  [StatusEffectTypes.FREEZE]: {
    core: 0x22d3ee,           // Electric cyan
    emissive: 0x67e8f9,
    glow: 0xa5f3fc,
    trail: 0xcffafe,
    intensity: 0.7
  },
  [StatusEffectTypes.POISON]: {
    core: 0x22c55e,           // Vivid green
    emissive: 0x4ade80,
    glow: 0x86efac,
    trail: 0xbbf7d0,
    intensity: 0.6
  },
  default: {
    core: 0xfbbf24,           // Gold/amber
    emissive: 0xfcd34d,
    glow: 0xfde68a,
    trail: 0xfef3c7,
    intensity: 0.7
  },
  enemy: {
    core: 0xef4444,           // Vivid red
    emissive: 0xf87171,
    glow: 0xfca5a5,
    trail: 0xfecaca,
    intensity: 0.6
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

    // Core with reduced geometry complexity
    const coreGeometry = new THREE.SphereGeometry(0.16, 8, 8);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xfcd34d,
      emissiveIntensity: 0.8,
      metalness: 0.8,
      roughness: 0.2
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    // Outer glow sphere - reduced segments
    const glowGeometry = new THREE.SphereGeometry(0.26, 8, 8);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xfde68a,
      transparent: true,
      opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    // Trail with reduced segments
    const trailGeometry = new THREE.ConeGeometry(0.1, 0.4, 6);
    const trailMaterial = new THREE.MeshBasicMaterial({
      color: 0xfef3c7,
      transparent: true,
      opacity: 0.5
    });
    const trail = new THREE.Mesh(trailGeometry, trailMaterial);
    trail.rotation.x = Math.PI / 2;
    trail.position.z = 0.3;
    group.add(trail);

    // No point light - emissive materials are sufficient
    this.pointLight = null;

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
    core.material.emissiveIntensity = colors.intensity || 0.7;
    glow.material.color.setHex(colors.glow);
    trail.material.color.setHex(colors.trail);

    // Update point light color
    if (this.pointLight) {
      this.pointLight.color.setHex(colors.core);
    }

    const angle = Math.atan2(this.velocity.x, this.velocity.z);
    this.mesh.rotation.y = angle;
  }

  getTrailColor() {
    if (this.elementalType && ElementalColors[this.elementalType]) {
      return ElementalColors[this.elementalType].trail;
    }
    return this.isPlayerProjectile ? ElementalColors.default.trail : ElementalColors.enemy.trail;
  }

  update(delta, enemies, player, arenaSize, obstacles = []) {
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

    // Check obstacle collisions
    for (const obstacle of obstacles) {
      const dx = this.mesh.position.x - obstacle.x;
      const dz = this.mesh.position.z - obstacle.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const projectileRadius = 0.2;

      if (dist < projectileRadius + obstacle.radius) {
        // Projectile hit an obstacle - deactivate it
        this.deactivate();
        return;
      }
    }

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

  update(delta, enemies, player, arenaSize, obstacles = []) {
    const toRelease = [];

    for (const projectile of this.pool.active) {
      projectile.update(delta, enemies, player, arenaSize, obstacles);

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
