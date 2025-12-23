# Change: Add Emergency Backup Screen

## Why
As a final onboarding step, users can enable phone call reminders as a backup when they miss critical notifications. This ensures users never accidentally skip their medication by providing an escalation path via automated phone calls.

## What Changes
- Add `components/onboarding/emergency-access.tsx` component with:
  - Back arrow button
  - Circular illustration with phone icon and decorative elements
  - "Emergency Backup" heading
  - Description explaining phone calls as backup for missed notifications
  - Incoming call preview card showing example notification
  - Primary "Enable Phone Calls" button (green with phone icon)
  - Secondary "Skip for now" link
- Add emergency screen route to navigation flow
- Update Notification screen to navigate to Emergency screen

## Impact
- Affected specs: `onboarding` (add requirement)
- Affected code:
  - `components/onboarding/emergency-access.tsx` (new file)
  - `app/emergency-access.tsx` (new route)
  - `app/notification-access.tsx` (update navigation)
  - `app/_layout.tsx` (add route)

