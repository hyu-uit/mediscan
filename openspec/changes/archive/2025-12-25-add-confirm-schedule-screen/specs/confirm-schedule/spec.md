## ADDED Requirements

### Requirement: Confirm Medicine Schedule Screen

The app SHALL provide a Confirm Medicine Schedule screen that displays extracted medicines from a prescription scan and allows the user to review, edit, and confirm before saving the schedule.

#### Scenario: User views confirm schedule screen after scan

- **WHEN** user completes prescription scan or image upload
- **THEN** they see the Confirm Medicine Schedule screen with:
  - Header with back button, "Confirm Medicine Schedule" title, and Help button
  - Summary text showing number of extracted medicines
  - List of medicine cards for each extracted medication
  - "Add Another Medicine Manually" button at bottom of list
  - "Confirm Schedule" primary button fixed at bottom

#### Scenario: User views medicine card details

- **WHEN** user views a medicine card
- **THEN** they see:
  - Medicine icon and name with trash button
  - Dosage badge (e.g., "500mg") with edit icon
  - Frequency badge (e.g., "3x Daily") with edit icon
  - "SUGGESTED INTAKE TIMES" section with time chips and "+ Add Time" button
  - "INSTRUCTIONS" section with instruction items
  - "Edit Details" and "Add Note" action buttons

#### Scenario: User deletes a medicine from list

- **WHEN** user taps the trash icon on a medicine card
- **THEN** the medicine is removed from the list
- **AND** the extraction summary count updates

#### Scenario: User taps Edit Details button

- **WHEN** user taps "Edit Details" on a medicine card
- **THEN** the app navigates to the edit medicine screen (placeholder)

#### Scenario: User taps Add Another Medicine Manually

- **WHEN** user taps "Add Another Medicine Manually" button
- **THEN** the app navigates to the add medicine screen (placeholder)

#### Scenario: User taps Confirm Schedule

- **WHEN** user taps "Confirm Schedule" button
- **THEN** the medicines are saved to the user's schedule
- **AND** the app navigates to the home or schedule screen

#### Scenario: User taps back button

- **WHEN** user taps the back button
- **THEN** the app navigates back to the previous screen
- **AND** unsaved changes are discarded

#### Scenario: User taps Help button

- **WHEN** user taps the Help button
- **THEN** the app displays help content (placeholder)

