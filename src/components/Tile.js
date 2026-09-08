/**
 * Tile.js
 * Visual representation of an anti-gravity piano tile with glow effects.
 */

export class TileView {
  static render(tile, ctx) {
    if (tile.tapped) return;

    ctx.save();
    ctx.shadowColor = tile.color;
    ctx.shadowBlur = 16;
    ctx.fillStyle = tile.color;

    const cornerRadius = 8;
    const x = tile.x + 4;
    const y = tile.y;
    const w = tile.width - 8;
    const h = tile.height;

    ctx.beginPath();
    ctx.moveTo(x + cornerRadius, y);
    ctx.lineTo(x + w - cornerRadius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + cornerRadius);
    ctx.lineTo(x + w, y + h - cornerRadius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - cornerRadius, y + h);
    ctx.lineTo(x + cornerRadius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - cornerRadius);
    ctx.lineTo(x, y + cornerRadius);
    ctx.quadraticCurveTo(x, y, x + cornerRadius, y);
    ctx.closePath();
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.fillRect(x + 12, y + 10, w - 24, 4);

    ctx.fillStyle = '#070913';
    ctx.font = 'bold 16px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(tile.note, x + (w / 2), y + (h / 2) + 6);

    ctx.restore();
  }
}
