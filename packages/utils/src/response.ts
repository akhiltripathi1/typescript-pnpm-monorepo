import type { ApiResponse } from "@repo/shared";

export function successResponse<T>(
  data: T,
  message = "Success"
): ApiResponse<T> {
  return {
    success: true,
    message,
    data
  };
}

export function errorResponse<T>(
  data: T,
  message = "Something went wrong"
): ApiResponse<T> {
  return {
    success: false,
    message,
    data
  };
}