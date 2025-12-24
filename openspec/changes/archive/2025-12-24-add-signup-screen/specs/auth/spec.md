## ADDED Requirements

### Requirement: Sign Up Screen

The app SHALL display a Sign Up Screen accessible from the Login screen's "Sign up" link. The screen MUST provide email/password registration with confirmation and Google OAuth sign-up option.

#### Scenario: User views sign up screen

- **WHEN** user navigates to the Sign Up Screen
- **THEN** they see:
  - A header with back arrow and "Sign Up" title
  - AppLogo component below the header
  - "Create Account" as the main heading
  - "Join to manage your medication schedule, scan prescriptions, and get timely reminders." as the subtitle
  - Email input field with mail icon
  - Password input field with lock icon and visibility toggle
  - Confirm Password input field with lock icon and visibility toggle
  - Green "Sign Up" button
  - "OR CONTINUE WITH" divider
  - "Sign up with Google" button
  - "Already have an account? Log In" link at the bottom

#### Scenario: User submits valid registration

- **WHEN** user enters valid email, matching passwords
- **AND** taps the "Sign Up" button
- **THEN** the form validates successfully
- **AND** registration is attempted (placeholder for backend integration)
- **AND** on success, navigates to the Camera Access screen

#### Scenario: User submits invalid email format

- **WHEN** user enters an invalid email format
- **AND** taps the "Sign Up" button
- **THEN** the email field displays an error message "Please enter a valid email"

#### Scenario: User submits empty password

- **WHEN** user leaves the password field empty
- **AND** taps the "Sign Up" button
- **THEN** the password field displays an error message "Password is required"

#### Scenario: User submits mismatched passwords

- **WHEN** user enters different values in password and confirm password fields
- **AND** taps the "Sign Up" button
- **THEN** the confirm password field displays an error message "Passwords must match"

#### Scenario: User taps password visibility toggle

- **WHEN** user taps the eye icon on a password field
- **THEN** the password text toggles between hidden and visible

#### Scenario: User taps Sign up with Google

- **WHEN** user taps "Sign up with Google" button
- **THEN** Google OAuth flow is initiated
- **AND** on successful authentication, navigates to the Camera Access screen

#### Scenario: User taps Log In link

- **WHEN** user taps "Log In" in "Already have an account? Log In"
- **THEN** the app navigates back to the Login screen

#### Scenario: User taps back button

- **WHEN** user taps the back arrow in the header
- **THEN** the app navigates back to the Login screen

