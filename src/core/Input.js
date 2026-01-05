export class Input {
  constructor() {
    this.keys = {};
    this.movement = { x: 0, y: 0 };
    this.joystickActive = false;
    this.joystickPosition = { x: 0, y: 0 };
    this.isMobile = this.detectMobile();
    this.touchId = null;

    this.setupKeyboardListeners();
    this.setupTouchListeners();

    if (!this.isMobile) {
      document.getElementById('joystick-zone').style.display = 'none';
    }
  }

  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (window.innerWidth <= 768);
  }

  setupKeyboardListeners() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    window.addEventListener('blur', () => {
      this.keys = {};
    });
  }

  setupTouchListeners() {
    const joystickZone = document.getElementById('joystick-zone');
    const joystickStick = document.getElementById('joystick-stick');
    const joystickBase = document.getElementById('joystick-base');

    const baseRect = joystickBase.getBoundingClientRect();
    const maxDistance = baseRect.width / 2 - 25;

    const handleTouch = (e) => {
      e.preventDefault();

      for (const touch of e.changedTouches) {
        const rect = joystickZone.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const touchX = touch.clientX;
        const touchY = touch.clientY;

        if (e.type === 'touchstart') {
          if (touchX < window.innerWidth / 2) {
            this.touchId = touch.identifier;
            this.joystickActive = true;
          }
        }

        if (this.touchId === touch.identifier) {
          let dx = touchX - centerX;
          let dy = touchY - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > maxDistance) {
            dx = (dx / distance) * maxDistance;
            dy = (dy / distance) * maxDistance;
          }

          joystickStick.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;

          this.joystickPosition.x = dx / maxDistance;
          this.joystickPosition.y = dy / maxDistance;
        }
      }
    };

    const handleTouchEnd = (e) => {
      for (const touch of e.changedTouches) {
        if (this.touchId === touch.identifier) {
          this.touchId = null;
          this.joystickActive = false;
          this.joystickPosition = { x: 0, y: 0 };
          joystickStick.style.transform = 'translate(-50%, -50%)';
        }
      }
    };

    joystickZone.addEventListener('touchstart', handleTouch, { passive: false });
    window.addEventListener('touchmove', handleTouch, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
  }

  update() {
    if (this.isMobile && this.joystickActive) {
      this.movement.x = this.joystickPosition.x;
      this.movement.y = this.joystickPosition.y;
    } else {
      let x = 0;
      let y = 0;

      if (this.keys['KeyW'] || this.keys['ArrowUp']) y -= 1;
      if (this.keys['KeyS'] || this.keys['ArrowDown']) y += 1;
      if (this.keys['KeyA'] || this.keys['ArrowLeft']) x -= 1;
      if (this.keys['KeyD'] || this.keys['ArrowRight']) x += 1;

      const length = Math.sqrt(x * x + y * y);
      if (length > 0) {
        x /= length;
        y /= length;
      }

      this.movement.x = x;
      this.movement.y = y;
    }
  }

  getMovement() {
    return this.movement;
  }

  isMoving() {
    return Math.abs(this.movement.x) > 0.1 || Math.abs(this.movement.y) > 0.1;
  }

  isKeyPressed(code) {
    return this.keys[code] || false;
  }
}
