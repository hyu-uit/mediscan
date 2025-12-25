/**
 * User settings from API
 */
export interface UserSettingsResponse {
  pushNotifications: boolean;
  automatedCalls: boolean;
  darkMode: boolean;
  morningTime: string;
  noonTime: string;
  afternoonTime: string;
  nightTime: string;
  beforeSleepTime: string;
}

/**
 * User entity returned from API
 */
export interface UserResponse {
  id: string;
  email: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  settings?: UserSettingsResponse;
}

/**
 * Register response data from API
 */
export interface RegisterResponse {
  user: UserResponse;
  token: string;
}

/**
 * Login response data from API
 */
export interface LoginResponse {
  user: UserResponse;
  token: string;
}
