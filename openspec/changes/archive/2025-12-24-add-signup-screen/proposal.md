# Change: Add Sign Up Screen

## Why

New users need a way to create an account. The Login screen currently has a "Sign up" link that needs to navigate to a registration screen. This completes the authentication flow by allowing new users to register with email/password or Google OAuth.

## What Changes

- Add Sign Up Screen with email, password, and confirm password fields
- Add password confirmation validation (passwords must match)
- Modify GoogleLoginButton to accept customizable label text
- Add navigation from Login screen to Sign Up screen
- Add navigation from Sign Up screen back to Login screen

## Impact

- Affected specs: `auth`, `ui-components`
- Affected code:
  - `features/auth/signup/index.tsx` (new)
  - `app/(auth)/signup.tsx` (new)
  - `app/(auth)/login.tsx` (update Sign up link navigation)
  - `components/google-login-button.tsx` (add label prop)

