import { apiClient } from "../api.client";
import { ApiResponse } from "../api.types";
import { HistoryDto, MedicationLogsStatsDto } from "./medication-logs.dto";
import {
  HistoryResponse,
  MedicationLogsStatsResponse,
  StatsPeriodType,
} from "./medication-logs.response";
import {
  toHistoryDto,
  toMedicationLogsStatsDto,
} from "./medication-logs.service";

/**
 * Get medication logs stats
 * @param period - Stats period (daily, weekly, monthly)
 */
export async function getMedicationLogsStats(
  period: StatsPeriodType
): Promise<MedicationLogsStatsDto> {
  const response = await apiClient.get<
    ApiResponse<MedicationLogsStatsResponse>
  >("/api/medication-logs/stats", {
    params: { period },
  });

  return toMedicationLogsStatsDto(response.data.data);
}

/**
 * Get medication logs history
 * @param period - History period (daily, weekly, monthly)
 */
export async function getMedicationLogsHistory(
  period: StatsPeriodType
): Promise<HistoryDto> {
  const response = await apiClient.get<ApiResponse<HistoryResponse>>(
    "/api/medication-logs/history",
    {
      params: { period },
    }
  );

  return toHistoryDto(response.data.data);
}
