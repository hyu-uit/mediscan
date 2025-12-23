# Schedule Capability

## Purpose

This capability covers the Schedule screen that displays the user's daily medication schedule organized by time of day with progress tracking and dose management actions.

## ADDED Requirements

### Requirement: Schedule Screen Dashboard

The app SHALL display a Schedule Screen accessible from the Schedule tab. The screen MUST show a week day selector, daily progress summary, and medication items grouped by time of day.

#### Scenario: User views schedule screen

- **WHEN** user navigates to the Schedule tab
- **THEN** they see:
  - The global header with avatar, greeting, and notification bell
  - A horizontal week day selector with current week days
  - A daily progress card showing doses taken
  - Medication items grouped by time sections (MORNING, AFTERNOON, EVENING)

#### Scenario: User selects a different day

- **WHEN** user taps a day in the week day selector
- **THEN** the selected day is highlighted with green background
- **AND** the schedule updates to show medications for that day

#### Scenario: User views taken medication

- **WHEN** a medication has been marked as taken
- **THEN** the item displays with a green checkmark icon
- **AND** shows "TAKEN AT [time]" below the dosage

#### Scenario: User views pending medication

- **WHEN** a medication is due but not yet taken
- **THEN** the item displays with action buttons
- **AND** shows "Skip" and "Take Now" buttons

#### Scenario: User views upcoming medication

- **WHEN** a medication is scheduled for later
- **THEN** the item displays with text links
- **AND** shows "Skip" and "MARK AS TAKEN" options

#### Scenario: User taps Take Now button

- **WHEN** user taps the "Take Now" button on a pending medication
- **THEN** the medication is marked as taken with current timestamp
- **AND** the daily progress updates

#### Scenario: User taps Skip button

- **WHEN** user taps the "Skip" button on a medication
- **THEN** the medication is marked as skipped
- **AND** the daily progress updates (but dose not counted as taken)
