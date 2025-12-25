/**
 * User settings DTO for app usage
 */
export interface UserSettingsDto {
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
 * User DTO for app usage
 */
export interface UserDto {
  id: string;
  email: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  settings?: UserSettingsDto;
}

/**
 * Auth result DTO for app usage
 */
export interface AuthResultDto {
  user: UserDto;
  token: string;
}
