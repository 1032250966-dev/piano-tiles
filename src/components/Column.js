/**
 * Column.js
 * 4-column lane rendering with target strike line.
 */

import { THEME_COLORS } from '../utils/Constants.js';

export class ColumnView {
  static render(ctx, width, height, targetY, columnCount = 4) {
    const colWidth = width / columnCount;

    ctx.save();
    ctx.strokeStyle = THEME_COLORS.COLUMN_DIVIDER;
    ctx.lineWidth = 1;
    for (let i = 1; i < columnCount; i++) {
      ctx.beginPath();
      ctx.moveTo(i * colWidth, 0);
      ctx.lineTo(i * colWidth, height);
      ctx.stroke();
    }

    ctx.shadowColor = THEME_COLORS.ACCENT_CYAN;
    ctx.shadowBlur = 14;
    ctx.strokeStyle = THEME_COLORS.TARGET_LINE;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, targetY);
    ctx.lineTo(width, targetY);
    ctx.stroke();

    ctx.restore();
  }
}
