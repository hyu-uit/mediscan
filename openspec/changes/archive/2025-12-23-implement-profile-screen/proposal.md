# Change: Implement Profile Screen UI

## Why

Users need access to their profile settings, notification preferences, caregiver alerts, and app settings. The Profile screen serves as the central hub for user account management and app configuration.

## What Changes

- Create Profile screen with user info header (avatar, name, email)
- Add action buttons row (Edit Profile, Insurance)
- Create SettingsSection component for grouped settings
- Create SettingsRow component for individual setting items
- Add Alerts & Automation section (Push Notifications, Automated Calls, Caregiver Alerts)
- Add Preferences section (Default Intake Times, Dark Mode toggle)
- Add Legal & Support section (Privacy Policy, Terms of Service)
- Add Sign Out button and app version footer

## Impact

- Affected specs: profile (new), ui-components (update)
- Affected code: `app/(tabs)/profile.tsx`, `features/profile/`, new components
