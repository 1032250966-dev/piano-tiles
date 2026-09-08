/**
 * ComboPopup.js
 * Floating hit assessment toast ("PERFECT!", "GREAT!").
 */

export class ComboPopup {
  constructor() {
    this.activeToasts = [];
  }

  add(text, x, y, color = '#00f3ff') {
    this.activeToasts.push({
      text,
      x,
      y,
      color,
      alpha: 1.0,
      vy: -60,
      life: 0.65
    });
  }

  update(dt) {
    for (const toast of this.activeToasts) {
      toast.y += toast.vy * dt;
      toast.life -= dt;
      toast.alpha = Math.max(0, toast.life / 0.65);
    }
    this.activeToasts = this.activeToasts.filter(t => t.life > 0);
  }

  render(ctx) {
    ctx.save();
    ctx.font = 'bold 22px sans-serif';
    ctx.textAlign = 'center';
    for (const t of this.activeToasts) {
      ctx.fillStyle = t.color;
      ctx.globalAlpha = t.alpha;
      ctx.shadowColor = t.color;
      ctx.shadowBlur = 10;
      ctx.fillText(t.text, t.x, t.y);
    }
    ctx.restore();
  }
}
