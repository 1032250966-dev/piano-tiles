/**
 * SplashScreen.js
 * Futuristic game title screen and audio unlock initiation.
 */

export class SplashScreen {
  constructor(onStart) {
    this.onStart = onStart;
  }

  render() {
    return `
      <div id="splash-screen" class="screen-container">
        <div class="logo-box">
          <div class="glow-orb"></div>
          <h1 class="game-title">ANTI-GRAVITY<br/><span class="cyan-text">PIANO</span></h1>
          <p class="subtitle">QUANTUM HARMONICS ENGINE</p>
        </div>
        <button id="btn-enter" class="neon-button">TAP TO ENTER</button>
      </div>
    `;
  }
}
