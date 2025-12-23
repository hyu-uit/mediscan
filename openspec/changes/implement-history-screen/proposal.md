# Change: Implement History Screen

## Why

Users need to track their medication intake history and adherence over time. The History screen provides insights into medication compliance with daily, weekly, and monthly views.

## What Changes

- Create History screen with period tabs (Daily/Weekly/Monthly)
- Add AdherenceCard component showing percentage and circular progress
- Add StatsRow component showing taken/missed counts
- Add HistoryItem component with status badges (CONFIRMED, MISSED, LATE)
- Add period selector tabs using expo library
- Create Export Report button functionality placeholder

## Impact

- Affected specs: history (new), ui-components (update)
- Affected code: `app/(tabs)/history.tsx`, `features/history/`, new components
