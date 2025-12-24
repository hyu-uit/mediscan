## ADDED Requirements

### Requirement: TextInput Component

The app SHALL provide a reusable TextInput component with consistent styling, icon support, and error state handling.

#### Scenario: TextInput renders with label

- **WHEN** TextInput is rendered with a `label` prop
- **THEN** it displays the label text above the input field in dark text

#### Scenario: TextInput renders with left icon

- **WHEN** TextInput is rendered with a `leftIcon` prop
- **THEN** the icon displays inside the input field on the left side
- **AND** the input text is indented to accommodate the icon

#### Scenario: TextInput renders with right icon

- **WHEN** TextInput is rendered with a `rightIcon` prop
- **THEN** the icon displays inside the input field on the right side
- **AND** the icon is tappable if `onRightIconPress` is provided

#### Scenario: TextInput displays error state

- **WHEN** TextInput is rendered with an `error` prop
- **THEN** the input border changes to red
- **AND** the error message displays below the input in red text

#### Scenario: TextInput default styling

- **WHEN** TextInput is rendered without error
- **THEN** it displays with:
  - Light gray border (#E5E7EB)
  - White background
  - Rounded corners (12px radius)
  - Poppins font family
  - Gray placeholder text

### Requirement: FormInput Component

The app SHALL provide a FormInput component that wraps TextInput with react-hook-form Controller for seamless form integration and validation.

#### Scenario: FormInput integrates with react-hook-form

- **WHEN** FormInput is rendered within a react-hook-form context
- **AND** provided with `control` and `name` props
- **THEN** it registers the input with the form
- **AND** syncs value changes with form state

#### Scenario: FormInput displays validation errors

- **WHEN** the form field has a validation error
- **THEN** FormInput automatically displays the error message from react-hook-form
- **AND** the input shows error styling

#### Scenario: FormInput passes props to TextInput

- **WHEN** FormInput is rendered with TextInput props (label, leftIcon, placeholder, etc.)
- **THEN** those props are forwarded to the underlying TextInput component

### Requirement: AppLogo Component

The app SHALL provide an AppLogo component for consistent branding across screens.

#### Scenario: AppLogo renders default size

- **WHEN** AppLogo is rendered without size prop
- **THEN** it displays:
  - A green (#4CD964) rounded square background (16px border radius)
  - A white medical cross (plus) icon centered inside
  - Default size of 64x64 pixels

#### Scenario: AppLogo renders with custom size

- **WHEN** AppLogo is rendered with a `size` prop
- **THEN** the component scales proportionally to the specified size
- **AND** the icon size adjusts to maintain visual balance

### Requirement: GoogleLoginButton Component

The app SHALL provide a GoogleLoginButton component for Google OAuth authentication.

#### Scenario: GoogleLoginButton renders

- **WHEN** GoogleLoginButton is rendered
- **THEN** it displays:
  - White background with light gray border
  - Google "G" logo icon on the left
  - "Login with Google" text
  - Rounded corners matching app button style
  - Full width styling

#### Scenario: GoogleLoginButton loading state

- **WHEN** GoogleLoginButton is rendered with `loading={true}`
- **THEN** it displays a loading indicator
- **AND** the button is disabled

#### Scenario: GoogleLoginButton press handler

- **WHEN** user taps the GoogleLoginButton
- **THEN** the `onPress` callback is invoked

