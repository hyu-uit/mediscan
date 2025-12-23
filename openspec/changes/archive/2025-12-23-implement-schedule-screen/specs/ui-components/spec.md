## ADDED Requirements

### Requirement: Header Component

The app SHALL provide a reusable Header component that displays user avatar, time-based greeting with user name, and a notification bell button.

#### Scenario: Header displays user info

- **WHEN** Header is rendered
- **THEN** it displays:
  - User avatar (circular, with initial if no image)
  - Time-based greeting ("Good Morning,", "Good Afternoon,", "Good Evening,")
  - User name in bold
  - Notification bell button on the right

#### Scenario: Header greeting changes by time

- **WHEN** current time is between 5:00 AM and 11:59 AM
- **THEN** greeting displays "Good Morning,"
- **WHEN** current time is between 12:00 PM and 4:59 PM
- **THEN** greeting displays "Good Afternoon,"
- **WHEN** current time is between 5:00 PM and 4:59 AM
- **THEN** greeting displays "Good Evening,"

### Requirement: Week Day Selector Component

The app SHALL provide a WeekDaySelector component that displays a horizontal row of day cards for the current week.

#### Scenario: Week day selector displays current week

- **WHEN** WeekDaySelector is rendered
- **THEN** it displays 5-7 day cards showing abbreviated day name (Mon, Tue, Wed...) and date number

#### Scenario: Selected day is highlighted

- **WHEN** a day is selected
- **THEN** that day's card has green background and white text
- **AND** unselected days have neutral background

#### Scenario: User taps a day

- **WHEN** user taps a day card
- **THEN** onDaySelect callback is called with the selected date

### Requirement: Daily Progress Card Component

The app SHALL provide a DailyProgressCard component that displays medication intake progress for the selected day.

#### Scenario: Progress card displays summary

- **WHEN** DailyProgressCard is rendered
- **THEN** it displays:
  - "Daily Progress" title
  - "X of Y doses taken" subtitle with green dot indicator
  - Circular progress indicator with percentage

#### Scenario: Progress updates

- **WHEN** a dose is marked as taken
- **THEN** the progress card updates the count and percentage

### Requirement: Schedule Item Card Component

The app SHALL provide a ScheduleItemCard component that displays a medication item with status and action buttons based on the item's state.

#### Scenario: Taken state display

- **WHEN** ScheduleItemCard is rendered with status "taken"
- **THEN** it displays:
  - Green checkmark icon on the left
  - Medication name and dosage
  - Time badge on the right
  - "TAKEN AT [time]" text in green below dosage

#### Scenario: Pending state display

- **WHEN** ScheduleItemCard is rendered with status "pending"
- **THEN** it displays:
  - Colored pill icon on the left (matches time slot color)
  - Medication name and dosage
  - Time badge on the right
  - "Skip" button (outlined) and "Take Now" button (primary green)

#### Scenario: Upcoming state display

- **WHEN** ScheduleItemCard is rendered with status "upcoming"
- **THEN** it displays:
  - Colored pill icon on the left
  - Medication name and dosage
  - Time badge on the right
  - "Skip" and "MARK AS TAKEN" text links below
