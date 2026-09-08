/**
 * GameScreen.js
 * Active gameplay screen hosting the canvas and HUD.
 */

export class GameScreen {
  static render() {
    return `
      <div id="game-screen" class="game-container">
        <canvas id="game-canvas" width="390" height="844"></canvas>
        <button id="btn-pause" class="pause-icon-btn" aria-label="Pause">❚❚</button>
      </div>
    `;
  }
}
