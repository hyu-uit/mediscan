import { apiClient } from "../api.client";
import { ApiResponse } from "../api.types";
import { MedicinesListDto } from "./medicines.dto";
import { MedicinesListResponse } from "./medicines.response";
import { toMedicinesListDto } from "./medicines.service";

/**
 * Get all medicines for the current user
 */
export async function getMedicines(): Promise<MedicinesListDto> {
  const response = await apiClient.get<ApiResponse<MedicinesListResponse>>(
    "/api/medications"
  );
  return toMedicinesListDto(response.data.data);
}
