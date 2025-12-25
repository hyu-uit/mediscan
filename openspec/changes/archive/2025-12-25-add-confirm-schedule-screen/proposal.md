# Change: Add Confirm Medicine Schedule Screen

## Why

After a user scans or uploads a prescription image, they need a screen to review, confirm, and edit the extracted medicines before the schedule is saved. This is a critical step in the prescription scanning flow that ensures accuracy of medication data.

## What Changes

- Add new "Confirm Medicine Schedule" screen accessible after prescription scanning
- Create reusable UI components:
  - MedicineCard: displays medicine with name, dosage badge, frequency badge, and delete action
  - IntakeTimeChip: pill-style time display with edit capability
  - InstructionItem: displays medication instructions with edit/delete actions
  - DosageBadge: small editable badge for dosage display
  - FrequencyBadge: small editable badge for frequency display
- Add navigation from scan capture to confirm schedule screen
- Add placeholder navigation for:
  - "Add Another Medicine Manually" → future add medicine screen
  - "Edit Details" → future edit medicine screen
  - Help button → future help content

## Impact

- Affected specs: new `confirm-schedule` capability, `ui-components` additions
- Affected code:
  - `app/confirm-schedule.tsx` - new route
  - `features/confirm-schedule/index.tsx` - main screen
  - `components/medicine-card.tsx` - medicine display card
  - `components/intake-time-chip.tsx` - time pill component
  - `components/instruction-item.tsx` - instruction row
  - `components/dosage-badge.tsx` - dosage badge
  - `components/frequency-badge.tsx` - frequency badge

