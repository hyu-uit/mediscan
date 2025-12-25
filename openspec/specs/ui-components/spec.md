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

### Requirement: Period Tabs Component

The app SHALL provide a PeriodTabs component for switching between time periods (Daily/Weekly/Monthly).

#### Scenario: Period tabs render with selection

- **WHEN** PeriodTabs is rendered with options and selectedValue
- **THEN** it displays horizontal tabs with equal width
- **AND** the selected tab has white background and dark text
- **AND** unselected tabs have transparent background and gray text

#### Scenario: User taps a tab

- **WHEN** user taps an unselected tab
- **THEN** onSelect callback is called with the tab value
- **AND** the selected tab styling updates

### Requirement: Adherence Card Component

The app SHALL provide an AdherenceCard component that displays adherence percentage with circular progress and comparison to previous period.

#### Scenario: Adherence card displays stats

- **WHEN** AdherenceCard is rendered with percentage and comparison
- **THEN** it displays:
  - "ADHERENCE" label
  - Large percentage number (e.g., "92%")
  - Comparison badge (e.g., "+4% vs last week")
  - Circular progress indicator on the right with checkmark

#### Scenario: Adherence card styling

- **WHEN** AdherenceCard is rendered
- **THEN** it displays with:
  - Green gradient background
  - White text for all labels
  - Rounded corners

### Requirement: Stats Row Component

The app SHALL provide a StatsRow component that displays taken and missed medication counts side by side.

#### Scenario: Stats row displays counts

- **WHEN** StatsRow is rendered with taken and missed counts
- **THEN** it displays two cards:
  - Left card: Green checkmark, "TAKEN" label, count with "Doses" unit
  - Right card: Red X, "MISSED" label, count with "Dose" or "Doses" unit

### Requirement: History Item Component

The app SHALL provide a HistoryItem component for displaying past medication entries with status badges.

#### Scenario: History item displays medication info

- **WHEN** HistoryItem is rendered with medication data
- **THEN** it displays:
  - Status-colored icon on the left (green for confirmed, red for missed, amber for late)
  - Medication name in bold
  - Dosage and time info below
  - Status badge on the right

#### Scenario: Status badge variants

- **WHEN** status is "confirmed"
- **THEN** badge shows "CONFIRMED" with green background
- **WHEN** status is "missed"
- **THEN** badge shows "MISSED" with red background
- **WHEN** status is "late"
- **THEN** badge shows "LATE" with amber background

### Requirement: Settings Section Component

The app SHALL provide a SettingsSection component for grouping related settings with a section title.

#### Scenario: Settings section displays title and rows

- **WHEN** SettingsSection is rendered with title and children
- **THEN** it displays:
  - Section title in uppercase gray text with letter spacing
  - White background card with rounded corners containing the children rows

### Requirement: Settings Row Component

The app SHALL provide a SettingsRow component for individual setting items with consistent styling.

#### Scenario: Settings row displays with icon and title

