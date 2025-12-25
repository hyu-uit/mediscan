import { ScheduleMedicine } from "@/stores/schedule-store";
import { apiClient } from "../api.client";
import { ApiResponse } from "../api.types";
import { SchedulesByDateDto, TodaySchedulesDto } from "./schedule.dto";
import {
  SchedulesByDateResponse,
  TodaySchedulesResponse,
} from "./schedule.response";
import {
  toBulkCreateRequest,
  toSchedulesByDateDto,
  toTodaySchedulesDto,
} from "./schedule.service";

/**
 * Bulk create schedules for multiple medications
 */
export async function bulkCreateSchedules(
  medications: ScheduleMedicine[]
): Promise<void> {
  const request = toBulkCreateRequest(medications);
  await apiClient.post("/api/schedules/bulk", request);
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

/**
 * Get schedules by date
 * @param date - Date in YYYY-MM-DD format
 */
export async function getSchedulesByDate(
  date: string
): Promise<SchedulesByDateDto> {
  const response = await apiClient.get<ApiResponse<SchedulesByDateResponse>>(
    `/api/schedules/date/${date}`
  );

  return toSchedulesByDateDto(response.data.data);
}

export async function markAsTaken(logId: string): Promise<void> {
  await apiClient.post(`/api/medication-logs/${logId}/taken`);
}

export async function skipMedication(logId: string): Promise<void> {
  await apiClient.post(`/api/medication-logs/${logId}/skip`);
}
