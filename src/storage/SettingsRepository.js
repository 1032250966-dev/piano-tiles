/**
 * SettingsRepository.js
 * User preferences repository for audio volume, haptics, and visual effects.
 */

import { STORAGE_KEYS } from '../utils/Constants.js';
import { defaultStorage } from './StorageService.js';

export class SettingsRepository {
  constructor(storage = defaultStorage) {
    this.storage = storage;
  }

  async getSettings() {
    const settings = await this.storage.getItem(STORAGE_KEYS.SETTINGS);
    return settings || {
      masterVolume: 0.8,
      sfxVolume: 0.8,
      musicVolume: 0.6,
      hapticsEnabled: true,
      antiGravityEffects: true,
      theme: 'neon-cyber'
    };
  }

  async saveSettings(newSettings) {
    const current = await this.getSettings();
    const updated = { ...current, ...newSettings };
    await this.storage.setItem(STORAGE_KEYS.SETTINGS, updated);
    return updated;
  }
}
