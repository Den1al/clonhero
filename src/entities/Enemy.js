import * as THREE from 'three';
import { MathUtils } from '../utils/MathUtils.js';
import { StatusEffectManager, StatusEffectTypes, StatusEffectConfigs } from '../systems/StatusEffectSystem.js';

export const EnemyTypes = {
  CHASER: 'chaser',
  SHOOTER: 'shooter',
  BOMBER: 'bomber',
  SPAWNER: 'spawner',
  TANK: 'tank',
  BOSS: 'boss'
};

const EnemyConfigs = {
  [EnemyTypes.CHASER]: {
    health: 20,
    damage: 10,
    speed: 2.5,
    xpValue: 10,
    color: 0xef4444,          // Vivid red
    emissive: 0xef4444,
    emissiveIntensity: 0.15,
    size: 0.4,
    shape: 'box'
  },
  [EnemyTypes.SHOOTER]: {
    health: 15,
    damage: 8,
    speed: 1.5,
    xpValue: 15,
    color: 0xa855f7,          // Vivid purple
    emissive: 0xa855f7,
    emissiveIntensity: 0.2,
    size: 0.35,
    shape: 'octahedron',
    attackRange: 8,
    attackCooldown: 2,
    projectileSpeed: 6
  },
  [EnemyTypes.BOMBER]: {
    health: 25,
    damage: 20,
    speed: 3,
    xpValue: 20,
    color: 0xf97316,          // Vivid orange
    emissive: 0xf97316,
    emissiveIntensity: 0.25,
    size: 0.45,
    shape: 'sphere',
    explosionRadius: 2,
    explosionDamage: 25
  },
  [EnemyTypes.SPAWNER]: {
    health: 40,
    damage: 5,
    speed: 0,
    xpValue: 30,
    color: 0x14b8a6,          // Teal
    emissive: 0x14b8a6,
    emissiveIntensity: 0.2,
    size: 0.6,
    shape: 'cylinder',
    spawnCooldown: 4,
    spawnType: EnemyTypes.CHASER
  },
  [EnemyTypes.TANK]: {
    health: 80,
    damage: 20,
    speed: 1,
    xpValue: 40,
    color: 0x64748b,          // Slate gray
    emissive: 0x64748b,
    emissiveIntensity: 0.1,
    size: 0.7,
    shape: 'box'
  },
  [EnemyTypes.BOSS]: {
    health: 500,
    damage: 30,
    speed: 1.5,
    xpValue: 200,
    color: 0xc026d3,          // Vivid fuchsia
    emissive: 0xc026d3,
    emissiveIntensity: 0.35,
    size: 1.2,
    shape: 'dodecahedron',
    attackRange: 10,
    attackCooldown: 1.5,
    projectileSpeed: 8,
    phases: 3
  }
};

export class Enemy {
  constructor(scene, type, position, difficultyMultiplier = 1) {
    this.scene = scene;
    this.type = type;
    this.config = { ...EnemyConfigs[type] };

    this.config.health *= difficultyMultiplier;
    this.config.damage *= difficultyMultiplier;
    this.config.xpValue = Math.floor(this.config.xpValue * difficultyMultiplier);

    this.health = this.config.health;
    this.maxHealth = this.config.health;
    this.damage = this.config.damage;
    this.speed = this.config.speed;
    this.xpValue = this.config.xpValue;

    this.isAlive = true;
    this.velocity = new THREE.Vector3();
    this.knockbackVelocity = new THREE.Vector3();

    this.attackTimer = Math.random() * (this.config.attackCooldown || 2);
    this.spawnTimer = Math.random() * (this.config.spawnCooldown || 4);

    this.hitFlashTimer = 0;
    this.deathTimer = 0;
    this.isDying = false;

    if (type === EnemyTypes.BOSS) {
      this.phase = 1;
      this.phaseHealthThresholds = [0.66, 0.33, 0];
      this.attackPattern = 0;
    }

    // Status effect system
    this.statusEffects = new StatusEffectManager();
    this.baseSpeed = this.speed;
    this.statusVisualTimer = 0;

    this.createMesh(position);
    this.createHealthBar();
    this.createStatusEffectIndicators();
  }

