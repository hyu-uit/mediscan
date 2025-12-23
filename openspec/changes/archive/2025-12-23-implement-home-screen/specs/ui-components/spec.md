## ADDED Requirements

### Requirement: Schedule Item Component

The app SHALL provide a ScheduleItem component for displaying medication schedule entries. This component is reusable across Home and Schedule screens.

#### Scenario: Schedule item displays medication info

- **WHEN** ScheduleItem is rendered with medication data
- **THEN** it displays:
  - A colored icon representing the medication type
  - Medication name in bold text
  - Dosage and instructions (e.g., "500mg • Take with food")
  - Scheduled time on the right side in primary color

#### Scenario: Schedule item styling

- **WHEN** ScheduleItem is rendered
- **THEN** it appears as a card with:
  - White background
  - Rounded corners
  - Subtle shadow
  - Consistent padding
