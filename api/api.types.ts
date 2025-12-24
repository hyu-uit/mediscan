/**
 * Standard API response wrapper
 */
export interface ApiResponse<T = unknown> {
  statusCode: number;
  success: boolean;
  data: T;
}

/**
 * Standard API error response
 */
export interface ApiError {
  success: boolean;
  message: string;
  error: string;
  timestamp: string;
  path: string;
  statusCode: number;
  translation: string;
}

/**
 * Pagination response wrapper
 */
export interface PaginationResponse<T = unknown> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

/**
 * Base list response from API
 */
export interface BaseListResponse<T = unknown> {
  list_data: T[];
  total: number;
  total_page: number;
}

/**
 * Pagination request parameters
 */
export interface PaginationRequest {
  limit?: number;
  page?: number;
  search?: string;
}

/**
 * Base list DTO
 */
export interface BaseListDto<T = unknown> {
  data: T[];
  total: number;
  totalPage: number;
}
