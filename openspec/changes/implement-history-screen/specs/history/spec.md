## ADDED Requirements

### Requirement: History Screen Dashboard

The app SHALL display a History Screen accessible from the History tab. The screen MUST show period tabs, adherence summary, stats, and medication intake history grouped by date.

#### Scenario: User views history screen

- **WHEN** user navigates to the History tab
- **THEN** they see:
  - The global header with avatar, greeting, and notification bell
  - "Intake History" title with "Export Report" button
  - Period tabs (Daily/Weekly/Monthly) with Weekly selected by default
  - An adherence card showing percentage and comparison to previous period
  - Stats row showing taken and missed counts
  - History items grouped by date

#### Scenario: User switches period tabs

- **WHEN** user taps "Daily" tab
- **THEN** the adherence shows daily stats with comparison to yesterday
- **WHEN** user taps "Weekly" tab
- **THEN** the adherence shows weekly stats with comparison to last week
- **WHEN** user taps "Monthly" tab
- **THEN** the adherence shows monthly stats with comparison to last month

#### Scenario: User views confirmed medication

- **WHEN** a medication was taken on time
- **THEN** the history item displays with:
  - Green pill icon
  - Medication name and dosage
  - "Taken at [time]" text
  - Green "CONFIRMED" badge

#### Scenario: User views missed medication

- **WHEN** a medication was not taken
- **THEN** the history item displays with:
  - Red X icon
  - Medication name and dosage
  - "Scheduled [time]" text
  - Red "MISSED" badge

#### Scenario: User views late medication

- **WHEN** a medication was taken but after scheduled time
- **THEN** the history item displays with:
  - Yellow/amber pill icon
  - Medication name and dosage
  - "Taken at [time]" text (later than scheduled)
  - Amber "LATE" badge

#### Scenario: User taps Export Report

- **WHEN** user taps the "Export Report" button
- **THEN** export functionality is triggered (placeholder for now)
