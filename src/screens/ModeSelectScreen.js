/**
 * ModeSelectScreen.js
 * Game mode selection dialog for Classic, Time Attack, and Zen modes.
 */

import { GAME_MODE_DEFINITIONS } from '../game/GameModes.js';
import { GAME_MODES } from '../utils/Constants.js';

export class ModeSelectScreen {
  constructor({ onModeChosen, onBack }) {
    this.onModeChosen = onModeChosen;
    this.onBack = onBack;
  }

  render() {
    return `
      <div id="mode-select-screen" class="screen-container">
        <h2 class="menu-title">SELECT GAME MODE</h2>
        <div class="mode-cards-container">
          <div class="mode-card" data-mode="${GAME_MODES.CLASSIC}">
            <h3 class="cyan-text">${GAME_MODE_DEFINITIONS.CLASSIC.name}</h3>
            <p>${GAME_MODE_DEFINITIONS.CLASSIC.description}</p>
          </div>
          <div class="mode-card" data-mode="${GAME_MODES.TIME_ATTACK}">
            <h3 class="magenta-text">${GAME_MODE_DEFINITIONS.TIME_ATTACK.name}</h3>
            <p>${GAME_MODE_DEFINITIONS.TIME_ATTACK.description}</p>
          </div>
          <div class="mode-card" data-mode="${GAME_MODES.ZEN}">
            <h3 class="yellow-text">${GAME_MODE_DEFINITIONS.ZEN.name}</h3>
            <p>${GAME_MODE_DEFINITIONS.ZEN.description}</p>
          </div>
        </div>
        <button id="btn-back-mode" class="neon-button outline-btn">BACK</button>
      </div>
    `;
  }
}
