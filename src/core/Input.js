export class Input {
  constructor() {
    this.keys = {};
    this.movement = { x: 0, y: 0 };
    this.joystickActive = false;
    this.joystickPosition = { x: 0, y: 0 };
    this.joystickOrigin = { x: 0, y: 0 };
    this.isMobile = this.detectMobile();
    this.touchId = null;
    this.maxJoystickDistance = 50; // Max distance stick can move from center
    this.touchControlsEnabled = false; // Only enable during gameplay

    this.setupKeyboardListeners();
    this.setupTouchListeners();

    // Initially hide joystick on mobile (it appears on touch)
    if (this.isMobile) {
      this.hideJoystick();
    } else {
      document.getElementById('joystick-zone').style.display = 'none';
    }
  }

  // Enable/disable touch controls (called by Game when state changes)
  setTouchControlsEnabled(enabled) {
    this.touchControlsEnabled = enabled;
    if (!enabled) {
      // Reset joystick state when disabled
      this.touchId = null;
      this.joystickActive = false;
      this.joystickPosition = { x: 0, y: 0 };
      this.hideJoystick();
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

    const handleTouchStart = (e) => {
      // Don't intercept touches when touch controls are disabled (menus, etc.)
      if (!this.touchControlsEnabled) return;

      // Don't intercept touches on interactive UI elements (buttons, menus, etc.)
      const target = e.target;
      if (target.closest('.menu-overlay') ||
          target.closest('button') ||
          target.closest('.ability-card') ||
          target.closest('#levelup-screen') ||
          target.closest('#settings-menu')) {
        return;
      }

      // Ignore if we already have an active touch
      if (this.touchId !== null) return;

      for (const touch of e.changedTouches) {
        const touchX = touch.clientX;
        const touchY = touch.clientY;

        // Activate joystick anywhere on screen (buttons are already excluded above)
        e.preventDefault();
        this.touchId = touch.identifier;
        this.joystickActive = true;

        // Store the origin point where the user touched
        this.joystickOrigin.x = touchX;
        this.joystickOrigin.y = touchY;

        // Position the joystick zone at the touch location
        this.showJoystickAt(touchX, touchY);
        break;
      }
    };

    const handleTouchMove = (e) => {
      if (!this.touchControlsEnabled || this.touchId === null) return;

      for (const touch of e.changedTouches) {
        if (this.touchId === touch.identifier) {
          e.preventDefault();

          const touchX = touch.clientX;
          const touchY = touch.clientY;

          // Calculate offset from origin
          let dx = touchX - this.joystickOrigin.x;
          let dy = touchY - this.joystickOrigin.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Clamp to max distance
          if (distance > this.maxJoystickDistance) {
            dx = (dx / distance) * this.maxJoystickDistance;
            dy = (dy / distance) * this.maxJoystickDistance;
          }

          // Move the stick visually
          joystickStick.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;

          // Normalize input values (-1 to 1)
          this.joystickPosition.x = dx / this.maxJoystickDistance;
          this.joystickPosition.y = dy / this.maxJoystickDistance;
        }
      }
    };

    const handleTouchEnd = (e) => {
      for (const touch of e.changedTouches) {
        if (this.touchId === touch.identifier) {
          this.touchId = null;
          this.joystickActive = false;
          this.joystickPosition = { x: 0, y: 0 };

          // Reset stick position
          joystickStick.style.transform = 'translate(-50%, -50%)';

          // Hide joystick
          this.hideJoystick();
        }
      }
    };

    // Listen on document for touch events to capture anywhere on screen
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchEnd);
  }

  showJoystickAt(x, y) {
    const joystickZone = document.getElementById('joystick-zone');
    const joystickBase = document.getElementById('joystick-base');
    const joystickStick = document.getElementById('joystick-stick');

    // Get current joystick dimensions from computed style
    const baseSize = parseInt(getComputedStyle(joystickBase).width) || 100;

    // Position joystick zone centered at touch point
    joystickZone.style.display = 'block'; // Ensure visible (may have been hidden on desktop)
    joystickZone.style.position = 'fixed';
    joystickZone.style.left = `${x - baseSize / 2}px`;
    joystickZone.style.top = `${y - baseSize / 2}px`;
    joystickZone.style.bottom = 'auto';
    joystickZone.style.width = `${baseSize}px`;
    joystickZone.style.height = `${baseSize}px`;
    joystickZone.style.opacity = '1';
    joystickZone.style.pointerEvents = 'none'; // Let touches pass through

    // Reset stick to center
    joystickStick.style.transform = 'translate(-50%, -50%)';
  }

  hideJoystick() {
    const joystickZone = document.getElementById('joystick-zone');
    joystickZone.style.opacity = '0';
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
