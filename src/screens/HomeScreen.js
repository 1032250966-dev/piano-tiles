/**
 * HomeScreen.js
 * Main menu: Start game, Mode selector, High Scores, Settings.
 */

export class HomeScreen {
  constructor({ onSelectMode, onOpenSettings, highScores }) {
    this.onSelectMode = onSelectMode;
    this.onOpenSettings = onOpenSettings;
    this.highScores = highScores || {};
  }

  render() {
    return `
      <div id="home-screen" class="screen-container">
        <h2 class="menu-title">ANTI-GRAVITY PIANO</h2>
        
        <div class="stats-panel">
          <div class="stat-card">
            <span class="stat-label">CLASSIC RECORD</span>
            <span class="stat-val cyan-text">${this.highScores.CLASSIC || 0}</span>
          </div>
          <div class="stat-card">
            <span class="stat-label">TIME ATTACK</span>
            <span class="stat-val magenta-text">${this.highScores.TIME_ATTACK || 0}</span>
          </div>
          <div class="stat-card">
            <span class="stat-label">MAX COMBO</span>
            <span class="stat-val yellow-text">${this.highScores.highestCombo || 0}x</span>
          </div>
        </div>

        <div class="actions-group">
          <button id="btn-play-classic" class="neon-button primary-btn">PLAY CLASSIC</button>
          <button id="btn-select-mode" class="neon-button secondary-btn">SELECT MODE</button>
          <button id="btn-settings" class="neon-button outline-btn">SETTINGS</button>
        </div>
      </div>
    `;
  }
}
