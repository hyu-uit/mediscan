import { BadgeVariant } from "@/components/badge";
import { ScheduleStatusType } from "./schedule.response";

/**
 * Schedule item DTO for app usage
 */
export interface ScheduleItemDto {
  id: string;
  logId: string | null;
  name: string;
  dosage: string;
  unit: string;
  instructions?: string;
  time: string;
  variant: BadgeVariant;
  isPassed: boolean;
  status: ScheduleStatusType | null;
  takenAt: string | null;
  isUpcoming?: boolean;
}

/**
 * Today schedules result DTO for app usage
 */
export interface TodaySchedulesDto {
  schedules: ScheduleItemDto[];
  totalCount: number;
  remainingCount: number;
}

/**
 * Schedules by date result DTO for app usage
 */
export interface SchedulesByDateDto {
  schedules: ScheduleItemDto[];
}
