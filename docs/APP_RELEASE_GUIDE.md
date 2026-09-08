# Mobile App Release Guide (Android & iOS)

This guide documents the procedures for compiling, signing, and releasing Anti-Gravity Piano to the Google Play Store and Apple App Store.

## 1. Android Release Workflow

### A. Configure App Metadata (`app.json`)
Ensure package name, version, and icons are configured:
```json
{
  "expo": {
    "name": "Anti-Gravity Piano",
    "version": "1.0.0",
    "android": {
      "package": "com.antigravity.piano",
      "versionCode": 1
    }
  }
}
```

### B. Generate Android Keystore
Generate a production release keystore:
```bash
keytool -genkey -v -keystore release.keystore -alias antigravity -keyalg RSA -keysize 2048 -validity 10000
```

### C. Build Release APK / Android App Bundle (AAB)
Using EAS Build (Expo Application Services) or Gradle:
```bash
# Build Android App Bundle for Google Play Store
npx eas-cli build --platform android --profile production
```
Or generate a direct standalone APK for sideload testing:
```bash
npx eas-cli build --platform android --profile preview
```

## 2. iOS Release Workflow

### A. Configure Bundle Identifier
Set bundle ID in `app.json`:
```json
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.antigravity.piano",
      "buildNumber": "1.0.0"
    }
  }
}
```

### B. Build iOS Archive
```bash
npx eas-cli build --platform ios --profile production
```
Submit the resulting IPA archive to App Store Connect via Transporter or EAS Submit:
```bash
npx eas-cli submit --platform ios
```
