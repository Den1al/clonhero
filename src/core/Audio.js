import { Howl, Howler } from 'howler';

class AudioManager {
  constructor() {
    this.sounds = {};
    this.music = null;
    this.initialized = false;

    // Load settings from localStorage or use defaults
    this.soundEnabled = this.loadSetting('soundEnabled', true);
    this.musicEnabled = this.loadSetting('musicEnabled', true);
    this.soundVolume = this.loadSetting('soundVolume', 0.5);
    this.musicVolume = this.loadSetting('musicVolume', 0.3);
  }

  // Load a setting from localStorage with a default fallback
  loadSetting(key, defaultValue) {
    try {
      const stored = localStorage.getItem(`clonhero_${key}`);
      if (stored === null) return defaultValue;
      return JSON.parse(stored);
    } catch {
      return defaultValue;
    }
  }

  // Save a setting to localStorage
  saveSetting(key, value) {
    try {
      localStorage.setItem(`clonhero_${key}`, JSON.stringify(value));
    } catch {
      // localStorage might be unavailable (private browsing, etc.)
    }
  }

  init() {
    if (this.initialized) return;
    this.initialized = true;

    this.sounds.shoot = this.createSound(this.generateShootSound(), 0.3);
    this.sounds.hit = this.createSound(this.generateHitSound(), 0.4);
    this.sounds.enemyDeath = this.createSound(this.generateEnemyDeathSound(), 0.4);
    this.sounds.playerHit = this.createSound(this.generatePlayerHitSound(), 0.5);
    this.sounds.xpPickup = this.createSound(this.generateXPPickupSound(), 0.3);
    this.sounds.levelUp = this.createSound(this.generateLevelUpSound(), 0.6);
    this.sounds.abilitySelect = this.createSound(this.generateAbilitySelectSound(), 0.5);
    this.sounds.doorOpen = this.createSound(this.generateDoorOpenSound(), 0.4);
    this.sounds.bossSpawn = this.createSound(this.generateBossSpawnSound(), 0.6);
    this.sounds.gateSpawn = this.createSound(this.generateGateSpawnSound(), 0.5);
    this.sounds.gateEnter = this.createSound(this.generateGateEnterSound(), 0.6);
    this.sounds.gateTransition = this.createSound(this.generateGateTransitionSound(), 0.7);

    this.music = new Howl({
      src: [this.generateMusicDataUrl()],
      format: ['wav'],
      loop: true,
      volume: this.musicVolume,
      html5: false // Use Web Audio API for gapless looping
    });
  }

  createSound(dataUrl, volume = 0.5) {
    return new Howl({
      src: [dataUrl],
      format: ['wav'],
      volume: volume * this.soundVolume
    });
  }

  generateTone(frequency, duration, type = 'sine', attack = 0.01, decay = 0.1) {
    const sampleRate = 44100;
    const samples = Math.floor(sampleRate * duration);
    const buffer = new Float32Array(samples);

    for (let i = 0; i < samples; i++) {
      const t = i / sampleRate;
      let envelope = 1;

      if (t < attack) {
        envelope = t / attack;
      } else if (t > duration - decay) {
        envelope = (duration - t) / decay;
      }

      let wave = 0;
      switch (type) {
        case 'sine':
          wave = Math.sin(2 * Math.PI * frequency * t);
          break;
        case 'square':
          wave = Math.sin(2 * Math.PI * frequency * t) > 0 ? 1 : -1;
          break;
        case 'sawtooth':
          wave = 2 * (t * frequency - Math.floor(t * frequency + 0.5));
          break;
        case 'triangle':
          wave = Math.abs(4 * (t * frequency - Math.floor(t * frequency + 0.5))) - 1;
          break;
        case 'noise':
          wave = Math.random() * 2 - 1;
          break;
      }

      buffer[i] = wave * envelope * 0.5;
    }

    return buffer;
  }

