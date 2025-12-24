## 1. Dependencies

- [x] 1.1 Install react-hook-form
- [x] 1.2 Install yup and @hookform/resolvers
- [x] 1.3 Install expo-auth-session and expo-crypto for Google OAuth

## 2. Global UI Components

- [x] 2.1 Create TextInput component with icon support, label, and error states
- [x] 2.2 Create FormInput component wrapping TextInput with react-hook-form Controller
- [x] 2.3 Create AppLogo component with rounded green background and medical cross icon
- [x] 2.4 Create GoogleLoginButton component with Google icon and styling

## 3. Login Screen Feature

- [x] 3.1 Create features/auth/login/index.tsx with login form UI
- [x] 3.2 Implement email/password form with yup validation schema
- [x] 3.3 Add "Forgot Password?" link (placeholder navigation)
- [x] 3.4 Add Google login button with expo-auth-session integration
- [x] 3.5 Add "Don't have an account? Sign up" link (placeholder navigation)

## 4. Navigation & Routing

- [x] 4.1 Create app/(auth)/_layout.tsx for auth routes
- [x] 4.2 Create app/(auth)/login.tsx route
- [x] 4.3 Update Welcome screen "I already have an account" to navigate to login
- [x] 4.4 Configure login success to navigate to camera-access screen (skipping emergency/schedule)
