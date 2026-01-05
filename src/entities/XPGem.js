import * as THREE from 'three';
import { ObjectPool } from '../utils/ObjectPool.js';
import { MathUtils } from '../utils/MathUtils.js';

export class XPGem {
  constructor() {
    this.mesh = null;
    this.value = 0;
    this.isActive = false;
    this.velocity = new THREE.Vector3();
    this.magnetized = false;
    this.lifetime = 0;
    this.maxLifetime = 30;

    this.createMesh();
  }

  createMesh() {
    const group = new THREE.Group();

    const geometry = new THREE.OctahedronGeometry(0.15, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x2ecc71,
      emissive: 0x27ae60,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9
    });

    const gem = new THREE.Mesh(geometry, material);
    gem.castShadow = true;
    group.add(gem);

    const glowGeometry = new THREE.SphereGeometry(0.25, 8, 8);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x2ecc71,
      transparent: true,
      opacity: 0.2
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    this.mesh = group;
    this.mesh.visible = false;
    this.gem = gem;
    this.glow = glow;
  }

  spawn(position, value) {
    this.mesh.position.set(
      position.x + MathUtils.randomRange(-0.5, 0.5),
      0.3,
      position.z + MathUtils.randomRange(-0.5, 0.5)
    );

    this.value = value;
    this.isActive = true;
    this.magnetized = false;
    this.lifetime = 0;
    this.mesh.visible = true;

    const spreadAngle = Math.random() * Math.PI * 2;
    const spreadSpeed = MathUtils.randomRange(2, 4);
    this.velocity.set(
      Math.cos(spreadAngle) * spreadSpeed,
      5,
      Math.sin(spreadAngle) * spreadSpeed
    );

    const scale = 0.8 + (value / 50) * 0.4;
    this.mesh.scale.setScalar(scale);

    if (value >= 50) {
      this.gem.material.color.setHex(0xf1c40f);
      this.gem.material.emissive.setHex(0xf39c12);
      this.glow.material.color.setHex(0xf1c40f);
    } else if (value >= 20) {
      this.gem.material.color.setHex(0x3498db);
      this.gem.material.emissive.setHex(0x2980b9);
      this.glow.material.color.setHex(0x3498db);
    } else {
      this.gem.material.color.setHex(0x2ecc71);
      this.gem.material.emissive.setHex(0x27ae60);
      this.glow.material.color.setHex(0x2ecc71);
    }
  }

  update(delta, playerPosition, magnetRange) {
    if (!this.isActive) return false;

    this.lifetime += delta;
    if (this.lifetime > this.maxLifetime) {
      this.deactivate();
      return false;
    }

    if (this.lifetime > this.maxLifetime - 3) {
      this.mesh.visible = Math.sin(this.lifetime * 10) > 0;
    }

    this.velocity.y -= 20 * delta;
    this.mesh.position.add(this.velocity.clone().multiplyScalar(delta));

    if (this.mesh.position.y < 0.3) {
      this.mesh.position.y = 0.3;
      this.velocity.y = 0;
      this.velocity.x *= 0.8;
      this.velocity.z *= 0.8;
    }

    this.mesh.rotation.y += delta * 3;

    const toPlayer = new THREE.Vector3(
      playerPosition.x - this.mesh.position.x,
      0,
      playerPosition.z - this.mesh.position.z
    );
    const distance = toPlayer.length();

    if (distance < magnetRange) {
      this.magnetized = true;
    }

    if (this.magnetized) {
      const magnetSpeed = 15;
      toPlayer.normalize();
      this.velocity.x = toPlayer.x * magnetSpeed;
      this.velocity.z = toPlayer.z * magnetSpeed;

      if (distance < 0.5) {
        this.deactivate();
        return true;
      }
    }

    return false;
  }

  deactivate() {
    this.isActive = false;
    this.mesh.visible = false;
  }

  reset() {
    this.isActive = false;
    this.mesh.visible = false;
    this.magnetized = false;
    this.lifetime = 0;
    this.velocity.set(0, 0, 0);
  }
}

export class XPGemSystem {
  constructor(scene) {
    this.scene = scene;

    this.pool = new ObjectPool(
      () => {
        const gem = new XPGem();
        this.scene.add(gem.mesh);
        return gem;
      },
      (gem) => {
        gem.reset();
      },
      100
    );
  }

  spawn(position, value) {
    const gem = this.pool.get();
    gem.spawn(position, value);
    return gem;
  }

  spawnMultiple(position, totalValue) {
    const gemValues = this.splitValue(totalValue);
    for (const value of gemValues) {
      this.spawn(position, value);
    }
  }

  splitValue(total) {
    const values = [];
    let remaining = total;

    while (remaining >= 50) {
      values.push(50);
      remaining -= 50;
    }
    while (remaining >= 20) {
      values.push(20);
      remaining -= 20;
    }
    while (remaining >= 10) {
      values.push(10);
      remaining -= 10;
    }
    if (remaining > 0) {
      values.push(remaining);
    }

    return values;
  }

  update(delta, playerPosition, magnetRange) {
    const toRelease = [];
    let collectedXP = 0;

    for (const gem of this.pool.active) {
      const collected = gem.update(delta, playerPosition, magnetRange);

      if (collected) {
        collectedXP += gem.value;
        toRelease.push(gem);
      } else if (!gem.isActive) {
        toRelease.push(gem);
      }
    }

    for (const gem of toRelease) {
      this.pool.release(gem);
    }

    return collectedXP;
  }

  magnetizeAll(playerPosition) {
    for (const gem of this.pool.active) {
      if (gem.isActive) {
        gem.magnetized = true;
      }
    }
  }

  clear() {
    this.pool.releaseAll();
  }

  dispose() {
    for (const gem of this.pool.active) {
      this.scene.remove(gem.mesh);
      gem.mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
    for (const gem of this.pool.pool) {
      this.scene.remove(gem.mesh);
      gem.mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
  }
}
