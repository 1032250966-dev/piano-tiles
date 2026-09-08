# Software Requirements Specification (SRS)

## 1. Functional Requirements

### Player Interaction & Lifecycle
- **FR-01**: The system shall allow the user to start a game from the Home screen or Mode Selection screen.
- **FR-02**: The system shall generate falling/floating piano tiles in one of 4 vertical columns with procedural lane balancing.
- **FR-03**: The system shall detect touch or pointer input on any active column.
- **FR-04**: The system shall evaluate tap accuracy against the strike line and assign a rating: `PERFECT`, `GREAT`, `GOOD`, or `MISS`.
- **FR-05**: The system shall update and render the score in real time based on hit accuracy and current combo multiplier.
- **FR-06**: The system shall increment the combo count on consecutive valid hits and reset it to zero upon a miss.
- **FR-07**: The system shall provide three distinct game modes: Classic Endurance, Time Attack, and Zen Float.
- **FR-08**: The system shall persist the highest score and longest combo per game mode locally on the device.
- **FR-09**: The system shall provide pause, resume, and restart functionality during an active gameplay session.
- **FR-10**: The system shall provide user settings to adjust master volume, sound effects volume, and toggle haptic feedback.
- **FR-11**: The system shall synthesize musical notes corresponding to the active melody sequence upon each successful tile strike.
- **FR-12**: The system shall terminate the game and display the Game Over screen when a tile crosses the lower miss boundary in Classic mode.

## 2. Non-Functional Requirements

### Performance & Latency
- **NFR-01 (Frame Rate)**: The game rendering loop shall maintain a consistent 60 FPS on standard mobile hardware.
- **NFR-02 (Input Latency)**: Touch input processing and audio synthesis trigger latency shall not exceed 50 milliseconds.
- **NFR-03 (Startup Time)**: The application shall load and present the initial interactive screen within 1.5 seconds.

### Usability & Accessibility
- **NFR-04 (Touch Target Size)**: Each column shall provide a minimum touch target width of 70 pixels (comfortably exceeding the standard 48dp guideline).
- **NFR-05 (Visual Contrast)**: Tile colors and text indicators shall maintain a minimum contrast ratio of 4.5:1 against the dark background.
- **NFR-06 (Orientation)**: The interface shall be optimized exclusively for portrait orientation.

### Reliability & Compatibility
- **NFR-07 (Offline Operation)**: The game shall function entirely offline without network connectivity.
- **NFR-08 (Cross-Platform)**: The codebase shall operate identically on modern mobile browsers (iOS Safari, Android Chrome) and native webview wrappers.

### Privacy & Security
- **NFR-09 (Zero Telemetry)**: The application shall not collect, log, or transmit personal data or device identifiers.
- **NFR-10 (Integrity)**: High scores and settings stored locally shall be validated against corrupt data schemas.
