# Onboarding Capability

## Purpose

This capability covers all onboarding-related screens and flows for new users, guiding them through the initial app setup including welcome, permissions, and schedule configuration.

## Requirements

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

### Requirement: Onboarding Component Structure

The onboarding screens SHALL be organized under `features/onboarding/` to maintain feature-based module structure consistent with project conventions.

#### Scenario: Component folder exists

- **GIVEN** the codebase follows feature-based module structure
- **WHEN** onboarding components are implemented
- **THEN** they reside in `features/onboarding/` directory

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
- **THEN** the app navigates to the Notification Permission screen

#### Scenario: Camera permission denied

- **WHEN** user denies camera permission
- **THEN** the app shows an option to proceed with manual entry or retry permission request

### Requirement: Notification Permission Screen

The app SHALL display a Notification Permission Screen as part of the onboarding flow. The screen MUST explain the benefits of enabling notifications for medication reminders and provide an option to skip.

#### Scenario: User views notification permission screen

- **WHEN** user navigates to the Notification Permission Screen
- **THEN** they see:
  - A back arrow button in the top left
  - A circular illustration with a bell icon and decorative elements
  - "Don't miss a pill" as the heading with "pill" highlighted in green
  - "Timely reminders are the heart of this app. Enable notifications to ensure you take your medication exactly when prescribed." as the description
  - A feature list showing:
    - "Daily Reminders" - Get alerted at your specific times
    - "Escalating Alerts" - We'll nudge harder if you forget
    - "Refill Warnings" - Know before you run out
  - A green "Enable Notifications →" button
  - A "Maybe later" text link

#### Scenario: User taps Enable Notifications

- **WHEN** user taps the "Enable Notifications →" button
- **THEN** the app requests notification permission from the operating system

#### Scenario: User taps Maybe later

- **WHEN** user taps "Maybe later"
- **THEN** the app skips notification setup and proceeds to the Emergency Backup screen

#### Scenario: Notification permission granted

- **WHEN** user grants notification permission
- **THEN** the app proceeds to the Emergency Backup screen

#### Scenario: Notification permission denied

- **WHEN** user denies notification permission
- **THEN** the app proceeds to the Emergency Backup screen with notifications disabled

#### Scenario: User taps back button

- **WHEN** user taps the back arrow
- **THEN** the app navigates back to the Camera Access screen

### Requirement: Emergency Backup Screen

The app SHALL display an Emergency Backup Screen as part of the onboarding flow. The screen MUST explain that phone calls are used as a backup when users miss notifications, and provide an option to skip this feature.

#### Scenario: User views emergency backup screen

- **WHEN** user navigates to the Emergency Backup Screen
- **THEN** they see:
  - A back arrow button in the top left
  - A circular illustration with a phone icon and decorative elements
  - "Emergency Backup" as the heading
  - "We use phone calls only when you miss a critical notification. This ensures you never accidentally skip your medication. We respect your privacy and won't call for any other reason." as the description
  - An incoming call preview card showing "INCOMING CALL" and "Critical Med Reminder"
  - A green "Enable Phone Calls" button with phone icon
  - A "Skip for now" text link

#### Scenario: User taps Enable Phone Calls

- **WHEN** user taps the "Enable Phone Calls" button
- **THEN** the app requests phone call permission from the operating system

#### Scenario: User taps Skip for now

- **WHEN** user taps "Skip for now"
- **THEN** the app skips phone call setup and proceeds to the Default Schedule screen

#### Scenario: Phone permission granted

- **WHEN** user grants phone call permission
- **THEN** the app proceeds to the Default Schedule screen

#### Scenario: Phone permission denied

- **WHEN** user denies phone call permission
- **THEN** the app proceeds to the Default Schedule screen with phone calls disabled

#### Scenario: User taps back button

- **WHEN** user taps the back arrow
- **THEN** the app navigates back to the Notification screen

### Requirement: Default Schedule Screen

The app SHALL display a Default Schedule Screen as part of the onboarding flow. The screen MUST allow users to configure their default medication intake times for different periods of the day.

#### Scenario: User views default schedule screen

- **WHEN** user navigates to the Default Schedule Screen
- **THEN** they see:
  - A header with back arrow and "Default Schedule" title
  - "Set Default Times" as the main heading
  - "When do you usually take your meds during the day?" as the description
  - A list of time slot cards:
    - Morning (08:00 AM) with sunrise icon
    - Noon (12:00 PM) with sun icon
    - Afternoon (04:00 PM) with cloud-sun icon
    - Night (08:00 PM) with moon icon
    - Before Sleep (10:00 PM) with bed icon
  - A green "Save Configuration" button at the bottom

#### Scenario: User taps a time slot

- **WHEN** user taps a time slot card
- **THEN** the time picker opens with that slot's current time

#### Scenario: User taps Save Configuration

- **WHEN** user taps the "Save Configuration" button
- **THEN** the app saves the default schedule settings and proceeds to the main app

#### Scenario: User taps back button

- **WHEN** user taps the back arrow
- **THEN** the app navigates back to the Emergency Backup screen
