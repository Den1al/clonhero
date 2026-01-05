/**
 * Comprehensive Skills/Abilities Validation Tests
 *
 * This test suite validates that all 21 abilities in the game are working correctly.
 * Each ability is tested to ensure it properly modifies player stats as documented.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { Abilities, AbilityCategories, AbilitySystem } from '../systems/AbilitySystem.js';
import { createMockPlayer } from './MockPlayer.js';

describe('AbilitySystem', () => {
  let player;
  let abilitySystem;

  beforeEach(() => {
    player = createMockPlayer();
    abilitySystem = new AbilitySystem();
  });

  // ============================================================================
  // ATTACK ABILITIES (13 abilities)
  // ============================================================================
  describe('Attack Abilities', () => {

    describe('MULTI_SHOT', () => {
      it('should have correct metadata', () => {
        expect(Abilities.MULTI_SHOT.id).toBe('multi_shot');
        expect(Abilities.MULTI_SHOT.name).toBe('Multi-Shot');
        expect(Abilities.MULTI_SHOT.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.MULTI_SHOT.maxStacks).toBe(5);
      });

      it('should add 1 projectile per stack', () => {
        expect(player.projectileCount).toBe(1);

        Abilities.MULTI_SHOT.apply(player);
        expect(player.projectileCount).toBe(2);

        Abilities.MULTI_SHOT.apply(player);
        expect(player.projectileCount).toBe(3);
      });

      it('should allow up to 5 stacks (6 total projectiles)', () => {
        for (let i = 0; i < 5; i++) {
          Abilities.MULTI_SHOT.apply(player);
        }
        expect(player.projectileCount).toBe(6);
      });

      it('should generate spread pattern with multiple projectiles', () => {
        player.projectileCount = 3;
        const directions = player.getAttackDirections({ x: 0, z: 10 });
        expect(directions.length).toBe(3);
      });
    });

    describe('ATTACK_SPEED', () => {
      it('should have correct metadata', () => {
        expect(Abilities.ATTACK_SPEED.id).toBe('attack_speed');
        expect(Abilities.ATTACK_SPEED.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.ATTACK_SPEED.maxStacks).toBe(5);
      });

      it('should increase attack speed by 20% per stack', () => {
        const baseSpeed = player.attackSpeed;

        Abilities.ATTACK_SPEED.apply(player);
        expect(player.attackSpeed).toBeCloseTo(baseSpeed * 1.2, 5);

        Abilities.ATTACK_SPEED.apply(player);
        expect(player.attackSpeed).toBeCloseTo(baseSpeed * 1.2 * 1.2, 5);
      });

      it('should compound correctly at max stacks', () => {
        const baseSpeed = player.attackSpeed;
        for (let i = 0; i < 5; i++) {
          Abilities.ATTACK_SPEED.apply(player);
        }
        expect(player.attackSpeed).toBeCloseTo(baseSpeed * Math.pow(1.2, 5), 5);
      });
    });

    describe('ATTACK_DAMAGE', () => {
      it('should have correct metadata', () => {
        expect(Abilities.ATTACK_DAMAGE.id).toBe('attack_damage');
        expect(Abilities.ATTACK_DAMAGE.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.ATTACK_DAMAGE.maxStacks).toBe(5);
      });

      it('should increase damage by 25% per stack', () => {
        const baseDamage = player.attackDamage;

        Abilities.ATTACK_DAMAGE.apply(player);
        expect(player.attackDamage).toBeCloseTo(baseDamage * 1.25, 5);

        Abilities.ATTACK_DAMAGE.apply(player);
        expect(player.attackDamage).toBeCloseTo(baseDamage * 1.25 * 1.25, 5);
      });

      it('should compound correctly at max stacks', () => {
        const baseDamage = player.attackDamage;
        for (let i = 0; i < 5; i++) {
          Abilities.ATTACK_DAMAGE.apply(player);
        }
        expect(player.attackDamage).toBeCloseTo(baseDamage * Math.pow(1.25, 5), 5);
      });
    });

    describe('DIAGONAL_ARROWS', () => {
      it('should have correct metadata', () => {
        expect(Abilities.DIAGONAL_ARROWS.id).toBe('diagonal_arrows');
        expect(Abilities.DIAGONAL_ARROWS.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.DIAGONAL_ARROWS.maxStacks).toBe(1);
      });

      it('should enable diagonal arrows flag', () => {
        expect(player.diagonalArrows).toBe(false);

        Abilities.DIAGONAL_ARROWS.apply(player);
        expect(player.diagonalArrows).toBe(true);
      });

      it('should add 2 extra arrow directions at 45 degrees', () => {
        const targetEnemy = { x: 0, z: 10 };

        // Without diagonal arrows
        let directions = player.getAttackDirections(targetEnemy);
        expect(directions.length).toBe(1);

        // With diagonal arrows
        Abilities.DIAGONAL_ARROWS.apply(player);
        directions = player.getAttackDirections(targetEnemy);
        expect(directions.length).toBe(3); // main + 2 diagonal
      });
    });

    describe('REAR_ARROW', () => {
      it('should have correct metadata', () => {
        expect(Abilities.REAR_ARROW.id).toBe('rear_arrow');
        expect(Abilities.REAR_ARROW.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.REAR_ARROW.maxStacks).toBe(1);
      });

      it('should enable rear arrow flag', () => {
        expect(player.rearArrow).toBe(false);

        Abilities.REAR_ARROW.apply(player);
        expect(player.rearArrow).toBe(true);
      });

      it('should add 1 arrow in opposite direction', () => {
        const targetEnemy = { x: 0, z: 10 };

        // Without rear arrow
        let directions = player.getAttackDirections(targetEnemy);
        expect(directions.length).toBe(1);

        // With rear arrow
        Abilities.REAR_ARROW.apply(player);
        directions = player.getAttackDirections(targetEnemy);
        expect(directions.length).toBe(2);

        // Verify rear arrow is opposite direction
        expect(directions[1].x).toBeCloseTo(-directions[0].x, 5);
        expect(directions[1].z).toBeCloseTo(-directions[0].z, 5);
      });
    });

    describe('SIDE_ARROWS', () => {
      it('should have correct metadata', () => {
        expect(Abilities.SIDE_ARROWS.id).toBe('side_arrows');
        expect(Abilities.SIDE_ARROWS.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.SIDE_ARROWS.maxStacks).toBe(1);
      });

      it('should enable side arrows flag', () => {
        expect(player.sideArrows).toBe(false);

        Abilities.SIDE_ARROWS.apply(player);
        expect(player.sideArrows).toBe(true);
      });

      it('should add 2 arrows perpendicular to main direction', () => {
        const targetEnemy = { x: 0, z: 10 };

        // Without side arrows
        let directions = player.getAttackDirections(targetEnemy);
        expect(directions.length).toBe(1);

        // With side arrows
        Abilities.SIDE_ARROWS.apply(player);
        directions = player.getAttackDirections(targetEnemy);
        expect(directions.length).toBe(3); // main + 2 side
      });
    });

    describe('BOUNCY_WALLS', () => {
      it('should have correct metadata', () => {
        expect(Abilities.BOUNCY_WALLS.id).toBe('bouncy_walls');
        expect(Abilities.BOUNCY_WALLS.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.BOUNCY_WALLS.maxStacks).toBe(1);
      });

      it('should enable bouncy walls flag', () => {
        expect(player.bouncyWalls).toBe(false);

        Abilities.BOUNCY_WALLS.apply(player);
        expect(player.bouncyWalls).toBe(true);
      });
    });

    describe('PIERCE', () => {
      it('should have correct metadata', () => {
        expect(Abilities.PIERCE.id).toBe('pierce');
        expect(Abilities.PIERCE.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.PIERCE.maxStacks).toBe(5);
      });

      it('should add 1 pierce per stack', () => {
        expect(player.projectilePierce).toBe(0);

        Abilities.PIERCE.apply(player);
        expect(player.projectilePierce).toBe(1);

        Abilities.PIERCE.apply(player);
        expect(player.projectilePierce).toBe(2);
      });

      it('should allow up to 5 pierce stacks', () => {
        for (let i = 0; i < 5; i++) {
          Abilities.PIERCE.apply(player);
        }
        expect(player.projectilePierce).toBe(5);
      });
    });

    describe('RICOCHET', () => {
      it('should have correct metadata', () => {
        expect(Abilities.RICOCHET.id).toBe('ricochet');
        expect(Abilities.RICOCHET.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.RICOCHET.maxStacks).toBe(1);
      });

      it('should enable ricochet flag', () => {
        expect(player.ricochet).toBe(false);

        Abilities.RICOCHET.apply(player);
        expect(player.ricochet).toBe(true);
      });
    });

    describe('CRIT_CHANCE', () => {
      it('should have correct metadata', () => {
        expect(Abilities.CRIT_CHANCE.id).toBe('crit_chance');
        expect(Abilities.CRIT_CHANCE.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.CRIT_CHANCE.maxStacks).toBe(5);
      });

      it('should add 10% crit chance per stack', () => {
        expect(player.critChance).toBe(0.05); // Base 5%

        Abilities.CRIT_CHANCE.apply(player);
        expect(player.critChance).toBeCloseTo(0.15, 5);

        Abilities.CRIT_CHANCE.apply(player);
        expect(player.critChance).toBeCloseTo(0.25, 5);
      });

      it('should allow up to 55% crit chance at max stacks', () => {
        for (let i = 0; i < 5; i++) {
          Abilities.CRIT_CHANCE.apply(player);
        }
        expect(player.critChance).toBeCloseTo(0.55, 5); // 5% base + 50%
      });
    });

    describe('CRIT_DAMAGE', () => {
      it('should have correct metadata', () => {
        expect(Abilities.CRIT_DAMAGE.id).toBe('crit_damage');
        expect(Abilities.CRIT_DAMAGE.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.CRIT_DAMAGE.maxStacks).toBe(3);
      });

      it('should add 50% crit multiplier per stack', () => {
        expect(player.critMultiplier).toBe(2); // Base 2x

        Abilities.CRIT_DAMAGE.apply(player);
        expect(player.critMultiplier).toBeCloseTo(2.5, 5);

        Abilities.CRIT_DAMAGE.apply(player);
        expect(player.critMultiplier).toBeCloseTo(3.0, 5);
      });

      it('should allow up to 3.5x crit multiplier at max stacks', () => {
        for (let i = 0; i < 3; i++) {
          Abilities.CRIT_DAMAGE.apply(player);
        }
        expect(player.critMultiplier).toBeCloseTo(3.5, 5);
      });
    });

    describe('PROJECTILE_SPEED', () => {
      it('should have correct metadata', () => {
        expect(Abilities.PROJECTILE_SPEED.id).toBe('projectile_speed');
        expect(Abilities.PROJECTILE_SPEED.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.PROJECTILE_SPEED.maxStacks).toBe(3);
      });

      it('should increase projectile speed by 25% per stack', () => {
        const baseSpeed = player.projectileSpeed;

        Abilities.PROJECTILE_SPEED.apply(player);
        expect(player.projectileSpeed).toBeCloseTo(baseSpeed * 1.25, 5);

        Abilities.PROJECTILE_SPEED.apply(player);
        expect(player.projectileSpeed).toBeCloseTo(baseSpeed * 1.25 * 1.25, 5);
      });

      it('should compound correctly at max stacks', () => {
        const baseSpeed = player.projectileSpeed;
        for (let i = 0; i < 3; i++) {
          Abilities.PROJECTILE_SPEED.apply(player);
        }
        expect(player.projectileSpeed).toBeCloseTo(baseSpeed * Math.pow(1.25, 3), 5);
      });
    });

    describe('ATTACK_RANGE', () => {
      it('should have correct metadata', () => {
        expect(Abilities.ATTACK_RANGE.id).toBe('attack_range');
        expect(Abilities.ATTACK_RANGE.category).toBe(AbilityCategories.ATTACK);
        expect(Abilities.ATTACK_RANGE.maxStacks).toBe(3);
      });

      it('should increase attack range by 20% per stack', () => {
        const baseRange = player.attackRange;

        Abilities.ATTACK_RANGE.apply(player);
        expect(player.attackRange).toBeCloseTo(baseRange * 1.2, 5);

        Abilities.ATTACK_RANGE.apply(player);
        expect(player.attackRange).toBeCloseTo(baseRange * 1.2 * 1.2, 5);
      });

      it('should compound correctly at max stacks', () => {
        const baseRange = player.attackRange;
        for (let i = 0; i < 3; i++) {
          Abilities.ATTACK_RANGE.apply(player);
        }
        expect(player.attackRange).toBeCloseTo(baseRange * Math.pow(1.2, 3), 5);
      });
    });
  });

  // ============================================================================
  // DEFENSE ABILITIES (4 abilities)
  // ============================================================================
  describe('Defense Abilities', () => {

    describe('MAX_HP', () => {
      it('should have correct metadata', () => {
        expect(Abilities.MAX_HP.id).toBe('max_hp');
        expect(Abilities.MAX_HP.category).toBe(AbilityCategories.DEFENSE);
        expect(Abilities.MAX_HP.maxStacks).toBe(5);
      });

      it('should increase max health by 20% and heal for the same amount', () => {
        const baseMaxHealth = player.maxHealth;
        const baseHealth = player.health;

        Abilities.MAX_HP.apply(player);

        expect(player.maxHealth).toBeCloseTo(baseMaxHealth * 1.2, 5);
        expect(player.health).toBeCloseTo(baseHealth + baseMaxHealth * 0.2, 5);
      });

      it('should heal missing health when applied', () => {
        player.health = 50; // Take some damage
        const baseMaxHealth = player.maxHealth;

        Abilities.MAX_HP.apply(player);

        expect(player.maxHealth).toBeCloseTo(baseMaxHealth * 1.2, 5);
        expect(player.health).toBeCloseTo(50 + baseMaxHealth * 0.2, 5);
      });

      it('should compound correctly at max stacks', () => {
        const baseMaxHealth = player.maxHealth;
        for (let i = 0; i < 5; i++) {
          Abilities.MAX_HP.apply(player);
        }
        expect(player.maxHealth).toBeCloseTo(baseMaxHealth * Math.pow(1.2, 5), 5);
      });
    });

    describe('HEAL', () => {
      it('should have correct metadata', () => {
        expect(Abilities.HEAL.id).toBe('heal');
        expect(Abilities.HEAL.category).toBe(AbilityCategories.DEFENSE);
        expect(Abilities.HEAL.maxStacks).toBe(99);
      });

      it('should restore 30% of max health', () => {
        player.health = 50;
        player.maxHealth = 100;

        Abilities.HEAL.apply(player);

        expect(player.health).toBe(80); // 50 + 30
      });

      it('should not heal above max health', () => {
        player.health = 90;
        player.maxHealth = 100;

        Abilities.HEAL.apply(player);

        expect(player.health).toBe(100);
      });

      it('should scale with increased max health', () => {
        player.maxHealth = 200;
        player.health = 100;

        Abilities.HEAL.apply(player);

        expect(player.health).toBe(160); // 100 + 60
      });
    });

    describe('DODGE', () => {
      it('should have correct metadata', () => {
        expect(Abilities.DODGE.id).toBe('dodge');
        expect(Abilities.DODGE.category).toBe(AbilityCategories.DEFENSE);
        expect(Abilities.DODGE.maxStacks).toBe(5);
      });

      it('should add 10% dodge chance per stack', () => {
        expect(player.dodge).toBe(0);

        Abilities.DODGE.apply(player);
        expect(player.dodge).toBeCloseTo(0.1, 5);

        Abilities.DODGE.apply(player);
        expect(player.dodge).toBeCloseTo(0.2, 5);
      });

      it('should allow up to 50% dodge at max stacks', () => {
        for (let i = 0; i < 5; i++) {
          Abilities.DODGE.apply(player);
        }
        expect(player.dodge).toBeCloseTo(0.5, 5);
      });
    });

    describe('SHIELD', () => {
      it('should have correct metadata', () => {
        expect(Abilities.SHIELD.id).toBe('shield');
        expect(Abilities.SHIELD.category).toBe(AbilityCategories.DEFENSE);
        expect(Abilities.SHIELD.maxStacks).toBe(3);
      });

      it('should add 1 shield per stack', () => {
        expect(player.shield).toBe(0);

        Abilities.SHIELD.apply(player);
        expect(player.shield).toBe(1);

        Abilities.SHIELD.apply(player);
        expect(player.shield).toBe(2);
      });

      it('should allow up to 3 shields at max stacks', () => {
        for (let i = 0; i < 3; i++) {
          Abilities.SHIELD.apply(player);
        }
        expect(player.shield).toBe(3);
      });

      it('should block damage when shield is active', () => {
        player.shield = 1;
        const initialHealth = player.health;

        // Override random to ensure no dodge
        const originalRandom = Math.random;
        Math.random = () => 1; // Always fail dodge roll

        player.takeDamage(20);

        Math.random = originalRandom;

        expect(player.health).toBe(initialHealth);
        expect(player.shield).toBe(0);
      });
    });
  });

  // ============================================================================
  // UTILITY ABILITIES (3 abilities)
  // ============================================================================
  describe('Utility Abilities', () => {

    describe('MOVE_SPEED', () => {
      it('should have correct metadata', () => {
        expect(Abilities.MOVE_SPEED.id).toBe('move_speed');
        expect(Abilities.MOVE_SPEED.category).toBe(AbilityCategories.UTILITY);
        expect(Abilities.MOVE_SPEED.maxStacks).toBe(5);
      });

      it('should increase movement speed by 15% per stack', () => {
        const baseSpeed = player.speed;

        Abilities.MOVE_SPEED.apply(player);
        expect(player.speed).toBeCloseTo(baseSpeed * 1.15, 5);

        Abilities.MOVE_SPEED.apply(player);
        expect(player.speed).toBeCloseTo(baseSpeed * 1.15 * 1.15, 5);
      });

      it('should compound correctly at max stacks', () => {
        const baseSpeed = player.speed;
        for (let i = 0; i < 5; i++) {
          Abilities.MOVE_SPEED.apply(player);
        }
        expect(player.speed).toBeCloseTo(baseSpeed * Math.pow(1.15, 5), 5);
      });
    });

    describe('MAGNET', () => {
      it('should have correct metadata', () => {
        expect(Abilities.MAGNET.id).toBe('magnet');
        expect(Abilities.MAGNET.category).toBe(AbilityCategories.UTILITY);
        expect(Abilities.MAGNET.maxStacks).toBe(3);
      });

      it('should increase XP magnet range by 50% per stack', () => {
        const baseRange = player.xpMagnetRange;

        Abilities.MAGNET.apply(player);
        expect(player.xpMagnetRange).toBeCloseTo(baseRange * 1.5, 5);

        Abilities.MAGNET.apply(player);
        expect(player.xpMagnetRange).toBeCloseTo(baseRange * 1.5 * 1.5, 5);
      });

      it('should compound correctly at max stacks', () => {
        const baseRange = player.xpMagnetRange;
        for (let i = 0; i < 3; i++) {
          Abilities.MAGNET.apply(player);
        }
        expect(player.xpMagnetRange).toBeCloseTo(baseRange * Math.pow(1.5, 3), 5);
      });
    });

    describe('XP_BOOST', () => {
      it('should have correct metadata', () => {
        expect(Abilities.XP_BOOST.id).toBe('xp_boost');
        expect(Abilities.XP_BOOST.category).toBe(AbilityCategories.UTILITY);
        expect(Abilities.XP_BOOST.maxStacks).toBe(3);
      });

      it('should increase XP multiplier by 20% per stack', () => {
        expect(player.xpMultiplier).toBe(1);

        Abilities.XP_BOOST.apply(player);
        expect(player.xpMultiplier).toBeCloseTo(1.2, 5);

        Abilities.XP_BOOST.apply(player);
        expect(player.xpMultiplier).toBeCloseTo(1.44, 5);
      });

      it('should affect XP gain correctly', () => {
        player.xpMultiplier = 1.2;
        player.addXP(100);
        expect(player.xp).toBe(120);
      });

      it('should compound correctly at max stacks', () => {
        for (let i = 0; i < 3; i++) {
          Abilities.XP_BOOST.apply(player);
        }
        expect(player.xpMultiplier).toBeCloseTo(Math.pow(1.2, 3), 5);
      });
    });
  });

  // ============================================================================
  // SPECIAL ABILITIES (1 ability)
  // ============================================================================
  describe('Special Abilities', () => {

    describe('HOMING', () => {
      it('should have correct metadata', () => {
        expect(Abilities.HOMING.id).toBe('homing');
        expect(Abilities.HOMING.category).toBe(AbilityCategories.SPECIAL);
        expect(Abilities.HOMING.maxStacks).toBe(1);
      });

      it('should enable homing flag', () => {
        expect(player.homing).toBe(false);

        Abilities.HOMING.apply(player);
        expect(player.homing).toBe(true);
      });
    });
  });

  // ============================================================================
  // ABILITY SYSTEM INTEGRATION TESTS
  // ============================================================================
  describe('AbilitySystem Integration', () => {

    describe('applyAbility()', () => {
      it('should apply ability and track stacks', () => {
        const result = abilitySystem.applyAbility(Abilities.MULTI_SHOT, player);

        expect(result.ability).toBe(Abilities.MULTI_SHOT);
        expect(result.stacks).toBe(1);
        expect(player.projectileCount).toBe(2);
      });

      it('should increment stacks on repeated application', () => {
        abilitySystem.applyAbility(Abilities.MULTI_SHOT, player);
        const result = abilitySystem.applyAbility(Abilities.MULTI_SHOT, player);

        expect(result.stacks).toBe(2);
        expect(player.projectileCount).toBe(3);
      });
    });

    describe('getRandomAbilities()', () => {
      it('should return 3 abilities by default', () => {
        const abilities = abilitySystem.getRandomAbilities(3, player);
        expect(abilities.length).toBe(3);
      });

      it('should not return abilities at max stacks', () => {
        // Max out MULTI_SHOT (5 stacks)
        for (let i = 0; i < 5; i++) {
          abilitySystem.applyAbility(Abilities.MULTI_SHOT, player);
        }

        // Get many random abilities to verify MULTI_SHOT never appears
        for (let attempt = 0; attempt < 20; attempt++) {
          const abilities = abilitySystem.getRandomAbilities(3, player);
          const hasMultiShot = abilities.some(a => a.id === 'multi_shot');
          expect(hasMultiShot).toBe(false);
        }
      });

      it('should not return single-stack abilities once acquired', () => {
        // Acquire HOMING (max 1 stack)
        abilitySystem.applyAbility(Abilities.HOMING, player);

        // Verify HOMING never appears again
        for (let attempt = 0; attempt < 20; attempt++) {
          const abilities = abilitySystem.getRandomAbilities(3, player);
          const hasHoming = abilities.some(a => a.id === 'homing');
          expect(hasHoming).toBe(false);
        }
      });
    });

    describe('getAcquiredAbilities()', () => {
      it('should return empty array initially', () => {
        const acquired = abilitySystem.getAcquiredAbilities();
        expect(acquired.length).toBe(0);
      });

      it('should return acquired abilities with stack counts', () => {
        abilitySystem.applyAbility(Abilities.MULTI_SHOT, player);
        abilitySystem.applyAbility(Abilities.MULTI_SHOT, player);
        abilitySystem.applyAbility(Abilities.ATTACK_SPEED, player);

        const acquired = abilitySystem.getAcquiredAbilities();

        expect(acquired.length).toBe(2);

        const multiShot = acquired.find(a => a.id === 'multi_shot');
        expect(multiShot.stacks).toBe(2);

        const attackSpeed = acquired.find(a => a.id === 'attack_speed');
        expect(attackSpeed.stacks).toBe(1);
      });
    });

    describe('reset()', () => {
      it('should clear all acquired abilities', () => {
        abilitySystem.applyAbility(Abilities.MULTI_SHOT, player);
        abilitySystem.applyAbility(Abilities.ATTACK_SPEED, player);

        abilitySystem.reset();

        const acquired = abilitySystem.getAcquiredAbilities();
        expect(acquired.length).toBe(0);
      });
    });
  });

  // ============================================================================
  // ABILITY COMBINATIONS TEST
  // ============================================================================
  describe('Ability Combinations', () => {

    it('should allow combining multiple arrow abilities', () => {
      Abilities.MULTI_SHOT.apply(player);
      Abilities.MULTI_SHOT.apply(player);
      Abilities.DIAGONAL_ARROWS.apply(player);
      Abilities.REAR_ARROW.apply(player);
      Abilities.SIDE_ARROWS.apply(player);

      const targetEnemy = { x: 0, z: 10 };
      const directions = player.getAttackDirections(targetEnemy);

      // 3 (multi-shot) + 2 (diagonal) + 1 (rear) + 2 (side) = 8
      expect(directions.length).toBe(8);
    });

    it('should correctly combine multiplicative stats', () => {
      const baseDamage = player.attackDamage;
      const baseSpeed = player.attackSpeed;

      // Apply 3 stacks of each
      for (let i = 0; i < 3; i++) {
        Abilities.ATTACK_DAMAGE.apply(player);
        Abilities.ATTACK_SPEED.apply(player);
      }

      expect(player.attackDamage).toBeCloseTo(baseDamage * Math.pow(1.25, 3), 5);
      expect(player.attackSpeed).toBeCloseTo(baseSpeed * Math.pow(1.2, 3), 5);
    });

    it('should correctly combine additive stats', () => {
      // Apply 3 stacks of crit chance and crit damage
      for (let i = 0; i < 3; i++) {
        Abilities.CRIT_CHANCE.apply(player);
        Abilities.CRIT_DAMAGE.apply(player);
      }

      expect(player.critChance).toBeCloseTo(0.05 + 0.3, 5); // base + 30%
      expect(player.critMultiplier).toBeCloseTo(2 + 1.5, 5); // base + 1.5
    });
  });

  // ============================================================================
  // XP AND LEVELING TESTS
  // ============================================================================
  describe('XP and Leveling System', () => {

    it('should trigger level up when XP threshold reached', () => {
      player.xp = 0;
      const leveledUp = player.addXP(100);
      expect(leveledUp).toBe(true);
    });

    it('should not trigger level up below threshold', () => {
      player.xp = 0;
      const leveledUp = player.addXP(50);
      expect(leveledUp).toBe(false);
    });

    it('should correctly level up player', () => {
      player.xp = 100;
      player.level = 1;
      player.xpToNextLevel = 100;

      player.levelUp();

      expect(player.level).toBe(2);
      expect(player.xp).toBe(0);
      expect(player.xpToNextLevel).toBe(120); // 100 * 1.2
    });

    it('should carry over excess XP', () => {
      player.xp = 150;
      player.level = 1;
      player.xpToNextLevel = 100;

      player.levelUp();

      expect(player.xp).toBe(50);
    });

    it('should apply XP multiplier to XP gain', () => {
      player.xp = 0;
      player.xpMultiplier = 1.5;

      player.addXP(100);

      expect(player.xp).toBe(150);
    });
  });

  // ============================================================================
  // ALL ABILITIES DEFINITION VALIDATION
  // ============================================================================
  describe('All Abilities Definition Validation', () => {
    const allAbilities = Object.values(Abilities);

    it('should have exactly 30 abilities defined', () => {
      // 21 original + 9 elemental abilities
      expect(allAbilities.length).toBe(30);
    });

    it('all abilities should have required properties', () => {
      for (const ability of allAbilities) {
        expect(ability).toHaveProperty('id');
        expect(ability).toHaveProperty('name');
        expect(ability).toHaveProperty('description');
        expect(ability).toHaveProperty('icon');
        expect(ability).toHaveProperty('category');
        expect(ability).toHaveProperty('maxStacks');
        expect(ability).toHaveProperty('apply');
        expect(typeof ability.apply).toBe('function');
      }
    });

    it('all abilities should have valid categories', () => {
      const validCategories = Object.values(AbilityCategories);
      for (const ability of allAbilities) {
        expect(validCategories).toContain(ability.category);
      }
    });

    it('all abilities should have positive maxStacks', () => {
      for (const ability of allAbilities) {
        expect(ability.maxStacks).toBeGreaterThan(0);
      }
    });

    it('all abilities should have unique ids', () => {
      const ids = allAbilities.map(a => a.id);
      const uniqueIds = [...new Set(ids)];
      expect(ids.length).toBe(uniqueIds.length);
    });

    it('all ability apply functions should not throw errors', () => {
      for (const ability of allAbilities) {
        const testPlayer = createMockPlayer();
        expect(() => ability.apply(testPlayer)).not.toThrow();
      }
    });
  });
});
