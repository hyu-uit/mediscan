import { apiClient } from "../api.client";
import { ApiResponse } from "../api.types";
import { MedicationLogsStatsDto } from "./medication-logs.dto";
import {
  MedicationLogsStatsResponse,
  StatsPeriodType,
} from "./medication-logs.response";
import { toMedicationLogsStatsDto } from "./medication-logs.service";

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
