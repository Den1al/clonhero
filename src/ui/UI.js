import { Audio } from '../core/Audio.js';
import { scoreboardManager } from '../utils/ScoreboardManager.js';
import { difficultyManager, DifficultyLevel } from '../systems/DifficultyManager.js';

export class UI {
  constructor() {
    this.elements = {
      healthBar: document.getElementById('health-bar'),
      healthText: document.getElementById('health-text'),
      xpBar: document.getElementById('xp-bar'),
      levelDisplay: document.getElementById('level-display'),
      stageInfo: document.getElementById('stage-info'),
      abilityBar: document.getElementById('ability-bar'),
      pauseBtn: document.getElementById('pause-btn'),
      waveAnnouncement: document.getElementById('wave-announcement'),

      startMenu: document.getElementById('start-menu'),
      pauseMenu: document.getElementById('pause-menu'),
      settingsMenu: document.getElementById('settings-menu'),
      helpMenu: document.getElementById('help-menu'),
      levelupScreen: document.getElementById('levelup-screen'),
      gameoverScreen: document.getElementById('gameover-screen'),
      victoryScreen: document.getElementById('victory-screen'),

      startBtn: document.getElementById('start-btn'),
      settingsBtn: document.getElementById('settings-btn'),
      helpBtn: document.getElementById('help-btn'),
      pauseHelpBtn: document.getElementById('pause-help-btn'),
      helpBackBtn: document.getElementById('help-back-btn'),
      helpAbilityDetail: document.getElementById('help-ability-detail'),
      helpAbilityDetailBackdrop: document.getElementById('help-ability-detail-backdrop'),
      helpAbilityDetailClose: document.getElementById('help-ability-detail-close'),
      helpAbilityDetailIcon: document.getElementById('help-ability-detail-icon'),
      helpAbilityDetailTitle: document.getElementById('help-ability-detail-title'),
      helpAbilityDetailCategory: document.getElementById('help-ability-detail-category'),
      helpAbilityDetailDesc: document.getElementById('help-ability-detail-desc'),
      helpAbilityDetailStacks: document.getElementById('help-ability-detail-stacks'),
      helpAbilityDetailRequires: document.getElementById('help-ability-detail-requires'),
      helpAbilityDetailRequiresName: document.getElementById('help-ability-detail-requires-name'),
      pauseSettingsBtn: document.getElementById('pause-settings-btn'),
      settingsBackBtn: document.getElementById('settings-back-btn'),
      resumeBtn: document.getElementById('resume-btn'),
      quitBtn: document.getElementById('quit-btn'),
      restartBtn: document.getElementById('restart-btn'),
      goMenuBtn: document.getElementById('go-menu-btn'),
      victoryRestartBtn: document.getElementById('victory-restart-btn'),
      vicMenuBtn: document.getElementById('vic-menu-btn'),

      // Settings controls
      musicToggle: document.getElementById('music-toggle'),
      sfxToggle: document.getElementById('sfx-toggle'),
      musicVolume: document.getElementById('music-volume'),
      sfxVolume: document.getElementById('sfx-volume'),
      clearScoreboardBtn: document.getElementById('clear-scoreboard-btn'),

      abilityChoices: document.getElementById('ability-choices'),

      goLevel: document.getElementById('go-level'),
      goKills: document.getElementById('go-kills'),
      goTime: document.getElementById('go-time'),
      goScore: document.getElementById('go-score'),
      goRankBadge: document.getElementById('go-rank-badge'),
      goScoreboardContainer: document.getElementById('go-scoreboard-container'),
      vicLevel: document.getElementById('vic-level'),
      vicKills: document.getElementById('vic-kills'),
      vicTime: document.getElementById('vic-time'),
      vicScore: document.getElementById('vic-score'),
      vicRankBadge: document.getElementById('vic-rank-badge'),
      vicScoreboardContainer: document.getElementById('vic-scoreboard-container'),

      // Scoreboard elements
      scoreboardContainer: document.getElementById('scoreboard-container'),
      scoreboardTotal: document.getElementById('scoreboard-total'),
      scoreboardWins: document.getElementById('scoreboard-wins'),

      // Difficulty selection
      difficultyOptions: document.getElementById('difficulty-options'),

      // Level up status elements
      levelupHealthBar: document.getElementById('levelup-health-bar'),
      levelupHealthText: document.getElementById('levelup-health-text'),
      levelupAbilities: document.getElementById('levelup-abilities')
    };

    this.damageNumbers = [];
    this.callbacks = {};
    this.previousMenu = null; // Track where we came from when opening settings
    this.selectedDifficulty = DifficultyLevel.NORMAL;

    // Create screen fade overlay for gate transitions
    this.screenFadeOverlay = this.createScreenFadeOverlay();
    this.fadeAnimationId = null;

    this.setupEventListeners();
    this.initializeSettingsUI();
    this.setupDifficultySelection();
    this.refreshScoreboard();

    // Initialize and play music from the main menu
    Audio.init();
    Audio.playMusic();
  }

  createScreenFadeOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'screen-fade-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(111, 218, 201, 0.3), rgba(10, 10, 15, 1));
      pointer-events: none;
      z-index: 500;
      opacity: 0;
      transition: opacity 0.1s ease-out;
    `;
    document.body.appendChild(overlay);
    return overlay;
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

    this.elements.goMenuBtn.addEventListener('click', () => {
      this.triggerCallback('quit');
    });

    this.elements.victoryRestartBtn.addEventListener('click', () => {
      this.triggerCallback('restart');
    });

    this.elements.vicMenuBtn.addEventListener('click', () => {
      this.triggerCallback('quit');
    });

    // Settings buttons
    this.elements.settingsBtn.addEventListener('click', () => {
      this.previousMenu = 'start';
      this.showSettingsMenu();
    });

    this.elements.pauseSettingsBtn.addEventListener('click', () => {
      this.previousMenu = 'pause';
      this.showSettingsMenu();
    });

    this.elements.settingsBackBtn.addEventListener('click', () => {
      this.hideSettingsMenu();
    });

    // Help buttons
    this.elements.helpBtn.addEventListener('click', () => {
      this.previousMenu = 'start';
      this.showHelpMenu();
    });

    this.elements.pauseHelpBtn.addEventListener('click', () => {
      this.previousMenu = 'pause';
      this.showHelpMenu();
    });

    this.elements.helpBackBtn.addEventListener('click', () => {
      this.hideHelpMenu();
    });

    // Ability detail popup
    this.setupAbilityDetailPopup();

    // Settings controls
    this.elements.musicToggle.addEventListener('click', () => {
      const enabled = Audio.toggleMusic();
      this.updateToggleButton(this.elements.musicToggle, enabled);
    });

    this.elements.sfxToggle.addEventListener('click', () => {
      const enabled = Audio.toggleSound();
      this.updateToggleButton(this.elements.sfxToggle, enabled);
    });

    this.elements.musicVolume.addEventListener('input', (e) => {
      const volume = e.target.value / 100;
      Audio.setMusicVolume(volume);
      this.updateSliderTrack(e.target);
    });

    this.elements.sfxVolume.addEventListener('input', (e) => {
      const volume = e.target.value / 100;
      Audio.setSoundVolume(volume);
      this.updateSliderTrack(e.target);
    });

    // Clear scoreboard button
    this.elements.clearScoreboardBtn.addEventListener('click', () => {
      this.showClearScoreboardConfirm();
    });
  }

  setupDifficultySelection() {
    if (!this.elements.difficultyOptions) return;

    const buttons = this.elements.difficultyOptions.querySelectorAll('.difficulty-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove selected class from all buttons
        buttons.forEach(b => b.classList.remove('selected'));
        // Add selected class to clicked button
        btn.classList.add('selected');

        // Update selected difficulty
        const difficulty = btn.dataset.difficulty;
        this.selectedDifficulty = difficulty;
        difficultyManager.setDifficulty(difficulty);

        // Play sound feedback
        Audio.play('abilitySelect');
      });
    });
  }

  getSelectedDifficulty() {
    return this.selectedDifficulty;
  }

  initializeSettingsUI() {
    // Set initial toggle states
    this.updateToggleButton(this.elements.musicToggle, Audio.musicEnabled);
    this.updateToggleButton(this.elements.sfxToggle, Audio.soundEnabled);

    // Set initial slider values
    this.elements.musicVolume.value = Audio.musicVolume * 100;
    this.elements.sfxVolume.value = Audio.soundVolume * 100;

    // Update slider track colors
    this.updateSliderTrack(this.elements.musicVolume);
    this.updateSliderTrack(this.elements.sfxVolume);
  }

  updateToggleButton(button, enabled) {
    const icon = button.querySelector('.toggle-icon');
    const text = button.querySelector('.toggle-text');

    if (enabled) {
      button.classList.add('active');
      icon.textContent = '🔊';
      text.textContent = 'ON';
    } else {
      button.classList.remove('active');
      icon.textContent = '🔇';
      text.textContent = 'OFF';
    }
  }

  updateSliderTrack(slider) {
    const value = slider.value;
    slider.style.setProperty('--value', `${value}%`);
  }

  showSettingsMenu() {
    this.elements.startMenu.classList.add('hidden');
    this.elements.pauseMenu.classList.add('hidden');
    this.elements.settingsMenu.classList.remove('hidden');
  }

  hideSettingsMenu() {
    this.elements.settingsMenu.classList.add('hidden');

    if (this.previousMenu === 'start') {
      this.elements.startMenu.classList.remove('hidden');
    } else if (this.previousMenu === 'pause') {
      this.elements.pauseMenu.classList.remove('hidden');
    }
  }

  showHelpMenu() {
    this.elements.startMenu.classList.add('hidden');
    this.elements.pauseMenu.classList.add('hidden');
    this.elements.helpMenu.classList.remove('hidden');
  }

  hideHelpMenu() {
    this.elements.helpMenu.classList.add('hidden');
    this.hideAbilityDetail();

    if (this.previousMenu === 'start') {
      this.elements.startMenu.classList.remove('hidden');
    } else if (this.previousMenu === 'pause') {
      this.elements.pauseMenu.classList.remove('hidden');
    }
  }

  setupAbilityDetailPopup() {
    // Get all ability tags
    const abilityTags = document.querySelectorAll('.help-ability-tag[data-ability]');

    abilityTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const data = {
          icon: tag.dataset.icon,
          name: tag.dataset.name,
          desc: tag.dataset.desc,
          category: tag.dataset.category,
          stacks: tag.dataset.stacks,
          requires: tag.dataset.requires || null
        };
        this.showAbilityDetail(data);
        Audio.play('abilitySelect');
      });
    });

    // Close button
    this.elements.helpAbilityDetailClose.addEventListener('click', () => {
      this.hideAbilityDetail();
    });

    // Backdrop click to close
    this.elements.helpAbilityDetailBackdrop.addEventListener('click', () => {
      this.hideAbilityDetail();
    });
  }

  showAbilityDetail(data) {
    this.elements.helpAbilityDetailIcon.textContent = data.icon;
    this.elements.helpAbilityDetailTitle.textContent = data.name;
    this.elements.helpAbilityDetailCategory.textContent = data.category;
    this.elements.helpAbilityDetailDesc.textContent = data.desc;
    this.elements.helpAbilityDetailStacks.textContent = data.stacks;

    if (data.requires) {
      this.elements.helpAbilityDetailRequires.style.display = 'flex';
      this.elements.helpAbilityDetailRequiresName.textContent = data.requires;
    } else {
      this.elements.helpAbilityDetailRequires.style.display = 'none';
    }

    this.elements.helpAbilityDetailBackdrop.classList.add('show');
    this.elements.helpAbilityDetail.classList.add('show');
  }

  hideAbilityDetail() {
    this.elements.helpAbilityDetailBackdrop.classList.remove('show');
    this.elements.helpAbilityDetail.classList.remove('show');
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
    this.elements.healthText.textContent = `${Math.ceil(current)} / ${Math.ceil(max)}`;
  }

  // Show damage taken by the player (red, near the player)
  showPlayerDamage(damage, screenX, screenY) {
    const element = document.createElement('div');
    element.className = 'player-damage-number';
    element.textContent = `-${Math.round(damage)}`;

    // Position near the player with some random offset
    const offsetX = Math.random() * 30 - 15;
    const offsetY = Math.random() * 20 - 10;
    element.style.left = `${screenX + offsetX}px`;
    element.style.top = `${screenY + offsetY}px`;

    document.getElementById('ui-overlay').appendChild(element);

    setTimeout(() => {
      element.remove();
    }, 1000);
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
        stackBadge.className = 'stack-badge';
        stackBadge.textContent = ability.stacks;
        icon.appendChild(stackBadge);
      }

      this.elements.abilityBar.appendChild(icon);
    }
  }

  showStartMenu() {
    this.hideAllMenus();
    this.elements.startMenu.classList.remove('hidden');
    this.refreshScoreboard();
  }

  showPauseMenu() {
    this.hideAllMenus();
    this.elements.pauseMenu.classList.remove('hidden');
  }

  showLevelUpScreen(abilities, onSelect, playerStats = null) {
    this.hideAllMenus();
    this.elements.levelupScreen.classList.remove('hidden');

    // Update player status if provided
    if (playerStats) {
      this.updateLevelUpStatus(playerStats);
    }

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

  updateLevelUpStatus(playerStats) {
    // Update health bar
    if (this.elements.levelupHealthBar && this.elements.levelupHealthText) {
      const healthPercent = (playerStats.health / playerStats.maxHealth) * 100;
      this.elements.levelupHealthBar.style.width = `${healthPercent}%`;
      this.elements.levelupHealthText.textContent = `${Math.ceil(playerStats.health)}/${playerStats.maxHealth}`;

      // Update health bar color based on percentage
      if (healthPercent <= 25) {
        this.elements.levelupHealthBar.style.background = 'var(--gradient-danger)';
      } else if (healthPercent <= 50) {
        this.elements.levelupHealthBar.style.background = 'linear-gradient(90deg, var(--health-mid), #e85d26)';
      } else {
        this.elements.levelupHealthBar.style.background = 'var(--gradient-health)';
      }
    }

    // Update abilities display
    if (this.elements.levelupAbilities && playerStats.abilities) {
      this.elements.levelupAbilities.innerHTML = '';

      for (const ability of playerStats.abilities) {
        const icon = document.createElement('div');
        icon.className = 'levelup-ability-icon';
        icon.innerHTML = ability.icon;
        icon.title = `${ability.name} x${ability.stacks}`;

        if (ability.stacks > 1) {
          const stackBadge = document.createElement('span');
          stackBadge.className = 'levelup-stack-badge';
          stackBadge.textContent = ability.stacks;
          icon.appendChild(stackBadge);
        }

        this.elements.levelupAbilities.appendChild(icon);
      }
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
    this.elements.goScore.textContent = stats.score ? stats.score.toLocaleString() : '0';

    // Show rank badge and populate end-game scoreboard
    this.showEndgameScoreboard(stats.runId, this.elements.goRankBadge, this.elements.goScoreboardContainer);
  }

  showVictory(stats) {
    this.hideAllMenus();
    this.elements.victoryScreen.classList.remove('hidden');

    this.elements.vicLevel.textContent = stats.level;
    this.elements.vicKills.textContent = stats.kills;
    this.elements.vicTime.textContent = this.formatTime(stats.time);
    this.elements.vicScore.textContent = stats.score ? stats.score.toLocaleString() : '0';

    // Show rank badge and populate end-game scoreboard
    this.showEndgameScoreboard(stats.runId, this.elements.vicRankBadge, this.elements.vicScoreboardContainer);
  }

  hideAllMenus() {
    this.elements.startMenu.classList.add('hidden');
    this.elements.pauseMenu.classList.add('hidden');
    this.elements.settingsMenu.classList.add('hidden');
    this.elements.helpMenu.classList.add('hidden');
    this.elements.levelupScreen.classList.add('hidden');
    this.elements.gameoverScreen.classList.add('hidden');
    this.elements.victoryScreen.classList.add('hidden');
  }

  showWaveAnnouncement(text, duration = 2000) {
    this.elements.waveAnnouncement.textContent = text;
    this.elements.waveAnnouncement.classList.remove('show');

    void this.elements.waveAnnouncement.offsetWidth;

    this.elements.waveAnnouncement.classList.add('show');

    // Clear any existing timeout
    if (this.announcementTimeout) {
      clearTimeout(this.announcementTimeout);
    }

    this.announcementTimeout = setTimeout(() => {
      this.elements.waveAnnouncement.classList.remove('show');
    }, duration);
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

  showHealNumber(amount, screenX, screenY) {
    const element = document.createElement('div');
    element.className = 'heal-number';
    element.textContent = `+${Math.round(amount)}`;

    // Position near the player with some random offset
    const offsetX = Math.random() * 30 - 15;
    const offsetY = Math.random() * 20 - 10;
    element.style.left = `${screenX + offsetX}px`;
    element.style.top = `${screenY + offsetY}px`;

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
      font-family: 'Orbitron', sans-serif;
      font-size: 36px;
      font-weight: 700;
      color: #fbbf24;
      text-shadow: 0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 191, 36, 0.4);
      animation: xpCollectedAnim 1.5s ease-out forwards;
      pointer-events: none;
      z-index: 1000;
      letter-spacing: 2px;
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
      <div class="god-mode-title">GOD MODE</div>
      <div class="god-mode-keys">
        <span><kbd>S</kbd> Skill</span>
        <span><kbd>E</kbd> Victory</span>
        <span><kbd>X</kbd> Die</span>
        <span><kbd>R</kbd> Clear Room</span>
      </div>
    `;
    indicator.style.cssText = `
      position: fixed;
      top: 130px;
      right: 24px;
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.95), rgba(217, 119, 6, 0.95));
      color: #0a0a0f;
      padding: 12px 18px;
      border-radius: 12px;
      font-family: 'Orbitron', sans-serif;
      font-size: 12px;
      font-weight: 700;
      z-index: 9999;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 40px rgba(251, 191, 36, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.3);
      animation: godModePulse 2s ease-in-out infinite;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    `;

