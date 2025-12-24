import { ScheduleMedicine } from "@/stores/schedule-store";
import { apiClient } from "./api.client";
import { ApiResponse } from "./api.types";

/**
 * Intake time for medication
 */
export interface IntakeTimeDto {
  id: string;
  time: string;
  type: string;
}

/**
 * Medication data for bulk create
 */
export interface MedicationDto {
  id: string;
  name: string;
  dosage: string;
  unit: string;
  instructions: string;
  frequencyType: string;
  intervalValue: string;
  intervalUnit: string;
  selectedDays: string[];
  intakeTimes: IntakeTimeDto[];
  notes: string;
}

/**
 * Bulk create schedules request
 */
export interface BulkCreateSchedulesRequest {
  medications: MedicationDto[];
}

/**
 * Bulk create schedules response
 */
export interface BulkCreateSchedulesResponse {
  schedules: {
    id: string;
    medicationId: string;
    name: string;
  }[];
  count: number;
}

/**
 * Transform ScheduleMedicine to MedicationDto for API
 */
function toMedicationDto(medicine: ScheduleMedicine): MedicationDto {
  return {
    id: medicine.id,
    name: medicine.name,
    dosage: medicine.dosage,
    unit: medicine.unit,
    instructions: medicine.instructions,
    frequencyType: medicine.frequencyType,
    intervalValue: medicine.intervalValue,
    intervalUnit: medicine.intervalUnit,
    selectedDays: medicine.selectedDays,
    intakeTimes: medicine.intakeTimes.map((t) => ({
      id: t.id,
      time: t.time,
      type: t.type,
    })),
    notes: medicine.notes,
  };
}

/**
 * Bulk create schedules for multiple medications
 */
export async function bulkCreateSchedules(
  medications: ScheduleMedicine[]
): Promise<BulkCreateSchedulesResponse> {
  const request: BulkCreateSchedulesRequest = {
    medications: medications.map(toMedicationDto),
  };

  const response = await apiClient.post<
    ApiResponse<BulkCreateSchedulesResponse>
  >("/api/schedules/bulk", request);

  return response.data.data;
}
