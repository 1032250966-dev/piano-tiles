/**
 * Particle.js
 * Particle physics model for tile hit sparks and ambient zero-g stardust.
 */

export class Particle {
  constructor(x, y, color, isAmbient = false) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.isAmbient = isAmbient;

    if (isAmbient) {
      this.vx = (Math.random() - 0.5) * 20;
      this.vy = -(Math.random() * 35 + 10);
      this.radius = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.6 + 0.2;
      this.decay = Math.random() * 0.005 + 0.002;
    } else {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 240 + 80;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.radius = Math.random() * 4 + 2;
      this.alpha = 1.0;
      this.decay = Math.random() * 1.5 + 1.2;
    }
  }

  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;

    if (this.isAmbient) {
      this.alpha -= this.decay * dt * 10;
      if (this.alpha <= 0) {
        this.alpha = Math.random() * 0.6 + 0.2;
        this.y += 200;
      }
    } else {
      this.alpha -= this.decay * dt;
      this.radius = Math.max(0, this.radius - dt * 2.5);
    }
  }

  isDead() {
    return !this.isAmbient && (this.alpha <= 0 || this.radius <= 0);
  }
}
