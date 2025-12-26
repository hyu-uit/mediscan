import { ScheduleMedicine } from "@/stores/schedule-store";

/**
 * Scan result DTO for frontend consumption
 */
export interface ScanResultDto {
  medications: ScheduleMedicine[];
  rawText: string;
  confidence: number;
}
