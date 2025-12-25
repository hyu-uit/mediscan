## 1. Dependencies

- [x] 1.1 Install @tanstack/react-query
- [x] 1.2 Install axios
- [x] 1.3 Install zustand

## 2. API Infrastructure

- [x] 2.1 Create api/types.ts with ApiResponse, ApiError, and pagination types
- [x] 2.2 Create api/client.ts with axios instance and interceptors
- [x] 2.3 Create api/auth/types.ts with RegisterRequest, RegisterResponse, User types
- [x] 2.4 Create api/auth/index.ts with register API function

## 3. Auth Store

- [x] 3.1 Create stores/auth-store.ts with zustand + persist
- [x] 3.2 Define AuthState interface with user, token, setAuth, clearAuth

## 4. React Query Setup

- [x] 4.1 Create providers/query-provider.tsx with QueryClientProvider
- [x] 4.2 Wrap app layout with QueryClientProvider

## 5. Sign Up Screen Updates

- [x] 5.1 Add name input field to Sign Up form
- [x] 5.2 Update yup validation schema to include name
- [x] 5.3 Create useRegister mutation hook using react-query
- [x] 5.4 Integrate mutation with form submission
- [x] 5.5 Store auth data on successful registration
- [x] 5.6 Handle API errors and display to user
