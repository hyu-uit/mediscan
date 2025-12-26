import { MedicineDto, MedicinesListDto } from "./medicines.dto";
import { MedicineResponse, MedicinesListResponse } from "./medicines.response";

/**
 * Transform API response to DTO
 */
function toMedicineDto(response: MedicineResponse): MedicineDto {
  return {
    id: response.id,
    name: response.name,
    dosage: response.dosage,
    unit: response.unit,
    frequency: response.frequency,
    instructions: response.instructions,
    status: response.status,
    iconColor: response.iconColor,
  };
}

/**
 * Transform medicines list response to DTO
 */
export function toMedicinesListDto(
  response: MedicinesListResponse
): MedicinesListDto {
  return {
    medicines: response.medications.map(toMedicineDto),
    totalCount: response.totalCount,
  };
}

