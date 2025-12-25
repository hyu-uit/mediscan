import { useQuery } from "@tanstack/react-query";

import {
  getMedicationLogsHistory,
  getMedicationLogsStats,
  StatsPeriodType,
} from "@/api/medication-logs";

export function useMedicationLogsStats(period: StatsPeriodType) {
  return useQuery({
    queryKey: ["medication-logs", "stats", period],
    queryFn: () => getMedicationLogsStats(period),
  });
}

export function useMedicationLogsHistory(period: StatsPeriodType) {
  return useQuery({
    queryKey: ["medication-logs", "history", period],
    queryFn: () => getMedicationLogsHistory(period),
  });
}
