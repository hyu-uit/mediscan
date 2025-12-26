# Change: Add My Medicines Screen

## Why

Users need a dedicated screen to view and manage all their medicines in one place. Currently, medicines are only visible in the schedule context. A "My Medicines" screen provides:

- Quick overview of all active medicines
- Search functionality to find specific medicines
- Visual status indicators (ACTIVE, LOW STOCK, etc.)
- Easy access to edit medicine details

## What Changes

- Create a new "My Medicines" screen accessible from the Schedule tab
- Display medicines in a scrollable list with search functionality
- Each medicine card shows: icon, name, dosage, frequency, status badge
- Tapping a medicine navigates to the edit-medicine screen
- Status badges indicate: ACTIVE, LOW STOCK, SUPP (supplemental)

## Impact

- Affected specs: New `my-medicines` capability
- Affected code:
  - `features/my-medicines/` - New feature module
  - `app/my-medicines.tsx` - New route
  - `components/medicine-list-item.tsx` - New list item component
  - Navigation from Schedule tab header or floating button
