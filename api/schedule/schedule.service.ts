import { BadgeVariant } from "@/components/badge";
import { ScheduleMedicine } from "@/stores/schedule-store";
import {
  ScheduleItemDto,
  SchedulesByDateDto,
  TodaySchedulesDto,
} from "./schedule.dto";
import {
  BulkCreateSchedulesRequest,
  IntakeTimeRequest,
  MedicationRequest,
} from "./schedule.request";
import {
  ScheduleItemResponse,
  SchedulesByDateResponse,
  TodaySchedulesResponse,
} from "./schedule.response";

// ============================================
// Request Transformers (App -> API)
// ============================================

/**
 * Transform ScheduleMedicine to MedicationRequest for API
 */
export function toMedicationRequest(
  medicine: ScheduleMedicine
): MedicationRequest {
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
    intakeTimes: medicine.intakeTimes.map(
      (t): IntakeTimeRequest => ({
        id: t.id,
        time: t.time,
        type: t.type,
      })
    ),
    notes: medicine.notes,
  };
}

/**
 * Transform ScheduleMedicine array to BulkCreateSchedulesRequest
 */
export function toBulkCreateRequest(
  medications: ScheduleMedicine[]
): BulkCreateSchedulesRequest {
  return {
    medications: medications.map(toMedicationRequest),
  };
}

// ============================================
// Response Transformers (API -> App DTO)
// ============================================

/**
 * Convert ScheduleItemResponse to ScheduleItemDto
 */
export function toScheduleItemDto(
  response: ScheduleItemResponse
): ScheduleItemDto {
  return {
    id: response.id,
    logId: response.logId,
    name: response.medicationName,
    dosage: response.dosage,
    unit: response.unit.toLowerCase(),
    instructions: response.instructions,
    time: response.time,
    variant: response.timeSlot as BadgeVariant,
    isPassed: response.isPassed,
    status: response.status,
    takenAt: response.takenAt,
  };
}

/**
 * Convert TodaySchedulesResponse to TodaySchedulesDto
 */
export function toTodaySchedulesDto(
  response: TodaySchedulesResponse
): TodaySchedulesDto {
  return {
    schedules: response.schedules.map(toScheduleItemDto),
    totalCount: response.totalCount,
    remainingCount: response.remainingCount,
  };
}

/**
 * Convert SchedulesByDateResponse to SchedulesByDateDto
 */
export function toSchedulesByDateDto(
  response: SchedulesByDateResponse
): SchedulesByDateDto {
  return {
    schedules: response.schedules.map(toScheduleItemDto),
  };
}
