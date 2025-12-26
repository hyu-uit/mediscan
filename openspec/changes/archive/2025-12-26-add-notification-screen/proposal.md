# Change: Add Notification Screen

## Why

Users need a centralized place to view their medication reminders and history. Currently, notifications are only delivered via push/call but there's no in-app screen to browse past and pending notifications, track what was taken vs missed, or filter by status.

## What Changes

- Add a new Notification Screen accessible from the app
- Implement pill-shaped tab filter with three options: All, Taken, Missed
- Display notification items in a list layout with:
  - Icon on the left (color-coded by status)
  - Content in the middle (title + subtitle)
  - Relative time in the top right
- Support light and dark mode theming using the centralized Colors system

## Impact

- Affected specs: New `notification` capability
- Affected code:
  - `app/notification.tsx` - New screen route
  - `features/notification/` - New feature directory
  - `components/header.tsx` - Wire bell icon to navigate to notification screen
  - `components/` - New notification-specific components (tabs, item)
  - `api/notification/` - API layer for fetching notifications (if backend ready)
