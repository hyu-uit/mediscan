import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

import { bulkCreateSchedules, getTodaySchedules } from "@/api/schedule";
import { useScheduleStore } from "@/stores/schedule-store";

export function useBulkCreateSchedules() {
  const router = useRouter();
  const clearMedicines = useScheduleStore((state) => state.clearMedicines);

  return useMutation({
    mutationFn: bulkCreateSchedules,
    onSuccess: () => {
      clearMedicines();
      router.dismissAll();
    },
    onError: (error: Error) => {
      Alert.alert("Failed to Create Schedule", error.message);
    },
  });
}

export function useTodaySchedules() {
  return useQuery({
    queryKey: ["schedules", "today"],
    queryFn: getTodaySchedules,
  });
}
