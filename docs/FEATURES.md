# Feature Matrix - Anti-Gravity Piano

This document catalogs all implemented features alongside planned roadmap items in strict adherence to implementation reality.

## 1. Gameplay Features
| Feature | Description | Status |
| :--- | :--- | :--- |
| **4-Column Tile System** | 4 responsive vertical lanes with anti-repetition spawner logic | **Implemented** |
| **Touch/Pointer Controls** | Low-latency multi-touch and pointer event listeners | **Implemented** |
| **Precision Hit Detection** | Multi-tier strike window (Perfect: 45px, Great: 90px, Good: 140px) | **Implemented** |
| **Miss Boundary Detection** | Automatic miss registration when tiles overshoot the target line | **Implemented** |
| **Progressive Difficulty** | Velocity curves: speed scales from 320 to 950 px/s based on hits | **Implemented** |
| **Combo Multiplier System** | 1.2x (5+), 1.5x (15+), 2.0x (30+), 3.0x (50+) streak bonuses | **Implemented** |
| **Game Over & Victory** | Instant game over on miss in Classic mode; 100-tile victory check | **Implemented** |

## 2. Game Modes
| Mode | Description | Status |
| :--- | :--- | :--- |
| **Classic Endurance** | Survive 100 tiles under accelerating speed. 1 miss = instant death | **Implemented** |
| **Time Attack** | 45-second high-intensity sprint; misses penalize combo without death | **Implemented** |
| **Zen Float** | Relaxing, immortal practice mode at steady tempo without fail state | **Implemented** |
| **Pro 6-Column Mode** | Expanded lane count for advanced rhythm players | *Planned* |
| **Multiplayer Duel** | Real-time 1v1 PvP rhythm battle over WebSockets | *Planned* |

## 3. Audio Features
| Feature | Description | Status |
| :--- | :--- | :--- |
| **Harmonic Piano Synth** | Real-time additive synthesizer rendering notes C3 through C6 | **Implemented** |
| **Melodic Song Sequences** | Pre-mapped songs (Für Elise, Canon in D, Cyber Anthem) | **Implemented** |
| **Dynamic Hit Chimes** | Pitch-shifted confirmation chimes for Perfect, Great, and Good taps | **Implemented** |
| **Miss Buzz SFX** | Descending sawtooth bass feedback on miss | **Implemented** |
| **Audio Controls** | Independent Master Volume, SFX Volume, and Master Mute toggle | **Implemented** |
| **Custom Song Import** | Loading custom MIDI / JSON song charts | *Planned* |

## 4. Mobile & Usability Features
| Feature | Description | Status |
| :--- | :--- | :--- |
| **Haptic Feedback** | Tactile vibration pulses on taps, milestones, and errors | **Implemented** |
| **Portrait Lock** | Designed specifically for single-hand or two-thumb portrait play | **Implemented** |
| **Responsive Canvas** | Viewport auto-resizing adapting to any phone aspect ratio | **Implemented** |
| **Local Storage** | Best score, max combo, and settings persisted via StorageService | **Implemented** |

## 5. Visual Features
| Feature | Description | Status |
| :--- | :--- | :--- |
| **Neon Cyber Aesthetics** | High-contrast palette (#00f3ff, #ff007f, #8b5cf6, #ffe600) | **Implemented** |
| **Particle Hit Bursts** | 20-particle velocity explosions on successful tile taps | **Implemented** |
| **Floating Starfield** | Zero-gravity ambient particle drift in background | **Implemented** |
| **Combo Floating Toasts** | Animated floating text popups for hit ratings and point gains | **Implemented** |
| **Custom Shaders** | WebGL bloom filters and custom post-processing passes | *Planned* |
