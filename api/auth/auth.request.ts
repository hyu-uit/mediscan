/**
 * Register request payload
 */
export interface RegisterRequest {
  email: string;
  name: string;
  password: string;
}

/**
 * Login request payload
 */
export interface LoginRequest {
  email: string;
  password: string;
}
