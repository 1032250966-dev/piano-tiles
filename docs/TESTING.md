# Test Plan & Verification Matrix

## 1. Test Strategy
The test harness utilizes Node.js native test runner (`node:test` and `node:assert`). Tests validate all mathematical formulas, state machine transitions, score multipliers, and storage persistence.

## 2. Automated Test Matrix

| Test ID | Module | Test Description | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | `GameEngine` | Initial state validation | Engine starts in `IDLE` state | **PASSED** |
| **TC-02** | `GameEngine` | Game start transition | State switches to `PLAYING` | **PASSED** |
| **TC-03** | `GameEngine` | Pause and resume lifecycle | State transitions: `PLAYING` -> `PAUSED` -> `PLAYING` | **PASSED** |
| **TC-04** | `GameEngine` | End game transition | State transitions to `GAME_OVER` | **PASSED** |
| **TC-05** | `ScoreManager` | Initial score state | Score = 0, Combo = 0 | **PASSED** |
| **TC-06** | `ScoreManager` | Perfect hit score calculation | Awards 100 points, combo = 1 | **PASSED** |
| **TC-07** | `ScoreManager` | Combo multiplier tier 1 (5+ hits) | Multiplier reaches 1.2x | **PASSED** |
| **TC-08** | `ScoreManager` | Miss penalty | Combo resets to 0, multiplier resets to 1.0x | **PASSED** |
| **TC-09** | `DifficultyManager` | Initial speed parameters | Velocity equals `BASE_SPEED` (320 px/s) | **PASSED** |
| **TC-10** | `DifficultyManager` | Velocity scaling with hits | Speed increases, spawn interval decreases | **PASSED** |
| **TC-11** | `DifficultyManager` | Velocity clamping | Speed does not exceed `MAX_SPEED` (950 px/s) | **PASSED** |
| **TC-12** | `DifficultyManager` | Zen mode invariant | Speed remains constant across hits in Zen mode | **PASSED** |
| **TC-13** | `TileManager` | Procedural tile generation | Spawns tile with valid column [0..3] and offscreen Y | **PASSED** |
| **TC-14** | `TileManager` | Tile movement update | Y position increases based on speed * dt | **PASSED** |
| **TC-15** | `TileManager` | Tile tap marking | Marked tile returns `tapped: true` | **PASSED** |
| **TC-16** | `CollisionDetector` | Perfect hit detection | Tap within 45px returns `hit: true, rating: PERFECT` | **PASSED** |
| **TC-17** | `CollisionDetector` | Miss detection (out of range) | Tap far from tile returns `hit: false, rating: MISS` | **PASSED** |
| **TC-18** | `CollisionDetector` | Empty column tap | Tap with no tiles returns `hit: false, rating: MISS` | **PASSED** |
| **TC-19** | `StorageService` | High score persistence | New record is saved and returned accurately | **PASSED** |
| **TC-20** | `StorageService` | Settings persistence | Audio and haptic preferences persist correctly | **PASSED** |

## 3. Running the Test Suite
Execute the entire test matrix via:
```bash
npm test
```
Execution verification completed locally: 6 test suites, 20 test specifications, 0 failures.
