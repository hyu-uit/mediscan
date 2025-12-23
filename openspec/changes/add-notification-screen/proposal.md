# Change: Add Notification Permission Screen

## Why
After granting camera access, users need to enable push notifications to receive medication reminders. This screen explains the benefits of notifications and provides an option to skip for users who prefer not to enable them immediately.

## What Changes
- Add `components/onboarding/notification-access.tsx` component with:
  - Back arrow button
  - Circular illustration with bell icon and decorative elements
  - "Don't miss a pill" heading (with "pill" highlighted in green)
  - Description explaining the importance of notifications
  - Feature list with icons (Daily Reminders, Escalating Alerts, Refill Warnings)
  - Primary "Enable Notifications →" button (green)
  - Secondary "Maybe later" link
- Add notification screen route to navigation flow
- Update Camera Access screen to navigate to Notification screen

## Impact
- Affected specs: `onboarding` (add requirement)
- Affected code:
  - `components/onboarding/notification-access.tsx` (new file)
  - `app/notification-access.tsx` (new route)
  - `app/camera-access.tsx` (update navigation)
  - `app/_layout.tsx` (add route)

