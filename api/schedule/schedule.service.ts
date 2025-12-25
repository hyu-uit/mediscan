import { BadgeVariant } from "@/components/badge";
import { ScheduleMedicine } from "@/stores/schedule-store";
import { formatTime } from "@/utils/date";
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
function toScheduleItemDto(
  response: ScheduleItemResponse,
  isUpcoming: boolean = false
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
    takenAt: response.takenAt ? formatTime(response.takenAt) : null,
    isUpcoming,
  };
}

/**
 * Convert array of ScheduleItemResponse to ScheduleItemDto[]
 * Sets isUpcoming = true for only the first PENDING item after a non-PENDING item
 */
function toScheduleItemDtoList(
  responses: ScheduleItemResponse[]
): ScheduleItemDto[] {
  let foundUpcoming = false;

  return responses.map((response, index) => {
    if (foundUpcoming) {
      return toScheduleItemDto(response, false);
    }

    const isPending = response.status === "PENDING";
    const prevNotPending =
      index === 0 || responses[index - 1].status !== "PENDING";

    const isUpcoming = isPending && prevNotPending;

    if (isUpcoming) {
      foundUpcoming = true;
    }

    return toScheduleItemDto(response, isUpcoming);
  });
}

/**
 * Convert TodaySchedulesResponse to TodaySchedulesDto
 */
export function toTodaySchedulesDto(
  response: TodaySchedulesResponse
): TodaySchedulesDto {
  return {
    schedules: toScheduleItemDtoList(response.schedules),
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
    schedules: toScheduleItemDtoList(response.schedules),
  };
}
