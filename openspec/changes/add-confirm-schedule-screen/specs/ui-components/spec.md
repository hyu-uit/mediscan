## ADDED Requirements

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

