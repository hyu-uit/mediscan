import { HistoryStatus } from "@/components/history-item";
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

/**
 * History log item DTO for app usage
 */
export interface HistoryLogItemDto {
  id: string;
  name: string;
  dosage: string;
  unit: string;
  instructions: string | null;
  scheduledAt: string;
  takenAt: string | null;
  status: HistoryStatus;
}

/**
 * History group by date DTO
 */
export interface HistoryGroupDto {
  label: string;
  date: string;
  items: HistoryLogItemDto[];
}

/**
 * History DTO for app usage
 */
export interface HistoryDto {
  period: StatsPeriodType;
  periodStart: string;
  periodEnd: string;
  groups: HistoryGroupDto[];
}
