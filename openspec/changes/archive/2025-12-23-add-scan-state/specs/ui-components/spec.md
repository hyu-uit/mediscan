## ADDED Requirements

### Requirement: Scan Tap Card Component

The app SHALL provide a ScanTapCard component that displays the initial "Tap to Scan" UI with a dashed border card and upload option.

#### Scenario: Tap card displays scan invitation

- **WHEN** ScanTapCard is rendered
- **THEN** it displays:
  - A dashed green border card with scan icon
  - "Tap to Scan" heading
  - Descriptive text about camera capture
  - An "Upload from Gallery" button below

### Requirement: Scan Preview Component

The app SHALL provide a ScanPreview component that displays the camera scanning interface with frame indicators and controls.

#### Scenario: Scan preview displays camera UI

- **WHEN** ScanPreview is rendered
- **THEN** it displays:
  - Camera preview area (placeholder image initially)
  - Green corner frame indicators at all four corners
  - Grid overlay lines for alignment
  - Tip badge: "Hold steady. Ensure text is clear."
  - Three control buttons: Gallery (left), Capture (center, green), Light (right)

#### Scenario: Capture button styling

- **WHEN** ScanPreview is rendered
- **THEN** the Capture button is larger than other controls
- **AND** has a green background with camera icon
