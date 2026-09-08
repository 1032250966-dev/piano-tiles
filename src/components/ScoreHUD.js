/**
 * ScoreHUD.js
 * Heads-Up Display showing live score, combo multiplier, and mode timers.
 */

export class ScoreHUD {
  static render(ctx, { score, combo, multiplier, timeRemaining, mode, width }) {
    ctx.save();
    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.fillText(String(score), 20, 48);

    if (combo > 1) {
      ctx.font = 'bold 18px sans-serif';
      ctx.fillStyle = '#ff007f';
      ctx.fillText(combo + 'x COMBO (' + multiplier.toFixed(1) + 'x)', 20, 78);
    }

    if (timeRemaining !== undefined && timeRemaining > 0) {
      ctx.font = 'bold 24px monospace';
      ctx.fillStyle = timeRemaining <= 10 ? '#ff3344' : '#00f3ff';
      ctx.textAlign = 'right';
      ctx.fillText(Math.ceil(timeRemaining) + 's', width - 20, 48);
    }

    ctx.restore();
  }
}
