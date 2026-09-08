/**
 * CollisionDetector.js
 * Hit detection and precision timing analysis for tile taps.
 */

import { GAME_CONFIG, HIT_RATINGS } from '../utils/Constants.js';

export class CollisionDetector {
  /**
   * Evaluates a tap event at (x, y) against active tiles.
   * @param {number} tapColumn Column index [0..3]
   * @param {number} tapY Tap Y coordinate
   * @param {Array} columnTiles Active tiles currently in that column
   * @param {number} targetHitY Optimal target line Y coordinate
   * @returns {Object} { hit: boolean, rating: string, tileId: string|null, distance: number }
   */
  static evaluateTap(tapColumn, tapY, columnTiles, targetHitY) {
    if (!columnTiles || columnTiles.length === 0) {
      return { hit: false, rating: HIT_RATINGS.MISS, tileId: null, distance: Infinity };
    }

    const sorted = [...columnTiles].filter(t => !t.tapped).sort((a, b) => {
      const distA = Math.abs(a.y + (a.height / 2) - targetHitY);
      const distB = Math.abs(b.y + (b.height / 2) - targetHitY);
      return distA - distB;
    });

    const candidate = sorted[0];
    if (!candidate) {
      return { hit: false, rating: HIT_RATINGS.MISS, tileId: null, distance: Infinity };
    }

    const tileCenterY = candidate.y + (candidate.height / 2);
    const distance = Math.abs(tileCenterY - targetHitY);

    if (distance <= GAME_CONFIG.HIT_WINDOWS.PERFECT) {
      return { hit: true, rating: HIT_RATINGS.PERFECT, tileId: candidate.id, distance, tile: candidate };
    }
    if (distance <= GAME_CONFIG.HIT_WINDOWS.GREAT) {
      return { hit: true, rating: HIT_RATINGS.GREAT, tileId: candidate.id, distance, tile: candidate };
    }
    if (distance <= GAME_CONFIG.HIT_WINDOWS.GOOD) {
      return { hit: true, rating: HIT_RATINGS.GOOD, tileId: candidate.id, distance, tile: candidate };
    }

    return { hit: false, rating: HIT_RATINGS.MISS, tileId: candidate.id, distance, tile: candidate };
  }
}
