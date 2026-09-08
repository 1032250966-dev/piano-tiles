import test from 'node:test';
import assert from 'node:assert';
import { DifficultyManager } from '../src/game/DifficultyManager.js';
import { GAME_MODES, GAME_CONFIG } from '../src/utils/Constants.js';

test('DifficultyManager - Progressive scaling curves', () => {
  const dm = new DifficultyManager(GAME_MODES.CLASSIC);
  assert.strictEqual(dm.currentSpeed, GAME_CONFIG.BASE_SPEED);

  // After 10 hits
  const d10 = dm.update(10);
  assert.ok(d10.speed > GAME_CONFIG.BASE_SPEED);
  assert.ok(d10.spawnInterval < GAME_CONFIG.SPAWN_INTERVAL_BASE_MS);
  assert.strictEqual(d10.level, 2);

  // Speed ceiling clamp
  const d100 = dm.update(100);
  assert.ok(d100.speed <= GAME_CONFIG.MAX_SPEED);
  assert.ok(d100.spawnInterval >= GAME_CONFIG.MIN_SPAWN_INTERVAL_MS);

  // Zen Mode consistency
  const zenDm = new DifficultyManager(GAME_MODES.ZEN);
  const z1 = zenDm.update(0);
  const z2 = zenDm.update(50);
  assert.strictEqual(z1.speed, z2.speed);
});
