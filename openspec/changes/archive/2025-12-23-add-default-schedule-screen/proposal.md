# Change: Add Default Schedule Screen

## Why

After completing permission setup, users need to configure their default medication intake times. This screen allows users to set up common time slots (Morning, Noon, Afternoon, Night, Before Sleep) that will be used as defaults when adding new prescriptions.

## What Changes

- Add `components/onboarding/default-schedule.tsx` component with:
  - Header with back arrow and "Default Schedule" title
  - "Set Default Times" heading
  - Description text
  - List of time slot cards with:
    - Emoji icon with colored background
    - Time slot name
    - Default time display
    - Toggle switch to enable/disable
  - Primary "Save Configuration" button at bottom
- Add default schedule screen route to navigation flow
- Update Emergency screen to navigate to Default Schedule screen

## Impact

- Affected specs: `onboarding` (add requirement)
- Affected code:
  - `components/onboarding/default-schedule.tsx` (new file)
  - `app/default-schedule.tsx` (new route)
  - `app/emergency-access.tsx` (update navigation)
  - `app/_layout.tsx` (add route)
