/**
 * ScoreboardManager - Handles local storage of game run history
 * Stores runs with stats like score, level, kills, time, stage progress, and date
 */

const STORAGE_KEY = 'clonhero_scoreboard';
const MAX_ENTRIES = 50;

export class ScoreboardManager {
  constructor() {
    this.runs = this.loadRuns();
  }

  /**
   * Load runs from localStorage
   * @returns {Array} Array of run objects
   */
  loadRuns() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === null) return [];
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }

  /**
   * Save runs to localStorage
   */
  saveRuns() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.runs));
    } catch {
      // localStorage might be unavailable (private browsing, etc.)
    }
  }

  /**
   * Calculate score from run stats
   * Score formula: (kills * 10) + (level * 100) + (stage * 500) + (room * 50) + time bonus
   * @param {Object} stats - Run statistics
   * @returns {number} Calculated score
   */
  calculateScore(stats) {
    const killScore = (stats.kills || 0) * 10;
    const levelScore = (stats.level || 1) * 100;
    const stageScore = (stats.stage || 0) * 500;
    const roomScore = (stats.room || 0) * 50;
    const timeBonus = Math.floor((stats.time || 0) * 2);
    const victoryBonus = stats.victory ? 5000 : 0;

    return killScore + levelScore + stageScore + roomScore + timeBonus + victoryBonus;
  }

  /**
   * Save a new run to the scoreboard
   * @param {Object} stats - Run statistics
   * @param {number} stats.level - Final level reached
   * @param {number} stats.kills - Total enemies defeated
   * @param {number} stats.time - Time survived in seconds
   * @param {number} stats.stage - Stage reached (0-2)
   * @param {number} stats.room - Room reached within stage
   * @param {boolean} stats.victory - Whether the run was a victory
   * @returns {Object} The saved run entry
   */
  saveRun(stats) {
    const score = this.calculateScore(stats);

    const run = {
      id: Date.now(),
      date: new Date().toISOString(),
      score,
      level: stats.level || 1,
      kills: stats.kills || 0,
      time: stats.time || 0,
      stage: stats.stage || 0,
      room: stats.room || 0,
      victory: stats.victory || false
    };

    this.runs.unshift(run);

    // Keep only the most recent MAX_ENTRIES
    if (this.runs.length > MAX_ENTRIES) {
      this.runs = this.runs.slice(0, MAX_ENTRIES);
    }

    this.saveRuns();
    return run;
  }

  /**
   * Get all runs sorted by score (highest first)
   * @returns {Array} Sorted array of runs
   */
  getRunsByScore() {
    return [...this.runs].sort((a, b) => b.score - a.score);
  }

  /**
   * Get all runs sorted by date (most recent first)
   * @returns {Array} Sorted array of runs
   */
  getRunsByDate() {
    return [...this.runs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  /**
   * Get the top N runs by score
   * @param {number} n - Number of runs to return
   * @returns {Array} Top N runs
   */
  getTopRuns(n = 10) {
    return this.getRunsByScore().slice(0, n);
  }

  /**
   * Get the player's best score
   * @returns {number} Highest score or 0
   */
  getBestScore() {
    if (this.runs.length === 0) return 0;
    return Math.max(...this.runs.map(r => r.score));
  }

  /**
   * Get total number of runs
   * @returns {number} Total runs
   */
  getTotalRuns() {
    return this.runs.length;
  }

  /**
   * Get number of victories
   * @returns {number} Victory count
   */
  getVictoryCount() {
    return this.runs.filter(r => r.victory).length;
  }

  /**
   * Format time in seconds to MM:SS
   * @param {number} seconds - Time in seconds
   * @returns {string} Formatted time string
   */
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  /**
   * Format date to readable string
   * @param {string} isoString - ISO date string
   * @returns {string} Formatted date
   */
  formatDate(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  }

  /**
   * Get stage name from stage number
   * @param {number} stage - Stage number (0-2)
   * @returns {string} Stage name
   */
  getStageName(stage) {
    const names = ['Void Station', 'Neural Network', 'Core Systems'];
    return names[stage] || 'Unknown';
  }

  /**
   * Clear all scoreboard data
   */
  clearAll() {
    this.runs = [];
    this.saveRuns();
  }

  /**
   * Delete a specific run by ID
   * @param {number} id - Run ID to delete
   */
  deleteRun(id) {
    this.runs = this.runs.filter(r => r.id !== id);
    this.saveRuns();
  }
}

// Export singleton instance
export const scoreboardManager = new ScoreboardManager();
