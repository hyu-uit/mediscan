import { apiClient } from "../api.client";
import { ApiResponse } from "../api.types";
import { AuthResultDto } from "./auth.dto";
import { LoginRequest, RegisterRequest } from "./auth.request";
import { LoginResponse, RegisterResponse } from "./auth.response";
import { toAuthResultDto } from "./auth.service";

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
