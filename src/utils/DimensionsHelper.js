/**
 * DimensionsHelper.js
 * Responsive layout calculation and column sizing utility.
 */

import { GAME_CONFIG } from './Constants.js';

export class DimensionsHelper {
  constructor(viewportWidth = 390, viewportHeight = 844) {
    this.updateDimensions(viewportWidth, viewportHeight);
  }

  updateDimensions(width, height) {
    this.width = Math.max(280, width);
    this.height = Math.max(480, height);
    this.columnWidth = this.width / GAME_CONFIG.COLUMN_COUNT;
    this.targetHitLineY = this.height * GAME_CONFIG.HIT_LINE_Y_RATIO;
    this.missLineY = this.targetHitLineY + GAME_CONFIG.TILE_HEIGHT + GAME_CONFIG.MISS_LINE_OFFSET;
  }

  getColumnLeft(columnIndex) {
    return columnIndex * this.columnWidth;
  }

  getColumnFromX(x) {
    if (x < 0 || x > this.width) return -1;
    const col = Math.floor(x / this.columnWidth);
    return Math.min(col, GAME_CONFIG.COLUMN_COUNT - 1);
  }

  getHitWindowBounds() {
    return {
      targetY: this.targetHitLineY,
      missY: this.missLineY,
      perfectUpper: this.targetHitLineY - GAME_CONFIG.HIT_WINDOWS.PERFECT,
      perfectLower: this.targetHitLineY + GAME_CONFIG.HIT_WINDOWS.PERFECT,
      greatUpper: this.targetHitLineY - GAME_CONFIG.HIT_WINDOWS.GREAT,
      greatLower: this.targetHitLineY + GAME_CONFIG.HIT_WINDOWS.GREAT,
      goodUpper: this.targetHitLineY - GAME_CONFIG.HIT_WINDOWS.GOOD,
      goodLower: this.targetHitLineY + GAME_CONFIG.HIT_WINDOWS.GOOD
    };
  }
}
