# Change: Add TimeSlot Color Picker

## Why

Users want personalization options for their medication schedule. Allowing them to choose custom colors for each time slot (Morning, Noon, Afternoon, Night, Before Sleep) improves visual identification and personal preference alignment.

## What Changes

- Add color picker functionality to the Default Schedule screen
- Each time slot card will have a color indicator that opens a color picker when tapped
- Default colors match current TimeSlotColors values
- Background colors are automatically computed as 20% opacity of the selected color
- User color preferences are persisted in a Zustand async store (`useColorStore`)
- Install `reanimated-color-picker` library for the color picker UI

## Impact

- Affected specs: New `preferences` capability
- Affected code:
  - `stores/color-store.ts` - New Zustand store with async persistence
  - `features/onboarding/default-schedule/` - Add color picker integration
  - `constants/theme.ts` - Update to use dynamic colors from store
  - `components/` - Color picker component wrapper
  - `package.json` - Add color picker dependency
