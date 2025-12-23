# Change: Add Scan State to Home Screen

## Why

Users need a seamless scanning experience without navigating away from the home screen. When they tap the "Tap to Scan" card, the section should transition to a camera scanning UI inline, keeping the rest of the home screen visible.

## What Changes

- Add `isScanning` state to Home screen to toggle between tap and scan views
- Create two separate components:
  - `ScanTapCard` - The current dashed "Tap to Scan" card (tap state)
  - `ScanPreview` - Camera preview with scanning frame (scan state)
- When user taps "Tap to Scan", the section transitions to scan mode showing:
  - Camera preview area with placeholder
  - Green corner frame indicators
  - Grid overlay lines
  - "Hold steady. Ensure text is clear." tip
  - Bottom controls: Gallery, Capture (green), Light
- Section title/subtitle updates based on state:
  - Tap state: "Scan Prescription" / "Capture a new prescription..."
  - Scan state: "Scan New Prescription" / "Align the document within the frame"

## Impact

- Affected specs: `home` (new capability), `ui-components` (modified)
- Affected code:
  - `features/home/index.tsx` (modify - add state management)
  - `components/scan-tap-card.tsx` (new - extracted component)
  - `components/scan-preview.tsx` (new - camera UI component)
