## ADDED Requirements

### Requirement: Emergency Backup Screen
The app SHALL display an Emergency Backup Screen as the final step of the onboarding flow. The screen MUST explain that phone calls are used as a backup when users miss notifications, and provide an option to skip this feature.

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
- **THEN** the app skips phone call setup and proceeds to the main app

#### Scenario: Phone permission granted
- **WHEN** user grants phone call permission
- **THEN** the app proceeds to the main app (tabs)

#### Scenario: Phone permission denied
- **WHEN** user denies phone call permission
- **THEN** the app proceeds to the main app with phone calls disabled

#### Scenario: User taps back button
- **WHEN** user taps the back arrow
- **THEN** the app navigates back to the Notification screen

