/**
 * ScoreRepository.js
 * High scores and gameplay statistics repository.
 */

import { STORAGE_KEYS, GAME_MODES } from '../utils/Constants.js';
import { defaultStorage } from './StorageService.js';

export class ScoreRepository {
  constructor(storage = defaultStorage) {
    this.storage = storage;
  }

  async getHighScores() {
    const data = await this.storage.getItem(STORAGE_KEYS.HIGH_SCORES);
    return data || {
      [GAME_MODES.CLASSIC]: 0,
      [GAME_MODES.TIME_ATTACK]: 0,
      [GAME_MODES.ZEN]: 0,
      highestCombo: 0,
      totalTilesHit: 0,
      gamesPlayed: 0
    };
  }

  async recordGameResult({ mode, score, maxCombo, tilesHit }) {
    const stats = await this.getHighScores();
    let isNewHighScore = false;

    if (!stats[mode] || score > stats[mode]) {
      stats[mode] = score;
      isNewHighScore = true;
    }

    if (maxCombo > (stats.highestCombo || 0)) {
      stats.highestCombo = maxCombo;
    }

    stats.totalTilesHit = (stats.totalTilesHit || 0) + (tilesHit || 0);
    stats.gamesPlayed = (stats.gamesPlayed || 0) + 1;

    await this.storage.setItem(STORAGE_KEYS.HIGH_SCORES, stats);
    return { stats, isNewHighScore };
  }

  async resetHighScores() {
    await this.storage.removeItem(STORAGE_KEYS.HIGH_SCORES);
    return this.getHighScores();
  }
}
