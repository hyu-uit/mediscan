/**
 * User entity returned from API
 */
export interface UserResponse {
  id: string;
  email: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
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
