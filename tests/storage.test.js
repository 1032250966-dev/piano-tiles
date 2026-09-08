import test from 'node:test';
import assert from 'node:assert';
import { StorageService } from '../src/storage/StorageService.js';
import { ScoreRepository } from '../src/storage/ScoreRepository.js';
import { SettingsRepository } from '../src/storage/SettingsRepository.js';
import { GAME_MODES } from '../src/utils/Constants.js';

test('Storage & Repositories - High score and settings persistence', async () => {
  const storage = new StorageService();
  const scoreRepo = new ScoreRepository(storage);
  const settingsRepo = new SettingsRepository(storage);

  // Initial high scores
  const initialScores = await scoreRepo.getHighScores();
  assert.strictEqual(initialScores.CLASSIC, 0);

  // Record game
  const res1 = await scoreRepo.recordGameResult({
    mode: GAME_MODES.CLASSIC,
    score: 1200,
    maxCombo: 12,
    tilesHit: 25
  });
  assert.strictEqual(res1.isNewHighScore, true);
  assert.strictEqual(res1.stats.CLASSIC, 1200);
  assert.strictEqual(res1.stats.highestCombo, 12);
  assert.strictEqual(res1.stats.gamesPlayed, 1);

  // Settings update
  await settingsRepo.saveSettings({ masterVolume: 0.5, hapticsEnabled: false });
  const settings = await settingsRepo.getSettings();
  assert.strictEqual(settings.masterVolume, 0.5);
  assert.strictEqual(settings.hapticsEnabled, false);
});
