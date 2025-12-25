# Home Capability

## Purpose

This capability covers the home screen dashboard that displays personalized greeting, prescription scanning interface, and today's medication schedule.
## Requirements
### Requirement: Home Screen Dashboard

The app SHALL display a Home Screen as the main dashboard after user authentication. The screen MUST use the global Header component and display today's medication schedule. The screen focuses on showing the user's daily medication overview.

#### Scenario: User views home screen header

- **WHEN** user navigates to the Home tab
- **THEN** they see the global Header component at the top
- **AND** the Header displays avatar, time-based greeting, user name, and notification bell

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

