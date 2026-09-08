# Game Design Document (GDD) - Anti-Gravity Piano

## 1. Game Concept
Anti-Gravity Piano is a futuristic rhythm-action mobile game where players tap piano tiles drifting through a zero-gravity quantum field. Each tap triggers a note of a musical melody while testing rhythm precision and reflexes.

## 2. Core Gameplay Mechanics
- **Lanes**: 4 vertical columns.
- **Direction**: Tiles drift downward toward the strike line located at 82% of screen height.
- **Tap Action**: Tapping a tile when its center crosses the strike zone scores points and emits a piano note.
- **Precision Ratings**:
  - **PERFECT** (within 45px): 100 points
  - **GREAT** (within 90px): 75 points
  - **GOOD** (within 140px): 50 points
  - **MISS** (beyond 140px or off-target): 0 points, combo reset

## 3. Combo Multipliers
Sustaining consecutive hits without a miss triggers escalating score multipliers:
- **0 - 4 hits**: 1.0x (Standard)
- **5 - 14 hits**: 1.2x ("GOOD SYNC")
- **15 - 29 hits**: 1.5x ("GRAVITY SHIFT")
- **30 - 49 hits**: 2.0x ("QUANTUM FLOW")
- **50+ hits**: 3.0x ("SUPERNOVA")

## 4. Game Modes
1. **Classic Endurance**:
   - Target: Clear 100 tiles.
   - Fail Condition: Any missed tile or tapping an empty space ends the flight immediately.
   - Velocity: Scales up continuously from 320 px/s to 950 px/s.
2. **Time Attack**:
   - Duration: 45 seconds.
   - Mechanics: Unlimited lives. Misses reset combo and deduct a small time penalty rather than ending the game.
3. **Zen Float**:
   - Target: Endless relaxation.
   - Mechanics: Constant soothing velocity (270 px/s). Zero fail conditions. Ideal for casual melody playback.

## 5. Visual & Theme Design
- **Theme**: Quantum Cyberpunk / Anti-Gravity Stardust.
- **Palette**: Deep void navy (`#070913`), electric cyan (`#00f3ff`), neon magenta (`#ff007f`), quantum violet (`#8b5cf6`), solar yellow (`#ffe600`).
- **Effects**: Particle bursts on strike (20 particles with random radial velocity and fast alpha decay), floating stardust particles in background, neon luminescent glow shadows.
