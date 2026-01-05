export const AbilityCategories = {
  ATTACK: 'attack',
  DEFENSE: 'defense',
  UTILITY: 'utility',
  SPECIAL: 'special'
};

export const Abilities = {
  MULTI_SHOT: {
    id: 'multi_shot',
    name: 'Multi-Shot',
    description: '+1 projectile (spread pattern)',
    icon: '🎯',
    category: AbilityCategories.ATTACK,
    maxStacks: 5,
    apply: (player) => {
      player.projectileCount += 1;
    }
  },

  ATTACK_SPEED: {
    id: 'attack_speed',
    name: 'Attack Speed',
    description: '+20% attack speed',
    icon: '⚡',
    category: AbilityCategories.ATTACK,
    maxStacks: 5,
    apply: (player) => {
      player.attackSpeed *= 1.2;
    }
  },

  ATTACK_DAMAGE: {
    id: 'attack_damage',
    name: 'Attack Power',
    description: '+25% damage',
    icon: '💪',
    category: AbilityCategories.ATTACK,
    maxStacks: 5,
    apply: (player) => {
      player.attackDamage *= 1.25;
    }
  },

  DIAGONAL_ARROWS: {
    id: 'diagonal_arrows',
    name: 'Diagonal Arrows',
    description: 'Fire 2 extra arrows at 45 degrees',
    icon: '↗️',
    category: AbilityCategories.ATTACK,
    maxStacks: 1,
    apply: (player) => {
      player.diagonalArrows = true;
    }
  },

  REAR_ARROW: {
    id: 'rear_arrow',
    name: 'Rear Arrow',
    description: 'Fire 1 arrow backward',
    icon: '⬇️',
    category: AbilityCategories.ATTACK,
    maxStacks: 1,
    apply: (player) => {
      player.rearArrow = true;
    }
  },

  SIDE_ARROWS: {
    id: 'side_arrows',
    name: 'Side Arrows',
    description: 'Fire arrows left and right',
    icon: '↔️',
    category: AbilityCategories.ATTACK,
    maxStacks: 1,
    apply: (player) => {
      player.sideArrows = true;
    }
  },

  BOUNCY_WALLS: {
    id: 'bouncy_walls',
    name: 'Bouncy Walls',
    description: 'Projectiles bounce off walls',
    icon: '🔄',
    category: AbilityCategories.ATTACK,
    maxStacks: 1,
    apply: (player) => {
      player.bouncyWalls = true;
    }
  },

  PIERCE: {
    id: 'pierce',
    name: 'Pierce',
    description: '+1 enemy pierce',
    icon: '🗡️',
    category: AbilityCategories.ATTACK,
    maxStacks: 5,
    apply: (player) => {
      player.projectilePierce += 1;
    }
  },

  RICOCHET: {
    id: 'ricochet',
    name: 'Ricochet',
    description: 'Projectiles bounce to nearby enemies',
    icon: '💫',
    category: AbilityCategories.ATTACK,
    maxStacks: 1,
    apply: (player) => {
      player.ricochet = true;
    }
  },

  CRIT_CHANCE: {
    id: 'crit_chance',
    name: 'Critical Strike',
    description: '+10% critical chance',
    icon: '🎲',
    category: AbilityCategories.ATTACK,
    maxStacks: 5,
    apply: (player) => {
      player.critChance += 0.1;
    }
  },

  CRIT_DAMAGE: {
    id: 'crit_damage',
    name: 'Critical Damage',
    description: '+50% critical multiplier',
    icon: '💥',
    category: AbilityCategories.ATTACK,
    maxStacks: 3,
    apply: (player) => {
      player.critMultiplier += 0.5;
    }
  },

  MAX_HP: {
    id: 'max_hp',
    name: 'Max HP Up',
    description: '+20% max health',
    icon: '❤️',
    category: AbilityCategories.DEFENSE,
    maxStacks: 5,
    apply: (player) => {
      const increase = player.maxHealth * 0.2;
      player.maxHealth += increase;
      player.health += increase;
    }
  },

  HEAL: {
    id: 'heal',
    name: 'Heal',
    description: 'Restore 30% max health',
    icon: '💚',
    category: AbilityCategories.DEFENSE,
    maxStacks: 99,
    apply: (player) => {
      player.heal(player.maxHealth * 0.3);
    }
  },

  DODGE: {
    id: 'dodge',
    name: 'Dodge',
    description: '+10% dodge chance',
    icon: '🌀',
    category: AbilityCategories.DEFENSE,
    maxStacks: 5,
    apply: (player) => {
      player.dodge += 0.1;
    }
  },

  SHIELD: {
    id: 'shield',
    name: 'Shield',
    description: 'Block the next hit',
    icon: '🛡️',
    category: AbilityCategories.DEFENSE,
    maxStacks: 3,
    apply: (player) => {
      player.shield += 1;
    }
  },

  MOVE_SPEED: {
    id: 'move_speed',
    name: 'Move Speed',
    description: '+15% movement speed',
    icon: '👟',
    category: AbilityCategories.UTILITY,
    maxStacks: 5,
    apply: (player) => {
      player.speed *= 1.15;
    }
  },

  MAGNET: {
    id: 'magnet',
    name: 'Magnet',
    description: '+50% XP pickup radius',
    icon: '🧲',
    category: AbilityCategories.UTILITY,
    maxStacks: 3,
    apply: (player) => {
      player.xpMagnetRange *= 1.5;
    }
  },

  XP_BOOST: {
    id: 'xp_boost',
    name: 'XP Boost',
    description: '+20% XP gained',
    icon: '📈',
    category: AbilityCategories.UTILITY,
    maxStacks: 3,
    apply: (player) => {
      player.xpMultiplier *= 1.2;
    }
  },

  HOMING: {
    id: 'homing',
    name: 'Homing Arrows',
    description: 'Arrows curve toward enemies',
    icon: '🎯',
    category: AbilityCategories.SPECIAL,
    maxStacks: 1,
    apply: (player) => {
      player.homing = true;
    }
  },

  PROJECTILE_SPEED: {
    id: 'projectile_speed',
    name: 'Projectile Speed',
    description: '+25% projectile speed',
    icon: '💨',
    category: AbilityCategories.ATTACK,
    maxStacks: 3,
    apply: (player) => {
      player.projectileSpeed *= 1.25;
    }
  },

  ATTACK_RANGE: {
    id: 'attack_range',
    name: 'Attack Range',
    description: '+20% attack range',
    icon: '📏',
    category: AbilityCategories.ATTACK,
    maxStacks: 3,
    apply: (player) => {
      player.attackRange *= 1.2;
    }
  }
};

export class AbilitySystem {
  constructor() {
    this.acquiredAbilities = new Map();
    this.abilityList = Object.values(Abilities);
  }

  getRandomAbilities(count = 3, player) {
    const available = this.abilityList.filter(ability => {
      const currentStacks = this.acquiredAbilities.get(ability.id) || 0;
      return currentStacks < ability.maxStacks;
    });

    const shuffled = [...available].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  applyAbility(ability, player) {
    ability.apply(player);

    const currentStacks = this.acquiredAbilities.get(ability.id) || 0;
    this.acquiredAbilities.set(ability.id, currentStacks + 1);

    return {
      ability,
      stacks: currentStacks + 1
    };
  }

  getAcquiredAbilities() {
    const result = [];
    for (const [id, stacks] of this.acquiredAbilities) {
      const ability = this.abilityList.find(a => a.id === id);
      if (ability) {
        result.push({ ...ability, stacks });
      }
    }
    return result;
  }

  reset() {
    this.acquiredAbilities.clear();
  }
}
