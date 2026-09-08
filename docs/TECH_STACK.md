# Technology Stack & Architecture Rationale

This document details all technologies used in Anti-Gravity Piano and the architectural justification for each selection.

| Component | Technology | Rationale & Justification |
| :--- | :--- | :--- |
| **Runtime Environment** | Node.js (v18+) / Modern Browser | Universal standard for cross-platform JavaScript development and mobile web deployment. |
| **Application Architecture** | Modular ES6+ JavaScript | Zero transpilation lag; runs natively in modern mobile browsers, Node test runners, and webviews. |
| **Rendering Subsystem** | HTML5 Canvas 2D Context | Delivers hardware-accelerated 60 FPS graphics, particle systems, and glow effects with minimal CPU/GPU overhead. |
| **Audio Synthesizer** | Web Audio API (OscillatorNode & GainNode) | Eliminates audio file bloat and licensing issues by synthesizing multi-harmonic acoustic piano notes procedurally in real-time. |
| **Tactile Engine** | Web Vibration API | Native cross-platform haptic feedback without requiring bulky third-party SDKs. |
| **Persistence Engine** | StorageService (localStorage / Memory) | Synchronous and asynchronous key-value persistence ensuring high scores are saved locally on-device. |
| **Test Runner** | Node.js Native Test Runner (`node:test`, `node:assert`) | Zero external test dependencies required; guarantees verifiable testing out of the box. |
| **Mobile Bundler / Config**| `app.json` (Expo / React Native compatible) | Prepares repository for effortless compilation to Android APK/AAB and iOS IPA through Expo Application Services (EAS). |
