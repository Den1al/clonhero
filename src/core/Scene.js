import * as THREE from 'three';

export class GameScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.setupRenderer();
    this.setupCamera();
    this.setupScene();
    this.setupLighting();
    this.setupResizeHandler();

    this.screenShake = { intensity: 0, duration: 0 };
    this.originalCameraPosition = this.camera.position.clone();

    // Time tracking for animated effects
    this.time = 0;
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x0a0a14); // Deep space dark blue
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Enhanced tone mapping for better colors
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  setupCamera() {
    const aspect = this.width / this.height;
    const frustumSize = 20;

    this.camera = new THREE.OrthographicCamera(
      -frustumSize * aspect / 2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      1000
    );

    this.camera.position.set(0, 20, 10);
    this.camera.lookAt(0, 0, 0);
    this.camera.zoom = 1;
    this.camera.updateProjectionMatrix();
  }

  setupScene() {
    this.scene = new THREE.Scene();
    // Deep space fog matching abeles.dev
    this.scene.fog = new THREE.FogExp2(0x0a0a14, 0.02);

    // Deep space background
    this.scene.background = new THREE.Color(0x0a0a14);
  }

  setupLighting() {
    // Hemisphere light - purple sky / dark ground (abeles.dev style)
    const hemiLight = new THREE.HemisphereLight(0xa989f5, 0x0a0a14, 0.4);
    this.scene.add(hemiLight);

    // Main directional light - slightly warm
    const directionalLight = new THREE.DirectionalLight(0xffeedd, 0.9);
    directionalLight.position.set(10, 25, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    directionalLight.shadow.bias = -0.0001;
    this.scene.add(directionalLight);
    this.directionalLight = directionalLight;

    // Fill light - teal accent (abeles.dev style)
    const fillLight = new THREE.DirectionalLight(0x6fdac9, 0.3);
    fillLight.position.set(-10, 15, -10);
    this.scene.add(fillLight);

    // Removed extra point lights and rim lights for performance
    this.accentLight = null;
    this.cyanLight = null;
  }

  updateLighting(delta) {
    this.time += delta;
    // Light animation removed for performance
  }

  setupResizeHandler() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      const aspect = this.width / this.height;
      const frustumSize = 20;

      this.camera.left = -frustumSize * aspect / 2;
      this.camera.right = frustumSize * aspect / 2;
      this.camera.top = frustumSize / 2;
      this.camera.bottom = -frustumSize / 2;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(this.width, this.height);
    });
  }

  shake(intensity = 0.3, duration = 0.2) {
    this.screenShake.intensity = intensity;
    this.screenShake.duration = duration;
  }

  updateScreenShake(delta) {
    if (this.screenShake.duration > 0) {
      this.screenShake.duration -= delta;

      const offsetX = (Math.random() - 0.5) * 2 * this.screenShake.intensity;
      const offsetY = (Math.random() - 0.5) * 2 * this.screenShake.intensity;

      this.camera.position.x = this.originalCameraPosition.x + offsetX;
      this.camera.position.z = this.originalCameraPosition.z + offsetY;

      if (this.screenShake.duration <= 0) {
        this.camera.position.copy(this.originalCameraPosition);
      }
    }
  }

  followTarget(target, smoothness = 0.1) {
    if (target && target.mesh) {
      const targetX = target.mesh.position.x;
      const targetZ = target.mesh.position.z;

      this.originalCameraPosition.x += (targetX - this.originalCameraPosition.x) * smoothness;
      this.originalCameraPosition.z += (targetZ + 10 - this.originalCameraPosition.z) * smoothness;

      if (this.screenShake.duration <= 0) {
        this.camera.position.x = this.originalCameraPosition.x;
        this.camera.position.z = this.originalCameraPosition.z;
      }
    }
  }

  worldToScreen(position) {
    const vector = position.clone();
    vector.project(this.camera);

    return {
      x: (vector.x * 0.5 + 0.5) * this.width,
      y: (-vector.y * 0.5 + 0.5) * this.height
    };
  }

  add(object) {
    this.scene.add(object);
  }

  remove(object) {
    this.scene.remove(object);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.renderer.dispose();
  }
}
