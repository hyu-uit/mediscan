## ADDED Requirements

### Requirement: Default Schedule Screen

The app SHALL display a Default Schedule Screen as part of the onboarding flow. The screen MUST allow users to configure their default medication intake times for different periods of the day.

#### Scenario: User views default schedule screen

- **WHEN** user navigates to the Default Schedule Screen
- **THEN** they see:
  - A header with back arrow and "Default Schedule" title
  - "Set Default Times" as the main heading
  - "When do you usually take your meds during the day?" as the description
  - A list of time slot cards:
    - Morning (08:00 AM) with sunrise emoji and toggle
    - Noon (12:00 PM) with sun emoji and toggle
    - Afternoon (04:00 PM) with sunset emoji and toggle
    - Night (08:00 PM) with moon emoji and toggle
    - Before Sleep (10:00 PM) with bed emoji and toggle
  - A green "Save Configuration" button at the bottom

#### Scenario: User toggles a time slot on

- **WHEN** user toggles a time slot switch to ON
- **THEN** the time slot is enabled for medication reminders

#### Scenario: User toggles a time slot off

- **WHEN** user toggles a time slot switch to OFF
- **THEN** the time slot is disabled for medication reminders

#### Scenario: User taps Save Configuration

- **WHEN** user taps the "Save Configuration" button
- **THEN** the app saves the default schedule settings and proceeds to the main app

#### Scenario: User taps back button

- **WHEN** user taps the back arrow
- **THEN** the app navigates back to the Emergency Backup screen
