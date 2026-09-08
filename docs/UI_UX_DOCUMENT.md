# UI / UX Design Document

## 1. Screen Inventory & Flow

```
[Splash Screen] 
       │ (Tap to Enter / Audio Init)
       ▼
 [Home Screen] ──(Select Mode)──> [Mode Select Screen]
       │                                  │
   (Play)                             (Choose)
       │                                  │
       ▼                                  ▼
                [Gameplay Screen]
                  │          ▲
               (Pause)   (Resume)
                  ▼          │
                 [Pause Modal]
                  │
             (Miss / Win)
                  ▼
              [Game Over]
```

## 2. Screen Specifications

### Screen 1: Splash Screen
- **Purpose**: Brand impression and mobile browser AudioContext user-gesture unlock.
- **UI Elements**: Animated glowing logo orb, title, subtitle, and prominent "TAP TO ENTER" button.

### Screen 2: Home Screen
- **Purpose**: Primary navigational hub.
- **UI Elements**: High score summary card (Classic Record, Time Attack Record, Max Combo), "PLAY CLASSIC" CTA button, "SELECT MODE" button, and "SETTINGS" button.

### Screen 3: Mode Selection Screen
- **Purpose**: Choosing gameplay ruleset.
- **UI Elements**: Three tactile mode cards for Classic, Time Attack, and Zen with descriptions and color accents.

### Screen 4: Gameplay Screen
- **Purpose**: Main interactive play area.
- **UI Elements**: 4 vertical lanes, glowing target strike line, floating piano tiles, particle canvas, top HUD with live score, combo counter, time remaining, and circular pause button.

### Screen 5: Pause Modal
- **Purpose**: Temporary gameplay suspension.
- **UI Elements**: Blurred backdrop overlay, "RESUME", "RESTART", "MUTE/UNMUTE AUDIO", and "MAIN MENU" buttons.

### Screen 6: Game Over / Victory Screen
- **Purpose**: Post-game recap and score submission.
- **UI Elements**: Headline ("GRAVITY COLLAPSE" or "VICTORY!"), new high score badge, statistics box (Final Score, Max Combo, Tiles Hit, Mode), "PLAY AGAIN" button, and "MAIN MENU" button.

### Screen 7: Settings Screen
- **Purpose**: Audio and gameplay preference customization.
- **UI Elements**: Sliders for Master Volume and SFX Volume, checkboxes for Haptic Feedback and Anti-Gravity FX, and "RESET HIGH SCORES" button.

## 3. Design System & Accessibility
- **Touch Targets**: All interactive buttons have a minimum touch footprint of 48x48 points.
- **Contrast**: WCAG 2.1 AA compliant color contrast on all text and UI elements.
- **Typography**: Clean system sans-serif for numbers and headers; monospaced font for timing and pitches.
