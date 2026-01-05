export class UI {
  constructor() {
    this.elements = {
      healthBar: document.getElementById('health-bar'),
      xpBar: document.getElementById('xp-bar'),
      levelDisplay: document.getElementById('level-display'),
      stageInfo: document.getElementById('stage-info'),
      abilityBar: document.getElementById('ability-bar'),
      pauseBtn: document.getElementById('pause-btn'),
      waveAnnouncement: document.getElementById('wave-announcement'),

      startMenu: document.getElementById('start-menu'),
      pauseMenu: document.getElementById('pause-menu'),
      levelupScreen: document.getElementById('levelup-screen'),
      gameoverScreen: document.getElementById('gameover-screen'),
      victoryScreen: document.getElementById('victory-screen'),

      startBtn: document.getElementById('start-btn'),
      resumeBtn: document.getElementById('resume-btn'),
      quitBtn: document.getElementById('quit-btn'),
      restartBtn: document.getElementById('restart-btn'),
      victoryRestartBtn: document.getElementById('victory-restart-btn'),

      abilityChoices: document.getElementById('ability-choices'),

      goLevel: document.getElementById('go-level'),
      goKills: document.getElementById('go-kills'),
      goTime: document.getElementById('go-time'),
      vicLevel: document.getElementById('vic-level'),
      vicKills: document.getElementById('vic-kills'),
      vicTime: document.getElementById('vic-time')
    };

    this.damageNumbers = [];
    this.callbacks = {};

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.elements.startBtn.addEventListener('click', () => {
      this.triggerCallback('start');
    });

    this.elements.pauseBtn.addEventListener('click', () => {
      this.triggerCallback('pause');
    });

    this.elements.resumeBtn.addEventListener('click', () => {
      this.triggerCallback('resume');
    });

    this.elements.quitBtn.addEventListener('click', () => {
      this.triggerCallback('quit');
    });

    this.elements.restartBtn.addEventListener('click', () => {
      this.triggerCallback('restart');
    });

    this.elements.victoryRestartBtn.addEventListener('click', () => {
      this.triggerCallback('restart');
    });
  }

  on(event, callback) {
    this.callbacks[event] = callback;
  }

  triggerCallback(event, data) {
    if (this.callbacks[event]) {
      this.callbacks[event](data);
    }
  }

  updateHealth(current, max) {
    const percent = (current / max) * 100;
    this.elements.healthBar.style.width = `${percent}%`;
  }

  updateXP(current, required) {
    const percent = (current / required) * 100;
    this.elements.xpBar.style.width = `${percent}%`;
  }

  updateLevel(level) {
    this.elements.levelDisplay.textContent = `Level ${level}`;
  }

  updateStageInfo(stage, room) {
    this.elements.stageInfo.textContent = `Stage ${stage} - Room ${room}`;
  }

  updateAbilityBar(abilities) {
    this.elements.abilityBar.innerHTML = '';

    for (const ability of abilities) {
      const icon = document.createElement('div');
      icon.className = 'ability-icon';
      icon.innerHTML = ability.icon;
      icon.title = `${ability.name} x${ability.stacks}`;

      if (ability.stacks > 1) {
        const stackBadge = document.createElement('span');
        stackBadge.style.cssText = `
          position: absolute;
          bottom: -5px;
          right: -5px;
          background: #e74c3c;
          color: white;
          font-size: 10px;
          padding: 2px 5px;
          border-radius: 10px;
        `;
        stackBadge.textContent = ability.stacks;
        icon.style.position = 'relative';
        icon.appendChild(stackBadge);
      }

      this.elements.abilityBar.appendChild(icon);
    }
  }

  showStartMenu() {
    this.hideAllMenus();
    this.elements.startMenu.classList.remove('hidden');
  }

  showPauseMenu() {
    this.hideAllMenus();
    this.elements.pauseMenu.classList.remove('hidden');
  }

  showLevelUpScreen(abilities, onSelect) {
    this.hideAllMenus();
    this.elements.levelupScreen.classList.remove('hidden');

    this.elements.abilityChoices.innerHTML = '';

    for (const ability of abilities) {
      const card = document.createElement('div');
      card.className = 'ability-card';
      card.innerHTML = `
        <div class="ability-card-icon">${ability.icon}</div>
        <div class="ability-card-name">${ability.name}</div>
        <div class="ability-card-desc">${ability.description}</div>
      `;

      card.addEventListener('click', () => {
        onSelect(ability);
        this.hideLevelUpScreen();
      });

      this.elements.abilityChoices.appendChild(card);
    }
  }

  hideLevelUpScreen() {
    this.elements.levelupScreen.classList.add('hidden');
  }

  showGameOver(stats) {
    this.hideAllMenus();
    this.elements.gameoverScreen.classList.remove('hidden');

    this.elements.goLevel.textContent = stats.level;
    this.elements.goKills.textContent = stats.kills;
    this.elements.goTime.textContent = this.formatTime(stats.time);
  }

  showVictory(stats) {
    this.hideAllMenus();
    this.elements.victoryScreen.classList.remove('hidden');

    this.elements.vicLevel.textContent = stats.level;
    this.elements.vicKills.textContent = stats.kills;
    this.elements.vicTime.textContent = this.formatTime(stats.time);
  }

  hideAllMenus() {
    this.elements.startMenu.classList.add('hidden');
    this.elements.pauseMenu.classList.add('hidden');
    this.elements.levelupScreen.classList.add('hidden');
    this.elements.gameoverScreen.classList.add('hidden');
    this.elements.victoryScreen.classList.add('hidden');
  }

  showWaveAnnouncement(text) {
    this.elements.waveAnnouncement.textContent = text;
    this.elements.waveAnnouncement.classList.remove('show');

    void this.elements.waveAnnouncement.offsetWidth;

    this.elements.waveAnnouncement.classList.add('show');

    setTimeout(() => {
      this.elements.waveAnnouncement.classList.remove('show');
    }, 2000);
  }

  showDamageNumber(x, y, damage, isCrit = false) {
    const element = document.createElement('div');
    element.className = 'damage-number' + (isCrit ? ' crit' : '');
    element.textContent = Math.round(damage);
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    document.getElementById('ui-overlay').appendChild(element);

    setTimeout(() => {
      element.remove();
    }, 1000);
  }

  showXPCollected(amount) {
    const element = document.createElement('div');
    element.className = 'xp-collected';
    element.textContent = `+${Math.round(amount)} XP`;
    element.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 32px;
      font-weight: bold;
      color: #2ecc71;
      text-shadow: 0 0 10px #27ae60, 0 0 20px #27ae60;
      animation: xpCollectedAnim 1.5s ease-out forwards;
      pointer-events: none;
      z-index: 1000;
    `;

    document.getElementById('ui-overlay').appendChild(element);

    setTimeout(() => {
      element.remove();
    }, 1500);
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  reset() {
    this.updateHealth(100, 100);
    this.updateXP(0, 100);
    this.updateLevel(1);
    this.updateStageInfo(1, 1);
    this.elements.abilityBar.innerHTML = '';
  }

  showGodModeIndicator() {
    // Create god mode indicator if it doesn't exist
    if (document.getElementById('god-mode-indicator')) return;

    const indicator = document.createElement('div');
    indicator.id = 'god-mode-indicator';
    indicator.innerHTML = `
      <div class="god-mode-title">🔥 GOD MODE 🔥</div>
      <div class="god-mode-keys">
        <span><kbd>S</kbd> Skill</span>
        <span><kbd>E</kbd> Victory</span>
        <span><kbd>X</kbd> Die</span>
      </div>
    `;
    indicator.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.9), rgba(255, 140, 0, 0.9));
      color: #1a1a2e;
      padding: 10px 15px;
      border-radius: 8px;
      font-family: 'Segoe UI', sans-serif;
      font-size: 12px;
      font-weight: bold;
      z-index: 9999;
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 140, 0, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
      animation: godModePulse 2s ease-in-out infinite;
    `;

    // Add styles for the indicator content
    const style = document.createElement('style');
    style.textContent = `
      @keyframes godModePulse {
        0%, 100% { box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 140, 0, 0.2); }
        50% { box-shadow: 0 4px 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 140, 0, 0.4); }
      }
      #god-mode-indicator .god-mode-title {
        text-align: center;
        font-size: 14px;
        margin-bottom: 8px;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      }
      #god-mode-indicator .god-mode-keys {
        display: flex;
        gap: 10px;
        font-size: 11px;
        font-weight: normal;
      }
      #god-mode-indicator kbd {
        background: rgba(0,0,0,0.2);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: monospace;
        font-weight: bold;
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(indicator);
  }
}
