## 1. Components

- [x] 1.1 Create `components/schedule-item.tsx` with:
  - Medication icon (colored pill/capsule icon)
  - Medication name (bold)
  - Dosage and instructions text
  - Time display (right-aligned, primary color)
  - Card styling with shadow

## 2. Home Screen Feature

- [x] 2.1 Create `features/home/index.tsx` with main HomeScreen component
- [x] 2.2 Implement Header section:
  - Time-based greeting (Good Morning/Afternoon/Evening)
  - User name display (placeholder: "Sarah")
  - User avatar placeholder
  - Notification bell icon
- [x] 2.3 Implement Scan Prescription section:
  - Section title and subtitle
  - Dashed border "Tap to Scan" card with scan icon
  - "Upload from Gallery" button
- [x] 2.4 Implement Today's Schedule section:
  - Section header with "X Meds Remaining" count
  - List of ScheduleItem components with mock data

## 3. Integration

- [x] 3.1 Update `app/(tabs)/index.tsx` to use the new HomeScreen component
