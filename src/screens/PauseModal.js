/**
 * PauseModal.js
 * Pause overlay allowing Resume, Restart, Menu, and Mute.
 */

export class PauseModal {
  static render(isMuted) {
    return `
      <div id="pause-modal" class="modal-overlay">
        <div class="modal-card">
          <h2 class="cyan-text">GAME PAUSED</h2>
          <div class="modal-buttons">
            <button id="btn-resume" class="neon-button primary-btn">RESUME</button>
            <button id="btn-restart" class="neon-button secondary-btn">RESTART</button>
            <button id="btn-pause-mute" class="neon-button outline-btn">${isMuted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}</button>
            <button id="btn-pause-menu" class="neon-button outline-btn">MAIN MENU</button>
          </div>
        </div>
      </div>
    `;
  }
}
