# Change: Add Time Picker Component

## Why
The default schedule screen needs an interactive way for users to edit medication reminder times. A bottom sheet time picker provides a native-feeling, accessible interface for selecting hours, minutes, and AM/PM values.

## What Changes
- Install `@gorhom/bottom-sheet` for the sliding bottom sheet behavior
- Install `react-native-gesture-handler` and `react-native-reanimated` (dependencies)
- Create `components/time-picker/` with:
  - `index.tsx` - Main TimePicker component (bottom sheet with time selection)
  - `time-column.tsx` - Scrollable column for hour/minute/period selection
- The time picker will feature:
  - Title and subtitle text
  - Three scrollable columns (hours, minutes, AM/PM)
  - Cancel and Save Time buttons
  - Backdrop overlay when open

## Impact
- Affected specs: `ui-components` (new capability)
- Affected code:
  - `components/time-picker/index.tsx` (new file)
  - `components/time-picker/time-column.tsx` (new file)
  - `package.json` (new dependencies)
  - `app/_layout.tsx` (wrap with GestureHandlerRootView)

