/**
 * ParticleSystem.js
 * Particle emitter rendering burst sparks on hit and floating ambient stardust.
 */

import { Particle } from '../utils/Particle.js';

export class ParticleSystem {
  constructor(width = 400, height = 800) {
    this.width = width;
    this.height = height;
    this.particles = [];
    this.ambientCount = 35;
    this.initAmbient();
  }

  initAmbient() {
    for (let i = 0; i < this.ambientCount; i++) {
      const p = new Particle(
        Math.random() * this.width,
        Math.random() * this.height,
        '#00f3ff',
        true
      );
      this.particles.push(p);
    }
  }

  emitBurst(x, y, color = '#00f3ff', count = 20) {
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle(x, y, color, false));
    }
  }

  update(dt) {
    this.particles.forEach(p => p.update(dt));
    this.particles = this.particles.filter(p => !p.isDead());
  }

  render(ctx) {
    ctx.save();
    for (const p of this.particles) {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(1, p.radius), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}
