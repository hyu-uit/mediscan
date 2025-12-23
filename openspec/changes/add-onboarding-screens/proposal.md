# Change: Add Onboarding Screens

## Why

New users need a welcoming introduction to MediScan that explains the app's purpose and guides them to either start scanning their first prescription or sign into an existing account. The onboarding flow is essential for first impressions and user activation.

## What Changes

- Create `components/onboarding/` folder for onboarding-related components
- Implement the "Welcome" screen as the first onboarding step with:
  - Hero image (hands holding medicine bottle)
  - "Welcome to MediScan" heading
  - Subtitle explaining the app's value proposition
  - Primary "Start Scanning" CTA button (green)
  - Secondary "I already have an account" link
  
## Impact

- Affected specs: `onboarding` (new capability)
- Affected code:
  - `components/onboarding/` (new folder)
  - `components/onboarding/welcome.tsx` (new file)
