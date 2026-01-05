/**
 * Difficulty Manager - Centralized difficulty configuration system
 * Controls game difficulty across player stats, enemy scaling, and progression
 */

export const DifficultyLevel = {
  EASY: 'easy',
  NORMAL: 'normal',
  HARD: 'hard',
  NIGHTMARE: 'nightmare'
};

const DifficultyConfigs = {
  [DifficultyLevel.EASY]: {
    name: 'Easy',
    description: 'Forgiving experience for new players',
    icon: '🌱',
    color: '#10b981', // Green
    // Player modifiers
    playerMaxHealth: 150,
    playerDamageMultiplier: 1.2,
    invulnerabilityDuration: 1.5,
    // Enemy modifiers
    enemyHealthMultiplier: 0.7,
    enemyDamageMultiplier: 0.7,
    enemySpawnMultiplier: 0.8,
    bossHealthMultiplier: 0.8,
    // Progression modifiers
    xpGainMultiplier: 1.3
  },
  [DifficultyLevel.NORMAL]: {
    name: 'Normal',
    description: 'Balanced challenge for most players',
    icon: '⚔️',
    color: '#6366f1', // Purple (primary)
    // Player modifiers
    playerMaxHealth: 100,
    playerDamageMultiplier: 1.0,
    invulnerabilityDuration: 1.0,
    // Enemy modifiers
    enemyHealthMultiplier: 1.0,
    enemyDamageMultiplier: 1.0,
    enemySpawnMultiplier: 1.0,
    bossHealthMultiplier: 1.0,
    // Progression modifiers
    xpGainMultiplier: 1.0
  },
  [DifficultyLevel.HARD]: {
    name: 'Hard',
    description: 'Tough battles for skilled players',
    icon: '🔥',
    color: '#f59e0b', // Orange
    // Player modifiers
    playerMaxHealth: 80,
    playerDamageMultiplier: 1.0,
    invulnerabilityDuration: 0.7,
    // Enemy modifiers
    enemyHealthMultiplier: 1.4,
    enemyDamageMultiplier: 1.4,
    enemySpawnMultiplier: 1.2,
    bossHealthMultiplier: 1.3,
    // Progression modifiers
    xpGainMultiplier: 0.85
  },
  [DifficultyLevel.NIGHTMARE]: {
    name: 'Nightmare',
    description: 'Extreme challenge for veterans only',
    icon: '💀',
    color: '#ef4444', // Red
    // Player modifiers
    playerMaxHealth: 60,
    playerDamageMultiplier: 0.9,
    invulnerabilityDuration: 0.5,
    // Enemy modifiers
    enemyHealthMultiplier: 2.0,
    enemyDamageMultiplier: 2.0,
    enemySpawnMultiplier: 1.5,
    bossHealthMultiplier: 1.8,
    // Progression modifiers
    xpGainMultiplier: 0.7
  }
};

class DifficultyManagerClass {
  constructor() {
    this.currentDifficulty = DifficultyLevel.NORMAL;
    this.config = DifficultyConfigs[DifficultyLevel.NORMAL];
  }

  /**
   * Set the current difficulty level
   * @param {string} difficulty - One of DifficultyLevel values
   */
  setDifficulty(difficulty) {
    if (DifficultyConfigs[difficulty]) {
      this.currentDifficulty = difficulty;
      this.config = DifficultyConfigs[difficulty];
    }
  }

  /**
   * Get current difficulty level
   * @returns {string}
   */
  getDifficulty() {
    return this.currentDifficulty;
  }

  /**
   * Get current difficulty configuration
   * @returns {object}
   */
  getConfig() {
    return this.config;
  }

  /**
   * Get all available difficulties for UI
   * @returns {Array}
   */
  getAllDifficulties() {
    return Object.entries(DifficultyConfigs).map(([key, config]) => ({
      id: key,
      name: config.name,
      description: config.description,
      icon: config.icon,
      color: config.color
    }));
  }

  /**
   * Get difficulty name
   * @returns {string}
   */
  getDifficultyName() {
    return this.config.name;
  }

  // Player stat getters
  getPlayerMaxHealth() {
    return this.config.playerMaxHealth;
  }

  getPlayerDamageMultiplier() {
    return this.config.playerDamageMultiplier;
  }

  getInvulnerabilityDuration() {
    return this.config.invulnerabilityDuration;
  }

  // Enemy stat getters
  getEnemyHealthMultiplier() {
    return this.config.enemyHealthMultiplier;
  }

  getEnemyDamageMultiplier() {
    return this.config.enemyDamageMultiplier;
  }

  getEnemySpawnMultiplier() {
    return this.config.enemySpawnMultiplier;
  }

  getBossHealthMultiplier() {
    return this.config.bossHealthMultiplier;
  }

  // Progression getters
  getXPGainMultiplier() {
    return this.config.xpGainMultiplier;
  }

  /**
   * Reset to default difficulty
   */
  reset() {
    this.setDifficulty(DifficultyLevel.NORMAL);
  }
}

// Export singleton instance
export const difficultyManager = new DifficultyManagerClass();
