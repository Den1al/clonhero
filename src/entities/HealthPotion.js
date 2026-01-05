import * as THREE from 'three';
import { ObjectPool } from '../utils/ObjectPool.js';
import { MathUtils } from '../utils/MathUtils.js';

export class HealthPotion {
  constructor() {
    this.mesh = null;
    this.healAmount = 0;
    this.isActive = false;
    this.velocity = new THREE.Vector3();
    this.lifetime = 0;
    this.maxLifetime = 20;
    this.bobOffset = Math.random() * Math.PI * 2;

    this.createMesh();
  }

  createMesh() {
    const group = new THREE.Group();

    // Heart-shaped health potion using multiple spheres
    const mainGeometry = new THREE.SphereGeometry(0.18, 12, 12);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff4444,
      emissive: 0xff2222,
      emissiveIntensity: 0.6,
      metalness: 0.3,
      roughness: 0.4,
      transparent: true,
      opacity: 0.95
    });

    const main = new THREE.Mesh(mainGeometry, material);
    main.castShadow = false;
    group.add(main);

    // Cross shape on the potion (medical cross)
    const crossMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });

    const crossH = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.05, 0.02),
      crossMaterial
    );
    crossH.position.z = 0.17;
    group.add(crossH);

    const crossV = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.15, 0.02),
      crossMaterial
    );
    crossV.position.z = 0.17;
    group.add(crossV);

    // Glow effect
    const glowGeometry = new THREE.SphereGeometry(0.28, 8, 8);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6666,
      transparent: true,
      opacity: 0.25
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    this.mesh = group;
    this.mesh.visible = false;
    this.main = main;
    this.glow = glow;
  }

  spawn(position, healAmount) {
    this.mesh.position.set(
      position.x + MathUtils.randomRange(-0.5, 0.5),
      0.5,
      position.z + MathUtils.randomRange(-0.5, 0.5)
    );

    this.healAmount = healAmount;
    this.isActive = true;
    this.lifetime = 0;
    this.mesh.visible = true;
    this.bobOffset = Math.random() * Math.PI * 2;

    // Initial spread velocity
    const spreadAngle = Math.random() * Math.PI * 2;
    const spreadSpeed = MathUtils.randomRange(1.5, 3);
    this.velocity.set(
      Math.cos(spreadAngle) * spreadSpeed,
      4,
      Math.sin(spreadAngle) * spreadSpeed
    );

    // Scale based on heal amount
    const scale = 0.8 + (healAmount / 30) * 0.4;
    this.mesh.scale.setScalar(scale);

    // Color intensity based on heal amount
    if (healAmount >= 25) {
      // Large heal - bright pink/magenta
      this.main.material.color.setHex(0xff1493);
      this.main.material.emissive.setHex(0xff1493);
      this.main.material.emissiveIntensity = 0.8;
      this.glow.material.color.setHex(0xff69b4);
    } else if (healAmount >= 15) {
      // Medium heal - red
      this.main.material.color.setHex(0xff4444);
      this.main.material.emissive.setHex(0xff2222);
      this.main.material.emissiveIntensity = 0.6;
      this.glow.material.color.setHex(0xff6666);
    } else {
      // Small heal - pink
      this.main.material.color.setHex(0xff7777);
      this.main.material.emissive.setHex(0xff5555);
      this.main.material.emissiveIntensity = 0.5;
      this.glow.material.color.setHex(0xffaaaa);
    }
  }

  update(delta, playerPosition, pickupRange = 1.0) {
    if (!this.isActive) return false;

    this.lifetime += delta;
    if (this.lifetime > this.maxLifetime) {
      this.deactivate();
      return false;
    }

    // Blink when about to despawn
    if (this.lifetime > this.maxLifetime - 4) {
      this.mesh.visible = Math.sin(this.lifetime * 8) > 0;
    }

    // Apply gravity and movement
    this.velocity.y -= 15 * delta;
    this.mesh.position.add(this.velocity.clone().multiplyScalar(delta));

    // Ground collision
    if (this.mesh.position.y < 0.4) {
      this.mesh.position.y = 0.4;
      this.velocity.y = 0;
      this.velocity.x *= 0.85;
      this.velocity.z *= 0.85;
    }

    // Bobbing animation when settled
    if (Math.abs(this.velocity.y) < 0.1) {
      this.mesh.position.y = 0.4 + Math.sin(this.lifetime * 3 + this.bobOffset) * 0.08;
    }

    // Rotation
    this.mesh.rotation.y += delta * 2;

    // Check for player pickup
    const toPlayer = new THREE.Vector3(
      playerPosition.x - this.mesh.position.x,
      0,
      playerPosition.z - this.mesh.position.z
    );
    const distance = toPlayer.length();

    if (distance < pickupRange) {
      this.deactivate();
      return true; // Collected
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
    this.lifetime = 0;
    this.velocity.set(0, 0, 0);
  }
}

export class HealthPotionSystem {
  constructor(scene) {
    this.scene = scene;
    this.killCounter = 0;
    this.nextDropThreshold = this.getRandomThreshold();

    this.pool = new ObjectPool(
      () => {
        const potion = new HealthPotion();
        this.scene.add(potion.mesh);
        return potion;
      },
      (potion) => {
        potion.reset();
      },
      20
    );
  }

  getRandomThreshold() {
    // Random number between 10-15 kills
    return Math.floor(Math.random() * 6) + 10;
  }

  onEnemyKilled(enemyPosition) {
    this.killCounter++;

    if (this.killCounter >= this.nextDropThreshold) {
      this.spawn(enemyPosition);
      this.killCounter = 0;
      this.nextDropThreshold = this.getRandomThreshold();
      return true;
    }
    return false;
  }

  spawn(position, healAmount = null) {
    const potion = this.pool.get();
    // Random heal amount between 10-25 if not specified
    const amount = healAmount || Math.floor(Math.random() * 16) + 10;
    potion.spawn(position, amount);
    return potion;
  }

  update(delta, playerPosition) {
    const toRelease = [];
    let collectedPotion = null;

    for (const potion of this.pool.active) {
      const collected = potion.update(delta, playerPosition);

      if (collected) {
        collectedPotion = potion;
        toRelease.push(potion);
      } else if (!potion.isActive) {
        toRelease.push(potion);
      }
    }

    for (const potion of toRelease) {
      this.pool.release(potion);
    }

    return collectedPotion ? collectedPotion.healAmount : 0;
  }

  clear() {
    this.pool.releaseAll();
    this.killCounter = 0;
    this.nextDropThreshold = this.getRandomThreshold();
  }

  dispose() {
    for (const potion of this.pool.active) {
      this.scene.remove(potion.mesh);
      potion.mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
    for (const potion of this.pool.pool) {
      this.scene.remove(potion.mesh);
      potion.mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      });
    }
  }
}
