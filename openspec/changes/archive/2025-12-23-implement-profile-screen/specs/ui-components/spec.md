## ADDED Requirements

### Requirement: Settings Section Component

The app SHALL provide a SettingsSection component for grouping related settings with a section title.

#### Scenario: Settings section displays title and rows

- **WHEN** SettingsSection is rendered with title and children
- **THEN** it displays:
  - Section title in uppercase gray text with letter spacing
  - White background card with rounded corners containing the children rows

### Requirement: Settings Row Component

The app SHALL provide a SettingsRow component for individual setting items with consistent styling.

#### Scenario: Settings row displays with icon and title

- **WHEN** SettingsRow is rendered with icon, title, and optional subtitle
- **THEN** it displays:
  - Icon on the left with gray background (#F3F4F6) and dark gray icon color (#6B7280)
  - Title text in dark color
  - Optional subtitle in gray below the title

#### Scenario: Settings row with chevron action

- **WHEN** SettingsRow is rendered with `action="chevron"`
- **THEN** it displays a right chevron icon indicating navigation

#### Scenario: Settings row with toggle action

- **WHEN** SettingsRow is rendered with `action="toggle"`
- **THEN** it displays a toggle switch on the right

#### Scenario: Settings row with badge action

- **WHEN** SettingsRow is rendered with `action="badge"` and badge text
- **THEN** it displays a colored badge (e.g., green "On") and chevron

#### Scenario: Settings row with external link action

- **WHEN** SettingsRow is rendered with `action="external"`
- **THEN** it displays an external link icon on the right

### Requirement: Profile Header Component

The app SHALL provide a ProfileHeader component displaying user avatar, name, and email.

#### Scenario: Profile header displays user info

- **WHEN** ProfileHeader is rendered with user data
- **THEN** it displays:
  - Large circular avatar (with user image or initials)
  - User name in bold text below avatar
  - Email in gray text below name

### Requirement: Action Chip Component

The app SHALL provide an ActionChip component for small outline action buttons.

#### Scenario: Action chip displays

- **WHEN** ActionChip is rendered with label
- **THEN** it displays as a small pill-shaped outline button with dark text
