import { BadgeVariant } from "@/components/badge";
import { ScheduleMedicine } from "@/stores/schedule-store";
import {
  BulkCreateResultDto,
  CreatedScheduleDto,
  TodayScheduleDto,
  TodaySchedulesDto,
} from "./schedule.dto";
import {
  BulkCreateSchedulesRequest,
  IntakeTimeRequest,
  MedicationRequest,
} from "./schedule.request";
import {
  BulkCreateSchedulesResponse,
  CreatedScheduleResponse,
  TodayScheduleItemResponse,
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
 * Convert CreatedScheduleResponse to CreatedScheduleDto
 */
export function toCreatedScheduleDto(
  response: CreatedScheduleResponse
): CreatedScheduleDto {
  return {
    id: response.id,
    medicationId: response.medicationId,
    name: response.name,
  };
}

/**
 * Convert BulkCreateSchedulesResponse to BulkCreateResultDto
 */
export function toBulkCreateResultDto(
  response: BulkCreateSchedulesResponse
): BulkCreateResultDto {
  return {
    schedules: response.schedules.map(toCreatedScheduleDto),
    count: response.count,
  };
}

/**
 * Convert TodayScheduleItemResponse to TodayScheduleDto
 */
export function toTodayScheduleDto(
  response: TodayScheduleItemResponse
): TodayScheduleDto {
  return {
    id: response.id,
    name: response.medicationName,
    dosage: response.dosage,
    unit: response.unit.toLowerCase(),
    instructions: response.instructions,
    time: response.time,
    variant: response.timeSlot as BadgeVariant,
    isPassed: response.isPassed,
  };
}

/**
 * Convert TodaySchedulesResponse to TodaySchedulesDto
 */
export function toTodaySchedulesDto(
  response: TodaySchedulesResponse
): TodaySchedulesDto {
  return {
    schedules: response.schedules.map(toTodayScheduleDto),
    totalCount: response.totalCount,
    remainingCount: response.remainingCount,
  };
}
