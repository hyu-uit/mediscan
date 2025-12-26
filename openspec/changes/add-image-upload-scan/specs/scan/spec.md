## MODIFIED Requirements

### Requirement: Scan Screen

The app SHALL provide a dedicated Scan Screen for prescription scanning and manual medication entry. The screen MUST be presented as a modal overlay when the user taps the floating action button.

#### Scenario: User opens scan screen via floating button

- **WHEN** user taps the floating action button next to the tab bar
- **THEN** the Scan Screen slides up as a modal
- **AND** the screen displays a header with "Add Prescription" title and close button

#### Scenario: User views scan screen in tap state (default)

- **WHEN** user opens the Scan Screen
- **THEN** they see the scan section in tap state with:
  - A dashed border "Tap to Scan" card with scan icon
  - An "Upload from Gallery" button
  - An "Add Manually" button for future manual entry

#### Scenario: User taps Tap to Scan card

- **WHEN** user taps the "Tap to Scan" card
- **THEN** the scan section transitions to scan state showing:
  - Camera preview with scanning frame overlay
  - Gallery, Capture, and Cancel control buttons
  - Tip text: "Hold steady. Ensure text is clear."

#### Scenario: User captures prescription

- **WHEN** user taps the Capture button in scan state
- **THEN** the app captures the image
- **AND** displays a loading overlay with scanning indicator
- **AND** uploads the image to `POST /api/scan` as multipart form data
- **AND** on success, populates the schedule store with extracted medications
- **AND** navigates to the confirm-schedule screen

#### Scenario: User cancels scan mode

- **WHEN** user taps the Cancel button in scan state
- **THEN** the scan section returns to tap state

#### Scenario: User uploads from gallery

- **WHEN** user taps the "Upload from Gallery" button
- **THEN** the device image picker opens
- **AND** after selecting an image, displays a loading overlay with scanning indicator
- **AND** uploads the image to `POST /api/scan` as multipart form data
- **AND** on success, populates the schedule store with extracted medications
- **AND** navigates to the confirm-schedule screen

#### Scenario: Scan API returns error

- **WHEN** the scan API call fails
- **THEN** the loading overlay is dismissed
- **AND** an alert is shown with the error message
- **AND** the user remains on the scan screen to retry

#### Scenario: User taps Add Manually button

- **WHEN** user taps the "Add Manually" button
- **THEN** the app navigates to the manual medication entry screen (placeholder)

#### Scenario: User closes scan screen

- **WHEN** user taps the close button or swipes down
- **THEN** the modal dismisses and user returns to previous tab
