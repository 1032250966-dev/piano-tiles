/**
 * GameModes.js
 * Definitions, victory conditions, and rulesets for game modes.
 */

import { GAME_MODES, GAME_CONFIG } from '../utils/Constants.js';

export const GAME_MODE_DEFINITIONS = {
  [GAME_MODES.CLASSIC]: {
    id: GAME_MODES.CLASSIC,
    name: 'Classic Endurance',
    description: 'Survive the anti-gravity field and reach 100 tiles. Speed steadily increases. One miss means game over!',
    targetTiles: GAME_CONFIG.CLASSIC_TARGET_TILES,
    hasTimeLimit: false,
    hasGameOverOnMiss: true
  },
  [GAME_MODES.TIME_ATTACK]: {
    id: GAME_MODES.TIME_ATTACK,
    name: 'Time Attack (45s)',
    description: 'Race against a 45-second quantum clock! Score as many points and combos as possible before time runs out.',
    durationSec: GAME_CONFIG.TIME_ATTACK_DURATION_SEC,
    hasTimeLimit: true,
    hasGameOverOnMiss: false
  },
  [GAME_MODES.ZEN]: {
    id: GAME_MODES.ZEN,
    name: 'Zen Float',
    description: 'Zero gravity, zero stress. Play endlessly at a peaceful tempo without game over or timers.',
    hasTimeLimit: false,
    hasGameOverOnMiss: false
  }
};
