# Tasks: Add Notification Screen

## 1. Components

- [x] 1.1 Create `NotificationTabs` component with pill-shaped styling (All, Taken, Missed)
- [x] 1.2 Create `NotificationItem` component with icon, title/subtitle, and relative time

## 2. Feature Screen

- [x] 2.1 Create `features/notification/index.tsx` with screen layout
- [x] 2.2 Implement tab state management and filtering logic
- [x] 2.3 Add empty state for when no notifications match filter

## 3. API Layer (Optional - if backend ready)

- [ ] 3.1 Create `api/notification/` with types, service, and API client
- [ ] 3.2 Create React Query hook `useNotifications`

## 4. Navigation

- [x] 4.1 Create `app/notification.tsx` screen route
- [x] 4.2 Update `components/header.tsx` to navigate to notification screen on bell press

## 5. Theming

- [x] 5.1 Ensure all colors use `Colors` constants from `theme.ts`
- [x] 5.2 Verify dark mode support
