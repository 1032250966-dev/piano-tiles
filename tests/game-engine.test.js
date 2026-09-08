import test from 'node:test';
import assert from 'node:assert';
import { GameEngine } from '../src/game/GameEngine.js';
import { DimensionsHelper } from '../src/utils/DimensionsHelper.js';
import { GAME_STATES, GAME_MODES } from '../src/utils/Constants.js';

test('GameEngine - State transitions and lifecycle', () => {
  const dim = new DimensionsHelper(390, 844);
  let stateReceived = null;

  const engine = new GameEngine({
    dimensionsHelper: dim,
    onStateChange: (st) => { stateReceived = st; }
  });

  assert.strictEqual(engine.state, GAME_STATES.IDLE);

  // Start classic game
  engine.start(GAME_MODES.CLASSIC);
  assert.strictEqual(engine.state, GAME_STATES.PLAYING);
  assert.strictEqual(stateReceived, GAME_STATES.PLAYING);

  // Pause
  engine.pause();
  assert.strictEqual(engine.state, GAME_STATES.PAUSED);

  // Resume
  engine.resume();
  assert.strictEqual(engine.state, GAME_STATES.PLAYING);

  // End game
  engine.endGame('TEST_END');
  assert.strictEqual(engine.state, GAME_STATES.GAME_OVER);
});
