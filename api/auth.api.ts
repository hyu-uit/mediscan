import { apiClient } from "./api.client";
import { ApiResponse } from "./api.types";

/**
 * User entity returned from API
 */
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Register request payload
 */
export interface RegisterRequest {
  email: string;
  name: string;
  password: string;
}

/**
 * Register response data
 */
export interface RegisterResponse {
  user: User;
  token: string;
}

/**
 * Login request payload
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * Login response data
 */
export interface LoginResponse {
  user: User;
  token: string;
}

/**
 * Register a new user
 */
export async function register(
  data: RegisterRequest
): Promise<RegisterResponse> {
  const response = await apiClient.post<ApiResponse<RegisterResponse>>(
    "/api/auth/register",
    data
  );
  return response.data.data;
}

/**
 * Login an existing user
 */
export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await apiClient.post<ApiResponse<LoginResponse>>(
    "/api/auth/login",
    data
  );
  return response.data.data;
}
