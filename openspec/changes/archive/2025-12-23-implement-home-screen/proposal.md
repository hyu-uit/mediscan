# Change: Implement Home Screen

## Why

Users need a home screen dashboard after completing onboarding to view their medication schedule, quickly scan new prescriptions, and see today's upcoming medications at a glance.

## What Changes

- Implement the Home screen (`app/(tabs)/index.tsx`) with:
  - Header with greeting (time-based: Good Morning/Afternoon/Evening), user name, and notification bell
  - "Scan Prescription" section with:
    - Dashed border card for "Tap to Scan" action
    - "Upload from Gallery" button
  - "Today's Schedule" section with:
    - Section header with remaining meds count
    - List of medication schedule items

- Create reusable `ScheduleItem` component in `/components`:
  - Displays medication icon, name, dosage, instructions, and scheduled time
  - Styled as a card with rounded corners
  - Reusable across Home and Schedule screens

## Impact

- Affected specs: `home` (new capability), `ui-components` (modified)
- Affected code:
  - `app/(tabs)/index.tsx` (modify)
  - `features/home/` (new folder)
  - `components/schedule-item.tsx` (new)
