# Navigation Capability

## Purpose

This capability covers the app's navigation structure including bottom tabs and screen routing.
## Requirements
### Requirement: Native Bottom Tab Navigation

The app SHALL provide a native bottom tab navigation using `expo-router/unstable-native-tabs` with four main sections: Home, Schedule, History, and Profile. The tab bar SHALL include a floating action button on the right side styled with iOS 26 liquid glass effect for accessing the Scan Screen.

#### Scenario: User views bottom tabs after onboarding

- **WHEN** user completes onboarding and enters the main app
- **THEN** they see a native bottom tab bar with four tabs:
  - Home (with house icon)
  - Schedule (with calendar icon)
  - History (with history/clock icon)
  - Profile (with user icon)
- **AND** a floating circular action button on the right with liquid glass styling and plus/scan icon

#### Scenario: User taps Home tab

- **WHEN** user taps the Home tab
- **THEN** the Home screen is displayed

#### Scenario: User taps Schedule tab

- **WHEN** user taps the Schedule tab
- **THEN** the Schedule screen is displayed

#### Scenario: User taps History tab

- **WHEN** user taps the History tab
- **THEN** the History screen is displayed

#### Scenario: User taps Profile tab

- **WHEN** user taps the Profile tab
- **THEN** the Profile screen is displayed

#### Scenario: User taps floating action button

- **WHEN** user taps the floating action button
- **THEN** the Scan Screen opens as a modal overlay

#### Scenario: Floating button liquid glass styling

- **WHEN** the tab bar is visible
- **THEN** the floating button displays with:
  - Circular shape positioned to the right of the tab bar
  - Translucent glass effect with subtle blur
  - Plus or scan icon in the center
  - Primary color accent for the icon

### Requirement: Placeholder Tab Screens

Each tab screen SHALL display a centered placeholder text indicating the screen name until full implementations are added.

#### Scenario: Placeholder screens displayed

- **WHEN** user navigates to any tab screen
- **THEN** they see a centered text with the screen name (e.g., "Home", "Schedule", "History", "Profile")
- **AND** the screen uses the app's standard background color and typography

