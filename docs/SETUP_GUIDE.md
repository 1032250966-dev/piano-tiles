# Developer Setup Guide

Follow this guide to set up, run, and test Anti-Gravity Piano on your machine.

## Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **Git**
- A modern web browser (Chrome, Firefox, Safari, Edge)

## 1. Clone the Repository
```bash
git clone https://github.com/your-username/anti-gravity-piano.git
cd anti-gravity-piano
```

## 2. Install Dependencies
Anti-Gravity Piano is engineered with zero bulky runtime dependencies for rapid onboarding:
```bash
npm install
```

## 3. Run Development Server
Start the local development server:
```bash
npm start
```
The application will be live at:
```
http://localhost:3000
```
Open this URL in your desktop browser or mobile device connected to the same local Wi-Fi.

## 4. Run Automated Tests
Execute the built-in unit test suite:
```bash
npm test
```
Or run tests directly with Node:
```bash
node --test tests/*.test.js
```

## 5. Mobile Testing via DevTools
1. Open `http://localhost:3000` in Google Chrome.
2. Press `F12` to open Chrome Developer Tools.
3. Click the **Toggle Device Toolbar** icon (`Ctrl+Shift+M` or `Cmd+Shift+M`).
4. Select a mobile profile (e.g. **iPhone 14 Pro** or **Pixel 7**).
5. Interact using mouse clicks or touch simulation.
