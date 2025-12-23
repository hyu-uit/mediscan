## MODIFIED Requirements

### Requirement: Home Screen Dashboard

The app SHALL display a Home Screen as the main dashboard after user authentication. The screen MUST use the global Header component, show quick actions for scanning prescriptions, and today's medication schedule. The scan section MUST support two states: tap state and scan state.

#### Scenario: User views home screen header

- **WHEN** user navigates to the Home tab
- **THEN** they see the global Header component at the top
- **AND** the Header displays avatar, time-based greeting, user name, and notification bell

#### Scenario: User views home screen in tap state (default)

- **WHEN** user navigates to the Home tab
- **THEN** they see the scan section in tap state with:
  - "Scan Prescription" as section title
  - "Capture a new prescription to set reminders" as subtitle
  - A dashed border "Tap to Scan" card
  - An "Upload from Gallery" button

#### Scenario: User taps Tap to Scan card

- **WHEN** user taps the "Tap to Scan" card
- **THEN** the scan section transitions to scan state showing:
  - "Scan New Prescription" as section title
  - "Align the document within the frame" as subtitle
  - Camera preview with scanning frame
  - Gallery, Capture, and Light control buttons

#### Scenario: User captures prescription

- **WHEN** user taps the Capture button in scan state
- **THEN** the app processes the captured image
- **AND** the scan section returns to tap state

#### Scenario: User taps Gallery in scan state

- **WHEN** user taps the Gallery button in scan state
- **THEN** the app opens the device's image picker

#### Scenario: Time-based greeting changes

- **WHEN** current time is between 5:00 AM and 11:59 AM
- **THEN** greeting displays "Good Morning"
- **WHEN** current time is between 12:00 PM and 4:59 PM
- **THEN** greeting displays "Good Afternoon"
- **WHEN** current time is between 5:00 PM and 4:59 AM
- **THEN** greeting displays "Good Evening"

#### Scenario: User views today's schedule

- **WHEN** user views the Today's Schedule section
- **THEN** they see a list of medications scheduled for today
- **AND** each item shows medication name, dosage, instructions, and time
- **AND** the section header shows count of remaining medications
