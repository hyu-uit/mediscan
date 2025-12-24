## ADDED Requirements

### Requirement: Login Screen

The app SHALL display a Login Screen accessible from the Welcome screen's "I already have an account" link. The screen MUST provide email/password authentication and Google OAuth sign-in options.

#### Scenario: User views login screen

- **WHEN** user navigates to the Login Screen
- **THEN** they see:
  - AppLogo component at the top (green rounded square with medical cross icon)
  - "Welcome Back" as the main heading
  - "Sign in to manage your prescriptions" as the subtitle
  - Email input field with mail icon and "name@example.com" placeholder
  - Password input field with lock icon, placeholder text, and visibility toggle
  - "Forgot Password?" link aligned to the right
  - Green "Login →" button
  - "OR CONTINUE WITH" divider
  - "Login with Google" button with Google icon
  - "Don't have an account? Sign up" link at the bottom

#### Scenario: User submits valid credentials

- **WHEN** user enters valid email and password
- **AND** taps the "Login →" button
- **THEN** the form validates successfully
- **AND** authentication is attempted (placeholder for backend integration)
- **AND** on success, navigates to the Camera Access screen

#### Scenario: User submits invalid email format

- **WHEN** user enters an invalid email format (e.g., "invalid-email")
- **AND** taps the "Login →" button
- **THEN** the email field displays an error message "Please enter a valid email"

#### Scenario: User submits empty password

- **WHEN** user leaves the password field empty
- **AND** taps the "Login →" button
- **THEN** the password field displays an error message "Password is required"

#### Scenario: User taps password visibility toggle

- **WHEN** user taps the eye icon on the password field
- **THEN** the password text toggles between hidden (dots) and visible (plain text)

#### Scenario: User taps Forgot Password

- **WHEN** user taps "Forgot Password?"
- **THEN** the app navigates to password recovery flow (placeholder)

#### Scenario: User taps Login with Google

- **WHEN** user taps "Login with Google" button
- **THEN** Google OAuth flow is initiated using expo-auth-session
- **AND** on successful authentication, navigates to the Camera Access screen

#### Scenario: User taps Sign up link

- **WHEN** user taps "Sign up" in "Don't have an account? Sign up"
- **THEN** the app navigates to sign-up flow (placeholder)

### Requirement: Login Navigation Flow

Users who sign in via the Login Screen SHALL follow a shortened onboarding flow that skips the Emergency Backup and Default Schedule screens.

#### Scenario: Signed-in user completes permissions

- **GIVEN** user has signed in via the Login Screen
- **WHEN** user completes Camera Access and Notification Permission screens
- **THEN** the app navigates directly to the main tabs (Home screen)
- **AND** Emergency Backup and Default Schedule screens are skipped

