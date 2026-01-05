import * as THREE from 'three';

export class Arena {
  constructor(scene, size = 20) {
    this.scene = scene;
    this.size = size;
    this.obstacles = [];

    this.createFloor();
    this.createWalls();
  }

  createFloor() {
    const floorGeometry = new THREE.PlaneGeometry(this.size, this.size);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x2d5a27,
      roughness: 0.9,
      metalness: 0.1
    });

    this.floor = new THREE.Mesh(floorGeometry, floorMaterial);
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);

    const gridSize = this.size;
    const divisions = 20;
    const gridGeometry = new THREE.PlaneGeometry(gridSize, gridSize, divisions, divisions);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a3d17,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });

    this.grid = new THREE.Mesh(gridGeometry, gridMaterial);
    this.grid.rotation.x = -Math.PI / 2;
    this.grid.position.y = 0.01;
    this.scene.add(this.grid);
  }

  createWalls() {
    const wallHeight = 2;
    const wallThickness = 0.5;
    const halfSize = this.size / 2;

    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a3d17,
      roughness: 0.8,
      metalness: 0.2
    });

    const wallConfigs = [
      { x: 0, z: -halfSize - wallThickness / 2, width: this.size + wallThickness * 2, depth: wallThickness },
      { x: 0, z: halfSize + wallThickness / 2, width: this.size + wallThickness * 2, depth: wallThickness },
      { x: -halfSize - wallThickness / 2, z: 0, width: wallThickness, depth: this.size },
      { x: halfSize + wallThickness / 2, z: 0, width: wallThickness, depth: this.size }
    ];

    this.walls = [];
    for (const config of wallConfigs) {
      const geometry = new THREE.BoxGeometry(config.width, wallHeight, config.depth);
      const wall = new THREE.Mesh(geometry, wallMaterial);
      wall.position.set(config.x, wallHeight / 2, config.z);
      wall.castShadow = true;
      wall.receiveShadow = true;
      this.walls.push(wall);
      this.scene.add(wall);
    }

    const cornerPositions = [
      { x: -halfSize, z: -halfSize },
      { x: halfSize, z: -halfSize },
      { x: -halfSize, z: halfSize },
      { x: halfSize, z: halfSize }
    ];

    for (const pos of cornerPositions) {
      const pillarGeometry = new THREE.CylinderGeometry(0.3, 0.4, wallHeight + 0.5, 8);
      const pillar = new THREE.Mesh(pillarGeometry, wallMaterial);
      pillar.position.set(pos.x, (wallHeight + 0.5) / 2, pos.z);
      pillar.castShadow = true;
      this.scene.add(pillar);
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

    for (const wall of this.walls) {
      this.scene.remove(wall);
      wall.geometry.dispose();
      wall.material.dispose();
    }

    this.clearObstacles();
  }
}