  createMesh(position) {
    const group = new THREE.Group();

    let geometry;
    switch (this.config.shape) {
      case 'box':
        geometry = new THREE.BoxGeometry(
          this.config.size * 2,
          this.config.size * 2,
          this.config.size * 2
        );
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(this.config.size, 16, 16);
        break;
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(this.config.size);
        break;
      case 'cylinder':
        geometry = new THREE.CylinderGeometry(
          this.config.size,
          this.config.size,
          this.config.size * 2,
          8
        );
        break;
      case 'dodecahedron':
        geometry = new THREE.DodecahedronGeometry(this.config.size);
        break;
      default:
        geometry = new THREE.BoxGeometry(
          this.config.size * 2,
          this.config.size * 2,
          this.config.size * 2
        );
    }

    const material = new THREE.MeshStandardMaterial({
      color: this.config.color,
      emissive: this.config.emissive || this.config.color,
      emissiveIntensity: this.config.emissiveIntensity || 0.15,
      metalness: 0.4,
      roughness: 0.5
    });

    const body = new THREE.Mesh(geometry, material);
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    // Simplified ground indicator (no glow mesh for regular enemies)
    this.glowMesh = null;

    if (this.type === EnemyTypes.SHOOTER) {
      const eyeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
      eye1.position.set(-0.15, 0.1, this.config.size);
      const eye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
      eye2.position.set(0.15, 0.1, this.config.size);
      group.add(eye1, eye2);

      const pupilGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const pupil1 = new THREE.Mesh(pupilGeometry, pupilMaterial);
      pupil1.position.z = 0.05;
      eye1.add(pupil1);
      const pupil2 = new THREE.Mesh(pupilGeometry, pupilMaterial);
      pupil2.position.z = 0.05;
      eye2.add(pupil2);
    }

    if (this.type === EnemyTypes.BOMBER) {
      const fuseGeometry = new THREE.CylinderGeometry(0.03, 0.03, 0.2, 8);
      const fuseMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
      const fuse = new THREE.Mesh(fuseGeometry, fuseMaterial);
      fuse.position.y = this.config.size + 0.1;
      group.add(fuse);

      const sparkGeometry = new THREE.SphereGeometry(0.05, 8, 8);
      const sparkMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.8
      });
      this.spark = new THREE.Mesh(sparkGeometry, sparkMaterial);
      this.spark.position.y = this.config.size + 0.25;
      group.add(this.spark);
    }

    if (this.type === EnemyTypes.BOSS) {
      const crownGeometry = new THREE.ConeGeometry(0.3, 0.5, 5);
      const crownMaterial = new THREE.MeshStandardMaterial({
        color: 0xf1c40f,
        metalness: 0.8,
        roughness: 0.2
      });
      const crown = new THREE.Mesh(crownGeometry, crownMaterial);
      crown.position.y = this.config.size + 0.3;
      group.add(crown);
    }

    // === CUTE BUT DEADLY: Add personality features based on type ===
    this.addCuteFeatures(group);

    this.mesh = group;
    this.mesh.position.set(position.x, this.config.size, position.z);
    this.body = body;
    this.originalColor = this.config.color;

    this.scene.add(this.mesh);
  }

  addCuteFeatures(group) {
    switch (this.type) {
      case EnemyTypes.CHASER:
        this.addChaserFeatures(group);
        break;
      case EnemyTypes.SHOOTER:
        this.addShooterFeatures(group);
        break;
      case EnemyTypes.BOMBER:
        this.addBomberFeatures(group);
        break;
      case EnemyTypes.TANK:
        this.addTankFeatures(group);
        break;
      case EnemyTypes.BOSS:
        this.addBossFeatures(group);
        break;
    }
  }

  addChaserFeatures(group) {
    const size = this.config.size;

    // Angry eyebrows
    const browGeometry = new THREE.BoxGeometry(0.2, 0.04, 0.06);
    const browMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const leftBrow = new THREE.Mesh(browGeometry, browMaterial);
    leftBrow.position.set(-0.15, size * 0.7, size + 0.02);
    leftBrow.rotation.z = 0.4; // Angry angle
    group.add(leftBrow);

    const rightBrow = new THREE.Mesh(browGeometry, browMaterial);
    rightBrow.position.set(0.15, size * 0.7, size + 0.02);
    rightBrow.rotation.z = -0.4; // Angry angle (mirrored)
    group.add(rightBrow);

    // Angry eyes (narrowed)
    const eyeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, size * 0.5, size + 0.02);
    leftEye.scale.set(1, 0.5, 0.5); // Narrowed/squinting
    group.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, size * 0.5, size + 0.02);
    rightEye.scale.set(1, 0.5, 0.5);
    group.add(rightEye);

    // Red pupils (menacing)
    const pupilGeometry = new THREE.SphereGeometry(0.04, 6, 6);
    const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    leftPupil.position.z = 0.04;
    leftEye.add(leftPupil);
    const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil.position.z = 0.04;
    rightEye.add(rightPupil);

    // Gritted teeth (jagged mouth)
    const teethGeometry = new THREE.BoxGeometry(0.35, 0.08, 0.05);
    const teethMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const teeth = new THREE.Mesh(teethGeometry, teethMaterial);
    teeth.position.set(0, size * 0.1, size + 0.02);
    group.add(teeth);

    // Individual teeth marks (jagged line)
    for (let i = 0; i < 5; i++) {
      const toothGap = new THREE.Mesh(
        new THREE.BoxGeometry(0.02, 0.1, 0.06),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
      );
      toothGap.position.set(-0.14 + i * 0.07, size * 0.1, size + 0.025);
      group.add(toothGap);
    }

    // Tiny horns
    const hornGeometry = new THREE.ConeGeometry(0.06, 0.2, 6);
    const hornMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a0a0a,
      roughness: 0.4,
      metalness: 0.3
    });

    const leftHorn = new THREE.Mesh(hornGeometry, hornMaterial);
    leftHorn.position.set(-0.25, size + 0.15, 0);
    leftHorn.rotation.z = 0.3;
    group.add(leftHorn);

    const rightHorn = new THREE.Mesh(hornGeometry, hornMaterial);
    rightHorn.position.set(0.25, size + 0.15, 0);
    rightHorn.rotation.z = -0.3;
    group.add(rightHorn);
  }

  addShooterFeatures(group) {
    // Shooter already has eyes, but let's enhance with eyelids that squint
    const size = this.config.size;

    // Eyelids (half-closed, menacing look) - positioned over existing eyes
    const eyelidGeometry = new THREE.SphereGeometry(0.11, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const eyelidMaterial = new THREE.MeshStandardMaterial({
      color: this.config.color,
      emissive: this.config.emissive,
      emissiveIntensity: 0.1
    });

    this.leftEyelid = new THREE.Mesh(eyelidGeometry, eyelidMaterial);
    this.leftEyelid.position.set(-0.15, 0.15, size);
    this.leftEyelid.rotation.x = Math.PI + 0.5; // Partially closed
    group.add(this.leftEyelid);

    this.rightEyelid = new THREE.Mesh(eyelidGeometry, eyelidMaterial);
    this.rightEyelid.position.set(0.15, 0.15, size);
    this.rightEyelid.rotation.x = Math.PI + 0.5;
    group.add(this.rightEyelid);

    // Magical wand
    const wandGroup = new THREE.Group();
    wandGroup.position.set(0.35, 0, 0.2);
    wandGroup.rotation.z = -0.5;

    // Wand shaft
    const shaftGeometry = new THREE.CylinderGeometry(0.02, 0.025, 0.4, 6);
    const shaftMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a2c2a,
      roughness: 0.8
    });
    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    wandGroup.add(shaft);

    // Wand crystal tip
    const crystalGeometry = new THREE.OctahedronGeometry(0.08);
    const crystalMaterial = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8
    });
    this.wandCrystal = new THREE.Mesh(crystalGeometry, crystalMaterial);
    this.wandCrystal.position.y = 0.25;
    wandGroup.add(this.wandCrystal);

    // Wand sparkle particles
    const sparkleGeometry = new THREE.SphereGeometry(0.02, 4, 4);
    const sparkleMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8
    });
    this.wandSparkles = [];
    for (let i = 0; i < 3; i++) {
      const sparkle = new THREE.Mesh(sparkleGeometry, sparkleMaterial.clone());
      sparkle.position.y = 0.25;
      wandGroup.add(sparkle);
      this.wandSparkles.push(sparkle);
    }

    group.add(wandGroup);
    this.wandGroup = wandGroup;
  }

  addBomberFeatures(group) {
    const size = this.config.size;

    // Worried/anxious eyes (wide, looking up)
    const eyeGeometry = new THREE.SphereGeometry(0.1, 10, 10);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, size * 0.3, size * 0.85);
    leftEye.scale.set(1, 1.3, 0.6); // Wide open, worried
    group.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, size * 0.3, size * 0.85);
    rightEye.scale.set(1, 1.3, 0.6);
    group.add(rightEye);

    // Small pupils looking up (nervous)
    const pupilGeometry = new THREE.SphereGeometry(0.04, 6, 6);
    const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    leftPupil.position.set(0, 0.03, 0.05); // Looking up
    leftEye.add(leftPupil);
    const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil.position.set(0, 0.03, 0.05);
    rightEye.add(rightPupil);

    // Worried eyebrows (raised, curved)
    const browGeometry = new THREE.TorusGeometry(0.08, 0.015, 4, 8, Math.PI);
    const browMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const leftBrow = new THREE.Mesh(browGeometry, browMaterial);
    leftBrow.position.set(-0.15, size * 0.55, size * 0.85);
    leftBrow.rotation.z = -0.3; // Worried angle
    group.add(leftBrow);

    const rightBrow = new THREE.Mesh(browGeometry, browMaterial);
    rightBrow.position.set(0.15, size * 0.55, size * 0.85);
    rightBrow.rotation.z = 0.3;
    group.add(rightBrow);

    // Small worried "O" mouth
    const mouthGeometry = new THREE.TorusGeometry(0.06, 0.02, 8, 16);
    const mouthMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    mouth.position.set(0, size * -0.1, size * 0.9);
    mouth.rotation.x = Math.PI / 2;
    group.add(mouth);

    // Sweat drop
    const sweatGeometry = new THREE.SphereGeometry(0.04, 6, 6);
    const sweatMaterial = new THREE.MeshBasicMaterial({
      color: 0x88ccff,
      transparent: true,
      opacity: 0.7
    });
    this.sweatDrop = new THREE.Mesh(sweatGeometry, sweatMaterial);
    this.sweatDrop.position.set(-0.3, size * 0.5, size * 0.5);
    this.sweatDrop.scale.set(0.7, 1.2, 0.7); // Tear-drop shape
    group.add(this.sweatDrop);
  }

  addTankFeatures(group) {
    const size = this.config.size;

    // Military helmet
    const helmetGeometry = new THREE.SphereGeometry(size * 0.85, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    const helmetMaterial = new THREE.MeshStandardMaterial({
      color: 0x3a4a3a, // Military green-gray
      roughness: 0.7,
      metalness: 0.3
    });
    const helmet = new THREE.Mesh(helmetGeometry, helmetMaterial);
    helmet.position.y = size;
    helmet.rotation.x = Math.PI;
    group.add(helmet);

    // Helmet rim
    const rimGeometry = new THREE.TorusGeometry(size * 0.85, 0.05, 8, 24);
    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a3a2a,
      roughness: 0.6,
      metalness: 0.4
    });
    const rim = new THREE.Mesh(rimGeometry, rimMaterial);
    rim.position.y = size;
    rim.rotation.x = Math.PI / 2;
    group.add(rim);

    // Stoic eyes (small, determined)
    const eyeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, size * 0.4, size + 0.02);
    leftEye.scale.set(1, 0.6, 0.5); // Narrow, focused
    group.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, size * 0.4, size + 0.02);
    rightEye.scale.set(1, 0.6, 0.5);
    group.add(rightEye);

    // Tiny pupils
    const pupilGeometry = new THREE.SphereGeometry(0.04, 6, 6);
    const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    leftPupil.position.z = 0.04;
    leftEye.add(leftPupil);
    const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil.position.z = 0.04;
    rightEye.add(rightPupil);

    // Shield emblem on front
    const emblemGroup = new THREE.Group();
    emblemGroup.position.set(0, size * 0.2, size + 0.03);

    // Shield shape (pentagon-ish)
    const shieldShape = new THREE.Shape();
    shieldShape.moveTo(0, 0.15);
    shieldShape.lineTo(0.12, 0.1);
    shieldShape.lineTo(0.12, -0.05);
    shieldShape.lineTo(0, -0.15);
    shieldShape.lineTo(-0.12, -0.05);
    shieldShape.lineTo(-0.12, 0.1);
    shieldShape.closePath();

    const shieldGeometry = new THREE.ShapeGeometry(shieldShape);
    const shieldMaterial = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 0.7,
      roughness: 0.3
    });
    const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
    emblemGroup.add(shield);

    // Cross on shield
    const crossMaterial = new THREE.MeshBasicMaterial({ color: 0x8b0000 });
    const crossV = new THREE.Mesh(
      new THREE.BoxGeometry(0.03, 0.2, 0.01),
      crossMaterial
    );
    crossV.position.z = 0.01;
    emblemGroup.add(crossV);
    const crossH = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.03, 0.01),
      crossMaterial
    );
    crossH.position.z = 0.01;
    emblemGroup.add(crossH);

    group.add(emblemGroup);

    // Stern mouth (flat line)
    const mouthGeometry = new THREE.BoxGeometry(0.25, 0.03, 0.02);
    const mouthMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    mouth.position.set(0, size * -0.1, size + 0.02);
    group.add(mouth);
  }

  addBossFeatures(group) {
    const size = this.config.size;

    // Multiple creepy eyes (3 pairs at different heights)
    const eyePositions = [
      { x: -0.25, y: size * 0.3, scale: 1 },
      { x: 0.25, y: size * 0.3, scale: 1 },
      { x: -0.4, y: size * 0.6, scale: 0.7 },
      { x: 0.4, y: size * 0.6, scale: 0.7 },
      { x: -0.15, y: size * 0.8, scale: 0.5 },
      { x: 0.15, y: size * 0.8, scale: 0.5 },
    ];

    this.bossEyes = [];
    const eyeGeometry = new THREE.SphereGeometry(0.12, 10, 10);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow evil eyes
    const pupilGeometry = new THREE.SphereGeometry(0.05, 6, 6);
    const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    for (const pos of eyePositions) {
      const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      eye.position.set(pos.x, pos.y, size * 0.85);
      eye.scale.setScalar(pos.scale);
      group.add(eye);

      const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
      pupil.position.z = 0.08;
      eye.add(pupil);

      this.bossEyes.push({ eye, pupil });
    }

    // Evil grin (curved, wide)
    const grinShape = new THREE.Shape();
    grinShape.moveTo(-0.4, 0);
    grinShape.quadraticCurveTo(0, -0.15, 0.4, 0);
    grinShape.quadraticCurveTo(0, 0.05, -0.4, 0);

    const grinGeometry = new THREE.ShapeGeometry(grinShape);
    const grinMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      side: THREE.DoubleSide
    });
    const grin = new THREE.Mesh(grinGeometry, grinMaterial);
    grin.position.set(0, size * -0.2, size * 0.9);
    group.add(grin);

    // Sharp teeth in grin
    for (let i = 0; i < 7; i++) {
      const toothGeometry = new THREE.ConeGeometry(0.04, 0.1, 4);
      const toothMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const tooth = new THREE.Mesh(toothGeometry, toothMaterial);
      tooth.position.set(-0.3 + i * 0.1, size * -0.15, size * 0.92);
      tooth.rotation.x = Math.PI;
      group.add(tooth);
    }

    // Flowing cape
    this.capeSegments = [];
    const capeGroup = new THREE.Group();
    capeGroup.position.set(0, size * 0.5, -size * 0.8);

    const capeMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a0080, // Royal purple
      roughness: 0.7,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    // Cape collar
    const collarGeometry = new THREE.TorusGeometry(size * 0.6, 0.1, 8, 16, Math.PI);
    const collar = new THREE.Mesh(collarGeometry, capeMaterial);
    collar.rotation.x = Math.PI / 2;
    collar.rotation.z = Math.PI;
    collar.position.y = size * 0.3;
    capeGroup.add(collar);

    // Cape body segments (will animate)
    for (let i = 0; i < 6; i++) {
      const width = size * 1.2 - i * 0.1;
      const segmentGeometry = new THREE.PlaneGeometry(width, 0.3);
      const segment = new THREE.Mesh(segmentGeometry, capeMaterial);
      segment.position.y = -i * 0.25;
      segment.position.z = -i * 0.08;
      capeGroup.add(segment);
      this.capeSegments.push(segment);
    }

    group.add(capeGroup);
    this.capeGroup = capeGroup;

    // Enhanced crown (already exists, but let's add gems)
    const gemGeometry = new THREE.OctahedronGeometry(0.08);
    const gemMaterial = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 0.3,
      metalness: 0.9,
      roughness: 0.1
    });

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const gem = new THREE.Mesh(gemGeometry, gemMaterial);
      gem.position.set(
        Math.cos(angle) * 0.25,
        size + 0.45,
        Math.sin(angle) * 0.25
      );
      group.add(gem);
    }
  }

  createHealthBar() {
    const barWidth = this.config.size * 2;
    const barHeight = 0.1;

    const bgGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
    const bgMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    this.healthBarBg = new THREE.Mesh(bgGeometry, bgMaterial);
    this.healthBarBg.position.y = this.config.size * 2 + 0.3;
    this.healthBarBg.rotation.x = -Math.PI / 4;
    this.mesh.add(this.healthBarBg);

    const fgGeometry = new THREE.PlaneGeometry(barWidth, barHeight);
    const fgMaterial = new THREE.MeshBasicMaterial({ color: 0xe74c3c });
    this.healthBar = new THREE.Mesh(fgGeometry, fgMaterial);
    this.healthBar.position.z = 0.01;
    this.healthBarBg.add(this.healthBar);
  }

  createStatusEffectIndicators() {
    // Container for status effect icons above health bar
    this.statusIconContainer = new THREE.Group();
    this.statusIconContainer.position.y = this.config.size * 2 + 0.5;
    this.mesh.add(this.statusIconContainer);

    // Pre-create status effect ring indicators
    this.statusRings = {};

    // Burn ring (fire)
    const burnRing = this.createStatusRing(StatusEffectConfigs[StatusEffectTypes.BURN].color);
    burnRing.visible = false;
    this.statusRings[StatusEffectTypes.BURN] = burnRing;
    this.mesh.add(burnRing);

    // Freeze ring (ice)
    const freezeRing = this.createStatusRing(StatusEffectConfigs[StatusEffectTypes.FREEZE].color);
    freezeRing.visible = false;
    this.statusRings[StatusEffectTypes.FREEZE] = freezeRing;
    this.mesh.add(freezeRing);

    // Poison ring
    const poisonRing = this.createStatusRing(StatusEffectConfigs[StatusEffectTypes.POISON].color);
    poisonRing.visible = false;
    this.statusRings[StatusEffectTypes.POISON] = poisonRing;
    this.mesh.add(poisonRing);

    // Aura mesh for tinting
    const auraGeometry = new THREE.SphereGeometry(this.config.size * 1.3, 16, 16);
    const auraMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      side: THREE.BackSide
    });
    this.statusAura = new THREE.Mesh(auraGeometry, auraMaterial);
    this.statusAura.position.y = this.config.size;
    this.mesh.add(this.statusAura);
  }

  createStatusRing(color) {
    const ring = new THREE.Group();

    // Create a ring of small spheres that orbit the enemy
    const sphereCount = 6;
    for (let i = 0; i < sphereCount; i++) {
      const sphereGeometry = new THREE.SphereGeometry(0.08, 8, 8);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.8
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

      const angle = (i / sphereCount) * Math.PI * 2;
      sphere.position.x = Math.cos(angle) * this.config.size * 1.5;
      sphere.position.z = Math.sin(angle) * this.config.size * 1.5;
      sphere.position.y = this.config.size * 0.5;

      ring.add(sphere);
    }

    return ring;
  }

  update(delta, player, projectileSystem, particleSystem = null) {
    // Handle death animation first (isDying is true but isAlive is false)
    if (this.isDying) {
      this.deathTimer += delta;
      const scale = 1 - this.deathTimer / 0.3;
      this.mesh.scale.setScalar(Math.max(0, scale));

      if (this.deathTimer >= 0.3) {
        return 'dead';
      }
      return null;
    }

    // Skip update if not alive (and not in dying state)
    if (!this.isAlive) return null;

    // Update status effects
    const statusResult = this.statusEffects.update(delta, this, particleSystem);
    if (statusResult.totalDamage > 0) {
      this.takeDamage(statusResult.totalDamage, null, true); // true = from status effect
    }

    // Apply speed modifier from freeze
    const speedMultiplier = this.statusEffects.getSpeedMultiplier();
    this.speed = this.baseSpeed * speedMultiplier;

    // Update status effect visuals
    this.updateStatusVisuals(delta);

    this.knockbackVelocity.multiplyScalar(0.9);

    if (this.hitFlashTimer > 0) {
      this.hitFlashTimer -= delta;
      if (this.hitFlashTimer <= 0) {
        this.body.material.color.setHex(this.originalColor);
      }
    }

    const toPlayer = new THREE.Vector3(
      player.mesh.position.x - this.mesh.position.x,
      0,
      player.mesh.position.z - this.mesh.position.z
    );
    const distanceToPlayer = toPlayer.length();
    toPlayer.normalize();

    let spawnRequest = null;

    switch (this.type) {
      case EnemyTypes.CHASER:
        this.velocity.copy(toPlayer).multiplyScalar(this.speed);
        break;

      case EnemyTypes.SHOOTER:
        if (distanceToPlayer > this.config.attackRange) {
          this.velocity.copy(toPlayer).multiplyScalar(this.speed);
        } else if (distanceToPlayer < this.config.attackRange * 0.5) {
          this.velocity.copy(toPlayer).multiplyScalar(-this.speed);
        } else {
          this.velocity.set(0, 0, 0);
        }

        this.attackTimer -= delta;
        if (this.attackTimer <= 0 && distanceToPlayer <= this.config.attackRange) {
          this.attackTimer = this.config.attackCooldown;
          this.fireProjectile(toPlayer, projectileSystem);
        }
        break;

      case EnemyTypes.BOMBER:
        this.velocity.copy(toPlayer).multiplyScalar(this.speed);
        if (this.spark) {
          this.spark.material.opacity = 0.5 + Math.sin(Date.now() * 0.01) * 0.5;
        }
        break;

      case EnemyTypes.SPAWNER:
        this.velocity.set(0, 0, 0);
        this.spawnTimer -= delta;
        if (this.spawnTimer <= 0) {
          this.spawnTimer = this.config.spawnCooldown;
          spawnRequest = {
            type: this.config.spawnType,
            position: this.mesh.position.clone()
          };
        }
        break;

      case EnemyTypes.TANK:
        this.velocity.copy(toPlayer).multiplyScalar(this.speed);
        break;

      case EnemyTypes.BOSS:
        this.updateBoss(delta, player, toPlayer, distanceToPlayer, projectileSystem);
        break;
    }

    this.mesh.position.x += (this.velocity.x + this.knockbackVelocity.x) * delta;
    this.mesh.position.z += (this.velocity.z + this.knockbackVelocity.z) * delta;

    if (this.velocity.lengthSq() > 0.01) {
      const angle = Math.atan2(this.velocity.x, this.velocity.z);
      this.mesh.rotation.y = angle;
    }

    if (this.type !== EnemyTypes.BOSS) {
      this.mesh.rotation.y += delta * 0.5;
    }

    // === CUTE BUT DEADLY: Animate personality features ===
    this.updateCuteAnimations(delta, player);

    return spawnRequest;
  }

  updateCuteAnimations(delta, player) {
    // Track animation time
    if (!this.cuteAnimTimer) this.cuteAnimTimer = 0;
    this.cuteAnimTimer += delta;

    switch (this.type) {
      case EnemyTypes.SHOOTER:
        // Animate wand sparkles
        if (this.wandSparkles) {
          for (let i = 0; i < this.wandSparkles.length; i++) {
            const sparkle = this.wandSparkles[i];
            const phase = this.cuteAnimTimer * 5 + i * 2;
            sparkle.position.x = Math.sin(phase) * 0.08;
            sparkle.position.z = Math.cos(phase) * 0.08;
            sparkle.material.opacity = 0.5 + Math.sin(phase * 2) * 0.5;
          }
        }
        // Animate wand crystal rotation
        if (this.wandCrystal) {
          this.wandCrystal.rotation.y += delta * 3;
        }
        // Squint eyelids when attacking (cooldown low)
        if (this.leftEyelid && this.rightEyelid) {
          const squintAmount = this.attackTimer < 0.5 ? 0.8 : 0.5;
          this.leftEyelid.rotation.x = Math.PI + squintAmount;
          this.rightEyelid.rotation.x = Math.PI + squintAmount;
        }
        break;

      case EnemyTypes.BOMBER:
        // Animate sweat drop dripping
        if (this.sweatDrop) {
          const dropPhase = this.cuteAnimTimer % 1;
          this.sweatDrop.position.y = this.config.size * 0.5 - dropPhase * 0.3;
          this.sweatDrop.material.opacity = 0.7 * (1 - dropPhase);
          if (dropPhase < 0.1) {
            this.sweatDrop.position.y = this.config.size * 0.5;
          }
        }
        break;

      case EnemyTypes.BOSS:
        // Animate boss eyes looking at player
        if (this.bossEyes && player) {
          const toPlayer = new THREE.Vector3(
            player.mesh.position.x - this.mesh.position.x,
            0,
            player.mesh.position.z - this.mesh.position.z
          ).normalize();

          for (const { pupil } of this.bossEyes) {
            const targetX = toPlayer.x * 0.03;
            const targetY = toPlayer.z * 0.03;
            pupil.position.x += (targetX - pupil.position.x) * delta * 3;
            pupil.position.y += (targetY - pupil.position.y) * delta * 3;
          }
        }

        // Animate cape flowing
        if (this.capeSegments) {
          for (let i = 0; i < this.capeSegments.length; i++) {
            const segment = this.capeSegments[i];
            const phase = this.cuteAnimTimer * 2 + i * 0.4;
            segment.rotation.x = Math.sin(phase) * 0.2 * (i + 1) * 0.2;
            segment.rotation.y = Math.cos(phase * 0.7) * 0.1 * (i + 1) * 0.15;
          }
        }
        break;
    }
  }

  updateBoss(delta, player, toPlayer, distanceToPlayer, projectileSystem) {
    const healthPercent = this.health / this.maxHealth;
    for (let i = 0; i < this.phaseHealthThresholds.length; i++) {
      if (healthPercent <= this.phaseHealthThresholds[i] && this.phase <= i + 1) {
        this.phase = i + 2;
        this.onPhaseChange();
      }
    }

    const phaseSpeedMultiplier = 1 + (this.phase - 1) * 0.2;

    if (distanceToPlayer > 3) {
      this.velocity.copy(toPlayer).multiplyScalar(this.speed * phaseSpeedMultiplier);
    } else {
      this.velocity.set(0, 0, 0);
    }

    this.attackTimer -= delta;
    const phaseCooldownMultiplier = 1 / this.phase;

    if (this.attackTimer <= 0) {
      this.attackTimer = this.config.attackCooldown * phaseCooldownMultiplier;
      this.performBossAttack(toPlayer, projectileSystem);
    }
  }

  performBossAttack(toPlayer, projectileSystem) {
    this.attackPattern = (this.attackPattern + 1) % 3;

    switch (this.attackPattern) {
      case 0:
        this.fireProjectile(toPlayer, projectileSystem);
        break;

      case 1:
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const dir = {
            x: Math.sin(angle),
            z: Math.cos(angle)
          };
          this.fireProjectile(dir, projectileSystem);
        }
        break;

      case 2:
        for (let i = -2; i <= 2; i++) {
          const angle = Math.atan2(toPlayer.x, toPlayer.z) + i * 0.2;
          const dir = {
            x: Math.sin(angle),
            z: Math.cos(angle)
          };
          this.fireProjectile(dir, projectileSystem);
        }
        break;
    }
  }

  onPhaseChange() {
    this.body.material.emissive = new THREE.Color(0xff0000);
    this.body.material.emissiveIntensity = 0.3;

    setTimeout(() => {
      this.body.material.emissiveIntensity = 0;
    }, 500);
  }

  fireProjectile(direction, projectileSystem) {
    const spawnPos = this.mesh.position.clone();
    spawnPos.y = 0.5;

    projectileSystem.fire(
      spawnPos,
      { x: direction.x, z: direction.z },
      this.damage,
      this.config.projectileSpeed || 6,
      0,
      { isPlayerProjectile: false }
    );
  }

  takeDamage(amount, knockbackDir = null, fromStatusEffect = false) {
    if (!this.isAlive || this.isDying) return false;

    this.health -= amount;
    this.health = Math.max(0, this.health);

    this.updateHealthBar();

    // Don't flash white for status effect damage - use colored flash instead
    if (!fromStatusEffect) {
      this.flashDamage();
    } else {
      this.flashStatusDamage();
    }

    if (knockbackDir) {
      const knockbackStrength = this.type === EnemyTypes.BOSS ? 1 : 3;
      this.knockbackVelocity.x = knockbackDir.x * knockbackStrength;
      this.knockbackVelocity.z = knockbackDir.z * knockbackStrength;
    }

    if (this.health <= 0) {
      this.die();
      return true;
    }

    return false;
  }

  applyStatusEffect(type, stacks = 1) {
    if (!this.isAlive || this.isDying) return;
    this.statusEffects.applyEffect(type, stacks);
  }

  hasStatusEffect(type) {
    return this.statusEffects.hasEffect(type);
  }

  updateStatusVisuals(delta) {
    this.statusVisualTimer += delta;

    // Update ring visibility and rotation based on active effects
    for (const [type, ring] of Object.entries(this.statusRings)) {
      const hasEffect = this.statusEffects.hasEffect(type);
      ring.visible = hasEffect;

      if (hasEffect) {
        // Rotate the ring
        const rotationSpeed = type === StatusEffectTypes.FREEZE ? 0.5 : 2;
        ring.rotation.y += delta * rotationSpeed;

        // Pulsing effect based on stacks
        const effect = this.statusEffects.getEffect(type);
        const pulseScale = 1 + Math.sin(this.statusVisualTimer * 4) * 0.1 * effect.stacks;
        ring.scale.setScalar(pulseScale);
      }
    }

    // Update aura tint
    const tint = this.statusEffects.getVisualTint();
    if (tint) {
      this.statusAura.material.color.copy(tint);
      this.statusAura.material.opacity = 0.2 + Math.sin(this.statusVisualTimer * 3) * 0.1;
    } else {
      this.statusAura.material.opacity = 0;
    }

    // Apply emissive glow to body based on status effects
    if (this.statusEffects.getActiveEffects().length > 0 && this.hitFlashTimer <= 0) {
      const dominantEffect = this.statusEffects.getActiveEffects()[0];
      this.body.material.emissive = new THREE.Color(dominantEffect.config.color);
      this.body.material.emissiveIntensity = 0.15 + Math.sin(this.statusVisualTimer * 5) * 0.05;
    } else if (this.hitFlashTimer <= 0) {
      this.body.material.emissiveIntensity = 0;
    }
  }

  flashStatusDamage() {
    // Get the dominant status effect color for the flash
    const effects = this.statusEffects.getActiveEffects();
    if (effects.length > 0) {
      this.body.material.color.setHex(effects[0].config.color);
      this.hitFlashTimer = 0.08;
    }
  }

  flashDamage() {
    this.body.material.color.setHex(0xffffff);
    this.hitFlashTimer = 0.1;
  }

  updateHealthBar() {
    const healthPercent = this.health / this.maxHealth;
    this.healthBar.scale.x = Math.max(0.01, healthPercent);
    this.healthBar.position.x = (healthPercent - 1) * this.config.size;
  }

  die() {
    this.isDying = true;
    this.isAlive = false;

    if (this.type === EnemyTypes.BOMBER) {
      return {
        type: 'explosion',
        position: this.mesh.position.clone(),
        radius: this.config.explosionRadius,
        damage: this.config.explosionDamage
      };
    }

    return null;
  }

  getCollisionRadius() {
    return this.config ? this.config.size : 0.4;
  }

  remove() {
    this.scene.remove(this.mesh);
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.mesh.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    });
  }
}
