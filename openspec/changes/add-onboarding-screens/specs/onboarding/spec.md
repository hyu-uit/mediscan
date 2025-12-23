## ADDED Requirements

### Requirement: Welcome Screen

The app SHALL display a Welcome Screen as the first step of the onboarding flow. The screen MUST include a hero image, a welcome heading, a descriptive subtitle, a primary action button to start scanning, and a secondary link for existing users.

#### Scenario: First-time user views welcome screen

- **WHEN** a new user opens the app for the first time
- **THEN** they see the Welcome Screen with:
  - A hero image depicting hands holding a medicine bottle
  - "Welcome to MediScan" as the main heading
  - "The easiest way to remember your medicine. Scan to start and never miss a dose again." as the subtitle
  - A green "Start Scanning" button
  - An "I already have an account" text link

#### Scenario: User taps Start Scanning

- **WHEN** user taps the "Start Scanning" button
- **THEN** the app navigates to the prescription scanning flow

#### Scenario: User taps existing account link

- **WHEN** user taps "I already have an account"
- **THEN** the app navigates to the sign-in screen

### Requirement: Onboarding Component Structure

The onboarding screens SHALL be organized under `components/onboarding/` to maintain feature-based module structure consistent with project conventions. The welcome screen SHALL be implemented as `components/onboarding/welcome.tsx`.

#### Scenario: Component folder exists

- **GIVEN** the codebase follows feature-based module structure
- **WHEN** onboarding components are implemented
- **THEN** they reside in `components/onboarding/` directory with the welcome screen at `components/onboarding/welcome.tsx`
