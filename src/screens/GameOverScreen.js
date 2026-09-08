/**
 * GameOverScreen.js
 * Game over summary displaying score, combo, and records.
 */

export class GameOverScreen {
  static render({ score, maxCombo, tilesHit, isNewHighScore, mode, reason }) {
    return `
      <div id="gameover-screen" class="screen-container">
        <h1 class="${reason === 'VICTORY' ? 'green-text' : 'red-text'}">${reason === 'VICTORY' ? 'VICTORY!' : 'GRAVITY COLLAPSE'}</h1>
        
        ${isNewHighScore ? '<div class="new-record-badge">★ NEW RECORD ★</div>' : ''}

        <div class="score-summary-box">
          <div class="summary-row">
            <span>FINAL SCORE</span>
            <span class="cyan-text bold">${score}</span>
          </div>
          <div class="summary-row">
            <span>MAX COMBO</span>
            <span class="magenta-text bold">${maxCombo}x</span>
          </div>
          <div class="summary-row">
            <span>TILES HIT</span>
            <span class="white-text bold">${tilesHit}</span>
          </div>
          <div class="summary-row">
            <span>GAME MODE</span>
            <span class="yellow-text bold">${mode}</span>
          </div>
        </div>

        <div class="actions-group">
          <button id="btn-play-again" class="neon-button primary-btn">PLAY AGAIN</button>
          <button id="btn-gameover-menu" class="neon-button outline-btn">MAIN MENU</button>
        </div>
      </div>
    `;
  }
}
