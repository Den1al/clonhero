import * as THREE from 'three';

export const StatusEffectTypes = {
  BURN: 'burn',
  FREEZE: 'freeze',
  POISON: 'poison'
};

export const StatusEffectConfigs = {
  [StatusEffectTypes.BURN]: {
    name: 'Burn',
    color: 0xff4500,        // Orange-red fire color
    particleColor: 0xff6600,
    duration: 4,            // Base duration in seconds
    tickRate: 0.5,          // Damage every 0.5 seconds
    baseDamage: 5,          // Base damage per tick
    stackMultiplier: 1.2,   // Each stack increases damage by 20%
    maxStacks: 5,
    visualIntensity: 0.4
  },
  [StatusEffectTypes.FREEZE]: {
    name: 'Freeze',
    color: 0x00bfff,        // Icy blue color
    particleColor: 0x87ceeb,
    duration: 3,            // Duration in seconds
    slowPercent: 0.5,       // 50% speed reduction per stack
    maxSlowPercent: 0.8,    // Max 80% slow
    maxStacks: 3,
    visualIntensity: 0.5
  },
  [StatusEffectTypes.POISON]: {
    name: 'Poison',
    color: 0x32cd32,        // Lime green poison color
    particleColor: 0x9acd32,
    duration: 6,            // Longer duration
    tickRate: 1,            // Damage every second
    baseDamage: 3,          // Lower damage but longer duration
    stackMultiplier: 1.15,  // Each stack increases damage by 15%
    maxStacks: 5,
    visualIntensity: 0.35
  }
};

export class StatusEffect {
  constructor(type, stacks = 1) {
    this.type = type;
    this.config = StatusEffectConfigs[type];
    this.stacks = Math.min(stacks, this.config.maxStacks);
    this.duration = this.config.duration;
    this.remainingDuration = this.duration;
    this.tickTimer = 0;
  }

  addStack() {
    if (this.stacks < this.config.maxStacks) {
      this.stacks++;
    }
    // Refresh duration when adding stacks
    this.remainingDuration = this.duration;
  }

  update(delta, enemy, particleSystem) {
    this.remainingDuration -= delta;

    // Handle tick-based effects (burn, poison)
    if (this.config.tickRate) {
      this.tickTimer += delta;
      if (this.tickTimer >= this.config.tickRate) {
        this.tickTimer = 0;
        return this.applyTick(enemy, particleSystem);
      }
    }

    return { expired: this.remainingDuration <= 0 };
  }

  applyTick(enemy, particleSystem) {
    const damage = this.calculateTickDamage();

    // Emit particles at enemy position for damage tick
    if (particleSystem && enemy.mesh) {
      this.emitTickParticles(particleSystem, enemy.mesh.position);
    }

    return {
      damage,
      expired: this.remainingDuration <= 0
    };
  }

  calculateTickDamage() {
    const baseDamage = this.config.baseDamage || 0;
    const multiplier = Math.pow(this.config.stackMultiplier || 1, this.stacks - 1);
    return Math.floor(baseDamage * multiplier);
  }

  getSlowMultiplier() {
    if (this.type !== StatusEffectTypes.FREEZE) return 1;

    const slowPerStack = this.config.slowPercent;
    const totalSlow = Math.min(slowPerStack * this.stacks, this.config.maxSlowPercent);
    return 1 - totalSlow;
  }

  emitTickParticles(particleSystem, position) {
    const particleCount = 3 + this.stacks;

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const offsetX = Math.cos(angle) * 0.3;
      const offsetZ = Math.sin(angle) * 0.3;

      particleSystem.emit({
        position: new THREE.Vector3(
          position.x + offsetX,
          position.y + 0.5,
          position.z + offsetZ
        ),
        color: this.config.particleColor,
        speed: this.type === StatusEffectTypes.BURN ? 2 : 1,
        lifetime: 0.4,
        startScale: 0.15,
        endScale: 0,
        gravity: this.type === StatusEffectTypes.BURN ? -3 : 2,
        elevation: this.type === StatusEffectTypes.BURN ? 1 : 0.3
      });
    }
  }

  isExpired() {
    return this.remainingDuration <= 0;
  }
}

export class StatusEffectManager {
  constructor() {
    this.effects = new Map(); // Map<StatusEffectType, StatusEffect>
  }

  applyEffect(type, stacks = 1) {
    if (this.effects.has(type)) {
      // Add stacks to existing effect
      const existing = this.effects.get(type);
      for (let i = 0; i < stacks; i++) {
        existing.addStack();
      }
    } else {
      // Create new effect
      this.effects.set(type, new StatusEffect(type, stacks));
    }
  }

  update(delta, enemy, particleSystem) {
    let totalDamage = 0;
    const expiredEffects = [];

    for (const [type, effect] of this.effects) {
      const result = effect.update(delta, enemy, particleSystem);

      if (result.damage) {
        totalDamage += result.damage;
      }

      if (result.expired) {
        expiredEffects.push(type);
      }
    }

    // Remove expired effects
    for (const type of expiredEffects) {
      this.effects.delete(type);
    }

    return { totalDamage };
  }

  getSpeedMultiplier() {
    const freezeEffect = this.effects.get(StatusEffectTypes.FREEZE);
    return freezeEffect ? freezeEffect.getSlowMultiplier() : 1;
  }

  hasEffect(type) {
    return this.effects.has(type);
  }

  getEffect(type) {
    return this.effects.get(type);
  }

  getActiveEffects() {
    return Array.from(this.effects.values());
  }

  clear() {
    this.effects.clear();
  }

  getVisualTint() {
    // Blend colors based on active effects
    if (this.effects.size === 0) return null;

    let r = 0, g = 0, b = 0;
    let totalIntensity = 0;

    for (const effect of this.effects.values()) {
      const color = new THREE.Color(effect.config.color);
      const intensity = effect.config.visualIntensity * (effect.stacks / effect.config.maxStacks);

      r += color.r * intensity;
      g += color.g * intensity;
      b += color.b * intensity;
      totalIntensity += intensity;
    }

    if (totalIntensity === 0) return null;

    return new THREE.Color(r / totalIntensity, g / totalIntensity, b / totalIntensity);
  }
}
