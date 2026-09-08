/**
 * App.js
 * Main Application Orchestrator connecting UI, GameEngine, Audio, and Storage.
 */

import { DimensionsHelper } from './utils/DimensionsHelper.js';
import { HapticsHelper } from './utils/HapticsHelper.js';
import { AudioManager } from './audio/AudioManager.js';
import { ScoreRepository } from './storage/ScoreRepository.js';
import { SettingsRepository } from './storage/SettingsRepository.js';
import { GameEngine } from './game/GameEngine.js';
import { ParticleSystem } from './components/ParticleSystem.js';
import { ComboPopup } from './components/ComboPopup.js';
import { Starfield } from './components/Starfield.js';
import { GAME_MODES, GAME_STATES } from './utils/Constants.js';

export class App {
  constructor(rootElement) {
    this.root = rootElement;
    this.dim = new DimensionsHelper(390, 844);
    this.audio = new AudioManager();
    this.haptics = new HapticsHelper();
    this.scoreRepo = new ScoreRepository();
    this.settingsRepo = new SettingsRepository();

    this.particles = new ParticleSystem(390, 844);
    this.comboPopup = new ComboPopup();
    this.starfield = new Starfield(390, 844);

    this.currentView = 'SPLASH';
    this.activeMode = GAME_MODES.CLASSIC;
    this.highScores = {};
    this.settings = {};

    this.engine = new GameEngine({
      dimensionsHelper: this.dim,
      audioManager: this.audio,
      hapticsHelper: this.haptics,
      onStateChange: (state) => this.handleGameStateChange(state),
      onScoreUpdate: (scoreData) => { this.currentScoreData = scoreData; },
      onTileHit: (hitData) => this.handleTileHit(hitData),
      onGameOver: (result) => this.handleGameOver(result)
    });

    this.currentScoreData = { score: 0, combo: 0, multiplier: 1.0, tilesHit: 0, timeRemaining: 0 };
  }

  async init() {
    this.highScores = await this.scoreRepo.getHighScores();
    this.settings = await this.settingsRepo.getSettings();
    this.haptics.setEnabled(this.settings.hapticsEnabled);
    this.audio.setMasterVolume(this.settings.masterVolume);
    this.audio.setSfxVolume(this.settings.sfxVolume);
  }

  handleTileHit({ tile, rating, points }) {
    const tileCenterY = tile.y + (tile.height / 2);
    const tileCenterX = tile.x + (tile.width / 2);

    this.particles.emitBurst(tileCenterX, tileCenterY, tile.color, 18);
    this.comboPopup.add(rating + ' +' + points, tileCenterX, tileCenterY - 20, tile.color);
  }

  async handleGameOver(result) {
    const { stats, isNewHighScore } = await this.scoreRepo.recordGameResult(result);
    this.highScores = stats;
    this.lastGameResult = { ...result, isNewHighScore };
  }

  handleGameStateChange(state) {
    // Game state handled via engine
  }
}
