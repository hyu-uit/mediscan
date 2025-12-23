## 1. Implementation

- [x] 1.1 Create `components/onboarding/default-schedule.tsx` component with:
  - Header with back arrow and "Default Schedule" title
  - "Set Default Times" heading
  - Description text about medication times
  - Time slot cards for:
    - Morning (08:00 AM) - sunrise emoji, orange background
    - Noon (12:00 PM) - sun emoji, yellow background
    - Afternoon (04:00 PM) - sunset emoji, orange background
    - Night (08:00 PM) - moon emoji, blue background
    - Before Sleep (10:00 PM) - bed emoji, purple background
  - Each card has: icon, name, time, toggle switch
  - Primary "Save Configuration" button at bottom
- [x] 1.2 Add `app/default-schedule.tsx` route
- [x] 1.3 Update `app/_layout.tsx` to include default-schedule route
- [x] 1.4 Connect Emergency screen to Default Schedule screen
