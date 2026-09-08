# Troubleshooting Guide

This guide provides tested solutions to common issues encountered during development or runtime.

## 1. Audio Not Playing in Mobile Browser
- **Cause**: Modern mobile browsers (iOS Safari, Android Chrome) block `AudioContext` playback until an explicit user interaction occurs.
- **Solution**: Tap anywhere on the initial Splash screen ("TAP TO ENTER"). This triggers `audioCtx.resume()` within a trusted user-gesture context.

## 2. Port Already in Use (`EADDRINUSE: 3000`)
- **Cause**: Another service or prior development session is occupying port 3000.
- **Solution**: Pass an alternative port via environment variable:
  ```bash
  PORT=8080 npm start
  ```

## 3. Haptic Feedback Unavailable
- **Cause**: Device hardware does not support vibration or browser permissions restrict `navigator.vibrate`.
- **Solution**: Haptics fail gracefully without throwing exceptions. Ensure vibration is enabled in device system settings.

## 4. Metro / Expo Cache Issues (When building native APK)
- **Cause**: Stale Metro bundler cache.
- **Solution**: Clear Metro cache and restart:
  ```bash
  npx expo start -c
  ```
