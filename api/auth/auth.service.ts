import { AuthResultDto, UserDto } from "./auth.dto";
import { LoginResponse, RegisterResponse, UserResponse } from "./auth.response";

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
