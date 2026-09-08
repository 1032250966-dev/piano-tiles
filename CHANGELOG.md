# Changelog

All notable changes to **Anti-Gravity Piano** will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - Initial Development

### Added
- **Core 60 FPS Game Engine**: Delta-time physics simulation loop with support for state transitions (`IDLE`, `PLAYING`, `PAUSED`, `GAME_OVER`, `VICTORY`).
- **Four-Column Tile System**: Dynamic procedural tile spawner balancing lane selection and falling speeds.
- **Hit Detection System**: Precision strike-zone classification supporting `PERFECT`, `GREAT`, `GOOD`, and `MISS` accuracy ratings.
- **Three Game Modes**:
  - **Classic Endurance**: Progressive difficulty curve up to 100 tiles; instant game-over on miss.
  - **Time Attack (45s)**: High-intensity countdown sprint maximizing score and combo multipliers.
  - **Zen Float**: Immortal practice mode with soothing tempo and zero death.
- **Procedural Piano Synthesizer**: Low-latency Web Audio API acoustic piano harmonics with ADSR envelope shaping and sci-fi hit chimes.
- **Anti-Gravity Visuals**: Glowing neon aesthetics, particle burst emitter, and ambient stardust float background.
- **Local High Score Repository**: On-device persistence tracking best records, highest combos, and total hits per mode.
- **Cross-Platform Haptics**: Tactile feedback helper for mobile vibration triggers.
- **Test Suite**: Automated unit tests using Node's native test runner (`node:test`).
- **Comprehensive Documentation**: Complete 13-guide architecture, design, and release manual under `docs/`.
