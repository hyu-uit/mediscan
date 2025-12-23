## ADDED Requirements

### Requirement: Camera Access Screen
The app SHALL display a Camera Access Screen as the second step of the onboarding flow. The screen MUST explain why camera access is needed, provide a button to enable camera permissions, and offer an alternative manual entry option.

#### Scenario: User views camera access screen
- **WHEN** user navigates to the Camera Access Screen
- **THEN** they see:
  - A circular illustration with phone/prescription imagery and camera icon badge
  - "Scan Your Prescriptions" as the main heading
  - "We use your camera to read the details on your prescription bottles so you don't have to type them in manually." as the description
  - A green "Enable Camera Access" button
  - A "Type Manually" text link
  - A privacy notice: "Your photos are processed privately and not shared"

#### Scenario: User taps Enable Camera Access
- **WHEN** user taps the "Enable Camera Access" button
- **THEN** the app requests camera permission from the operating system

#### Scenario: User taps Type Manually
- **WHEN** user taps "Type Manually"
- **THEN** the app navigates to the manual prescription entry flow

#### Scenario: Camera permission granted
- **WHEN** user grants camera permission
- **THEN** the app navigates to the prescription scanning screen

#### Scenario: Camera permission denied
- **WHEN** user denies camera permission
- **THEN** the app shows an option to proceed with manual entry or retry permission request

## MODIFIED Requirements

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
- **THEN** the app navigates to the Camera Access screen

#### Scenario: User taps existing account link
- **WHEN** user taps "I already have an account"
- **THEN** the app navigates to the sign-in screen

