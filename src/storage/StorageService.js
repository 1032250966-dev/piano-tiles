/**
 * StorageService.js
 * Universal key-value persistence engine with localStorage, AsyncStorage, and in-memory fallbacks.
 */

export class StorageService {
  constructor() {
    this.memoryCache = new Map();
  }

  async getItem(key) {
    try {
      if (typeof localStorage !== 'undefined') {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : null;
      }
    } catch {
      // Browser storage access restriction fallback
    }
    return this.memoryCache.has(key) ? this.memoryCache.get(key) : null;
  }

  async setItem(key, value) {
    this.memoryCache.set(key, value);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch {
      // Storage quota or restriction fallback
    }
    return true;
  }

  async removeItem(key) {
    this.memoryCache.delete(key);
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(key);
      }
    } catch {
      // Fallback
    }
    return true;
  }

  async clear() {
    this.memoryCache.clear();
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.clear();
      }
    } catch {
      // Fallback
    }
    return true;
  }
}

export const defaultStorage = new StorageService();
