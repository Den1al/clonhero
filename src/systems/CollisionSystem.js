import { MathUtils } from '../utils/MathUtils.js';

export class CollisionSystem {
  constructor() {
    this.gridSize = 2;
    this.grid = new Map();
  }

  clear() {
    this.grid.clear();
  }

  getGridKey(x, z) {
    const gx = Math.floor(x / this.gridSize);
    const gz = Math.floor(z / this.gridSize);
    return `${gx},${gz}`;
  }

  addToGrid(entity, type) {
    const key = this.getGridKey(entity.mesh.position.x, entity.mesh.position.z);

    if (!this.grid.has(key)) {
      this.grid.set(key, []);
    }

    this.grid.get(key).push({ entity, type });
  }

  getNearbyEntities(x, z, radius = 1) {
    const nearby = [];
    const cellRadius = Math.ceil(radius / this.gridSize);

    const centerGx = Math.floor(x / this.gridSize);
    const centerGz = Math.floor(z / this.gridSize);

    for (let gx = centerGx - cellRadius; gx <= centerGx + cellRadius; gx++) {
      for (let gz = centerGz - cellRadius; gz <= centerGz + cellRadius; gz++) {
        const key = `${gx},${gz}`;
        if (this.grid.has(key)) {
          nearby.push(...this.grid.get(key));
        }
      }
    }

    return nearby;
  }

  checkCircleCollision(x1, z1, r1, x2, z2, r2) {
    const dx = x2 - x1;
    const dz = z2 - z1;
    const distSq = dx * dx + dz * dz;
    const radiusSum = r1 + r2;
    return distSq < radiusSum * radiusSum;
  }

  checkPlayerEnemyCollisions(player, enemies) {
    const collisions = [];
    const playerPos = player.mesh.position;
    const playerRadius = 0.4;

    for (const enemy of enemies) {
      if (!enemy.isAlive || enemy.isDying) continue;

      const enemyPos = enemy.mesh.position;
      const enemyRadius = enemy.getCollisionRadius();

      if (this.checkCircleCollision(
        playerPos.x, playerPos.z, playerRadius,
        enemyPos.x, enemyPos.z, enemyRadius
      )) {
        collisions.push({
          enemy,
          direction: {
            x: playerPos.x - enemyPos.x,
            z: playerPos.z - enemyPos.z
          }
        });
      }
    }

    return collisions;
  }

  checkProjectileEnemyCollisions(projectiles, enemies) {
    const collisions = [];

    for (const projectile of projectiles) {
      if (!projectile.isActive || !projectile.isPlayerProjectile) continue;

      const projPos = projectile.mesh.position;
      const projRadius = 0.2;

      for (const enemy of enemies) {
        if (!enemy.isAlive || enemy.isDying) continue;
        if (projectile.piercedEnemies.has(enemy)) continue;

        const enemyPos = enemy.mesh.position;
        const enemyRadius = enemy.getCollisionRadius() * 1.2;

        if (this.checkCircleCollision(
          projPos.x, projPos.z, projRadius,
          enemyPos.x, enemyPos.z, enemyRadius
        )) {
          collisions.push({
            projectile,
            enemy,
            position: projPos.clone()
          });
        }
      }
    }

    return collisions;
  }

  checkProjectilePlayerCollisions(projectiles, player) {
    const collisions = [];
    const playerPos = player.mesh.position;
    const playerRadius = 0.4;

    for (const projectile of projectiles) {
      if (!projectile.isActive || projectile.isPlayerProjectile) continue;

      const projPos = projectile.mesh.position;
      const projRadius = 0.2;

      if (this.checkCircleCollision(
        projPos.x, projPos.z, projRadius,
        playerPos.x, playerPos.z, playerRadius
      )) {
        collisions.push({
          projectile,
          position: projPos.clone()
        });
      }
    }

    return collisions;
  }

  checkExplosionCollisions(explosionPos, radius, player, enemies) {
    const result = {
      hitPlayer: false,
      hitEnemies: []
    };

    const playerDist = MathUtils.distanceXZ(explosionPos, player.mesh.position);
    if (playerDist < radius) {
      result.hitPlayer = true;
    }

    for (const enemy of enemies) {
      if (!enemy.isAlive || enemy.isDying) continue;

      const enemyDist = MathUtils.distanceXZ(explosionPos, enemy.mesh.position);
      if (enemyDist < radius + enemy.getCollisionRadius()) {
        result.hitEnemies.push(enemy);
      }
    }

    return result;
  }

  constrainToArena(entity, arenaSize, entityRadius = 0.4) {
    const halfSize = arenaSize / 2 - entityRadius;

    entity.mesh.position.x = MathUtils.clamp(
      entity.mesh.position.x,
      -halfSize,
      halfSize
    );
    entity.mesh.position.z = MathUtils.clamp(
      entity.mesh.position.z,
      -halfSize,
      halfSize
    );
  }

  separateEnemies(enemies) {
    const separationForce = 0.5;

    for (let i = 0; i < enemies.length; i++) {
      const enemy1 = enemies[i];
      if (!enemy1.isAlive) continue;

      for (let j = i + 1; j < enemies.length; j++) {
        const enemy2 = enemies[j];
        if (!enemy2.isAlive) continue;

        const dx = enemy2.mesh.position.x - enemy1.mesh.position.x;
        const dz = enemy2.mesh.position.z - enemy1.mesh.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);

        const minDist = enemy1.getCollisionRadius() + enemy2.getCollisionRadius();

        if (dist < minDist && dist > 0.01) {
          const overlap = minDist - dist;
          const nx = dx / dist;
          const nz = dz / dist;

          const push = overlap * separationForce;
          enemy1.mesh.position.x -= nx * push;
          enemy1.mesh.position.z -= nz * push;
          enemy2.mesh.position.x += nx * push;
          enemy2.mesh.position.z += nz * push;
        }
      }
    }
  }
}
