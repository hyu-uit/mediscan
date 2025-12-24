# Change: Add Dedicated Scan Screen with Liquid Glass Floating Button

## Why

The current home screen combines the medication dashboard with prescription scanning functionality, making the UI crowded. Separating the scan functionality into a dedicated screen accessed via an iOS 26 liquid glass floating action button provides a cleaner home screen and aligns with modern iOS design patterns.

## What Changes

- **BREAKING**: Remove scan UI (ScanTapCard and ScanPreview) from the Home Screen
- Add a floating action button (FAB) next to the tab bar using iOS 26 liquid glass styling
- Create a new dedicated Scan screen accessible via the FAB
- Scan screen includes:
  - Camera scan functionality (existing ScanTapCard and ScanPreview components)
  - Placeholder button for future manual medication entry
- Home screen becomes a cleaner dashboard focused on today's schedule

## Impact

- Affected specs: `navigation`, `home`, new `scan` capability
- Affected code:
  - `app/(tabs)/_layout.tsx` - add floating action button
  - `features/home/index.tsx` - remove scan UI
  - `app/scan.tsx` - new screen route
  - `features/scan/index.tsx` - new scan screen feature

