import { EnemyTypes } from '../entities/Enemy.js';
import { MathUtils } from '../utils/MathUtils.js';
import { difficultyManager } from './DifficultyManager.js';

const StageConfigs = [
  {
    name: 'Void Station',
    rooms: 10,
    enemyTypes: [EnemyTypes.CHASER, EnemyTypes.SHOOTER],
    bossType: EnemyTypes.BOSS,
    difficultyMultiplier: 1.0,
    floorColor: 0x12121e,  // Deep space dark (abeles.dev style)
    wallColor: 0x1a1a2c
  },
  {
    name: 'Neural Network',
    rooms: 12,
    enemyTypes: [EnemyTypes.CHASER, EnemyTypes.SHOOTER, EnemyTypes.BOMBER],
    bossType: EnemyTypes.BOSS,
    difficultyMultiplier: 1.3,
    floorColor: 0x14141f,  // Slightly different dark
    wallColor: 0x1c1c2a
  },
  {
    name: 'Core Systems',
    rooms: 15,
    enemyTypes: [EnemyTypes.CHASER, EnemyTypes.SHOOTER, EnemyTypes.BOMBER, EnemyTypes.SPAWNER, EnemyTypes.TANK],
    bossType: EnemyTypes.BOSS,
    difficultyMultiplier: 1.6,
    floorColor: 0x161622,  // Deep purple-dark
    wallColor: 0x1e1e30
  }
];

export class WaveSystem {
  constructor() {
    this.currentStage = 0;
    this.currentRoom = 0;
    this.currentWave = 0;
    this.wavesInRoom = 0;

    this.enemiesRemaining = 0;
    this.waveInProgress = false;
    this.roomCleared = false;
    this.stageCleared = false;

    this.spawnQueue = [];
    this.spawnTimer = 0;
    this.spawnDelay = 0.3;

    this.arenaSize = 20;
  }

  getStageConfig() {
    return StageConfigs[this.currentStage] || StageConfigs[StageConfigs.length - 1];
  }

  getDifficultyMultiplier() {
    const stageConfig = this.getStageConfig();
    const roomBonus = 1 + (this.currentRoom * 0.05);
    // Apply difficulty manager's enemy multipliers
    const enemyHealthMult = difficultyManager.getEnemyHealthMultiplier();
    const enemyDamageMult = difficultyManager.getEnemyDamageMultiplier();
    // Use average of health and damage multipliers for general difficulty scaling
    const difficultyMult = (enemyHealthMult + enemyDamageMult) / 2;
    return stageConfig.difficultyMultiplier * roomBonus * difficultyMult;
  }

  /**
   * Get enemy count adjusted for difficulty
   */
  getAdjustedEnemyCount(baseCount) {
    const spawnMult = difficultyManager.getEnemySpawnMultiplier();
    return Math.round(baseCount * spawnMult);
  }

  /**
   * Get boss health multiplier adjusted for difficulty
   */
  getBossDifficultyMultiplier() {
    const stageConfig = this.getStageConfig();
    const roomBonus = 1 + (this.currentRoom * 0.05);
    const baseMult = stageConfig.difficultyMultiplier * roomBonus;
    // Apply difficulty manager's boss multiplier
    return baseMult * difficultyManager.getBossHealthMultiplier();
  }

  startRoom() {
    this.currentWave = 0;
    this.wavesInRoom = this.calculateWavesForRoom();
    this.waveInProgress = false;
    this.roomCleared = false;

    return this.generateRoom();
  }

  calculateWavesForRoom() {
    const stageConfig = this.getStageConfig();
    const isBossRoom = (this.currentRoom + 1) % 5 === 0;

    if (isBossRoom) {
      return 1;
    }

    return MathUtils.randomInt(2, 4);
  }

  generateRoom() {
    const stageConfig = this.getStageConfig();
    const obstacles = this.generateObstacles();

    return {
      stage: this.currentStage + 1,
      room: this.currentRoom + 1,
      totalRooms: stageConfig.rooms,
      stageName: stageConfig.name,
      floorColor: stageConfig.floorColor,
      wallColor: stageConfig.wallColor,
      obstacles,
      isBossRoom: (this.currentRoom + 1) % 5 === 0
    };
  }

  generateObstacles() {
    const obstacles = [];
    const numObstacles = MathUtils.randomInt(3, 8);
    const halfSize = this.arenaSize / 2 - 2;

    for (let i = 0; i < numObstacles; i++) {
      let x, z;
      let valid = false;
      let attempts = 0;

      while (!valid && attempts < 20) {
        x = MathUtils.randomRange(-halfSize, halfSize);
        z = MathUtils.randomRange(-halfSize, halfSize);

        const distFromCenter = Math.sqrt(x * x + z * z);
        if (distFromCenter > 3) {
          valid = true;

          for (const obs of obstacles) {
            const dist = Math.sqrt((x - obs.x) ** 2 + (z - obs.z) ** 2);
            if (dist < 3) {
              valid = false;
              break;
            }
          }
        }
        attempts++;
      }

      if (valid) {
        obstacles.push({
          x,
          z,
          type: Math.random() > 0.7 ? 'pillar' : 'rock',
          radius: MathUtils.randomRange(0.5, 1.2)
        });
      }
    }

    return obstacles;
  }

