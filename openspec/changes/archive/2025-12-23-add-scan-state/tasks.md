## 1. Components

- [x] 1.1 Create `components/scan-tap-card.tsx`:
  - Extract current dashed border card from HomeScreen
  - Props: `onTapToScan`, `onUploadFromGallery`
  - Includes "Tap to Scan" card and "Upload from Gallery" button

- [x] 1.2 Create `components/scan-preview.tsx`:
  - Camera preview area with placeholder image
  - Green corner frame indicators (4 corners)
  - Grid overlay lines (2 horizontal, 2 vertical)
  - Tip badge: "Hold steady. Ensure text is clear."
  - Bottom controls: Gallery, Capture, Light buttons
  - Props: `onCapture`, `onGallery`, `onToggleFlash`

## 2. Home Screen Integration

- [x] 2.1 Add `isScanning` state to HomeScreen
- [x] 2.2 Conditionally render ScanTapCard or ScanPreview based on state
- [x] 2.3 Update section title/subtitle based on scanning state
- [x] 2.4 Handle state transitions:
  - Tap "Tap to Scan" → set isScanning = true
  - Tap "Capture" → process and reset to tap state
