/**
 * Starfield.js
 * Multi-layer background starfield rendering zero-gravity drift.
 */

export class Starfield {
  constructor(width = 400, height = 800) {
    this.stars = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 15 + 5
    }));
  }

  update(dt, height) {
    for (const star of this.stars) {
      star.y -= star.speed * dt;
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * 400;
      }
    }
  }

  render(ctx) {
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (const star of this.stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}