- **WHEN** SettingsRow is rendered with icon, title, and optional subtitle
- **THEN** it displays:
  - Icon on the left with gray background (#F3F4F6) and dark gray icon color (#6B7280)
  - Title text in dark color
  - Optional subtitle in gray below the title

#### Scenario: Settings row with chevron action

- **WHEN** SettingsRow is rendered with `action="chevron"`
- **THEN** it displays a right chevron icon indicating navigation

#### Scenario: Settings row with toggle action

- **WHEN** SettingsRow is rendered with `action="toggle"`
- **THEN** it displays a toggle switch on the right

#### Scenario: Settings row with badge action

- **WHEN** SettingsRow is rendered with `action="badge"` and badge text
- **THEN** it displays a colored badge (e.g., green "On") and chevron

#### Scenario: Settings row with external link action

- **WHEN** SettingsRow is rendered with `action="external"`
- **THEN** it displays an external link icon on the right

### Requirement: Profile Header Component

The app SHALL provide a ProfileHeader component displaying user avatar, name, and email.

#### Scenario: Profile header displays user info

- **WHEN** ProfileHeader is rendered with user data
- **THEN** it displays:
  - Large circular avatar (with user image or initials)
  - User name in bold text below avatar
  - Email in gray text below name

### Requirement: Action Chip Component

The app SHALL provide an ActionChip component for small outline action buttons.

#### Scenario: Action chip displays

- **WHEN** ActionChip is rendered with label
- **THEN** it displays as a small pill-shaped outline button with dark text

### Requirement: TextInput Component

The app SHALL provide a reusable TextInput component with consistent styling, icon support, and error state handling.

#### Scenario: TextInput renders with label

- **WHEN** TextInput is rendered with a `label` prop
- **THEN** it displays the label text above the input field in dark text

#### Scenario: TextInput renders with left icon

- **WHEN** TextInput is rendered with a `leftIcon` prop
- **THEN** the icon displays inside the input field on the left side
- **AND** the input text is indented to accommodate the icon

#### Scenario: TextInput renders with right icon

- **WHEN** TextInput is rendered with a `rightIcon` prop
- **THEN** the icon displays inside the input field on the right side
- **AND** the icon is tappable if `onRightIconPress` is provided

#### Scenario: TextInput displays error state

- **WHEN** TextInput is rendered with an `error` prop
- **THEN** the input border changes to red
- **AND** the error message displays below the input in red text

#### Scenario: TextInput default styling

- **WHEN** TextInput is rendered without error
- **THEN** it displays with:
  - Light gray border (#E5E7EB)
  - White background
  - Rounded corners (12px radius)
  - Poppins font family
  - Gray placeholder text

### Requirement: FormInput Component

The app SHALL provide a FormInput component that wraps TextInput with react-hook-form Controller for seamless form integration and validation.

#### Scenario: FormInput integrates with react-hook-form

- **WHEN** FormInput is rendered within a react-hook-form context
- **AND** provided with `control` and `name` props
- **THEN** it registers the input with the form
- **AND** syncs value changes with form state

#### Scenario: FormInput displays validation errors

- **WHEN** the form field has a validation error
- **THEN** FormInput automatically displays the error message from react-hook-form
- **AND** the input shows error styling

#### Scenario: FormInput passes props to TextInput

- **WHEN** FormInput is rendered with TextInput props (label, leftIcon, placeholder, etc.)
- **THEN** those props are forwarded to the underlying TextInput component

### Requirement: AppLogo Component

The app SHALL provide an AppLogo component for consistent branding across screens.

#### Scenario: AppLogo renders default size

- **WHEN** AppLogo is rendered without size prop
- **THEN** it displays:
  - A green (#4CD964) rounded square background (16px border radius)
  - A white medical cross (plus) icon centered inside
  - Default size of 64x64 pixels

#### Scenario: AppLogo renders with custom size

- **WHEN** AppLogo is rendered with a `size` prop
- **THEN** the component scales proportionally to the specified size
- **AND** the icon size adjusts to maintain visual balance

### Requirement: GoogleLoginButton Component

The app SHALL provide a GoogleLoginButton component for Google OAuth authentication.

#### Scenario: GoogleLoginButton renders with default label

- **WHEN** GoogleLoginButton is rendered without a `label` prop
- **THEN** it displays "Login with Google" text

#### Scenario: GoogleLoginButton renders with custom label

- **WHEN** GoogleLoginButton is rendered with a `label` prop (e.g., "Sign up with Google")
- **THEN** it displays the custom label text instead of the default

#### Scenario: GoogleLoginButton loading state

- **WHEN** GoogleLoginButton is rendered with `loading={true}`
- **THEN** it displays a loading indicator
- **AND** the button is disabled

#### Scenario: GoogleLoginButton press handler

- **WHEN** user taps the GoogleLoginButton
- **THEN** the `onPress` callback is invoked

### Requirement: Dosage Badge Component

The app SHALL provide a DosageBadge component that displays medication dosage in a compact, editable badge format.

#### Scenario: Dosage badge displays value

- **WHEN** DosageBadge is rendered with dosage value
- **THEN** it displays the dosage text (e.g., "500mg") in a pill-shaped badge
- **AND** shows an edit/pencil icon indicating editability

#### Scenario: User taps dosage badge

- **WHEN** user taps the dosage badge
- **THEN** the onEdit callback is invoked

### Requirement: Frequency Badge Component

The app SHALL provide a FrequencyBadge component that displays medication frequency in a compact, editable badge format.

#### Scenario: Frequency badge displays value

- **WHEN** FrequencyBadge is rendered with frequency value
- **THEN** it displays the frequency text (e.g., "3x Daily") in a pill-shaped badge
- **AND** shows an edit/pencil icon indicating editability

#### Scenario: User taps frequency badge

- **WHEN** user taps the frequency badge
- **THEN** the onEdit callback is invoked

### Requirement: Intake Time Chip Component

The app SHALL provide an IntakeTimeChip component that displays a scheduled intake time as a pill-shaped chip with edit capability.

#### Scenario: Intake time chip displays time

- **WHEN** IntakeTimeChip is rendered with time value
- **THEN** it displays a clock icon and formatted time (e.g., "08:00 AM")
- **AND** shows an "Edit" text button

#### Scenario: User taps edit on time chip

- **WHEN** user taps "Edit" on an intake time chip
- **THEN** the onEdit callback is invoked with the time value

### Requirement: Instruction Item Component

The app SHALL provide an InstructionItem component that displays a medication instruction with edit and delete actions.

#### Scenario: Instruction item displays content

- **WHEN** InstructionItem is rendered with instruction text
- **THEN** it displays an icon (e.g., utensils for "Take with food")
- **AND** shows the instruction text
- **AND** displays edit and delete action icons

#### Scenario: User taps edit on instruction

- **WHEN** user taps the edit icon on an instruction item
- **THEN** the onEdit callback is invoked

#### Scenario: User taps delete on instruction

- **WHEN** user taps the delete icon on an instruction item
- **THEN** the onDelete callback is invoked

### Requirement: Medicine Card Component

The app SHALL provide a MedicineCard component that displays comprehensive medicine information with editing capabilities.

#### Scenario: Medicine card displays all sections

- **WHEN** MedicineCard is rendered with medicine data
- **THEN** it displays:
  - Medicine icon (pill) and name in header with trash button
  - DosageBadge and FrequencyBadge components
  - "SUGGESTED INTAKE TIMES" section with IntakeTimeChip components
  - "+ Add Time" button for adding intake times
  - "INSTRUCTIONS" section with InstructionItem components (if any)
  - "Add Instruction" placeholder when no instructions exist
  - "Edit Details" and "Add Note" action buttons at bottom

#### Scenario: User taps trash button on medicine card

- **WHEN** user taps the trash icon on a medicine card
- **THEN** the onDelete callback is invoked

#### Scenario: User taps Add Time button

- **WHEN** user taps "+ Add Time" button
- **THEN** the onAddTime callback is invoked

