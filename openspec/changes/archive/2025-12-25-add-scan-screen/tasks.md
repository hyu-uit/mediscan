## 1. Create Scan Screen

- [x] 1.1 Create `app/scan.tsx` route file (modal presentation)
- [x] 1.2 Create `features/scan/index.tsx` with ScanScreen component
- [x] 1.3 Integrate existing ScanTapCard and ScanPreview components
- [x] 1.4 Add "Add Manually" placeholder button that navigates to future add screen

## 2. Update Tab Layout with Floating Action Button

- [x] 2.1 Create custom tab bar wrapper in `app/(tabs)/_layout.tsx`
- [x] 2.2 Add floating action button with iOS 26 liquid glass styling
- [x] 2.3 Wire FAB to navigate to scan screen as modal

## 3. Simplify Home Screen

- [x] 3.1 Remove ScanTapCard and ScanPreview imports from `features/home/index.tsx`
- [x] 3.2 Remove isScanning state and related handlers
- [x] 3.3 Keep Header and Today's Schedule sections only
