import { apiClient } from "../api.client";
import { ApiResponse } from "../api.types";
import { AuthResultDto, UserDto } from "./auth.dto";
import { LoginRequest, RegisterRequest } from "./auth.request";
import { LoginResponse, RegisterResponse, UserResponse } from "./auth.response";
import { toAuthResultDto, toUserDto } from "./auth.service";

/**
 * Register a new user
 */
export async function register(data: RegisterRequest): Promise<AuthResultDto> {
  const response = await apiClient.post<ApiResponse<RegisterResponse>>(
    "/api/auth/register",
    data
  );
  return toAuthResultDto(response.data.data);
}

/**
 * Login an existing user
 */
export async function login(data: LoginRequest): Promise<AuthResultDto> {
  const response = await apiClient.post<ApiResponse<LoginResponse>>(
    "/api/auth/login",
    data
  );
  return toAuthResultDto(response.data.data);
}

/**
 * Get current user information
 */
export async function getMe(): Promise<UserDto> {
  const response = await apiClient.get<ApiResponse<UserResponse>>(
    "/api/auth/me"
  );
  return toUserDto(response.data.data);
}
