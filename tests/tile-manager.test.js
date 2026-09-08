import test from 'node:test';
import assert from 'node:assert';
import { TileManager } from '../src/game/TileManager.js';
import { DimensionsHelper } from '../src/utils/DimensionsHelper.js';

test('TileManager - Spawning and movement boundary detection', () => {
  const dim = new DimensionsHelper(390, 844);
  const tm = new TileManager(dim);

  // Spawn tile
  const tile = tm.spawnTile();
  assert.ok(tile.id);
  assert.ok(tile.column >= 0 && tile.column < 4);
  assert.strictEqual(tile.tapped, false);
  assert.strictEqual(tm.tiles.length, 1);

  // Update movement (speed = 500 px/sec, dt = 0.5s => moves 250px)
  const initY = tile.y;
  tm.update(0.5, 500, 10000);
  assert.ok(tile.y > initY);

  // Mark tapped
  const marked = tm.markTapped(tile.id);
  assert.strictEqual(marked.tapped, true);
});
