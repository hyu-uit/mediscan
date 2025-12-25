import { DosageUnitType } from "@/features/edit-medicine/types";

/**
 * Schedule status enum
 */
export const ScheduleStatus = {
  CONFIRMED: "CONFIRMED",
  SKIPPED: "SKIPPED",
  PENDING: "PENDING",
  UPCOMING: "UPCOMING",
} as const;
export type ScheduleStatusType =
  (typeof ScheduleStatus)[keyof typeof ScheduleStatus];

/**
 * Schedule item from API
 */
export interface ScheduleItemResponse {
  id: string;
  logId: string | null;
  medicationId: string;
  medicationName: string;
  dosage: string;
  unit: DosageUnitType;
  instructions: string;
  time: string;
  timeSlot: string;
  isPassed: boolean;
  status: ScheduleStatusType | null;
  takenAt: string | null;
}

/**
 * Today schedules response from API
 */
export interface TodaySchedulesResponse {
  schedules: ScheduleItemResponse[];
  totalCount: number;
  remainingCount: number;
}

/**
 * Schedules by date response from API
 */
export interface SchedulesByDateResponse {
  schedules: ScheduleItemResponse[];
}
