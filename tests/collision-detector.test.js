import test from 'node:test';
import assert from 'node:assert';
import { CollisionDetector } from '../src/game/CollisionDetector.js';
import { HIT_RATINGS } from '../src/utils/Constants.js';

test('CollisionDetector - Accuracy evaluation thresholds', () => {
  const targetHitY = 600;
  const tileHeight = 130;

  // 1. Perfect hit (tile center aligned near targetHitY)
  const perfectTile = { id: 't1', y: targetHitY - (tileHeight / 2), height: tileHeight, tapped: false };
  const resPerfect = CollisionDetector.evaluateTap(0, targetHitY, [perfectTile], targetHitY);
  assert.strictEqual(resPerfect.hit, true);
  assert.strictEqual(resPerfect.rating, HIT_RATINGS.PERFECT);

  // 2. Far miss (tile far up)
  const farTile = { id: 't2', y: 100, height: tileHeight, tapped: false };
  const resMiss = CollisionDetector.evaluateTap(0, targetHitY, [farTile], targetHitY);
  assert.strictEqual(resMiss.hit, false);
  assert.strictEqual(resMiss.rating, HIT_RATINGS.MISS);

  // 3. Empty column tap
  const resEmpty = CollisionDetector.evaluateTap(0, targetHitY, [], targetHitY);
  assert.strictEqual(resEmpty.hit, false);
  assert.strictEqual(resEmpty.rating, HIT_RATINGS.MISS);
});
