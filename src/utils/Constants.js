/**
 * Constants.js
 * Core configuration and theme constants for Anti-Gravity Piano.
 */

export const GAME_CONFIG = {
  COLUMN_COUNT: 4,
  TARGET_FPS: 60,
  BASE_SPEED: 320,
  MAX_SPEED: 950,
  SPEED_INCREMENT: 9.0,
  SPAWN_INTERVAL_BASE_MS: 750,
  MIN_SPAWN_INTERVAL_MS: 240,
  TILE_HEIGHT: 130,
  TILE_WIDTH_RATIO: 0.25,
  HIT_LINE_Y_RATIO: 0.82,
  MISS_LINE_OFFSET: 25,
  HIT_WINDOWS: {
    PERFECT: 45,
    GREAT: 90,
    GOOD: 140
  },
  SCORES: {
    PERFECT: 100,
    GREAT: 75,
    GOOD: 50
  },
  COMBO_MULTIPLIERS: [
    { streak: 5, multiplier: 1.2, label: 'GOOD SYNC' },
    { streak: 15, multiplier: 1.5, label: 'GRAVITY SHIFT' },
    { streak: 30, multiplier: 2.0, label: 'QUANTUM FLOW' },
    { streak: 50, multiplier: 3.0, label: 'SUPERNOVA' }
  ],
  TIME_ATTACK_DURATION_SEC: 45,
  CLASSIC_TARGET_TILES: 100
};

export const GAME_MODES = {
  CLASSIC: 'CLASSIC',
  TIME_ATTACK: 'TIME_ATTACK',
  ZEN: 'ZEN'
};

export const GAME_STATES = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  GAME_OVER: 'GAME_OVER',
  VICTORY: 'VICTORY'
};

export const HIT_RATINGS = {
  PERFECT: 'PERFECT',
  GREAT: 'GREAT',
  GOOD: 'GOOD',
  MISS: 'MISS'
};

export const THEME_COLORS = {
  BACKGROUND_DARK: '#070913',
  BACKGROUND_SECONDARY: '#111427',
  SURFACE_CARD: 'rgba(23, 27, 54, 0.85)',
  ACCENT_CYAN: '#00f3ff',
  ACCENT_MAGENTA: '#ff007f',
  ACCENT_PURPLE: '#8b5cf6',
  ACCENT_YELLOW: '#ffe600',
  ACCENT_GREEN: '#00ff88',
  ACCENT_RED: '#ff3344',
  TEXT_PRIMARY: '#ffffff',
  TEXT_MUTED: '#8e9aaf',
  BORDER_GLOW: 'rgba(0, 243, 255, 0.4)',
  TARGET_LINE: 'rgba(0, 243, 255, 0.75)',
  COLUMN_DIVIDER: 'rgba(255, 255, 255, 0.08)',
  TILE_COLORS: ['#00f3ff', '#ff007f', '#8b5cf6', '#ffe600']
};

export const STORAGE_KEYS = {
  HIGH_SCORES: 'anti_gravity_piano_high_scores',
  SETTINGS: 'anti_gravity_piano_settings',
  STATISTICS: 'anti_gravity_piano_statistics'
};
