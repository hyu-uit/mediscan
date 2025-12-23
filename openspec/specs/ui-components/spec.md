# UI Components Capability

## Purpose

This capability covers reusable UI components used across the application for consistent styling and behavior.
## Requirements
### Requirement: Time Picker Component

The app SHALL provide a TimePicker component that allows users to select a time value using a bottom sheet interface with scrollable hour, minute, and period columns.

#### Scenario: User opens time picker

- **WHEN** the TimePicker is rendered with `isOpen={true}`
- **THEN** a bottom sheet slides up from the bottom of the screen
- **AND** displays a title, subtitle, three scrollable columns, and action buttons

#### Scenario: User scrolls to select hour

- **WHEN** user scrolls the hour column
- **THEN** the column snaps to the nearest hour value (01-12)
- **AND** the selected value is highlighted in the center

#### Scenario: User scrolls to select minute

- **WHEN** user scrolls the minute column
- **THEN** the column snaps to the nearest minute value (00-59)
- **AND** the selected value is highlighted in the center

#### Scenario: User selects AM/PM

- **WHEN** user scrolls the period column
- **THEN** the column snaps to either AM or PM
- **AND** the selected value is highlighted

#### Scenario: User saves selected time

- **WHEN** user taps the "Save Time" button
- **THEN** the `onSave` callback is called with the selected time
- **AND** the bottom sheet closes

#### Scenario: User cancels time selection

- **WHEN** user taps the "Cancel" button
- **THEN** the bottom sheet closes without saving
- **AND** the original time value is preserved

### Requirement: Button Component

The app SHALL provide a reusable Button component with multiple variants for consistent styling across the application.

#### Scenario: Primary button rendered

- **WHEN** Button is rendered with default or `variant="primary"`
- **THEN** it displays with green background and dark text

#### Scenario: Secondary button rendered

- **WHEN** Button is rendered with `variant="secondary"`
- **THEN** it displays with gray background and dark text

#### Scenario: Text button rendered

- **WHEN** Button is rendered with `variant="text"`
- **THEN** it displays with transparent background and dark text

#### Scenario: Outline button rendered

- **WHEN** Button is rendered with `variant="outline"`
- **THEN** it displays with transparent background, border, and dark text

#### Scenario: Danger button rendered

- **WHEN** Button is rendered with `variant="danger"`
- **THEN** it displays with red background and white text

#### Scenario: Button with icon

- **WHEN** Button is rendered with an `icon` prop
- **THEN** the icon displays alongside the button text

### Requirement: Schedule Item Component

The app SHALL provide a ScheduleItem component for displaying medication schedule entries. This component is reusable across Home and Schedule screens.

#### Scenario: Schedule item displays medication info

- **WHEN** ScheduleItem is rendered with medication data
- **THEN** it displays:
  - A colored icon representing the medication type
  - Medication name in bold text
  - Dosage and instructions (e.g., "500mg • Take with food")
  - Scheduled time on the right side with colored badge

#### Scenario: Schedule item styling

- **WHEN** ScheduleItem is rendered
- **THEN** it appears as a card with:
  - White background
  - Rounded corners
  - Subtle shadow
  - Consistent padding

### Requirement: Scan Tap Card Component

The app SHALL provide a ScanTapCard component that displays the initial "Tap to Scan" UI with a dashed border card and upload option.

#### Scenario: Tap card displays scan invitation

- **WHEN** ScanTapCard is rendered
- **THEN** it displays:
  - A dashed green border card with scan icon
  - "Tap to Scan" heading
  - Descriptive text about camera capture
  - An "Upload from Gallery" button below

### Requirement: Scan Preview Component

The app SHALL provide a ScanPreview component that displays the camera scanning interface with frame indicators and controls.

#### Scenario: Scan preview displays camera UI

- **WHEN** ScanPreview is rendered
- **THEN** it displays:
  - Real camera preview using expo-camera
  - Green corner frame indicators at all four corners
  - Grid overlay lines for alignment
  - Tip badge: "Hold steady. Ensure text is clear."
  - Three control buttons: Gallery (left), Capture (center, green), Light (right)

#### Scenario: Capture button styling

- **WHEN** ScanPreview is rendered
- **THEN** the Capture button is larger than other controls
- **AND** has a green background with camera icon

#### Scenario: Camera permission handling

- **WHEN** camera permission is not granted
- **THEN** ScanPreview shows a permission request UI
- **AND** user can tap to grant permission

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

