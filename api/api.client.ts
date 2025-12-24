import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { ApiError } from "./api.types";

// API base URL - can be configured via environment variables
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";

/**
 * Configured axios instance for API requests
 */
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Get auth token from store (will be set after store is created)
 */
let getAuthToken: (() => string | null) | null = null;

export const setAuthTokenGetter = (getter: () => string | null) => {
  getAuthToken = getter;
};

/**
 * Request interceptor - add auth token to requests
 */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAuthToken?.();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor - transform errors
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response?.data) {
      const apiError = error.response.data;
      const errorMessage =
        apiError.message || apiError.error || "An error occurred";
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  }
);
