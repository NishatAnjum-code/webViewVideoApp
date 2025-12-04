# WebViewVideo App

## Features
- WebView screen with 3 buttons:
  - 2 buttons trigger local notifications (3–5 sec delay)
  - 1 button navigates to Video Player screen
- Video Player screen:
  - Play, Pause, Fullscreen controls
  - Streams HLS video
- Navigation between screens

# Scenario,Expected Behavior,Compatibility Note
- WebView Load,A notification is triggered 1x upon successful page load.,Fully 
- functional in Expo Go (iOS & Android).
- Video Playback,HLS stream plays with PiP and Fullscreen controls.,Fully functional in Expo Go (iOS & Android).
- Local Notifications,Notifications appear 3 seconds after button press.,Works on iOS (Expo Go). 
- Requires a Dev/Production build (EAS) for Android due to Expo Go limitations on that platform.

# Install dependencies
npm install

# Start the application
npx expo start

# Build Android APK for testing
eas build --platform android --profile apk

# Build iOS app
eas build --platform ios
