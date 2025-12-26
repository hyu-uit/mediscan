# Notification Capability

## Purpose

This capability covers the in-app notification screen where users can view and filter their medication reminder history.

## ADDED Requirements

### Requirement: Notification Screen

The app SHALL provide a Notification Screen that displays a list of medication reminders with filtering capabilities.

#### Scenario: User opens notification screen

- **WHEN** user navigates to the notification screen
- **THEN** they see a header with the screen title
- **AND** pill-shaped filter tabs (All, Taken, Missed)
- **AND** a scrollable list of notification items

#### Scenario: Default filter is All

- **WHEN** user first opens the notification screen
- **THEN** the "All" tab is selected by default
- **AND** all notifications are displayed regardless of status

#### Scenario: User accesses notification screen from header

- **WHEN** user taps the bell icon in the Header component
- **THEN** the notification screen opens
- **AND** displays the full list of notifications

### Requirement: Notification Filter Tabs

The notification screen SHALL provide pill-shaped filter tabs styled as rounded segments with the following options: All, Taken, Missed.

#### Scenario: Tab styling matches design

- **WHEN** the filter tabs are displayed
- **THEN** they appear as pill-shaped segments with rounded corners
- **AND** the selected tab has a filled background (dark in light mode)
- **AND** unselected tabs have a light background with subtle border
- **AND** tab text uses appropriate contrast for readability

#### Scenario: User filters by Taken

- **WHEN** user taps the "Taken" tab
- **THEN** only notifications with "taken/confirmed" status are displayed
- **AND** the "Taken" tab appears selected

#### Scenario: User filters by Missed

- **WHEN** user taps the "Missed" tab
- **THEN** only notifications with "missed" status are displayed
- **AND** the "Missed" tab appears selected

### Requirement: Notification Item Display

Each notification item SHALL display an icon on the left, content (title and subtitle) in the middle column, and relative time in the top right corner.

#### Scenario: Notification item layout

- **WHEN** a notification item is rendered
- **THEN** it displays:
  - A colored icon on the left (status-based color)
  - Title text (medicine name) in the middle
  - Subtitle text (dosage, instructions) below the title
  - Relative time (e.g., "2h ago", "Yesterday") in the top right

#### Scenario: Icon color reflects status

- **WHEN** notification status is "taken"
- **THEN** the icon uses success/green color theme

- **WHEN** notification status is "missed"
- **THEN** the icon uses error/red color theme

### Requirement: Empty State

The notification screen SHALL display an appropriate empty state when no notifications match the current filter.

#### Scenario: No notifications in filter

- **WHEN** user selects a filter with no matching notifications
- **THEN** an empty state message is displayed
- **AND** the message is contextual to the selected filter
