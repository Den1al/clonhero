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

    // Gamepad support
    this.gamepadConnected = false;
    this.gamepadIndex = null;
    this.deadzone = 0.15; // Standard deadzone for analog sticks
    this.gamepadMovement = { x: 0, y: 0 };
    this.menuNavigation = { x: 0, y: 0 };

    // Button state tracking (for edge detection - detecting button press vs held)
    this.gamepadButtons = {
      a: false,           // Button 0 - Confirm
      b: false,           // Button 1 - Cancel/Back
      start: false,       // Button 9 - Pause
      dpadUp: false,      // Button 12
      dpadDown: false,    // Button 13
      dpadLeft: false,    // Button 14
      dpadRight: false    // Button 15
    };
    this.prevGamepadButtons = { ...this.gamepadButtons };

    // Menu navigation cooldown (to prevent too-fast scrolling)
    this.menuNavCooldown = 0;
    this.menuNavCooldownTime = 0.2; // 200ms between menu nav inputs

    this.setupKeyboardListeners();
    this.setupTouchListeners();
    this.setupGamepadListeners();

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

  setupGamepadListeners() {
    window.addEventListener('gamepadconnected', (e) => {
      console.log(`Gamepad connected: ${e.gamepad.id}`);
      this.gamepadConnected = true;
      this.gamepadIndex = e.gamepad.index;
    });

    window.addEventListener('gamepaddisconnected', (e) => {
      console.log(`Gamepad disconnected: ${e.gamepad.id}`);
      if (this.gamepadIndex === e.gamepad.index) {
        this.gamepadConnected = false;
        this.gamepadIndex = null;
        this.gamepadMovement = { x: 0, y: 0 };
        this.resetGamepadButtons();
      }
    });
  }

  resetGamepadButtons() {
    for (const key in this.gamepadButtons) {
      this.gamepadButtons[key] = false;
      this.prevGamepadButtons[key] = false;
    }
  }

  applyDeadzone(value) {
    if (Math.abs(value) < this.deadzone) {
      return 0;
    }
    // Normalize the value to 0-1 range after deadzone
    const sign = value > 0 ? 1 : -1;
    return sign * (Math.abs(value) - this.deadzone) / (1 - this.deadzone);
  }

  updateGamepad(delta) {
    if (!this.gamepadConnected || this.gamepadIndex === null) return;

    const gamepads = navigator.getGamepads();
    const gamepad = gamepads[this.gamepadIndex];

    if (!gamepad) return;

    // Store previous button states for edge detection
    this.prevGamepadButtons = { ...this.gamepadButtons };

    // Update button states
    this.gamepadButtons.a = gamepad.buttons[0]?.pressed || false;
    this.gamepadButtons.b = gamepad.buttons[1]?.pressed || false;
    this.gamepadButtons.start = gamepad.buttons[9]?.pressed || false;
    this.gamepadButtons.dpadUp = gamepad.buttons[12]?.pressed || false;
    this.gamepadButtons.dpadDown = gamepad.buttons[13]?.pressed || false;
    this.gamepadButtons.dpadLeft = gamepad.buttons[14]?.pressed || false;
    this.gamepadButtons.dpadRight = gamepad.buttons[15]?.pressed || false;

    // Update left stick movement with deadzone
    const rawX = gamepad.axes[0] || 0;
    const rawY = gamepad.axes[1] || 0;

    this.gamepadMovement.x = this.applyDeadzone(rawX);
    this.gamepadMovement.y = this.applyDeadzone(rawY);

    // Update menu navigation cooldown
    if (this.menuNavCooldown > 0) {
      this.menuNavCooldown -= delta;
    }

    // Menu navigation from D-pad or left stick
    this.menuNavigation = { x: 0, y: 0 };

    if (this.menuNavCooldown <= 0) {
      // D-pad navigation
      if (this.gamepadButtons.dpadUp) {
        this.menuNavigation.y = -1;
        this.menuNavCooldown = this.menuNavCooldownTime;
      } else if (this.gamepadButtons.dpadDown) {
        this.menuNavigation.y = 1;
        this.menuNavCooldown = this.menuNavCooldownTime;
      }
      if (this.gamepadButtons.dpadLeft) {
        this.menuNavigation.x = -1;
        this.menuNavCooldown = this.menuNavCooldownTime;
      } else if (this.gamepadButtons.dpadRight) {
        this.menuNavigation.x = 1;
        this.menuNavCooldown = this.menuNavCooldownTime;
      }

      // Left stick navigation (for menus, with threshold)
      const stickThreshold = 0.5;
      if (this.menuNavigation.x === 0 && this.menuNavigation.y === 0) {
        if (this.gamepadMovement.y < -stickThreshold) {
          this.menuNavigation.y = -1;
          this.menuNavCooldown = this.menuNavCooldownTime;
        } else if (this.gamepadMovement.y > stickThreshold) {
          this.menuNavigation.y = 1;
          this.menuNavCooldown = this.menuNavCooldownTime;
        }
        if (this.gamepadMovement.x < -stickThreshold) {
          this.menuNavigation.x = -1;
          this.menuNavCooldown = this.menuNavCooldownTime;
        } else if (this.gamepadMovement.x > stickThreshold) {
          this.menuNavigation.x = 1;
          this.menuNavCooldown = this.menuNavCooldownTime;
        }
      }
    }
  }

  // Check if a button was just pressed this frame (edge detection)
  isGamepadButtonJustPressed(button) {
    return this.gamepadButtons[button] && !this.prevGamepadButtons[button];
  }

  // Check if start/pause button was just pressed
  isPauseJustPressed() {
    return this.isGamepadButtonJustPressed('start');
  }

  // Check if confirm button (A) was just pressed
  isConfirmJustPressed() {
    return this.isGamepadButtonJustPressed('a');
  }

  // Check if cancel/back button (B) was just pressed
  isCancelJustPressed() {
    return this.isGamepadButtonJustPressed('b');
  }

  // Get menu navigation input (returns { x, y } where values are -1, 0, or 1)
  getMenuNavigation() {
    return this.menuNavigation;
  }

  // Check if gamepad is connected
  isGamepadConnected() {
    return this.gamepadConnected;
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

  update(delta = 0.016) {
    // Update gamepad state (must be called every frame for polling)
    this.updateGamepad(delta);

    if (this.isMobile && this.joystickActive) {
      // Mobile touch joystick
      this.movement.x = this.joystickPosition.x;
      this.movement.y = this.joystickPosition.y;
    } else if (this.gamepadConnected && (Math.abs(this.gamepadMovement.x) > 0 || Math.abs(this.gamepadMovement.y) > 0)) {
      // Gamepad left stick (takes priority when being used)
      this.movement.x = this.gamepadMovement.x;
      this.movement.y = this.gamepadMovement.y;
    } else {
      // Keyboard input
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
