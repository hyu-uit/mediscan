# Change: Add Camera Access Screen

## Why

After the welcome screen, users need to grant camera permissions before they can scan prescriptions. This screen explains why camera access is needed and provides an alternative manual entry option for users who prefer not to use the camera.

## What Changes

- Add `components/onboarding/camera-access.tsx` component with:
  - Circular illustration with phone/prescription imagery
  - "Scan Your Prescriptions" heading
  - Description explaining the camera's purpose
  - Primary "Enable Camera Access" button (green)
  - Secondary "Type Manually" link
  - Privacy notice at the bottom
- Update navigation flow: Welcome → Camera Access screen

## Impact

- Affected specs: `onboarding` (add requirement)
- Affected code:
  - `components/onboarding/camera-access.tsx` (new file)
  - `app/index.tsx` or navigation (update flow)
