import { StatsPeriodType } from "./medication-logs.response";

/**
 * Medication logs stats DTO for app usage
 */
export interface MedicationLogsStatsDto {
  period: StatsPeriodType;
  adherence: number;
  adherenceChange: number;
  comparisonLabel: string;
  taken: number;
  missed: number;
  skipped: number;
  pending: number;
  total: number;
  periodStart: string;
  periodEnd: string;
}
