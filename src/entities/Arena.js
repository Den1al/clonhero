import * as THREE from 'three';

export class Arena {
  constructor(scene, size = 20) {
    this.scene = scene;
    this.size = size;
    this.obstacles = [];
    this.decorations = [];

    this.createFloor();
    this.createWalls();
    this.createAtmosphere();
  }

  createFloor() {
    // Main floor - deep space dark (abeles.dev style)
    const floorGeometry = new THREE.PlaneGeometry(this.size, this.size, 32, 32);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x12121e,
      roughness: 0.9,
      metalness: 0.1,
      envMapIntensity: 0.3
    });

    this.floor = new THREE.Mesh(floorGeometry, floorMaterial);
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);

    // Grid with teal glow (abeles.dev style)
    const gridSize = this.size;
    const divisions = 20;
    const gridGeometry = new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x6fdac9,
      wireframe: true,
      transparent: true,
      opacity: 0.06
    });

    this.grid = new THREE.Mesh(gridGeometry, gridMaterial);
    this.grid.rotation.x = -Math.PI / 2;
    this.grid.position.y = 0.02;
    this.scene.add(this.grid);

    // Subtle inner glow ring - purple (abeles.dev style)
    const glowRingGeometry = new THREE.RingGeometry(this.size * 0.35, this.size * 0.45, 64);
    const glowRingMaterial = new THREE.MeshBasicMaterial({
      color: 0xa989f5,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide
    });
    this.glowRing = new THREE.Mesh(glowRingGeometry, glowRingMaterial);
    this.glowRing.rotation.x = -Math.PI / 2;
    this.glowRing.position.y = 0.03;
    this.scene.add(this.glowRing);
  }

  createWalls() {
    const wallHeight = 2.5;
    const wallThickness = 0.6;
    const halfSize = this.size / 2;

    // Wall material - deep purple-dark (abeles.dev style)
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a2c,
      roughness: 0.7,
      metalness: 0.3,
      envMapIntensity: 0.5
    });

    // Accent trim material - purple glow (abeles.dev style)
    const trimMaterial = new THREE.MeshStandardMaterial({
      color: 0xa989f5,
      roughness: 0.3,
      metalness: 0.6,
      emissive: 0xa989f5,
      emissiveIntensity: 0.15
    });

    const wallConfigs = [
      { x: 0, z: -halfSize - wallThickness / 2, width: this.size + wallThickness * 2, depth: wallThickness },
      { x: 0, z: halfSize + wallThickness / 2, width: this.size + wallThickness * 2, depth: wallThickness },
      { x: -halfSize - wallThickness / 2, z: 0, width: wallThickness, depth: this.size },
      { x: halfSize + wallThickness / 2, z: 0, width: wallThickness, depth: this.size }
    ];

    this.walls = [];
    for (const config of wallConfigs) {
      // Main wall
      const geometry = new THREE.BoxGeometry(config.width, wallHeight, config.depth);
      const wall = new THREE.Mesh(geometry, wallMaterial);
      wall.position.set(config.x, wallHeight / 2, config.z);
      wall.castShadow = true;
      wall.receiveShadow = true;
      this.walls.push(wall);
      this.scene.add(wall);

      // Glowing trim at top of wall
      const trimGeometry = new THREE.BoxGeometry(config.width + 0.1, 0.08, config.depth + 0.1);
      const trim = new THREE.Mesh(trimGeometry, trimMaterial);
      trim.position.set(config.x, wallHeight + 0.04, config.z);
      this.scene.add(trim);
      this.decorations.push(trim);
    }

    // Enhanced corner pillars with glowing accents
    const cornerPositions = [
      { x: -halfSize, z: -halfSize },
      { x: halfSize, z: -halfSize },
      { x: -halfSize, z: halfSize },
      { x: halfSize, z: halfSize }
    ];

    const pillarMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a28,
      roughness: 0.6,
      metalness: 0.4
    });

    for (const pos of cornerPositions) {
      // Main pillar body
      const pillarGeometry = new THREE.CylinderGeometry(0.35, 0.45, wallHeight + 1, 8);
      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      pillar.position.set(pos.x, (wallHeight + 1) / 2, pos.z);
      pillar.castShadow = true;
      pillar.receiveShadow = true;
      this.scene.add(pillar);
      this.decorations.push(pillar);

      // Glowing ring on pillar - teal (abeles.dev style)
      const ringGeometry = new THREE.TorusGeometry(0.4, 0.04, 8, 24);
      const ringMaterial = new THREE.MeshStandardMaterial({
        color: 0x6fdac9,
        emissive: 0x6fdac9,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.8
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(pos.x, wallHeight * 0.6, pos.z);
      this.scene.add(ring);
      this.decorations.push(ring);

      // Pillar top cap
      const capGeometry = new THREE.CylinderGeometry(0.5, 0.35, 0.3, 8);
      const cap = new THREE.Mesh(capGeometry, trimMaterial);
      cap.position.set(pos.x, wallHeight + 1 + 0.15, pos.z);
      cap.castShadow = true;
      this.scene.add(cap);
      this.decorations.push(cap);
    }
  }

  createAtmosphere() {
    // Removed corner lights for performance - scene lighting is sufficient
    this.cornerLights = [];

    // Reduced particle count for better performance - teal/purple mix (abeles.dev style)
    const particleCount = 12;
    const particleGeometry = new THREE.CircleGeometry(0.06, 6);

    for (let i = 0; i < particleCount; i++) {
      // Alternate between teal and purple particles
      const isTeal = i % 2 === 0;
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: isTeal ? 0x6fdac9 : 0xa989f5,
        transparent: true,
        opacity: 0.3
      });

      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = this.size / 2 - 3;
      particle.position.set(
        Math.cos(angle) * radius,
        0.02,
        Math.sin(angle) * radius
      );
      particle.rotation.x = -Math.PI / 2;
      this.scene.add(particle);
      this.decorations.push(particle);
    }
  }

  setColors(floorColor, wallColor) {
    this.floor.material.color.setHex(floorColor);
    this.grid.material.color.setHex(wallColor);

    for (const wall of this.walls) {
      wall.material.color.setHex(wallColor);
    }
  }

  clearObstacles() {
    for (const obstacle of this.obstacles) {
      this.scene.remove(obstacle.mesh);
      obstacle.mesh.geometry.dispose();
      obstacle.mesh.material.dispose();
    }
    this.obstacles = [];
  }

  addObstacles(obstacleConfigs) {
    this.clearObstacles();

    for (const config of obstacleConfigs) {
      const obstacle = this.createObstacle(config);
      this.obstacles.push(obstacle);
    }
  }

  createObstacle(config) {
    let geometry;
    let height;

    if (config.type === 'pillar') {
      height = 2;
      geometry = new THREE.CylinderGeometry(
        config.radius * 0.8,
        config.radius,
        height,
        8
      );
    } else {
      height = config.radius * 1.5;
      geometry = new THREE.DodecahedronGeometry(config.radius, 0);
    }

    const material = new THREE.MeshStandardMaterial({
      color: 0x555555,
      roughness: 0.9,
      metalness: 0.1
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(config.x, height / 2, config.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    if (config.type !== 'pillar') {
      mesh.rotation.x = Math.random() * 0.3;
      mesh.rotation.z = Math.random() * 0.3;
    }

    this.scene.add(mesh);

    return {
      mesh,
      x: config.x,
      z: config.z,
      radius: config.radius,
      type: config.type
    };
  }

  getObstacles() {
    return this.obstacles;
  }

  checkObstacleCollision(x, z, radius) {
    for (const obstacle of this.obstacles) {
      const dx = x - obstacle.x;
      const dz = z - obstacle.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist < radius + obstacle.radius) {
        return {
          collided: true,
          obstacle,
          pushX: dx / dist,
          pushZ: dz / dist,
          overlap: radius + obstacle.radius - dist
        };
      }
    }

    return { collided: false };
  }

  constrainToArena(position, radius) {
    const halfSize = this.size / 2 - radius;

    const constrained = {
      x: Math.max(-halfSize, Math.min(halfSize, position.x)),
      z: Math.max(-halfSize, Math.min(halfSize, position.z))
    };

    for (const obstacle of this.obstacles) {
      const dx = constrained.x - obstacle.x;
      const dz = constrained.z - obstacle.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const minDist = radius + obstacle.radius;

      if (dist < minDist && dist > 0.01) {
        constrained.x = obstacle.x + (dx / dist) * minDist;
        constrained.z = obstacle.z + (dz / dist) * minDist;
      }
    }

    return constrained;
  }

  dispose() {
    this.scene.remove(this.floor);
    this.floor.geometry.dispose();
    this.floor.material.dispose();

    this.scene.remove(this.grid);
    this.grid.geometry.dispose();
    this.grid.material.dispose();

    if (this.glowRing) {
      this.scene.remove(this.glowRing);
      this.glowRing.geometry.dispose();
      this.glowRing.material.dispose();
    }

    for (const wall of this.walls) {
      this.scene.remove(wall);
      wall.geometry.dispose();
      wall.material.dispose();
    }

    // Dispose decorations
    for (const decoration of this.decorations) {
      this.scene.remove(decoration);
      if (decoration.geometry) decoration.geometry.dispose();
      if (decoration.material) decoration.material.dispose();
    }
    this.decorations = [];

    // Dispose corner lights
    if (this.cornerLights) {
      for (const light of this.cornerLights) {
        this.scene.remove(light);
      }
      this.cornerLights = [];
    }

    this.clearObstacles();
  }
}
