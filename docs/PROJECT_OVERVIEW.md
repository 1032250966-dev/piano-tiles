# Anti-Gravity Piano - Project Overview

## 1. Project Purpose
Anti-Gravity Piano is a fast-paced, futuristic mobile rhythm game that modernizes the classic falling tile genre with zero-gravity aesthetics, responsive multi-touch input, progressive difficulty mechanics, and procedural harmonic piano audio. The game challenges players' reaction speeds, rhythm accuracy, and finger dexterity.

## 2. Problem & Opportunity
Traditional mobile rhythm games frequently suffer from:
- Bloated installation packages requiring hundreds of megabytes of external uncompressed audio files.
- Invasive ads and forced online accounts interrupting the flow state.
- Rigid, linear difficulty curves that fail to scale organically with player skill.

Anti-Gravity Piano solves this by offering:
- A hyper-lightweight, zero-dependency procedural audio engine synthesizing acoustic piano tones in real time.
- 100% offline, privacy-first local persistence with zero forced accounts or tracking.
- An anti-gravity visual theme where speed, floating physics, and particle dynamics scale dynamically with performance.

## 3. Game Concept
Players interact with four vertical quantum energy lanes. Musical piano tiles drift downward under simulated anti-gravity. Striking tiles precisely as they intersect the neon quantum strike line triggers melodic piano notes, scores points, builds combo multipliers, and unleashes particle bursts. Letting a tile slip past or mis-tapping in Classic mode triggers a gravity collapse (Game Over).

## 4. Target Users
- Mobile rhythm and arcade game enthusiasts.
- Casual mobile players seeking short, satisfying reaction-based play sessions.
- Musicians and piano lovers who appreciate pitch-accurate feedback to their touch inputs.

## 5. Platforms
- **Mobile Native**: Android (APK/AAB) & iOS (IPA via Cordova/Capacitor/Expo container).
- **Mobile Web**: Touch-optimized Progressive Web Application (PWA) running smoothly on iOS Safari and Android Chrome.

## 6. Core Gameplay Loop
1. **Selection**: Choose from Classic Endurance, 45s Time Attack, or Zen Float.
2. **Execution**: Tap falling/floating tiles across 4 columns in sync with musical timing.
3. **Escalation**: As tiles are cleared, tile velocity increases and spawn intervals decrease.
4. **Scoring & Feedback**: Earn Perfect/Great/Good ratings, climb combo streak tiers, and trigger haptic pulses.
5. **Resolution**: Reach victory milestones or survive until error; review game stats and save new personal records locally.

## 7. Unique Selling Points (USPs)
- **Zero-Dependency Procedural Piano Synth**: Synthesizes authentic multi-harmonic acoustic piano timbre on the fly using Web Audio API oscillators.
- **Anti-Gravity Physics**: Reverse floating particle fields and dynamic glow shaders give a distinctive cyberpunk space ambiance.
- **Microsecond Hit Windows**: Accurate millisecond-level collision math prevents frustrating false misses.
- **Multi-Tier Combo Multipliers**: Exponential score escalation rewarding sustained perfection.

## 8. Current Scope vs. Future Scope
### Current Scope (v0.1.0)
- 4-column falling tile canvas with 60 FPS delta-time game loop.
- Classic Endurance, Time Attack (45s), and Zen Float game modes.
- Procedural additive harmonic piano audio with hit/miss SFX.
- Cross-platform haptic feedback triggers.
- Local high score and settings persistence.
- Complete documentation and automated unit test suite.

### Future Scope (Roadmap)
- Global online leaderboards and player profiles.
- Custom MIDI and user-imported song track parser.
- Dual-hand 6-column and 8-column pro modes.
- Bluetooth MIDI keyboard input support.
