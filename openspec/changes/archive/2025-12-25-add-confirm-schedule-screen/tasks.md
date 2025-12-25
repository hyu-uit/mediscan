## 1. Create UI Components

- [x] 1.1 Create `components/dosage-badge.tsx` - editable dosage display (e.g., "500mg")
- [x] 1.2 Create `components/frequency-badge.tsx` - editable frequency display (e.g., "3x Daily")
- [x] 1.3 Create `components/intake-time-chip.tsx` - time pill with edit button (e.g., "08:00 AM")
- [x] 1.4 Create `components/instruction-item.tsx` - instruction row with icon, text, edit/delete

## 2. Create Medicine Card Component

- [x] 2.1 Create `components/medicine-card.tsx` combining:
  - Medicine icon, name, trash button
  - Dosage and frequency badges
  - Intake times section with "+ Add Time"
  - Instructions section
  - "Edit Details" and "Add Note" action buttons

## 3. Create Confirm Schedule Screen

- [x] 3.1 Create `app/confirm-schedule.tsx` route file
- [x] 3.2 Create `features/confirm-schedule/index.tsx` with:
  - Header with back button, title, help button
  - Extraction summary message
  - List of MedicineCard components
  - "Add Another Medicine Manually" button
  - "Confirm Schedule" primary button
- [x] 3.3 Add placeholder navigation for Edit Details and Add Medicine

## 4. Connect Scan Flow

- [x] 4.1 Update scan screen to navigate to confirm-schedule after capture
