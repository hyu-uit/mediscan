import { BadgeVariant } from "@/components/badge";

/**
 * Created schedule DTO for app usage
 */
export interface CreatedScheduleDto {
  id: string;
  medicationId: string;
  name: string;
}

/**
 * Bulk create result DTO for app usage
 */
export interface BulkCreateResultDto {
  schedules: CreatedScheduleDto[];
  count: number;
}

/**
 * Today schedule item DTO for app usage
 */
export interface TodayScheduleDto {
  id: string;
  // medicationId: string;
  // medicationName: string;
  // dosage: string;
  // unit: string;
  // instructions: string;
  // time: string;
  // timeSlot: string;
  // isPassed: boolean;
  name: string;
  dosage: string;
  unit: string;
  instructions?: string;
  time: string;
  variant: BadgeVariant;
  isPassed: boolean;
}

/**
 * Today schedules result DTO for app usage
 */
export interface TodaySchedulesDto {
  schedules: TodayScheduleDto[];
  totalCount: number;
  remainingCount: number;
}
