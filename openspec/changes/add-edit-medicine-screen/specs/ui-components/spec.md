## ADDED Requirements

### Requirement: Select Component

The app SHALL provide a Select component that allows users to choose from a list of options via a dropdown or picker interface.

#### Scenario: User opens select dropdown

- **WHEN** user taps on a Select component
- **THEN** a dropdown menu or bottom sheet picker appears displaying available options
- **AND** the current selected value is highlighted or indicated

#### Scenario: User selects an option

- **WHEN** user taps an option from the dropdown/picker
- **THEN** the selected value is displayed in the Select component
- **AND** the dropdown/picker closes
- **AND** the `onValueChange` callback is called with the selected value

#### Scenario: Select displays placeholder

- **WHEN** no value is selected in the Select component
- **THEN** a placeholder text is displayed (if provided)
- **AND** the placeholder text uses a muted color to indicate it's not a selected value

#### Scenario: Select displays selected value

- **WHEN** a value is selected in the Select component
- **THEN** the selected value text is displayed
- **AND** a chevron or arrow icon indicates the component is interactive

#### Scenario: Select supports disabled state

- **WHEN** Select component is rendered with `disabled={true}`
- **THEN** the component appears visually disabled (reduced opacity)
- **AND** tapping the component does not open the dropdown/picker