  bufferToWav(buffer, sampleRate = 44100) {
    const numChannels = 1;
    const bitsPerSample = 16;
    const byteRate = sampleRate * numChannels * bitsPerSample / 8;
    const blockAlign = numChannels * bitsPerSample / 8;
    const dataSize = buffer.length * numChannels * bitsPerSample / 8;
    const headerSize = 44;

    const arrayBuffer = new ArrayBuffer(headerSize + dataSize);
    const view = new DataView(arrayBuffer);

    const writeString = (offset, str) => {
      for (let i = 0; i < str.length; i++) {
        view.setUint8(offset + i, str.charCodeAt(i));
      }
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + dataSize, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitsPerSample, true);
    writeString(36, 'data');
    view.setUint32(40, dataSize, true);

    let offset = 44;
    for (let i = 0; i < buffer.length; i++) {
      const sample = Math.max(-1, Math.min(1, buffer[i]));
      view.setInt16(offset, sample * 0x7FFF, true);
      offset += 2;
    }

    const blob = new Blob([arrayBuffer], { type: 'audio/wav' });
    return URL.createObjectURL(blob);
  }

  generateShootSound() {
    const duration = 0.1;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      const freq = 800 - t * 4000;
      // Smooth envelope with guaranteed fade to zero
      const attack = Math.min(1, t * 100); // 10ms attack
      const decay = Math.exp(-t * 30);
      const fadeOut = t > duration - 0.01 ? (duration - t) / 0.01 : 1; // 10ms fade out
      const envelope = attack * decay * fadeOut;
      buffer[i] = Math.sin(2 * Math.PI * freq * t) * envelope * 0.3;
    }
    return this.bufferToWav(buffer);
  }

  generateHitSound() {
    const duration = 0.15;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      // Smooth envelope with attack and guaranteed fade to zero
      const attack = Math.min(1, t * 200); // 5ms attack
      const decay = Math.exp(-t * 25);
      const fadeOut = t > duration - 0.015 ? (duration - t) / 0.015 : 1; // 15ms fade out
      const envelope = attack * decay * fadeOut;
      const noise = (Math.random() * 2 - 1) * 0.3;
      const tone = Math.sin(2 * Math.PI * 200 * t) * 0.5;
      buffer[i] = (noise + tone) * envelope;
    }
    return this.bufferToWav(buffer);
  }

  generateEnemyDeathSound() {
    const duration = 0.3;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      const freq = 300 - t * 600;
      // Smooth envelope with attack and guaranteed fade to zero
      const attack = Math.min(1, t * 100); // 10ms attack
      const decay = Math.exp(-t * 10);
      const fadeOut = t > duration - 0.03 ? (duration - t) / 0.03 : 1; // 30ms fade out
      const envelope = attack * decay * fadeOut;
      const noise = (Math.random() * 2 - 1) * 0.2;
      buffer[i] = (Math.sin(2 * Math.PI * freq * t) * 0.6 + noise) * envelope;
    }
    return this.bufferToWav(buffer);
  }

  generatePlayerHitSound() {
    const duration = 0.2;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      // Smooth envelope with attack and guaranteed fade to zero
      const attack = Math.min(1, t * 100); // 10ms attack
      const decay = Math.exp(-t * 15);
      const fadeOut = t > duration - 0.02 ? (duration - t) / 0.02 : 1; // 20ms fade out
      const envelope = attack * decay * fadeOut;
      const tone1 = Math.sin(2 * Math.PI * 150 * t);
      const tone2 = Math.sin(2 * Math.PI * 100 * t);
      buffer[i] = (tone1 * 0.5 + tone2 * 0.5) * envelope;
    }
    return this.bufferToWav(buffer);
  }

  generateXPPickupSound() {
    const duration = 0.1;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      const freq = 600 + t * 800;
      // Smooth envelope: quick attack, linear decay with guaranteed smooth end
      const attack = Math.min(1, t * 200); // 5ms attack
      const decay = Math.max(0, 1 - t * 10);
      const fadeOut = t > duration - 0.01 ? (duration - t) / 0.01 : 1; // 10ms fade out
      const envelope = attack * decay * fadeOut;
      buffer[i] = Math.sin(2 * Math.PI * freq * t) * envelope * 0.3;
    }
    return this.bufferToWav(buffer);
  }

  generateLevelUpSound() {
    const duration = 0.5;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      let envelope = 0;
      let freq = 400;

      if (t < 0.15) {
        freq = 400 + t * 2000;
        envelope = t / 0.15;
      } else if (t < 0.3) {
        freq = 700;
        envelope = 1;
      } else {
        freq = 700 + (t - 0.3) * 1000;
        envelope = Math.exp(-(t - 0.3) * 5);
      }

      // Guaranteed smooth fade out at end
      const fadeOut = t > duration - 0.05 ? (duration - t) / 0.05 : 1; // 50ms fade out
      buffer[i] = Math.sin(2 * Math.PI * freq * t) * envelope * fadeOut * 0.4;
    }
    return this.bufferToWav(buffer);
  }

  generateAbilitySelectSound() {
    const duration = 0.2;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      const freq = 500 + Math.sin(t * 50) * 100;
      // Smooth envelope with attack and guaranteed fade to zero
      const attack = Math.min(1, t * 100); // 10ms attack
      const decay = Math.exp(-t * 10);
      const fadeOut = t > duration - 0.02 ? (duration - t) / 0.02 : 1; // 20ms fade out
      const envelope = attack * decay * fadeOut;
      buffer[i] = Math.sin(2 * Math.PI * freq * t) * envelope * 0.4;
    }
    return this.bufferToWav(buffer);
  }

  generateDoorOpenSound() {
    const duration = 0.4;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      const freq = 100 + t * 300;
      // Smooth envelope with attack and guaranteed fade to zero
      const attack = Math.min(1, t * 50); // 20ms attack
      const decay = Math.exp(-t * 5);
      const fadeOut = t > duration - 0.04 ? (duration - t) / 0.04 : 1; // 40ms fade out
      const envelope = attack * decay * fadeOut;
      const noise = (Math.random() * 2 - 1) * 0.1;
      buffer[i] = (Math.sin(2 * Math.PI * freq * t) * 0.5 + noise) * envelope;
    }
    return this.bufferToWav(buffer);
  }

  generateBossSpawnSound() {
    const duration = 1;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      const freq = 80 + Math.sin(t * 5) * 30;
      let envelope = 0;

      if (t < 0.1) envelope = t * 10;
      else if (t < 0.5) envelope = 1;
      else envelope = Math.exp(-(t - 0.5) * 3);

      // Guaranteed smooth fade out at end
      const fadeOut = t > duration - 0.1 ? (duration - t) / 0.1 : 1; // 100ms fade out
      envelope *= fadeOut;

      const noise = (Math.random() * 2 - 1) * 0.1 * envelope;
      buffer[i] = (Math.sin(2 * Math.PI * freq * t) * 0.5 + noise) * envelope;
    }
    return this.bufferToWav(buffer);
  }

  generateGateSpawnSound() {
    // Mystical ascending portal sound
    const duration = 0.8;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      // Rising frequency sweep
      const freq = 200 + t * 600;
      // Soft attack, sustained
      let envelope = 0;
      if (t < 0.1) envelope = t * 10;
      else if (t < 0.5) envelope = 1;
      else envelope = Math.exp(-(t - 0.5) * 4);

      // Guaranteed smooth fade out at end
      const fadeOut = t > duration - 0.08 ? (duration - t) / 0.08 : 1; // 80ms fade out
      envelope *= fadeOut;

      // Layered harmonics for ethereal sound
      const tone1 = Math.sin(2 * Math.PI * freq * t) * 0.3;
      const tone2 = Math.sin(2 * Math.PI * freq * 1.5 * t) * 0.15;
      const tone3 = Math.sin(2 * Math.PI * freq * 2 * t) * 0.1;
      const shimmer = Math.sin(2 * Math.PI * (freq * 4) * t) * 0.05 * Math.sin(t * 20);

      buffer[i] = (tone1 + tone2 + tone3 + shimmer) * envelope;
    }
    return this.bufferToWav(buffer);
  }

  generateGateEnterSound() {
    // Whooshing portal entry sound
    const duration = 0.4;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;
      // Descending whoosh
      const freq = 400 - t * 200;
      // Smooth envelope with attack and guaranteed fade to zero
      const attack = Math.min(1, t * 100); // 10ms attack
      const decay = Math.exp(-t * 6);
      const fadeOut = t > duration - 0.04 ? (duration - t) / 0.04 : 1; // 40ms fade out
      const envelope = attack * decay * fadeOut;

      // Breathy whoosh with tone
      const tone = Math.sin(2 * Math.PI * freq * t) * 0.4;
      const noise = (Math.random() * 2 - 1) * 0.2;
      const filtered = Math.sin(2 * Math.PI * 150 * t) * noise;

      buffer[i] = (tone + filtered) * envelope;
    }
    return this.bufferToWav(buffer);
  }

  generateGateTransitionSound() {
    // Full transition whoosh - longer and more dramatic
    const duration = 1.2;
    const buffer = new Float32Array(44100 * duration);
    for (let i = 0; i < buffer.length; i++) {
      const t = i / 44100;

      // Complex frequency sweep
      const freq1 = 300 + Math.sin(t * 10) * 100;
      const freq2 = 150 + t * 200;

      let envelope = 0;
      if (t < 0.2) envelope = t * 5;
      else if (t < 0.8) envelope = 1;
      else envelope = Math.exp(-(t - 0.8) * 5);

      // Guaranteed smooth fade out at end
      const fadeOut = t > duration - 0.12 ? (duration - t) / 0.12 : 1; // 120ms fade out
      envelope *= fadeOut;

      // Layered ethereal sounds
      const tone1 = Math.sin(2 * Math.PI * freq1 * t) * 0.25;
      const tone2 = Math.sin(2 * Math.PI * freq2 * t) * 0.2;
      const harmonic = Math.sin(2 * Math.PI * freq1 * 2 * t) * 0.1;
      const whoosh = (Math.random() * 2 - 1) * 0.15 * Math.exp(-t * 2);
      const shimmer = Math.sin(2 * Math.PI * 800 * t) * 0.05 * Math.sin(t * 30);

      buffer[i] = (tone1 + tone2 + harmonic + whoosh + shimmer) * envelope;
    }
    return this.bufferToWav(buffer);
  }

  generateMusicDataUrl() {
    const sampleRate = 44100;
    const bpm = 120;
    const beatsPerLoop = 16;
    const secondsPerBeat = 60 / bpm;
    const loopDuration = beatsPerLoop * secondsPerBeat; // 8 seconds per loop
    const numLoops = 4; // Pre-bake 4 loops = 32 seconds total
    const totalDuration = loopDuration * numLoops;
    const totalSamples = Math.floor(sampleRate * totalDuration);
    const buffer = new Float32Array(totalSamples);

    // Generate the full multi-loop buffer
    for (let i = 0; i < totalSamples; i++) {
      const t = i / sampleRate;
      const loopT = t % loopDuration; // Time within current loop
      const loopProgress = loopT / loopDuration; // 0 to 1 within each loop
      const beatFloat = t / secondsPerBeat;
      const beat = Math.floor(beatFloat) % beatsPerLoop;
      const beatProgress = beatFloat % 1;

      // Bass notes with per-beat envelope
      const bassFreqs = [110, 110, 146.25, 146.25, 131.25, 131.25, 97.5, 97.5,
                         110, 110, 146.25, 146.25, 131.25, 131.25, 97.5, 110];
      const bassFreq = bassFreqs[beat];
      const bassEnv = Math.sin(beatProgress * Math.PI);
      const bass = Math.sin(2 * Math.PI * bassFreq * t) * 0.14 * bassEnv;

      // Melody with envelope
      const melodyFreqs = [220, 261.25, 293.75, 330, 293.75, 261.25, 220, 195,
                           220, 261.25, 293.75, 330, 293.75, 261.25, 195, 220];
      const melodyFreq = melodyFreqs[beat];
      const melodyEnv = Math.sin(beatProgress * Math.PI) * (beatProgress < 0.5 ? 1 : Math.exp(-(beatProgress - 0.5) * 4));
      const melody = Math.sin(2 * Math.PI * melodyFreq * t) * 0.07 * melodyEnv;

      // Sub bass drone - continuous, uses loop-safe frequency
      const subBass = Math.sin(2 * Math.PI * 55 * t) * 0.06;

      // Kick drum
      const kickT = beatProgress * secondsPerBeat;
      const kickEnv = kickT < 0.1 ? Math.exp(-kickT * 35) : 0;
      const kickFreq = 70 * Math.exp(-kickT * 20);
      const kick = Math.sin(2 * Math.PI * kickFreq * kickT) * kickEnv * 0.18;

      // Hi-hat
      const eighthProgress = (beatFloat * 2) % 1;
      const hihatT = eighthProgress * (secondsPerBeat / 2);
      const hihatEnv = hihatT < 0.04 ? Math.exp(-hihatT * 100) : 0;
      const hihatPhase = eighthProgress * 2 * Math.PI;
      const hihat = (Math.sin(hihatPhase * 50) * 0.5 +
                     Math.sin(hihatPhase * 80) * 0.3 +
                     Math.sin(hihatPhase * 120) * 0.2) * hihatEnv * 0.02;

      // Pad with loop-safe frequencies
      const padEnv = 0.5 + 0.5 * Math.sin(2 * Math.PI * loopProgress);
      const pad = (Math.sin(2 * Math.PI * 220 * t) + Math.sin(2 * Math.PI * 330 * t) * 0.7) * 0.015 * padEnv;

      buffer[i] = bass + melody + subBass + kick + hihat + pad;
    }

    // Crossfade the very end back to the very start for seamless looping
    const crossfadeSamples = Math.floor(sampleRate * 0.1); // 100ms crossfade
    for (let i = 0; i < crossfadeSamples; i++) {
      const fadeOut = Math.cos((i / crossfadeSamples) * Math.PI * 0.5);
      const fadeIn = Math.sin((i / crossfadeSamples) * Math.PI * 0.5);
      const endIdx = totalSamples - crossfadeSamples + i;
      buffer[i] = buffer[i] * fadeIn + buffer[endIdx] * fadeOut;
    }

    return this.bufferToWav(buffer);
  }

  play(soundName) {
    if (!this.soundEnabled || !this.sounds[soundName]) return;
    this.sounds[soundName].play();
  }

  playMusic() {
    if (!this.musicEnabled || !this.music) return;
    // Only start if not already playing
    if (this.music.playing()) return;
    // Fade in when starting music
    this.music.volume(0);
    this.music.play();
    this.music.fade(0, this.musicVolume, 500); // 500ms fade in
  }

  stopMusic() {
    if (this.music) {
      // Fade out before stopping
      this.music.fade(this.music.volume(), 0, 300); // 300ms fade out
      setTimeout(() => {
        if (this.music) this.music.stop();
      }, 300);
    }
  }

  pauseMusic() {
    if (this.music) {
      // Fade out before pausing
      this.music.fade(this.music.volume(), 0, 200); // 200ms fade out
      setTimeout(() => {
        if (this.music) this.music.pause();
      }, 200);
    }
  }

  resumeMusic() {
    if (this.musicEnabled && this.music) {
      // Fade in when resuming
      this.music.volume(0);
      this.music.play();
      this.music.fade(0, this.musicVolume, 300); // 300ms fade in
    }
  }

  setSoundVolume(volume) {
    this.soundVolume = volume;
    this.saveSetting('soundVolume', volume);
    Object.values(this.sounds).forEach(sound => {
      sound.volume(volume);
    });
  }

  setMusicVolume(volume) {
    this.musicVolume = volume;
    this.saveSetting('musicVolume', volume);
    if (this.music) {
      this.music.volume(volume);
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    this.saveSetting('soundEnabled', this.soundEnabled);
    return this.soundEnabled;
  }

  toggleMusic() {
    this.musicEnabled = !this.musicEnabled;
    this.saveSetting('musicEnabled', this.musicEnabled);
    if (this.musicEnabled) {
      this.resumeMusic();
    } else {
      this.pauseMusic();
    }
    return this.musicEnabled;
  }
}

export const Audio = new AudioManager();
