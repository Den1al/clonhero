import * as THREE from 'three';

/**
 * RoomGate - A portal/gate that appears when a room is cleared
 * Players walk through the gate's aura to proceed to the next room
 * Inspired by the original Vampire Survivors gate transitions
 */
export class RoomGate {
  constructor(scene) {
    this.scene = scene;
    this.mesh = null;
    this.isActive = false;
    this.position = new THREE.Vector3(0, 0, -8); // Spawn at top of arena

    // Visual components
    this.portalRing = null;
    this.innerGlow = null;
    this.outerAura = null;
    this.particles = [];
    this.lightBeam = null;

    // Animation state
    this.time = 0;
    this.spawnProgress = 0;
    this.isSpawning = false;
    this.pulseTime = 0;

    // Player interaction
    this.playerInside = false;
    this.enterProgress = 0;
    this.collisionRadius = 1.8;

    this.createGate();
  }

  createGate() {
    // Main container group
    this.mesh = new THREE.Group();
    this.mesh.visible = false;

    // Portal ring - outer frame (torus)
    const ringGeometry = new THREE.TorusGeometry(1.5, 0.15, 16, 48);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x6fdac9,
      emissive: 0x6fdac9,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8
    });
    this.portalRing = new THREE.Mesh(ringGeometry, ringMaterial);
    this.portalRing.rotation.x = Math.PI / 2;
    this.portalRing.position.y = 1.5;
    this.mesh.add(this.portalRing);

    // Second ring - inner decoration
    const innerRingGeometry = new THREE.TorusGeometry(1.2, 0.08, 12, 36);
    const innerRingMaterial = new THREE.MeshStandardMaterial({
      color: 0xa989f5,
      emissive: 0xa989f5,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.7
    });
    this.innerRing = new THREE.Mesh(innerRingGeometry, innerRingMaterial);
    this.innerRing.rotation.x = Math.PI / 2;
    this.innerRing.position.y = 1.5;
    this.mesh.add(this.innerRing);

    // Inner glow portal surface
    const glowGeometry = new THREE.CircleGeometry(1.1, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x6fdac9,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    this.innerGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    this.innerGlow.rotation.x = Math.PI / 2;
    this.innerGlow.position.y = 1.5;
    this.mesh.add(this.innerGlow);

    // Outer aura ring on ground
    const auraGeometry = new THREE.RingGeometry(1.8, 2.5, 32);
    const auraMaterial = new THREE.MeshBasicMaterial({
      color: 0x6fdac9,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    });
    this.outerAura = new THREE.Mesh(auraGeometry, auraMaterial);
    this.outerAura.rotation.x = -Math.PI / 2;
    this.outerAura.position.y = 0.05;
    this.mesh.add(this.outerAura);

    // Light beam shooting upward
    const beamGeometry = new THREE.CylinderGeometry(0.5, 1.0, 5, 16, 1, true);
    const beamMaterial = new THREE.MeshBasicMaterial({
      color: 0x6fdac9,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide
    });
    this.lightBeam = new THREE.Mesh(beamGeometry, beamMaterial);
    this.lightBeam.position.y = 4;
    this.mesh.add(this.lightBeam);

    // Floating particle orbs around the gate
    this.createFloatingParticles();

    // Base pillars on each side
    this.createBasePillars();

    this.mesh.position.copy(this.position);
    this.scene.add(this.mesh);
  }

  createFloatingParticles() {
    const particleCount = 12;
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0xa989f5,
      transparent: true,
      opacity: 0.8
    });

    for (let i = 0; i < particleCount; i++) {
      const size = 0.05 + Math.random() * 0.08;
      const particleGeometry = new THREE.SphereGeometry(size, 8, 8);
      const particle = new THREE.Mesh(particleGeometry, particleMaterial.clone());

      // Random starting positions around the portal
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 1.3 + Math.random() * 0.4;
      particle.userData = {
        angle,
        radius,
        speed: 0.5 + Math.random() * 0.5,
        yOffset: Math.random() * Math.PI * 2,
        baseY: 0.5 + Math.random() * 2
      };

      this.particles.push(particle);
      this.mesh.add(particle);
    }
  }

  createBasePillars() {
    const pillarMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a2c,
      roughness: 0.6,
      metalness: 0.4
    });

    const pillarCapMaterial = new THREE.MeshStandardMaterial({
      color: 0x6fdac9,
      emissive: 0x6fdac9,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.6
    });

    // Left and right pillars
    const positions = [{ x: -1.8, z: 0 }, { x: 1.8, z: 0 }];

    for (const pos of positions) {
      // Main pillar body
      const pillarGeometry = new THREE.CylinderGeometry(0.2, 0.25, 3, 8);
      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      pillar.position.set(pos.x, 1.5, pos.z);
      pillar.castShadow = true;
      this.mesh.add(pillar);

      // Glowing cap on top
      const capGeometry = new THREE.SphereGeometry(0.15, 12, 12);
      const cap = new THREE.Mesh(capGeometry, pillarCapMaterial);
      cap.position.set(pos.x, 3.1, pos.z);
      this.mesh.add(cap);

      // Glowing ring accent
      const ringGeometry = new THREE.TorusGeometry(0.25, 0.03, 8, 16);
      const ring = new THREE.Mesh(ringGeometry, pillarCapMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(pos.x, 2, pos.z);
      this.mesh.add(ring);
    }
  }

  spawn(position) {
    if (position) {
      this.position.copy(position);
      this.mesh.position.copy(position);
    }

    this.isActive = true;
    this.isSpawning = true;
    this.spawnProgress = 0;
    this.mesh.visible = true;
    this.mesh.scale.setScalar(0.01);

    // Reset animation states
    this.playerInside = false;
    this.enterProgress = 0;
  }

  despawn() {
    this.isActive = false;
    this.mesh.visible = false;
    this.playerInside = false;
    this.enterProgress = 0;
  }

  /**
   * Check if the player has entered the gate
   * Returns true when player is fully inside and transition should trigger
   */
  checkPlayerCollision(playerPosition) {
    if (!this.isActive || this.isSpawning) return false;

    const dx = playerPosition.x - this.position.x;
    const dz = playerPosition.z - this.position.z;
    const distance = Math.sqrt(dx * dx + dz * dz);

    const wasInside = this.playerInside;
    this.playerInside = distance < this.collisionRadius;

    // Player just entered the gate
    if (this.playerInside && !wasInside) {
      return 'entered';
    }

    // Player is inside and progressing through
    if (this.playerInside) {
      return 'inside';
    }

    return false;
  }

  /**
   * Update gate visuals and return transition progress
   */
  update(delta, playerPosition) {
    if (!this.isActive) return { shouldTransition: false };

    this.time += delta;
    this.pulseTime += delta;

    // Spawn animation
    if (this.isSpawning) {
      this.spawnProgress += delta * 2; // 0.5 second spawn
      const t = Math.min(this.spawnProgress, 1);
      const easeOut = 1 - Math.pow(1 - t, 3);
      this.mesh.scale.setScalar(easeOut);

      if (this.spawnProgress >= 1) {
        this.isSpawning = false;
      }
    }

    // Rotate portal ring slowly
    this.portalRing.rotation.z += delta * 0.5;
    this.innerRing.rotation.z -= delta * 0.7;

    // Pulse inner glow
    const pulse = 0.4 + Math.sin(this.pulseTime * 3) * 0.15;
    this.innerGlow.material.opacity = pulse;

    // Pulse outer aura
    const auraPulse = 0.2 + Math.sin(this.pulseTime * 2) * 0.1;
    this.outerAura.material.opacity = auraPulse;
    this.outerAura.scale.setScalar(1 + Math.sin(this.pulseTime * 1.5) * 0.1);

    // Animate light beam
    this.lightBeam.material.opacity = 0.1 + Math.sin(this.pulseTime * 4) * 0.05;
    this.lightBeam.rotation.y += delta * 0.3;

    // Animate floating particles
    for (const particle of this.particles) {
      const data = particle.userData;
      data.angle += delta * data.speed;

      particle.position.x = Math.cos(data.angle) * data.radius;
      particle.position.z = Math.sin(data.angle) * data.radius * 0.3;
      particle.position.y = data.baseY + Math.sin(this.time * 2 + data.yOffset) * 0.3;

      // Fade particles based on height
      particle.material.opacity = 0.5 + Math.sin(this.time * 3 + data.yOffset) * 0.3;
    }

    // Check player interaction
    const collisionResult = this.checkPlayerCollision(playerPosition);

    if (collisionResult === 'entered') {
      this.enterProgress = 0;
    }

    if (collisionResult === 'inside' || this.playerInside) {
      this.enterProgress += delta * 1.5; // Fill in ~0.67 seconds

      // Visual feedback - intensify glow when player is inside
      const intensity = 0.6 + this.enterProgress * 0.4;
      this.portalRing.material.emissiveIntensity = intensity;
      this.innerRing.material.emissiveIntensity = intensity * 0.8;
      this.innerGlow.material.opacity = Math.min(0.9, pulse + this.enterProgress * 0.3);

      // Scale up slightly when player is inside
      const enterScale = 1 + this.enterProgress * 0.15;
      this.portalRing.scale.setScalar(enterScale);
      this.innerGlow.scale.setScalar(enterScale);

      if (this.enterProgress >= 1) {
        return { shouldTransition: true, progress: this.enterProgress };
      }
    } else {
      // Reset visuals when player leaves
      this.portalRing.material.emissiveIntensity = 0.6;
      this.innerRing.material.emissiveIntensity = 0.5;
      this.portalRing.scale.setScalar(1);
      this.innerGlow.scale.setScalar(1);
      this.enterProgress = Math.max(0, this.enterProgress - delta * 2);
    }

    return { shouldTransition: false, progress: this.enterProgress, playerInside: this.playerInside };
  }

  /**
   * Get the current gate position
   */
  getPosition() {
    return this.position.clone();
  }

  /**
   * Set gate position
   */
  setPosition(x, z) {
    this.position.set(x, 0, z);
    this.mesh.position.copy(this.position);
  }

  dispose() {
    if (this.mesh) {
      this.scene.remove(this.mesh);

      // Dispose all geometries and materials recursively
      this.mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }

    this.particles = [];
  }
}
