import * as THREE from 'three';
import { ObjectPool } from '../utils/ObjectPool.js';
import { MathUtils } from '../utils/MathUtils.js';

export class Particle {
  constructor() {
    this.mesh = null;
    this.velocity = new THREE.Vector3();
    this.lifetime = 0;
    this.maxLifetime = 1;
    this.isActive = false;
    this.startScale = 1;
    this.endScale = 0;
    this.startOpacity = 1;
    this.endOpacity = 0;
    this.gravity = 0;
    this.friction = 0;

    this.createMesh();
  }

  createMesh() {
    const geometry = new THREE.SphereGeometry(0.1, 8, 8);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.visible = false;
  }

  emit(config) {
    this.mesh.position.copy(config.position);

    const speed = config.speed || MathUtils.randomRange(2, 5);
    const angle = config.angle !== undefined ? config.angle : Math.random() * Math.PI * 2;
    const elevation = config.elevation !== undefined ? config.elevation : MathUtils.randomRange(-0.5, 1);

    this.velocity.set(
      Math.cos(angle) * speed,
      elevation * speed,
      Math.sin(angle) * speed
    );

    this.lifetime = 0;
    this.maxLifetime = config.lifetime || MathUtils.randomRange(0.5, 1);
    this.isActive = true;
    this.mesh.visible = true;

    this.startScale = config.startScale || 1;
    this.endScale = config.endScale || 0;
    this.startOpacity = config.startOpacity || 1;
    this.endOpacity = config.endOpacity || 0;
    this.gravity = config.gravity || 10;
    this.friction = config.friction || 0;

    this.mesh.material.color.setHex(config.color || 0xffffff);
    this.mesh.scale.setScalar(this.startScale);
  }

  update(delta) {
    if (!this.isActive) return;

    this.lifetime += delta;
    if (this.lifetime >= this.maxLifetime) {
      this.deactivate();
      return;
    }

    this.velocity.y -= this.gravity * delta;

    if (this.friction > 0) {
      this.velocity.multiplyScalar(1 - this.friction * delta);
    }

    this.mesh.position.add(this.velocity.clone().multiplyScalar(delta));

    const t = this.lifetime / this.maxLifetime;
    const scale = MathUtils.lerp(this.startScale, this.endScale, t);
    this.mesh.scale.setScalar(Math.max(0.01, scale));

    const opacity = MathUtils.lerp(this.startOpacity, this.endOpacity, t);
    this.mesh.material.opacity = opacity;
  }

  deactivate() {
    this.isActive = false;
    this.mesh.visible = false;
  }

  reset() {
    this.isActive = false;
    this.mesh.visible = false;
    this.velocity.set(0, 0, 0);
    this.lifetime = 0;
  }
}

export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;

    this.pool = new ObjectPool(
      () => {
        const particle = new Particle();
        this.scene.add(particle.mesh);
        return particle;
      },
      (particle) => {
        particle.reset();
      },
      200
    );
  }

  emit(config) {
    const particle = this.pool.get();
    particle.emit(config);
    return particle;
  }

  emitBurst(position, count, config = {}) {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
      this.emit({
        position: position.clone(),
        angle,
        ...config
      });
    }
  }

  emitHit(position, color = 0xffffff) {
    this.emitBurst(position, 8, {
      color,
      speed: MathUtils.randomRange(3, 6),
      lifetime: 0.3,
      startScale: 0.15,
      endScale: 0,
      gravity: 5
    });
  }

  emitDeath(position, color = 0xe74c3c) {
    this.emitBurst(position, 15, {
      color,
      speed: MathUtils.randomRange(2, 5),
      lifetime: 0.5,
      startScale: 0.2,
      endScale: 0,
      gravity: 8
    });
  }

  emitXPPickup(position) {
    this.emitBurst(position, 6, {
      color: 0x2ecc71,
      speed: MathUtils.randomRange(1, 3),
      lifetime: 0.4,
      startScale: 0.1,
      endScale: 0.2,
      startOpacity: 1,
      endOpacity: 0,
      gravity: -5,
      elevation: 1
    });
  }

  emitLevelUp(position) {
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const delay = i * 0.02;

      setTimeout(() => {
        this.emit({
          position: position.clone(),
          angle,
          color: 0xf1c40f,
          speed: 5,
          lifetime: 1,
          startScale: 0.2,
          endScale: 0,
          gravity: -2,
          elevation: 0.5
        });
      }, delay * 1000);
    }
  }

  emitExplosion(position, radius = 2) {
    const count = Math.floor(radius * 15);
    this.emitBurst(position, count, {
      color: 0xf39c12,
      speed: MathUtils.randomRange(5, 10),
      lifetime: 0.6,
      startScale: 0.3,
      endScale: 0,
      gravity: 3
    });

    this.emitBurst(position, count / 2, {
      color: 0xe74c3c,
      speed: MathUtils.randomRange(3, 7),
      lifetime: 0.8,
      startScale: 0.4,
      endScale: 0,
      gravity: 2
    });
  }

  emitTrail(position, color = 0xf1c40f) {
    this.emit({
      position: position.clone(),
      color,
      speed: 0.5,
      lifetime: 0.2,
      startScale: 0.1,
      endScale: 0,
      gravity: 0,
      angle: Math.random() * Math.PI * 2
    });
  }

  update(delta) {
    const toRelease = [];

    for (const particle of this.pool.active) {
      particle.update(delta);

      if (!particle.isActive) {
        toRelease.push(particle);
      }
    }

    for (const particle of toRelease) {
      this.pool.release(particle);
    }
  }

  clear() {
    this.pool.releaseAll();
  }

  dispose() {
    for (const particle of this.pool.active) {
      this.scene.remove(particle.mesh);
      particle.mesh.geometry.dispose();
      particle.mesh.material.dispose();
    }
    for (const particle of this.pool.pool) {
      this.scene.remove(particle.mesh);
      particle.mesh.geometry.dispose();
      particle.mesh.material.dispose();
    }
  }
}
