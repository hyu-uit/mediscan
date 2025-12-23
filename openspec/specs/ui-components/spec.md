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
