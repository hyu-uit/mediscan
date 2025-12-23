## ADDED Requirements

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
- **THEN** the app skips notification setup and proceeds to the main app

#### Scenario: Notification permission granted
- **WHEN** user grants notification permission
- **THEN** the app proceeds to the main app (tabs)

#### Scenario: Notification permission denied
- **WHEN** user denies notification permission
- **THEN** the app proceeds to the main app with notifications disabled

#### Scenario: User taps back button
- **WHEN** user taps the back arrow
- **THEN** the app navigates back to the Camera Access screen

