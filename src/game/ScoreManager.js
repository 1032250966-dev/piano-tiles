/**
 * ScoreManager.js
 * Scoring arithmetic, combo streak tracking, and rating bonuses.
 */

import { GAME_CONFIG, HIT_RATINGS } from '../utils/Constants.js';

export class ScoreManager {
  constructor() {
    this.reset();
  }

  reset() {
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.tilesHit = 0;
    this.ratingCounts = {
      [HIT_RATINGS.PERFECT]: 0,
      [HIT_RATINGS.GREAT]: 0,
      [HIT_RATINGS.GOOD]: 0,
      [HIT_RATINGS.MISS]: 0
    };
  }

  getMultiplier() {
    let multiplier = 1.0;
    for (const tier of GAME_CONFIG.COMBO_MULTIPLIERS) {
      if (this.combo >= tier.streak) {
        multiplier = tier.multiplier;
      }
    }
    return multiplier;
  }

  getComboTierLabel() {
    let currentTier = null;
    for (const tier of GAME_CONFIG.COMBO_MULTIPLIERS) {
      if (this.combo >= tier.streak) {
        currentTier = tier;
      }
    }
    return currentTier ? currentTier.label : null;
  }

  recordHit(rating) {
    this.combo += 1;
    this.tilesHit += 1;
    if (this.combo > this.maxCombo) {
      this.maxCombo = this.combo;
    }

    const baseScore = GAME_CONFIG.SCORES[rating] || 0;
    const multiplier = this.getMultiplier();
    const pointsAwarded = Math.round(baseScore * multiplier);
    this.score += pointsAwarded;

    if (this.ratingCounts[rating] !== undefined) {
      this.ratingCounts[rating] += 1;
    }

    return {
      pointsAwarded,
      newScore: this.score,
      combo: this.combo,
      multiplier,
      isMilestone: [5, 15, 30, 50, 100].includes(this.combo)
    };
  }

  recordMiss() {
    this.combo = 0;
    this.ratingCounts[HIT_RATINGS.MISS] += 1;
    return {
      pointsAwarded: 0,
      newScore: this.score,
      combo: 0,
      multiplier: 1.0
    };
  }
}
