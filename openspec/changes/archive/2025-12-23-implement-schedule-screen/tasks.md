## 1. Extract Global Header Component

- [x] 1.1 Create `components/header.tsx` with avatar, greeting, notification bell
- [x] 1.2 Update `features/home/index.tsx` to use the new Header component

## 2. Create Week Day Selector Component

- [x] 2.1 Create `components/week-day-selector.tsx` with horizontal scrollable day cards
- [x] 2.2 Implement selected day highlight with green background
- [x] 2.3 Support onDaySelect callback

## 3. Create Daily Progress Card Component

- [x] 3.1 Create `components/daily-progress-card.tsx` with circular progress indicator
- [x] 3.2 Display "X of Y doses taken" text with percentage

## 4. Create Enhanced Schedule Item Card Component

- [x] 4.1 Create `components/schedule-item-card.tsx` with status variants
- [x] 4.2 Implement "taken" state with checkmark and timestamp
- [x] 4.3 Implement "pending" state with Skip and Take Now buttons
- [x] 4.4 Implement "upcoming" state with Skip and Mark as Taken links

## 5. Implement Schedule Screen

- [x] 5.1 Create `features/schedule/index.tsx` with SafeAreaView and ScrollView
- [x] 5.2 Add Header component at top
- [x] 5.3 Add WeekDaySelector below header
- [x] 5.4 Add DailyProgressCard below selector
- [x] 5.5 Add time-of-day section headers (MORNING, AFTERNOON, EVENING)
- [x] 5.6 Render ScheduleItemCard grouped by time period
- [x] 5.7 Integrate into `app/(tabs)/schedule.tsx`
