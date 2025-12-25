import { DosageUnitType } from "@/features/edit-medicine/types";

/**
 * Created schedule item from API
 */
export interface CreatedScheduleResponse {
  id: string;
  medicationId: string;
  name: string;
}

/**
 * Bulk create schedules response from API
 */
export interface BulkCreateSchedulesResponse {
  schedules: CreatedScheduleResponse[];
  count: number;
}

/**
 * Today schedule item from API
 */
export interface TodayScheduleItemResponse {
  id: string;
  medicationId: string;
  medicationName: string;
  dosage: string;
  unit: DosageUnitType;
  instructions: string;
  time: string;
  timeSlot: string;
  isPassed: boolean;
}

/**
 * Today schedules response from API
 */
export interface TodaySchedulesResponse {
  schedules: TodayScheduleItemResponse[];
  totalCount: number;
  remainingCount: number;
}
