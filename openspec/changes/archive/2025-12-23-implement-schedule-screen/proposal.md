# Change: Implement Schedule Screen with Global Header Component

## Why

The Schedule tab currently shows placeholder text. Users need a dedicated screen to view, manage, and interact with their daily medication schedule organized by time of day with progress tracking.

## What Changes

- Extract header component (avatar, greeting, notification bell) from Home to `components/header.tsx` for reuse across screens
- Create Schedule screen (`features/schedule/`) with:
  - Week day selector showing current week days with visual highlight on selected day
  - Daily progress card with circular progress indicator
  - Time-of-day sections (MORNING, AFTERNOON, EVENING) with section headers
  - Enhanced schedule items with status indicators and action buttons (Skip, Take Now)
- Modify Home screen to use the new global Header component
- Add new UI components: `week-day-selector.tsx`, `daily-progress-card.tsx`, `schedule-item-card.tsx`

## Impact

- Affected specs: `schedule` (new), `ui-components` (add components), `home` (use header component)
- Affected code:
  - `components/header.tsx` (new)
  - `components/week-day-selector.tsx` (new)
  - `components/daily-progress-card.tsx` (new)
  - `components/schedule-item-card.tsx` (new)
  - `features/schedule/index.tsx` (new)
  - `features/home/index.tsx` (refactor to use Header)
  - `app/(tabs)/schedule.tsx` (integrate ScheduleScreen)