    // Add styles for the indicator content
    const style = document.createElement('style');
    style.textContent = `
      @keyframes godModePulse {
        0%, 100% { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 40px rgba(251, 191, 36, 0.4); }
        50% { box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 60px rgba(251, 191, 36, 0.6); }
      }
      #god-mode-indicator .god-mode-title {
        text-align: center;
        font-size: 14px;
        margin-bottom: 10px;
        letter-spacing: 3px;
        text-transform: uppercase;
      }
      #god-mode-indicator .god-mode-keys {
        display: flex;
        gap: 12px;
        font-size: 11px;
        font-weight: 500;
        font-family: 'Rajdhani', sans-serif;
      }
      #god-mode-indicator kbd {
        background: rgba(0, 0, 0, 0.25);
        padding: 3px 8px;
        border-radius: 6px;
        font-family: 'Orbitron', monospace;
        font-weight: 700;
        font-size: 10px;
        margin-right: 4px;
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(indicator);
  }

  showBonusSelection(options, onSelect) {
    this.hideAllMenus();

    // Create or get the bonus screen
    let bonusScreen = document.getElementById('bonus-selection-screen');
    if (!bonusScreen) {
      bonusScreen = document.createElement('div');
      bonusScreen.id = 'bonus-selection-screen';
      bonusScreen.className = 'menu-overlay';
      document.getElementById('game-container').appendChild(bonusScreen);
    }

    bonusScreen.classList.remove('hidden');
    bonusScreen.innerHTML = `
      <h1 class="bonus-title">Room Bonus</h1>
      <p class="bonus-subtitle">Choose a small reward</p>
      <div class="bonus-choices" id="bonus-choices"></div>
    `;

    const choicesContainer = document.getElementById('bonus-choices');

    // Create option cards (similar to ability cards but smaller/simpler)
    options.forEach((option) => {
      const card = document.createElement('div');
      card.className = 'bonus-card';
      card.innerHTML = `
        <div class="bonus-card-icon">${option.icon}</div>
        <div class="bonus-card-name">${option.name}</div>
        <div class="bonus-card-desc">${option.description}</div>
      `;

      card.addEventListener('click', () => {
        bonusScreen.classList.add('hidden');
        onSelect(option);
      });

      choicesContainer.appendChild(card);
    });
  }

  hideBonusSelection() {
    const bonusScreen = document.getElementById('bonus-selection-screen');
    if (bonusScreen) {
      bonusScreen.classList.add('hidden');
    }
  }

  /**
   * Set screen fade opacity directly (for gate transitions)
   * @param {number} opacity - 0 to 1
   */
  setScreenFade(opacity) {
    this.screenFadeOverlay.style.opacity = opacity;
  }

  /**
   * Animate screen fade in (from black to transparent)
   * @param {number} duration - Duration in seconds
   */
  fadeScreenIn(duration = 0.5) {
    if (this.fadeAnimationId) {
      cancelAnimationFrame(this.fadeAnimationId);
    }

    const startTime = performance.now();
    const startOpacity = 1;

    const animate = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const opacity = startOpacity * (1 - eased);

      this.screenFadeOverlay.style.opacity = opacity;

      if (progress < 1) {
        this.fadeAnimationId = requestAnimationFrame(animate);
      } else {
        this.fadeAnimationId = null;
      }
    };

    this.fadeAnimationId = requestAnimationFrame(animate);
  }

  /**
   * Animate screen fade out (from transparent to black)
   * @param {number} duration - Duration in seconds
   * @param {Function} onComplete - Callback when fade is complete
   */
  fadeScreenOut(duration = 0.5, onComplete = null) {
    if (this.fadeAnimationId) {
      cancelAnimationFrame(this.fadeAnimationId);
    }

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease in cubic
      const eased = progress * progress * progress;
      this.screenFadeOverlay.style.opacity = eased;

      if (progress < 1) {
        this.fadeAnimationId = requestAnimationFrame(animate);
      } else {
        this.fadeAnimationId = null;
        if (onComplete) onComplete();
      }
    };

    this.fadeAnimationId = requestAnimationFrame(animate);
  }

  /**
   * Show confirmation dialog for clearing the scoreboard
   */
  showClearScoreboardConfirm() {
    // Create confirmation dialog
    let confirmDialog = document.getElementById('confirm-dialog');
    if (!confirmDialog) {
      confirmDialog = document.createElement('div');
      confirmDialog.id = 'confirm-dialog';
      confirmDialog.className = 'menu-overlay';
      confirmDialog.style.zIndex = '200';
      document.getElementById('game-container').appendChild(confirmDialog);
    }

    confirmDialog.classList.remove('hidden');
    confirmDialog.innerHTML = `
      <div class="confirm-content">
        <h2 class="confirm-title">Clear Scoreboard?</h2>
        <p class="confirm-message">This will permanently delete all your run history. This cannot be undone.</p>
        <div class="confirm-buttons">
          <button id="confirm-cancel" class="menu-btn secondary">Cancel</button>
          <button id="confirm-clear" class="menu-btn danger-btn">Clear All</button>
        </div>
      </div>
    `;

    // Add event listeners
    document.getElementById('confirm-cancel').addEventListener('click', () => {
      confirmDialog.classList.add('hidden');
    });

    document.getElementById('confirm-clear').addEventListener('click', () => {
      scoreboardManager.clearAll();
      this.refreshScoreboard();
      confirmDialog.classList.add('hidden');
    });
  }

  /**
   * Refresh the scoreboard display on the main menu
   */
  refreshScoreboard() {
    const runs = scoreboardManager.getRunsByScore();
    const totalRuns = scoreboardManager.getTotalRuns();
    const victories = scoreboardManager.getVictoryCount();

    // Update stats
    this.elements.scoreboardTotal.textContent = totalRuns;
    this.elements.scoreboardWins.textContent = victories;

    // Update scoreboard container
    if (runs.length === 0) {
      this.elements.scoreboardContainer.innerHTML = `
        <div class="scoreboard-empty">No runs yet. Play a game!</div>
      `;
      return;
    }

    // Show top 10 runs
    const topRuns = runs.slice(0, 10);
    let html = '';

    topRuns.forEach((run, index) => {
      const rankClass = index < 3 ? `top-${index + 1}` : '';
      const victoryClass = run.victory ? 'victory' : '';
      const victoryBadge = run.victory ? '<span class="scoreboard-victory-badge">&#9733;</span>' : '';
      const stageName = scoreboardManager.getStageName(run.stage);

      html += `
        <div class="scoreboard-row ${victoryClass}">
          <div class="scoreboard-rank ${rankClass}">#${index + 1}</div>
          <div class="scoreboard-info">
            <div class="scoreboard-info-main">
              Lvl ${run.level} ${victoryBadge}
            </div>
            <div class="scoreboard-info-sub">
              <span>${run.kills} kills</span>
              <span>${scoreboardManager.formatTime(run.time)}</span>
              <span>${stageName}</span>
            </div>
          </div>
          <div class="scoreboard-score">${run.score.toLocaleString()}</div>
          <div class="scoreboard-date">${scoreboardManager.formatDate(run.date)}</div>
        </div>
      `;
    });

    this.elements.scoreboardContainer.innerHTML = html;
  }

  /**
   * Show scoreboard on end-game screens with the current run highlighted
   * @param {number} currentRunId - ID of the current run to highlight
   * @param {HTMLElement} rankBadgeElement - Element to display the rank badge
   * @param {HTMLElement} scoreboardContainerElement - Element to display the scoreboard
   */
  showEndgameScoreboard(currentRunId, rankBadgeElement, scoreboardContainerElement) {
    const runs = scoreboardManager.getRunsByScore();
    const currentRank = scoreboardManager.getRankById(currentRunId);
    const totalRuns = scoreboardManager.getTotalRuns();

    // Show rank badge
    if (currentRank > 0) {
      rankBadgeElement.classList.remove('hidden');
      if (currentRank === 1) {
        rankBadgeElement.innerHTML = `<span class="rank-badge-icon">&#127942;</span> New High Score!`;
        rankBadgeElement.className = 'rank-badge rank-badge-gold';
      } else if (currentRank <= 3) {
        rankBadgeElement.innerHTML = `<span class="rank-badge-icon">&#127941;</span> Rank #${currentRank} of ${totalRuns}`;
        rankBadgeElement.className = 'rank-badge rank-badge-top3';
      } else if (currentRank <= 10) {
        rankBadgeElement.innerHTML = `<span class="rank-badge-icon">&#11088;</span> Rank #${currentRank} of ${totalRuns}`;
        rankBadgeElement.className = 'rank-badge rank-badge-top10';
      } else {
        rankBadgeElement.innerHTML = `Rank #${currentRank} of ${totalRuns}`;
        rankBadgeElement.className = 'rank-badge';
      }
    } else {
      rankBadgeElement.classList.add('hidden');
    }

    // Build scoreboard HTML - show top 5 scores
    if (runs.length === 0) {
      scoreboardContainerElement.innerHTML = `
        <div class="endgame-scoreboard-empty">No previous runs</div>
      `;
      return;
    }

    // Get top 5 runs, but ensure current run is visible
    let displayRuns = runs.slice(0, 5);
    const currentRunInTop5 = displayRuns.some(r => r.id === currentRunId);

    // If current run not in top 5 and exists, add it with separator
    let currentRunData = null;
    if (!currentRunInTop5 && currentRank > 0) {
      currentRunData = runs.find(r => r.id === currentRunId);
    }

    let html = '';

    displayRuns.forEach((run, index) => {
      const isCurrentRun = run.id === currentRunId;
      const rankNum = index + 1;
      const rankClass = rankNum === 1 ? 'rank-gold' : rankNum === 2 ? 'rank-silver' : rankNum === 3 ? 'rank-bronze' : '';
      const currentClass = isCurrentRun ? 'current-run' : '';
      const victoryBadge = run.victory ? '<span class="endgame-victory-badge">&#9733;</span>' : '';

      html += `
        <div class="endgame-scoreboard-row ${currentClass} ${rankClass}">
          <div class="endgame-rank">#${rankNum}</div>
          <div class="endgame-run-info">
            <span class="endgame-level">Lvl ${run.level}</span>
            ${victoryBadge}
            <span class="endgame-kills">${run.kills} kills</span>
          </div>
          <div class="endgame-score">${run.score.toLocaleString()}</div>
        </div>
      `;
    });

    // Add current run at bottom if not in top 5
    if (currentRunData) {
      html += `
        <div class="endgame-scoreboard-separator">
          <span>&#8942;</span>
        </div>
        <div class="endgame-scoreboard-row current-run">
          <div class="endgame-rank">#${currentRank}</div>
          <div class="endgame-run-info">
            <span class="endgame-level">Lvl ${currentRunData.level}</span>
            ${currentRunData.victory ? '<span class="endgame-victory-badge">&#9733;</span>' : ''}
            <span class="endgame-kills">${currentRunData.kills} kills</span>
          </div>
          <div class="endgame-score">${currentRunData.score.toLocaleString()}</div>
        </div>
      `;
    }

    scoreboardContainerElement.innerHTML = html;
  }
}
