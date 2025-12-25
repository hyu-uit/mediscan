/**
 * User DTO for app usage
 */
export interface UserDto {
  id: string;
  email: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Auth result DTO for app usage
 */
export interface AuthResultDto {
  user: UserDto;
  token: string;
}
