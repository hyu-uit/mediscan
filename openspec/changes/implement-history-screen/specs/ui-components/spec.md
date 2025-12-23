## ADDED Requirements

### Requirement: Period Tabs Component

The app SHALL provide a PeriodTabs component for switching between time periods (Daily/Weekly/Monthly).

#### Scenario: Period tabs render with selection

- **WHEN** PeriodTabs is rendered with options and selectedValue
- **THEN** it displays horizontal tabs with equal width
- **AND** the selected tab has white background and dark text
- **AND** unselected tabs have transparent background and gray text

#### Scenario: User taps a tab

- **WHEN** user taps an unselected tab
- **THEN** onSelect callback is called with the tab value
- **AND** the selected tab styling updates

### Requirement: Adherence Card Component

The app SHALL provide an AdherenceCard component that displays adherence percentage with circular progress and comparison to previous period.

#### Scenario: Adherence card displays stats

- **WHEN** AdherenceCard is rendered with percentage and comparison
- **THEN** it displays:
  - "ADHERENCE" label
  - Large percentage number (e.g., "92%")
  - Comparison badge (e.g., "+4% vs last week")
  - Circular progress indicator on the right with checkmark

#### Scenario: Adherence card styling

- **WHEN** AdherenceCard is rendered
- **THEN** it displays with:
  - Green gradient background
  - White text for all labels
  - Rounded corners

### Requirement: Stats Row Component

The app SHALL provide a StatsRow component that displays taken and missed medication counts side by side.

#### Scenario: Stats row displays counts

- **WHEN** StatsRow is rendered with taken and missed counts
- **THEN** it displays two cards:
  - Left card: Green checkmark, "TAKEN" label, count with "Doses" unit
  - Right card: Red X, "MISSED" label, count with "Dose" or "Doses" unit

### Requirement: History Item Component

The app SHALL provide a HistoryItem component for displaying past medication entries with status badges.

#### Scenario: History item displays medication info

- **WHEN** HistoryItem is rendered with medication data
- **THEN** it displays:
  - Status-colored icon on the left (green for confirmed, red for missed, amber for late)
  - Medication name in bold
  - Dosage and time info below
  - Status badge on the right

#### Scenario: Status badge variants

- **WHEN** status is "confirmed"
- **THEN** badge shows "CONFIRMED" with green background
- **WHEN** status is "missed"
- **THEN** badge shows "MISSED" with red background
- **WHEN** status is "late"
- **THEN** badge shows "LATE" with amber background
