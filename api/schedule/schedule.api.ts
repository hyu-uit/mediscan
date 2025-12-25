import { ScheduleMedicine } from "@/stores/schedule-store";
import { apiClient } from "../api.client";
import { ApiResponse } from "../api.types";
import { BulkCreateResultDto, TodaySchedulesDto } from "./schedule.dto";
import {
  BulkCreateSchedulesResponse,
  TodaySchedulesResponse,
} from "./schedule.response";
import {
  toBulkCreateRequest,
  toBulkCreateResultDto,
  toTodaySchedulesDto,
} from "./schedule.service";

/**
 * Bulk create schedules for multiple medications
 */
export async function bulkCreateSchedules(
  medications: ScheduleMedicine[]
): Promise<BulkCreateResultDto> {
  const request = toBulkCreateRequest(medications);

  const response = await apiClient.post<
    ApiResponse<BulkCreateSchedulesResponse>
  >("/api/schedules/bulk", request);

  return toBulkCreateResultDto(response.data.data);
}

/**
 * Get today's schedules
 */
export async function getTodaySchedules(): Promise<TodaySchedulesDto> {
  const response = await apiClient.get<ApiResponse<TodaySchedulesResponse>>(
    "/api/schedules/today"
  );

  return toTodaySchedulesDto(response.data.data);
}
