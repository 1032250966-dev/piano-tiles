/**
 * HapticsHelper.js
 * Cross-platform haptic feedback wrapper with browser and mobile support.
 */

export class HapticsHelper {
  constructor(enabled = true) {
    this.enabled = enabled;
  }

  setEnabled(val) {
    this.enabled = Boolean(val);
  }

  triggerLight() {
    if (!this.enabled) return;
    this._vibrate(12);
  }

  triggerMedium() {
    if (!this.enabled) return;
    this._vibrate(25);
  }

  triggerHeavy() {
    if (!this.enabled) return;
    this._vibrate(45);
  }

  triggerError() {
    if (!this.enabled) return;
    this._vibrate([40, 60, 40]);
  }

  triggerSuccess() {
    if (!this.enabled) return;
    this._vibrate([20, 40, 30]);
  }

  _vibrate(pattern) {
    try {
      if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
        navigator.vibrate(pattern);
      }
    } catch {
      // Graceful fallback on non-vibrating environments
    }
  }
}
