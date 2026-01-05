/**
 * MockPlayer - A testable version of the Player class without THREE.js dependencies.
 * This mock replicates all the stat properties and methods that abilities interact with.
 */
export class MockPlayer {
  constructor() {
    // Core stats (matching Player.js lines 8-27)
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

    // Boolean flags for special abilities (matching Player.js lines 35-42)
    this.diagonalArrows = false;
    this.rearArrow = false;
    this.sideArrows = false;
    this.bouncyWalls = false;
    this.ricochet = false;
    this.homing = false;

    this.shield = 0;
  }

  /**
   * Heal the player (matching Player.js lines 281-284)
   */
  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  /**
   * Add XP to the player (matching Player.js lines 286-293)
   */
  addXP(amount) {
    this.xp += amount * this.xpMultiplier;
    if (this.xp >= this.xpToNextLevel) {
      return true;
    }
    return false;
  }

  /**
   * Level up the player (matching Player.js lines 295-299)
   */
  levelUp() {
    this.level++;
    this.xp -= this.xpToNextLevel;
    this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.2);
  }

  /**
   * Take damage (matching Player.js lines 243-272)
   */
  takeDamage(amount) {
    // Check dodge
    if (Math.random() < this.dodge) {
      return false;
    }

    // Check shield
    if (this.shield > 0) {
      this.shield--;
      return false;
    }

    this.health -= amount;
    this.health = Math.max(0, this.health);
    return true;
  }

  /**
   * Check if player is alive (matching Player.js lines 319-321)
   */
  isAlive() {
    return this.health > 0;
  }

  /**
   * Get attack directions (simplified version for testing)
   * This tests the projectile generation logic from Player.js lines 193-241
   */
  getAttackDirections(targetEnemy) {
    const directions = [];

    if (targetEnemy) {
      const dx = targetEnemy.x - 0; // Assume player at origin
      const dz = targetEnemy.z - 0;
      const length = Math.sqrt(dx * dx + dz * dz);

      if (length > 0) {
        const mainDir = { x: dx / length, z: dz / length };
        directions.push(mainDir);

        // Multi-shot spread
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

        // Diagonal arrows
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

        // Rear arrow
        if (this.rearArrow) {
          directions.push({ x: -mainDir.x, z: -mainDir.z });
        }

        // Side arrows
        if (this.sideArrows) {
          directions.push({ x: mainDir.z, z: -mainDir.x });
          directions.push({ x: -mainDir.z, z: mainDir.x });
        }
      }
    }

    return directions;
  }

  /**
   * Reset player to initial state
   */
  reset() {
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
    this.xpMagnetRange = 2;
    this.xpMultiplier = 1;
    this.diagonalArrows = false;
    this.rearArrow = false;
    this.sideArrows = false;
    this.bouncyWalls = false;
    this.ricochet = false;
    this.homing = false;
    this.shield = 0;
  }
}

/**
 * Create a fresh mock player for each test
 */
export function createMockPlayer() {
  return new MockPlayer();
}
