# Contributing to Anti-Gravity Piano

Thank you for your interest in contributing to **Anti-Gravity Piano**! We welcome bug reports, feature proposals, gameplay tuning, and pull requests.

## Development Workflow

### 1. Fork & Branch
- Fork the repository on GitHub.
- Create a dedicated branch from `main`:
  ```bash
  git checkout -b feature/neon-pulse-effect
  # or
  git checkout -b fix/collision-hit-box
  ```

Branch naming conventions:
- `feature/description` for new mechanics, modes, or screens
- `fix/description` for bug fixes
- `docs/description` for documentation updates
- `refactor/description` for internal code restructuring

### 2. Coding Standards
- Modern ES6+ syntax with modular structure.
- Adhere to functional single-responsibility principles for engine modules.
- Preserve all JSDoc comments explaining algorithmic formulas.
- Avoid external runtime dependencies unless explicitly justified.

### 3. Testing
Before opening a pull request, run the test suite:
```bash
npm test
```
Ensure all tests pass and add unit tests in `tests/` for any new gameplay logic or scoring calculations.

### 4. Pull Request Checklist
- [ ] Code builds and runs locally without errors.
- [ ] All automated unit tests pass via `npm test`.
- [ ] Relevant documentation under `docs/` is updated to reflect changes accurately.
- [ ] Commit messages follow conventional standards (e.g. `feat: add dynamic gravity wave effect`, `fix: prevent double tap scoring`).
