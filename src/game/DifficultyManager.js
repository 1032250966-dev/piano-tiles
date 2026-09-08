/**
 * DifficultyManager.js
 * Progressive difficulty curve calculations.
 * Calculates falling tile velocity and spawn intervals based on score and hits.
 */

import { GAME_CONFIG, GAME_MODES } from '../utils/Constants.js';

export class DifficultyManager {
  constructor(mode = GAME_MODES.CLASSIC) {
    this.mode = mode;
    this.reset();
  }

  reset() {
    this.currentSpeed = GAME_CONFIG.BASE_SPEED;
    this.currentSpawnInterval = GAME_CONFIG.SPAWN_INTERVAL_BASE_MS;
    this.level = 1;
  }

  /**
   * Update difficulty parameters as score and tiles hit increase.
   * Speed formula: v(hits) = min(MAX_SPEED, BASE_SPEED + hits * SPEED_INCREMENT)
   * Spawn interval formula: t_spawn = max(MIN_SPAWN, BASE_SPAWN / (1 + 0.015 * hits))
   */
  update(tilesHit) {
    if (this.mode === GAME_MODES.ZEN) {
      this.currentSpeed = GAME_CONFIG.BASE_SPEED * 0.85;
      this.currentSpawnInterval = GAME_CONFIG.SPAWN_INTERVAL_BASE_MS * 1.15;
      this.level = 1;
      return { speed: this.currentSpeed, spawnInterval: this.currentSpawnInterval, level: 1 };
    }

    const calculatedSpeed = GAME_CONFIG.BASE_SPEED + (tilesHit * GAME_CONFIG.SPEED_INCREMENT);
    this.currentSpeed = Math.min(GAME_CONFIG.MAX_SPEED, calculatedSpeed);

    const speedScale = 1 + (0.018 * tilesHit);
    const calculatedInterval = GAME_CONFIG.SPAWN_INTERVAL_BASE_MS / speedScale;
    this.currentSpawnInterval = Math.max(GAME_CONFIG.MIN_SPAWN_INTERVAL_MS, calculatedInterval);

    this.level = Math.floor(tilesHit / 10) + 1;

    return {
      speed: this.currentSpeed,
      spawnInterval: this.currentSpawnInterval,
      level: this.level
    };
  }
}
