# Change: Add Native Bottom Tabs Navigation

## Why

The app needs a main navigation structure for users to access core features after completing onboarding. Native tabs provide better performance and platform-native look and feel compared to JS-based tabs.

## What Changes

- Replace current Expo Router `Tabs` with `NativeTabs` from `expo-router/unstable-native-tabs`
- Update `app/(tabs)/_layout.tsx` to use native tab configuration
- Add four tab screens:
  - **Home** - Main dashboard (placeholder)
  - **Schedule** - Medication schedule view (placeholder)
  - **History** - Intake history tracking (placeholder)
  - **Profile** - User settings and profile (placeholder)
- Each screen displays temporary placeholder text
- Add Lucide icons for each tab

## Impact

- Affected specs: `navigation` (new capability)
- Affected code:
  - `app/(tabs)/_layout.tsx` (modify)
  - `app/(tabs)/index.tsx` (keep as Home)
  - `app/(tabs)/schedule.tsx` (new)
  - `app/(tabs)/history.tsx` (new)
  - `app/(tabs)/profile.tsx` (new)

