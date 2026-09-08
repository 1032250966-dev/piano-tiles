/**
 * AudioManager.js
 * High-level audio controller managing volume states, synthesizer, and mute settings.
 */

import { SoundSynthesizer } from './SoundSynthesizer.js';

export class AudioManager {
  constructor() {
    this.synth = new SoundSynthesizer();
    this.isMuted = false;
    this.masterVolume = 0.8;
    this.sfxVolume = 0.8;
    this.musicVolume = 0.6;
  }

  init() {
    this.synth.init();
    this.applyVolumes();
  }

  setMuted(muted) {
    this.isMuted = Boolean(muted);
    this.applyVolumes();
  }

  toggleMute() {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  setMasterVolume(val) {
    this.masterVolume = Math.max(0, Math.min(1, val));
    this.applyVolumes();
  }

  setSfxVolume(val) {
    this.sfxVolume = Math.max(0, Math.min(1, val));
    this.applyVolumes();
  }

  applyVolumes() {
    const effectiveMaster = this.isMuted ? 0 : this.masterVolume;
    this.synth.setMasterVolume(effectiveMaster);
    this.synth.setSfxVolume(this.sfxVolume);
  }

  playNote(noteName) {
    if (this.isMuted) return;
    this.synth.playPianoNote(noteName);
  }

  playHit(rating) {
    if (this.isMuted) return;
    this.synth.playHitChime(rating);
  }

  playMiss() {
    if (this.isMuted) return;
    this.synth.playMissSound();
  }

  playMilestone(multiplier) {
    if (this.isMuted) return;
    this.synth.playComboMilestone(multiplier);
  }
}
