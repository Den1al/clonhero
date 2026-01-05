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
}
