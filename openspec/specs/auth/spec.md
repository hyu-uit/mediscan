# auth Specification

## Purpose
TBD - created by archiving change add-login-screen. Update Purpose after archive.
## Requirements
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

### Requirement: Sign Up Screen

The app SHALL display a Sign Up Screen accessible from the Login screen's "Sign up" link. The screen MUST provide email/password registration with confirmation, name input, and Google OAuth sign-up option. The form MUST integrate with the backend registration API.

#### Scenario: User views sign up screen

- **WHEN** user navigates to the Sign Up Screen
- **THEN** they see:
  - A header with back arrow and "Sign Up" title
  - AppLogo component below the header
  - "Create Account" as the main heading
  - "Join to manage your medication schedule, scan prescriptions, and get timely reminders." as the subtitle
  - Name input field with user icon
  - Email input field with mail icon
  - Password input field with lock icon and visibility toggle
  - Confirm Password input field with lock icon and visibility toggle
  - Green "Sign Up" button
  - "OR CONTINUE WITH" divider
  - "Sign up with Google" button
  - "Already have an account? Log In" link at the bottom

#### Scenario: User submits valid registration

- **WHEN** user enters valid name, email, and matching passwords
- **AND** taps the "Sign Up" button
- **THEN** the form validates successfully
- **AND** the app calls POST /api/auth/register with name, email, password
- **AND** on success, stores user data and token in auth store
- **AND** navigates to the Camera Access screen

#### Scenario: User submits empty name

- **WHEN** user leaves the name field empty
- **AND** taps the "Sign Up" button
- **THEN** the name field displays an error message "Name is required"

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

#### Scenario: API returns error

- **WHEN** the registration API returns an error (e.g., email already exists)
- **THEN** the app displays the error message from the API response

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

### Requirement: Auth Store

The app SHALL maintain authentication state using a zustand store with persistence. The store MUST hold user data, authentication token, and provide methods to update or clear auth state.

#### Scenario: User successfully registers

- **WHEN** registration API returns success with user data and token
- **THEN** the auth store is updated with user and token
- **AND** isAuthenticated becomes true
- **AND** the data persists across app restarts

#### Scenario: User logs out

- **WHEN** clearAuth is called on the auth store
- **THEN** user and token are set to null
- **AND** isAuthenticated becomes false
- **AND** persisted data is cleared

### Requirement: API Client Configuration

The app SHALL provide a configured axios client for making API requests. The client MUST include base URL configuration, default headers, and authentication token injection.

#### Scenario: Authenticated request

- **WHEN** an API request is made while user is authenticated
- **THEN** the Authorization header is automatically added with Bearer token

#### Scenario: API error response

- **WHEN** the API returns an error response
- **THEN** the error is transformed to include the message from ApiError type

