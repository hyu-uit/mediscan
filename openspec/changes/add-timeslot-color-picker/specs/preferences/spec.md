# Preferences Capability

## Purpose

This capability covers user preferences for customizing the app's visual appearance, including time slot colors.

## ADDED Requirements

### Requirement: TimeSlot Color Customization

The app SHALL allow users to customize the color of each time slot (Morning, Noon, Afternoon, Night, Before Sleep) from the Default Schedule screen.

#### Scenario: User opens color picker

- **WHEN** user taps on a time slot's color indicator
- **THEN** a color picker modal opens
- **AND** the current color is pre-selected

#### Scenario: User selects a new color

- **WHEN** user picks a color from the color picker
- **AND** taps confirm/save
- **THEN** the time slot's color updates immediately
- **AND** the background color updates to 20% opacity of the selected color
- **AND** the selection is persisted to storage

#### Scenario: User cancels color selection

- **WHEN** user opens the color picker
- **AND** taps cancel or dismisses the modal
- **THEN** the time slot's color remains unchanged

#### Scenario: Default colors on first launch

- **WHEN** user opens the app for the first time
- **THEN** time slots display default colors:
  - Morning: Orange (#EA580C)
  - Noon: Amber (#D97706)
  - Afternoon: Sky Blue (#0EA5E9)
  - Night: Indigo (#6366F1)
  - Before Sleep: Blue (#3B5F8A)

### Requirement: Color Persistence

User-selected time slot colors SHALL be persisted using async storage and restored when the app restarts.

#### Scenario: Colors persist across app restarts

- **WHEN** user customizes a time slot color
- **AND** closes and reopens the app
- **THEN** the customized color is still applied

#### Scenario: Colors sync across screens

- **WHEN** user changes a time slot color in Default Schedule
- **THEN** the color updates everywhere that time slot is displayed (schedule cards, badges, history)
