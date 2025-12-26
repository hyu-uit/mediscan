# Tasks: Add TimeSlot Color Picker

## 1. Dependencies

- [x] 1.1 Install `reanimated-color-picker` library
- [x] 1.2 Verify `react-native-reanimated` is already installed (peer dependency)

## 2. Store Setup

- [x] 2.1 Create `stores/color-store.ts` with Zustand and async persistence
- [x] 2.2 Define TimeSlotColors interface with color per slot
- [x] 2.3 Implement `getTimeSlotColor` selector that returns color + computed bgColor (20% opacity)
- [x] 2.4 Add `setTimeSlotColor` action to update a slot's color
- [x] 2.5 Initialize store with default colors matching current TimeSlotColors

## 3. Color Picker Component

- [x] 3.1 Create `components/color-picker-modal.tsx` wrapper component
- [x] 3.2 Implement modal with color wheel/picker UI
- [x] 3.3 Add confirm/cancel actions
- [x] 3.4 Support initial color value

## 4. Integration

- [x] 4.1 Update `time-slot-card.tsx` to show color indicator
- [x] 4.2 Add tap handler to open color picker modal
- [x] 4.3 Update default-schedule screen to manage color picker state
- [x] 4.4 Connect to `useColorStore` for reading/writing colors

## 5. Theme Integration

- [x] 5.1 Create helper function to compute 20% opacity background from hex color
- [x] 5.2 Update components that use TimeSlotColors to read from store instead
- [x] 5.3 Ensure fallback to default colors if store is empty

## 6. Theming

- [x] 6.1 Ensure color picker works in dark mode
- [x] 6.2 Verify color contrast for accessibility
