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
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x1a1a2e);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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
    this.scene.fog = new THREE.Fog(0x1a1a2e, 30, 50);
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    this.scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x6c5ce7, 0.5, 30);
    pointLight.position.set(0, 10, 0);
    this.scene.add(pointLight);
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
