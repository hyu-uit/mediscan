## ADDED Requirements

### Requirement: Edit Medicine Screen

The app SHALL provide an Edit Medicine screen that allows users to add new medicines or edit existing medicine details including name, dosage, unit, instructions, intake times, and notes.

#### Scenario: User opens edit medicine screen for new medicine

- **WHEN** user navigates to the edit medicine screen without an existing medicine
- **THEN** the screen displays empty form fields
- **AND** the screen title shows "Add Medicine"
- **AND** all input fields are empty and ready for input

#### Scenario: User opens edit medicine screen for existing medicine

- **WHEN** user navigates to the edit medicine screen with an existing medicine
- **THEN** the screen displays pre-filled form fields with the medicine's current data
- **AND** the screen title shows "Edit Medicine"
- **AND** medicine image, name, dosage, unit, instructions, intake times, and notes are displayed

#### Scenario: User edits medicine name

- **WHEN** user enters or modifies text in the medicine name field
- **THEN** the FormInput component displays the entered text
- **AND** the value is stored in the form state

#### Scenario: User selects dosage unit

- **WHEN** user taps the unit Select component
- **THEN** a dropdown/picker displays available units (mg, ml, IU, tablet, capsule, etc.)
- **AND** when user selects a unit, the selected value is displayed in the Select component
- **AND** the value is stored in the form state

#### Scenario: User enters dosage value

- **WHEN** user enters a numeric value in the dosage field
- **THEN** the FormInput component displays the entered value
- **AND** the value is stored in the form state

#### Scenario: User enters instructions

- **WHEN** user enters text in the instructions field
- **THEN** the FormInput component displays the entered text
- **AND** an icon may be displayed based on instruction type (e.g., food icon for "Take with food")
- **AND** the value is stored in the form state

#### Scenario: User views intake times

- **WHEN** user views the intake times section
- **THEN** each intake time is displayed as a card with:
  - Time slot type icon (morning, noon, afternoon, night, before-sleep) with colors matching TimeSlotColors
  - Time displayed in HH:MM AM/PM format
  - Time slot name (Morning, Noon, Afternoon, Night, Before Sleep)
  - Edit icon button
- **AND** intake times are ordered chronologically

#### Scenario: User adds new intake time

- **WHEN** user taps the "Add Time" button
- **THEN** a popup/modal appears with:
  - Time slot type selector (Morning, Noon, Afternoon, Night, Before Sleep)
  - TimePicker component for selecting time
  - Save and Cancel buttons
- **AND** when user selects a time slot type and time, then taps Save
- **THEN** the new intake time is added to the list
- **AND** the popup closes
- **AND** the intake time card displays with the selected time slot colors

#### Scenario: User edits existing intake time

- **WHEN** user taps the edit icon on an intake time card
- **THEN** a popup/modal appears pre-filled with the current time slot type and time
- **AND** user can modify the time slot type and/or time
- **AND** when user taps Save, the intake time is updated
- **AND** the popup closes

#### Scenario: User deletes intake time

- **WHEN** user performs a delete action on an intake time (e.g., swipe or delete button)
- **THEN** the intake time is removed from the list
- **AND** the form state is updated

#### Scenario: User enters notes

- **WHEN** user enters text in the notes field
- **THEN** the FormInput component (as text area) displays the entered text
- **AND** the value is stored in the form state

#### Scenario: User saves medicine changes

- **WHEN** user taps the "Save Changes" button
- **THEN** form validation is performed
- **AND** if validation passes, the medicine data is saved
- **AND** the user is navigated back to the previous screen
- **AND** the medicine list/schedule is updated with the new or modified medicine

#### Scenario: User cancels editing

- **WHEN** user taps the "Cancel" button or back arrow
- **THEN** if there are unsaved changes, a confirmation dialog may appear
- **AND** if confirmed or no changes, the user is navigated back without saving
- **AND** all form changes are discarded

#### Scenario: Intake time colors match TimeSlotColors

- **WHEN** an intake time is displayed with a time slot type (morning, noon, afternoon, night, before-sleep)
- **THEN** the time slot icon background color matches the corresponding TimeSlotColors[type].bgColor
- **AND** the time slot icon color matches the corresponding TimeSlotColors[type].color
- **AND** the time text color matches the corresponding TimeSlotColors[type].color
