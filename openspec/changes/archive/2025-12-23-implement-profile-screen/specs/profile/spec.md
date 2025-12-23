## ADDED Requirements

### Requirement: Profile Screen Dashboard

The app SHALL display a Profile Screen accessible from the Profile tab. The screen MUST show user profile information, settings sections, and sign out option.

#### Scenario: User views profile screen

- **WHEN** user navigates to the Profile tab
- **THEN** they see:
  - "Profile & Settings" title with notification bell
  - User avatar, name, and email
  - Action buttons (Edit Profile, Insurance)
  - Settings grouped into sections

#### Scenario: User views Alerts & Automation section

- **WHEN** user views the Alerts & Automation section
- **THEN** they see:
  - Push Notifications row with "Reminders enabled" subtitle and chevron
  - Automated Calls row with "Escalation setup" subtitle and "On" badge
  - Caregiver Alerts row with "1 person connected" subtitle and chevron

#### Scenario: User views Preferences section

- **WHEN** user views the Preferences section
- **THEN** they see:
  - Default Intake Times row with "Morning & Evening" subtitle and chevron
  - Dark Mode row with toggle switch

#### Scenario: User views Legal & Support section

- **WHEN** user views the Legal & Support section
- **THEN** they see:
  - Privacy Policy row with external link icon
  - Terms of Service row with external link icon

#### Scenario: User taps Sign Out

- **WHEN** user taps the "Sign Out" button
- **THEN** sign out flow is triggered (placeholder for now)

#### Scenario: User views app version

- **WHEN** user scrolls to bottom of profile screen
- **THEN** they see app version text (e.g., "App Version 2.4.1 (Build 890)")
