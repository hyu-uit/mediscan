import { MedicationLogsStatsDto } from "./medication-logs.dto";
import { MedicationLogsStatsResponse } from "./medication-logs.response";

/**
 * Convert MedicationLogsStatsResponse to MedicationLogsStatsDto
 */
export function toMedicationLogsStatsDto(
  response: MedicationLogsStatsResponse
): MedicationLogsStatsDto {
  return {
    period: response.period,
    adherence: response.adherence,
    adherenceChange: response.adherenceChange,
    comparisonLabel: response.comparisonLabel,
    taken: response.taken,
    missed: response.missed,
    skipped: response.skipped,
    pending: response.pending,
    total: response.total,
    periodStart: response.periodStart,
    periodEnd: response.periodEnd,
  };
}
