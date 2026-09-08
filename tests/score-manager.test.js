import test from 'node:test';
import assert from 'node:assert';
import { ScoreManager } from '../src/game/ScoreManager.js';
import { HIT_RATINGS } from '../src/utils/Constants.js';

test('ScoreManager - Hit recording and combo streak multipliers', () => {
  const sm = new ScoreManager();
  assert.strictEqual(sm.score, 0);
  assert.strictEqual(sm.combo, 0);

  // 1. First hit: Perfect (100 base * 1.0 = 100)
  const r1 = sm.recordHit(HIT_RATINGS.PERFECT);
  assert.strictEqual(r1.pointsAwarded, 100);
  assert.strictEqual(sm.score, 100);
  assert.strictEqual(sm.combo, 1);

  // 2. Consecutive hits up to 5 (combo multiplier reaches 1.2x)
  sm.recordHit(HIT_RATINGS.PERFECT); // combo 2
  sm.recordHit(HIT_RATINGS.PERFECT); // combo 3
  sm.recordHit(HIT_RATINGS.PERFECT); // combo 4
  const r5 = sm.recordHit(HIT_RATINGS.PERFECT); // combo 5
  assert.strictEqual(sm.combo, 5);
  assert.strictEqual(r5.multiplier, 1.2);
  assert.strictEqual(r5.pointsAwarded, 120);

  // 3. Miss resets combo to 0
  const missRes = sm.recordMiss();
  assert.strictEqual(sm.combo, 0);
  assert.strictEqual(sm.maxCombo, 5);
  assert.strictEqual(missRes.multiplier, 1.0);
});
