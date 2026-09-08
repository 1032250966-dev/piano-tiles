/**
 * TileManager.js
 * Procedural generation, movement physics, and boundary checks for falling piano tiles.
 */

import { GAME_CONFIG, THEME_COLORS } from '../utils/Constants.js';
import { SONG_LIBRARY } from './SongLibrary.js';

export class TileManager {
  constructor(dimensionsHelper, songIndex = 0) {
    this.dim = dimensionsHelper;
    this.tiles = [];
    this.tileIdCounter = 1;
    this.lastSpawnColumn = -1;
    this.timeSinceLastSpawn = 0;
    this.currentSong = SONG_LIBRARY[songIndex % SONG_LIBRARY.length];
    this.noteCursor = 0;
  }

  reset(songIndex = 0) {
    this.tiles = [];
    this.tileIdCounter = 1;
    this.lastSpawnColumn = -1;
    this.timeSinceLastSpawn = 0;
    this.currentSong = SONG_LIBRARY[songIndex % SONG_LIBRARY.length];
    this.noteCursor = 0;
  }

  getNextNote() {
    if (!this.currentSong || !this.currentSong.notes.length) return 'C4';
    const note = this.currentSong.notes[this.noteCursor % this.currentSong.notes.length];
    this.noteCursor += 1;
    return note;
  }

  spawnTile() {
    let column;
    do {
      column = Math.floor(Math.random() * GAME_CONFIG.COLUMN_COUNT);
    } while (column === this.lastSpawnColumn && Math.random() > 0.35);

    this.lastSpawnColumn = column;

    const tile = {
      id: 'tile_' + (this.tileIdCounter++),
      column,
      x: this.dim.getColumnLeft(column),
      y: -GAME_CONFIG.TILE_HEIGHT,
      width: this.dim.columnWidth,
      height: GAME_CONFIG.TILE_HEIGHT,
      color: THEME_COLORS.TILE_COLORS[column % THEME_COLORS.TILE_COLORS.length],
      note: this.getNextNote(),
      tapped: false,
      glowAlpha: 0.8
    };

    this.tiles.push(tile);
    return tile;
  }

  update(dt, speed, spawnIntervalMs) {
    this.timeSinceLastSpawn += dt * 1000;

    let spawnedTile = null;
    if (this.timeSinceLastSpawn >= spawnIntervalMs) {
      spawnedTile = this.spawnTile();
      this.timeSinceLastSpawn = 0;
    }

    const missedTiles = [];
    const activeTiles = [];

    for (const tile of this.tiles) {
      if (!tile.tapped) {
        tile.y += speed * dt;
        tile.x = this.dim.getColumnLeft(tile.column);
        tile.width = this.dim.columnWidth;

        if (tile.y > this.dim.missLineY) {
          missedTiles.push(tile);
        } else {
          activeTiles.push(tile);
        }
      }
    }

    this.tiles = activeTiles;

    return {
      spawnedTile,
      missedTiles
    };
  }

  markTapped(tileId) {
    const tile = this.tiles.find(t => t.id === tileId);
    if (tile) {
      tile.tapped = true;
      return tile;
    }
    return null;
  }

  getColumnTiles(columnIndex) {
    return this.tiles.filter(t => t.column === columnIndex && !t.tapped);
  }
}
