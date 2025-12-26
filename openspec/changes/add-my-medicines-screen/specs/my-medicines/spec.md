# Capability: My Medicines

## ADDED Requirements

### Requirement: Medicine List Display

The system SHALL display a list of all user medicines with key information visible at a glance.

#### Scenario: User views their medicines
- **WHEN** the user navigates to the My Medicines screen
- **THEN** a list of all medicines is displayed
- **AND** each medicine shows: icon, name, dosage, frequency/instructions, and status badge
- **AND** the list is scrollable

#### Scenario: User has no medicines
- **WHEN** the user has no medicines configured
- **THEN** an empty state is displayed with guidance to add medicines

### Requirement: Medicine Search

The system SHALL allow users to search/filter their medicines by name.

#### Scenario: User searches for a medicine
- **WHEN** the user types in the search input
- **THEN** the medicine list filters to show only medicines matching the search term
- **AND** matching is case-insensitive

#### Scenario: No search results
- **WHEN** the search term matches no medicines
- **THEN** an empty state indicates no results found

### Requirement: Medicine Status Badges

The system SHALL display status badges to indicate medicine status.

#### Scenario: Active medicine
- **WHEN** a medicine is active and has sufficient supply
- **THEN** an "ACTIVE" badge is displayed in green

#### Scenario: Low stock medicine
- **WHEN** a medicine is running low on supply
- **THEN** a "LOW STOCK" badge is displayed in orange/amber

#### Scenario: Supplemental medicine
- **WHEN** a medicine is marked as supplemental
- **THEN** a "SUPP" badge is displayed in grey

### Requirement: Medicine Navigation

The system SHALL allow users to navigate to medicine details.

#### Scenario: User taps a medicine
- **WHEN** the user taps on a medicine list item
- **THEN** the user is navigated to the edit-medicine screen for that medicine
- **AND** the medicine data is pre-filled

