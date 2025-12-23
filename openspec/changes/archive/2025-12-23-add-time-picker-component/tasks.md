## 1. Setup

- [x] 1.1 Install `@gorhom/bottom-sheet` and peer dependencies
- [x] 1.2 Wrap app with `GestureHandlerRootView` in `app/_layout.tsx`

## 2. Implementation

- [x] 2.1 Create `components/time-picker/time-column.tsx`:
  - Scrollable column component for hours/minutes/period
  - Highlight selected value in center
  - Snap to values on scroll end
- [x] 2.2 Create `components/time-picker/index.tsx`:
  - Bottom sheet with drag handle
  - Title ("Edit {period} Time") and subtitle
  - Three TimeColumn components (hour 01-12, minute 00-59, AM/PM)
  - Cancel and Save Time buttons
  - Props for current time value and onChange callback
