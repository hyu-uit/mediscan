/**
 * Stats period type
 */
export const StatsPeriod = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
} as const;
export type StatsPeriodType = (typeof StatsPeriod)[keyof typeof StatsPeriod];

/**
 * Medication logs stats response from API
 */
export interface MedicationLogsStatsResponse {
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
