# Tasks: Add Image Upload and OCR Scan API Integration

## 1. API Layer Setup

- [x] 1.1 Create `api/scan/scan.response.ts` with response types matching API shape
- [x] 1.2 Create `api/scan/scan.dto.ts` with frontend DTOs for scan result
- [x] 1.3 Create `api/scan/scan.service.ts` with response-to-DTO transformers
- [x] 1.4 Create `api/scan/scan.api.ts` with `scanPrescription(imageUri: string)` function
- [x] 1.5 Create `api/scan/index.ts` barrel export

## 2. Schedule Store Enhancement

- [x] 2.1 Add `setMedicines(medicines: ScheduleMedicine[])` action to bulk-populate from scan

## 3. Scan Screen Integration

- [x] 3.1 Implement `expo-image-picker` for gallery upload in `handleGallery`
- [x] 3.2 Add `isLoading` state and loading overlay UI during API call
- [x] 3.3 Create `handleScanImage(uri: string)` helper that calls scan API
- [x] 3.4 On scan success: populate schedule store and navigate to confirm-schedule
- [x] 3.5 On scan error: show Alert with error message
- [x] 3.6 Wire `handleCapture` to use `handleScanImage` after capture
- [x] 3.7 Wire `handleGallery` to use `handleScanImage` after image selection
