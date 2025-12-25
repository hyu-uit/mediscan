import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

import {
  bulkCreateSchedules,
  getSchedulesByDate,
  getTodaySchedules,
  markAsTaken,
  skipMedication,
} from "@/api/schedule";
import { useScheduleStore } from "@/stores/schedule-store";

export function useBulkCreateSchedules() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const clearMedicines = useScheduleStore((state) => state.clearMedicines);

  return useMutation({
    mutationFn: bulkCreateSchedules,
    onSuccess: () => {
      clearMedicines();
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
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

export function useSchedulesByDate(date: string) {
  return useQuery({
    queryKey: ["schedules", "date", date],
    queryFn: () => getSchedulesByDate(date),
    enabled: !!date,
  });
}

export function useMarkAsTaken() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markAsTaken,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
    },
    onError: (error: Error) => {
      Alert.alert("Failed to Mark as Taken", error.message);
    },
  });
}

export function useSkipMedication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: skipMedication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
    },
    onError: (error: Error) => {
      Alert.alert("Failed to Skip", error.message);
    },
  });
}
