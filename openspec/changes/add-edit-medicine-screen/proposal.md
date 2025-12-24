# Change: Add Edit Medicine Screen

## Why

Users need a dedicated screen to add new medicines or edit existing medicine details including dosage, unit, instructions, intake times, and notes. This screen provides a comprehensive interface for managing medicine information that can be accessed both when adding medicines from scratch and when editing medicines from the schedule or medicine list.

## What Changes

- Add new Edit Medicine screen accessible from medicine cards and schedule items
- Create Select component for unit selection (mg, ml, IU, etc.)
- Implement intake time management with time slot type selection (morning, noon, afternoon, night, before-sleep)
- Add popup/modal for adding new intake times with time slot type and time picker
- Support both add and edit modes in the same screen
- Use FormInput component for all text inputs
- Apply TimeSlotColors to intake time displays

## Impact

- Affected specs: `edit-medicine`, `ui-components`
- Affected code:
  - New screen: `features/edit-medicine/index.tsx`
  - New component: `components/select.tsx`
  - Navigation updates to support edit medicine route
  - Medicine card and schedule item components to link to edit screen
