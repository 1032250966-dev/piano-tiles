/**
 * SoundSynthesizer.js
 * Zero-dependency Web Audio procedural synthesizer creating realistic harmonic piano notes
 * and futuristic sound effects without external audio files.
 */

import { NOTE_FREQUENCIES } from './NoteFrequencies.js';

export class SoundSynthesizer {
  constructor() {
    this.audioCtx = null;
    this.masterGain = null;
    this.sfxGain = null;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContextClass = typeof window !== 'undefined'
        ? (window.AudioContext || window.webkitAudioContext)
        : null;

      if (!AudioContextClass) return;

      this.audioCtx = new AudioContextClass();
      this.masterGain = this.audioCtx.createGain();
      this.sfxGain = this.audioCtx.createGain();

      this.sfxGain.connect(this.masterGain);
      this.masterGain.connect(this.audioCtx.destination);

      this.initialized = true;
    } catch {
      // AudioContext unavailable (e.g. CLI or headless test)
    }
  }

  resume() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setMasterVolume(volume) {
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, volume)), this.audioCtx.currentTime);
    }
  }

  setSfxVolume(volume) {
    if (this.sfxGain && this.audioCtx) {
      this.sfxGain.gain.setValueAtTime(Math.max(0, Math.min(1, volume)), this.audioCtx.currentTime);
    }
  }

  playPianoNote(noteOrFreq = 'C4', duration = 0.8) {
    if (!this.initialized || !this.audioCtx) return;
    this.resume();

    const freq = typeof noteOrFreq === 'number'
      ? noteOrFreq
      : (NOTE_FREQUENCIES[noteOrFreq] || 440);

    const now = this.audioCtx.currentTime;

    const harmonics = [
      { ratio: 1.0, gain: 0.70 },
      { ratio: 2.0, gain: 0.25 },
      { ratio: 3.0, gain: 0.12 },
      { ratio: 4.0, gain: 0.05 }
    ];

    harmonics.forEach(({ ratio, gain }) => {
      const osc = this.audioCtx.createOscillator();
      const noteGain = this.audioCtx.createGain();

      osc.type = ratio === 1 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq * ratio, now);

      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(gain, now + 0.008);
      noteGain.gain.exponentialRampToValueAtTime(gain * 0.35, now + 0.15);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      noteGain.connect(this.sfxGain);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    });
  }

  playHitChime(rating = 'PERFECT') {
    if (!this.initialized || !this.audioCtx) return;
    this.resume();

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    const baseFreq = rating === 'PERFECT' ? 880 : rating === 'GREAT' ? 660 : 520;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.1);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.22);
  }

  playMissSound() {
    if (!this.initialized || !this.audioCtx) return;
    this.resume();

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.linearRampToValueAtTime(70, now + 0.35);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.38);
  }

  playComboMilestone(multiplier) {
    if (!this.initialized || !this.audioCtx) return;
    this.resume();

    const pitches = [523.25, 659.25, 783.99, 1046.50];
    pitches.forEach((freq, idx) => {
      setTimeout(() => {
        this.playPianoNote(freq, 0.4);
      }, idx * 60);
    });
  }
}
