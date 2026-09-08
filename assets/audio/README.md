# Audio Assets & Procedural Synthesis Engine

The Anti-Gravity Piano application utilizes a hybrid zero-dependency procedural synthesizer built using the **Web Audio API** (`SoundSynthesizer.js`).

## Acoustic Synthesis Model
Rather than requiring massive `.wav` samples that degrade load performance or face copyright limitations, the game generates authentic acoustic piano harmonics programmatically in real time:
- **Fundamental Sine Frequency**: True pitch frequency (C3 through C6)
- **Harmonic Overtones**: 2nd, 3rd, and 4th order harmonics at precise mathematical ratios
- **Piano ADSR Envelope**:
  - Attack: 8ms percussive rise
  - Decay: 150ms exponential damper
  - Sustain / Release: 800ms natural acoustic string decay

## Sound FX
- **Hit Chime**: Frequency sweep modulated by hit precision (Perfect 880Hz, Great 660Hz, Good 520Hz).
- **Miss Sound**: 140Hz descending sawtooth bass buzz.
- **Combo Milestone**: Ascending arpeggio chord (C-E-G-C).
