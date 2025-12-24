## Context

The app needs a robust API layer for communicating with the backend. This change establishes foundational patterns that will be reused across all features requiring API calls. The sign up flow is the first integration point.

## Goals / Non-Goals

**Goals:**
- Establish consistent API calling patterns using axios + react-query
- Create type-safe request/response handling
- Implement persistent auth state with zustand
- Integrate sign up with backend API

**Non-Goals:**
- Token refresh logic (future enhancement)
- Login API integration (separate change)
- Error boundary for API errors (future enhancement)

## Decisions

### API Client (axios)

**Decision:** Use axios with a configured instance in `api/client.ts`
**Rationale:** 
- Interceptors for auth headers and error handling
- Request/response transformation
- Widely adopted, well-documented

```
api/
├── client.ts          # Axios instance configuration
├── types.ts           # Shared API types (ApiResponse, ApiError, etc.)
└── auth/
    ├── index.ts       # Auth API functions (register, login, etc.)
    └── types.ts       # Auth-specific request/response types
```

### Data Fetching (react-query)

**Decision:** Use @tanstack/react-query for server state management
**Rationale:**
- Automatic caching and background refetching
- Loading/error states out of the box
- Mutations with optimistic updates
- Devtools for debugging

### Auth State (zustand + persist)

**Decision:** Use zustand with expo-secure-store persistence
**Rationale:**
- Lightweight, minimal boilerplate
- Built-in persist middleware
- Secure storage for tokens on mobile
- Simple API: `useAuthStore(state => state.user)`

```typescript
// stores/auth-store.ts
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
}
```

### Folder Structure

```
src/
├── api/
│   ├── client.ts        # Axios instance
│   ├── types.ts         # Shared types
│   └── auth/
│       ├── index.ts     # API functions
│       └── types.ts     # Auth types
├── stores/
│   └── auth-store.ts    # Zustand auth store
└── hooks/
    └── use-auth.ts      # (optional) Auth convenience hooks
```

## Risks / Trade-offs

- **Risk:** Secure storage may not work in Expo Go
  - **Mitigation:** Use AsyncStorage as fallback for development

- **Risk:** Token stored in memory could be lost on app restart
  - **Mitigation:** Persist to secure storage, rehydrate on app load

## Open Questions

- Should we add request timeout configuration? (Default: 30s)
- Should we add retry logic for failed requests? (Defer to future)

