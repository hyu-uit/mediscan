import { AuthResultDto, UserDto, UserSettingsDto } from "./auth.dto";
import {
  LoginResponse,
  RegisterResponse,
  UserResponse,
  UserSettingsResponse,
} from "./auth.response";

/**
 * Convert UserSettingsResponse to UserSettingsDto
 */
export function toUserSettingsDto(
  response: UserSettingsResponse
): UserSettingsDto {
  return {
    pushNotifications: response.pushNotifications,
    automatedCalls: response.automatedCalls,
    darkMode: response.darkMode,
    morningTime: response.morningTime,
    noonTime: response.noonTime,
    afternoonTime: response.afternoonTime,
    nightTime: response.nightTime,
    beforeSleepTime: response.beforeSleepTime,
  };
}

/**
 * Convert UserResponse to UserDto
 */
export function toUserDto(response: UserResponse): UserDto {
  return {
    id: response.id,
    email: response.email,
    name: response.name,
    createdAt: response.createdAt,
    updatedAt: response.updatedAt,
    settings: response.settings
      ? toUserSettingsDto(response.settings)
      : undefined,
  };
}

/**
 * Convert auth response to AuthResultDto
 */
export function toAuthResultDto(
  response: RegisterResponse | LoginResponse
): AuthResultDto {
  return {
    user: toUserDto(response.user),
    token: response.token,
  };
}
