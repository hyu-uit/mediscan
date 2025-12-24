## MODIFIED Requirements

### Requirement: GoogleLoginButton Component

The app SHALL provide a GoogleLoginButton component for Google OAuth authentication.

#### Scenario: GoogleLoginButton renders with default label

- **WHEN** GoogleLoginButton is rendered without a `label` prop
- **THEN** it displays "Login with Google" text

#### Scenario: GoogleLoginButton renders with custom label

- **WHEN** GoogleLoginButton is rendered with a `label` prop (e.g., "Sign up with Google")
- **THEN** it displays the custom label text instead of the default

#### Scenario: GoogleLoginButton loading state

- **WHEN** GoogleLoginButton is rendered with `loading={true}`
- **THEN** it displays a loading indicator
- **AND** the button is disabled

#### Scenario: GoogleLoginButton press handler

- **WHEN** user taps the GoogleLoginButton
- **THEN** the `onPress` callback is invoked
