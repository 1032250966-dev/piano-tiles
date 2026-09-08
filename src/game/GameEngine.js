/**
 * GameEngine.js
 * Master 60 FPS tick loop, state machine transitions, and mode resolution.
 */

import { GAME_STATES, GAME_MODES, HIT_RATINGS } from '../utils/Constants.js';
import { TileManager } from './TileManager.js';
import { CollisionDetector } from './CollisionDetector.js';
import { ScoreManager } from './ScoreManager.js';
import { DifficultyManager } from './DifficultyManager.js';
import { GAME_MODE_DEFINITIONS } from './GameModes.js';

export class GameEngine {
  constructor({ dimensionsHelper, audioManager, hapticsHelper, onStateChange, onScoreUpdate, onTileHit, onGameOver }) {
    this.dim = dimensionsHelper;
    this.audio = audioManager;
    this.haptics = hapticsHelper;
    this.onStateChange = onStateChange || (() => {});
    this.onScoreUpdate = onScoreUpdate || (() => {});
    this.onTileHit = onTileHit || (() => {});
    this.onGameOver = onGameOver || (() => {});

    this.state = GAME_STATES.IDLE;
    this.mode = GAME_MODES.CLASSIC;
    this.tileManager = new TileManager(this.dim);
    this.scoreManager = new ScoreManager();
    this.diffManager = new DifficultyManager(this.mode);

    this.timeRemaining = 0;
    this.running = false;
    this.lastTimestamp = 0;
  }

  start(mode = GAME_MODES.CLASSIC, songIndex = 0) {
    this.mode = mode;
    this.diffManager = new DifficultyManager(mode);
    this.diffManager.reset();
    this.scoreManager.reset();
    this.tileManager.reset(songIndex);

    const modeDef = GAME_MODE_DEFINITIONS[mode];
    this.timeRemaining = modeDef.hasTimeLimit ? modeDef.durationSec : 0;

    this.state = GAME_STATES.PLAYING;
    this.running = true;
    this.lastTimestamp = (typeof performance !== 'undefined' ? performance.now() : Date.now());

    this.onStateChange(this.state);
    this.onScoreUpdate({
      score: 0,
      combo: 0,
      multiplier: 1.0,
      tilesHit: 0,
      timeRemaining: this.timeRemaining
    });

    if (this.audio) this.audio.init();
  }

  pause() {
    if (this.state !== GAME_STATES.PLAYING) return;
    this.state = GAME_STATES.PAUSED;
    this.running = false;
    this.onStateChange(this.state);
  }

  resume() {
    if (this.state !== GAME_STATES.PAUSED) return;
    this.state = GAME_STATES.PLAYING;
    this.running = true;
    this.lastTimestamp = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    this.onStateChange(this.state);
  }

  endGame(reason = 'GAME_OVER') {
    this.state = reason === 'VICTORY' ? GAME_STATES.VICTORY : GAME_STATES.GAME_OVER;
    this.running = false;

    if (this.haptics) this.haptics.triggerError();
    if (this.audio) this.audio.playMiss();

    this.onStateChange(this.state);
    this.onGameOver({
      score: this.scoreManager.score,
      maxCombo: this.scoreManager.maxCombo,
      tilesHit: this.scoreManager.tilesHit,
      mode: this.mode,
      reason
    });
  }

  handleTap(columnX, tapY) {
    if (this.state !== GAME_STATES.PLAYING) return null;

    const column = typeof columnX === 'number' && columnX < 4
      ? columnX
      : this.dim.getColumnFromX(columnX);

    if (column < 0) return null;

    const effectiveY = tapY || this.dim.targetHitLineY;
    const colTiles = this.tileManager.getColumnTiles(column);
    const result = CollisionDetector.evaluateTap(column, effectiveY, colTiles, this.dim.targetHitLineY);

    if (result.hit && result.tile) {
      this.tileManager.markTapped(result.tile.id);
      const scoreResult = this.scoreManager.recordHit(result.rating);

      if (this.audio) {
        this.audio.playNote(result.tile.note);
        this.audio.playHit(result.rating);
        if (scoreResult.isMilestone) {
          this.audio.playMilestone(scoreResult.multiplier);
        }
      }

      if (this.haptics) {
        if (result.rating === HIT_RATINGS.PERFECT) {
          this.haptics.triggerMedium();
        } else {
          this.haptics.triggerLight();
        }
      }

      this.diffManager.update(this.scoreManager.tilesHit);

      this.onTileHit({
        tile: result.tile,
        rating: result.rating,
        points: scoreResult.pointsAwarded,
        combo: scoreResult.combo,
        multiplier: scoreResult.multiplier
      });

      this.onScoreUpdate({
        score: scoreResult.newScore,
        combo: scoreResult.combo,
        multiplier: scoreResult.multiplier,
        tilesHit: this.scoreManager.tilesHit,
        timeRemaining: this.timeRemaining
      });

      const modeDef = GAME_MODE_DEFINITIONS[this.mode];
      if (modeDef.targetTiles && this.scoreManager.tilesHit >= modeDef.targetTiles) {
        this.endGame('VICTORY');
      }

      return result;
    } else {
      const modeDef = GAME_MODE_DEFINITIONS[this.mode];
      this.scoreManager.recordMiss();

      if (this.audio) this.audio.playMiss();
      if (this.haptics) this.haptics.triggerError();

      if (modeDef.hasGameOverOnMiss) {
        this.endGame('MISS');
      } else {
        this.onScoreUpdate({
          score: this.scoreManager.score,
          combo: 0,
          multiplier: 1.0,
          tilesHit: this.scoreManager.tilesHit,
          timeRemaining: this.timeRemaining
        });
      }

      return { hit: false, rating: HIT_RATINGS.MISS };
    }
  }

  tick(currentTime) {
    if (!this.running || this.state !== GAME_STATES.PLAYING) return;

    const dt = Math.min(0.08, (currentTime - this.lastTimestamp) / 1000);
    this.lastTimestamp = currentTime;

    const modeDef = GAME_MODE_DEFINITIONS[this.mode];
    if (modeDef.hasTimeLimit) {
      this.timeRemaining = Math.max(0, this.timeRemaining - dt);
      if (this.timeRemaining <= 0) {
        this.endGame('TIME_UP');
        return;
      }
    }

    const { missedTiles } = this.tileManager.update(
      dt,
      this.diffManager.currentSpeed,
      this.diffManager.currentSpawnInterval
    );

    if (missedTiles.length > 0) {
      if (modeDef.hasGameOverOnMiss) {
        this.endGame('MISSED_TILE');
        return;
      } else {
        this.scoreManager.recordMiss();
        if (this.audio) this.audio.playMiss();
        if (this.haptics) this.haptics.triggerError();
      }
    }
  }
}