  startWave() {
    if (this.currentWave >= this.wavesInRoom) {
      this.roomCleared = true;
      return null;
    }

    const stageConfig = this.getStageConfig();
    const isBossRoom = (this.currentRoom + 1) % 5 === 0;

    let enemies;
    if (isBossRoom) {
      enemies = this.generateBossWave(stageConfig);
    } else {
      enemies = this.generateNormalWave(stageConfig);
    }

    this.spawnQueue = enemies;
    this.enemiesRemaining = enemies.length;
    this.waveInProgress = true;
    this.currentWave++;

    return {
      waveNumber: this.currentWave,
      totalWaves: this.wavesInRoom,
      isBossWave: isBossRoom,
      enemyCount: enemies.length
    };
  }

  generateNormalWave(stageConfig) {
    const enemies = [];
    const baseCount = 3 + this.currentRoom + this.currentWave * 2;
    const adjustedCount = this.getAdjustedEnemyCount(baseCount);
    const enemyCount = Math.min(adjustedCount, 20); // Increased cap for higher difficulty

    const halfSize = this.arenaSize / 2 - 1;
    const spawnEdges = ['top', 'bottom', 'left', 'right'];

    for (let i = 0; i < enemyCount; i++) {
      const type = MathUtils.randomChoice(stageConfig.enemyTypes);
      const edge = MathUtils.randomChoice(spawnEdges);

      let x, z;
      switch (edge) {
        case 'top':
          x = MathUtils.randomRange(-halfSize, halfSize);
          z = -halfSize;
          break;
        case 'bottom':
          x = MathUtils.randomRange(-halfSize, halfSize);
          z = halfSize;
          break;
        case 'left':
          x = -halfSize;
          z = MathUtils.randomRange(-halfSize, halfSize);
          break;
        case 'right':
          x = halfSize;
          z = MathUtils.randomRange(-halfSize, halfSize);
          break;
      }

      enemies.push({
        type,
        position: { x, z },
        difficultyMultiplier: this.getDifficultyMultiplier()
      });
    }

    return enemies;
  }

  generateBossWave(stageConfig) {
    const enemies = [];
    const halfSize = this.arenaSize / 2 - 2;

    enemies.push({
      type: stageConfig.bossType,
      position: { x: 0, z: -halfSize + 2 },
      difficultyMultiplier: this.getBossDifficultyMultiplier() * 1.5
    });

    const baseMinionCount = 2 + this.currentStage;
    const minionCount = this.getAdjustedEnemyCount(baseMinionCount);
    for (let i = 0; i < minionCount; i++) {
      const angle = (i / minionCount) * Math.PI * 2;
      enemies.push({
        type: EnemyTypes.CHASER,
        position: {
          x: Math.cos(angle) * 5,
          z: Math.sin(angle) * 5 - halfSize + 4
        },
        difficultyMultiplier: this.getDifficultyMultiplier()
      });
    }

    return enemies;
  }

  getNextSpawn(delta) {
    if (this.spawnQueue.length === 0) return null;

    this.spawnTimer += delta;
    if (this.spawnTimer >= this.spawnDelay) {
      this.spawnTimer = 0;
      return this.spawnQueue.shift();
    }

    return null;
  }

  onEnemyKilled() {
    this.enemiesRemaining--;

    if (this.enemiesRemaining <= 0 && this.spawnQueue.length === 0) {
      this.waveInProgress = false;

      if (this.currentWave >= this.wavesInRoom) {
        this.roomCleared = true;
      }
    }
  }

  advanceRoom() {
    this.currentRoom++;
    const stageConfig = this.getStageConfig();

    if (this.currentRoom >= stageConfig.rooms) {
      return this.advanceStage();
    }

    this.roomCleared = false;
    return { type: 'room', room: this.currentRoom + 1 };
  }

  advanceStage() {
    this.currentStage++;
    this.currentRoom = 0;

    if (this.currentStage >= StageConfigs.length) {
      this.stageCleared = true;
      return { type: 'victory' };
    }

    return { type: 'stage', stage: this.currentStage + 1 };
  }

  isRoomCleared() {
    return this.roomCleared;
  }

  isWaveInProgress() {
    return this.waveInProgress;
  }

  isStageCleared() {
    return this.stageCleared;
  }

  isGameComplete() {
    return this.stageCleared;
  }

  getProgress() {
    const stageConfig = this.getStageConfig();
    return {
      stage: this.currentStage + 1,
      totalStages: StageConfigs.length,
      room: this.currentRoom + 1,
      totalRooms: stageConfig.rooms,
      wave: this.currentWave,
      totalWaves: this.wavesInRoom,
      stageName: stageConfig.name
    };
  }

  reset() {
    this.currentStage = 0;
    this.currentRoom = 0;
    this.currentWave = 0;
    this.wavesInRoom = 0;
    this.enemiesRemaining = 0;
    this.waveInProgress = false;
    this.roomCleared = false;
    this.stageCleared = false;
    this.spawnQueue = [];
    this.spawnTimer = 0;
  }
}
