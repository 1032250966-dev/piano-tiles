/**
 * SettingsScreen.js
 * Audio sliders, haptic feedback toggle, and storage reset.
 */

export class SettingsScreen {
  static render(settings) {
    return `
      <div id="settings-screen" class="screen-container">
        <h2 class="menu-title">SETTINGS</h2>
        <div class="settings-list">
          <div class="setting-item">
            <label>Master Volume: <span id="val-master">${Math.round(settings.masterVolume * 100)}%</span></label>
            <input type="range" id="input-master" min="0" max="1" step="0.05" value="${settings.masterVolume}"/>
          </div>
          <div class="setting-item">
            <label>SFX Volume: <span id="val-sfx">${Math.round(settings.sfxVolume * 100)}%</span></label>
            <input type="range" id="input-sfx" min="0" max="1" step="0.05" value="${settings.sfxVolume}"/>
          </div>
          <div class="setting-item checkbox-item">
            <label for="input-haptics">Haptic Feedback</label>
            <input type="checkbox" id="input-haptics" ${settings.hapticsEnabled ? 'checked' : ''}/>
          </div>
          <div class="setting-item checkbox-item">
            <label for="input-effects">Anti-Gravity FX</label>
            <input type="checkbox" id="input-effects" ${settings.antiGravityEffects ? 'checked' : ''}/>
          </div>
        </div>

        <div class="actions-group">
          <button id="btn-reset-data" class="neon-button danger-btn">RESET HIGH SCORES</button>
          <button id="btn-settings-back" class="neon-button outline-btn">BACK</button>
        </div>
      </div>
    `;
  }
}
