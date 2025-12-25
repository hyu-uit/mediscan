import { useQuery } from "@tanstack/react-query";

import { getMedicationLogsStats, StatsPeriodType } from "@/api/medication-logs";

export function useMedicationLogsStats(period: StatsPeriodType) {
  return useQuery({
    queryKey: ["medication-logs", "stats", period],
    queryFn: () => getMedicationLogsStats(period),
  });
}
