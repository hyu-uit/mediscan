# Change: Add Login Screen with Global Form Components

## Why

Users with existing accounts need a way to sign in to the app. The onboarding flow currently has an "I already have an account" link that should navigate to a login screen. This change also introduces reusable form components (TextInput, FormInput, GoogleLoginButton, AppLogo) that will be used across the app for consistent styling and form handling.

## What Changes

- Add new `auth` capability with Login Screen specification
- Add global `TextInput` component for styled text inputs
- Add global `FormInput` component integrating react-hook-form with yup validation
- Add global `GoogleLoginButton` component for OAuth sign-in
- Add global `AppLogo` component for consistent branding
- Install new dependencies: `react-hook-form`, `yup`, `@hookform/resolvers`, `expo-auth-session`, `expo-crypto`
- Modify onboarding flow: users signing in skip Emergency Backup and Default Schedule screens

## Impact

- Affected specs: `auth` (new), `ui-components`, `onboarding`
- Affected code:
  - `components/text-input.tsx` (new)
  - `components/form-input.tsx` (new)
  - `components/google-login-button.tsx` (new)
  - `components/app-logo.tsx` (new)
  - `features/auth/login/index.tsx` (new)
  - `app/(auth)/login.tsx` (new)
  - `app/(auth)/_layout.tsx` (new)
  - `package.json` (dependencies)

