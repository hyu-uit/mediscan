# Change: Add Image Upload and OCR Scan API Integration

## Why

The scan screen currently has placeholders for image capture and gallery upload but doesn't actually process images. Users need to be able to upload prescription images (from camera capture or gallery) and have them analyzed by the backend OCR API to extract medication data automatically.

## What Changes

- Implement image picker functionality using `expo-image-picker` for gallery selection
- Create scan API layer (`api/scan/`) following existing API patterns
- Call `POST /api/scan` with image file as multipart form data
- Show loading state during API call to indicate processing
- On success, populate the schedule store with extracted medications and navigate to confirm-schedule screen
- Handle error states with user-friendly messages

## Impact

- Affected specs: `scan`
- Affected code:
  - `features/scan/index.tsx` - Add loading state, integrate API call
  - `components/scan-tap-card.tsx` - Pass through image picker result
  - `components/scan-preview.tsx` - Pass through captured image
  - `api/scan/` - New API module (scan.api.ts, scan.response.ts, scan.service.ts, scan.dto.ts, index.ts)
  - `stores/schedule-store.ts` - Add `setMedicines` action to bulk populate from scan result
