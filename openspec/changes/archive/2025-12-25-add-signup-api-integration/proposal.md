# Change: Add Sign Up API Integration

## Why

The Sign Up screen currently has placeholder authentication logic. This change integrates the actual backend API for user registration, establishes the app's API infrastructure (axios client, react-query, zustand auth store), and adds a name field to the sign up form as required by the API.

## What Changes

- Install new dependencies: `@tanstack/react-query`, `axios`, `zustand`
- Create API infrastructure: `api/client.ts` (axios config), `api/types.ts` (response types)
- Create auth API module: `api/auth/index.ts`, `api/auth/types.ts`
- Create auth store with zustand + persist: `stores/auth-store.ts`
- Add name input field to Sign Up screen
- Update sign up form validation to include name
- Integrate sign up form with actual API call using react-query mutation
- Configure react-query provider in app layout
- Store user data and token on successful registration

## Impact

- Affected specs: `auth`
- Affected code:
  - `api/client.ts` (new)
  - `api/types.ts` (new)
  - `api/auth/index.ts` (new)
  - `api/auth/types.ts` (new)
  - `stores/auth-store.ts` (new)
  - `features/auth/signup/index.tsx` (update)
  - `app/_layout.tsx` (add QueryClientProvider)
  - `package.json` (dependencies)

