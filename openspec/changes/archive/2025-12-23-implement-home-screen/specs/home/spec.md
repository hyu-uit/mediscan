## ADDED Requirements

### Requirement: Home Screen Dashboard

The app SHALL display a Home Screen as the main dashboard after user authentication. The screen MUST show a personalized greeting, quick actions for scanning prescriptions, and today's medication schedule.

#### Scenario: User views home screen

- **WHEN** user navigates to the Home tab
- **THEN** they see:
  - A header with time-based greeting (Good Morning/Afternoon/Evening)
  - User's name and avatar
  - A notification bell icon
  - "Scan Prescription" section with tap-to-scan card
  - "Upload from Gallery" button
  - "Today's Schedule" section with remaining meds count
  - List of scheduled medications for today

#### Scenario: Time-based greeting changes

- **WHEN** current time is between 5:00 AM and 11:59 AM
- **THEN** greeting displays "Good Morning"
- **WHEN** current time is between 12:00 PM and 4:59 PM
- **THEN** greeting displays "Good Afternoon"
- **WHEN** current time is between 5:00 PM and 4:59 AM
- **THEN** greeting displays "Good Evening"

#### Scenario: User taps Scan Prescription card

- **WHEN** user taps the "Tap to Scan" card
- **THEN** the app navigates to the prescription scanning flow

#### Scenario: User taps Upload from Gallery

- **WHEN** user taps the "Upload from Gallery" button
- **THEN** the app opens the device's image picker

#### Scenario: User views today's schedule

- **WHEN** user views the Today's Schedule section
- **THEN** they see a list of medications scheduled for today
- **AND** each item shows medication name, dosage, instructions, and time
- **AND** the section header shows count of remaining medications
