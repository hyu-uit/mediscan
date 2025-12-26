import { getMedicines, MedicinesListDto } from "@/api/medicines";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook to fetch all medicines for the current user
 */
export function useMedicines() {
  return useQuery<MedicinesListDto>({
    queryKey: ["medicines"],
    queryFn: getMedicines,
  });
}

