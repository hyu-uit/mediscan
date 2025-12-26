import { DosageUnitType } from "@/features/edit-medicine/types";

/**
 * Intake time from scan API response
 */
export interface ScanIntakeTimeResponse {
  id: string;
  time: string;
  type: string;
}

/**
 * Medication extracted from scan API response
 */
export interface ScanMedicationResponse {
  id: string;
  name: string;
  dosage: string;
  unit: DosageUnitType | string;
  instructions: string;
  notes: string;
  frequencyType: string;
  intervalValue: string;
  intervalUnit: string;
  selectedDays: string[];
  intakeTimes: ScanIntakeTimeResponse[] | null;
}

/**
 * Scan API response
 */
export interface ScanResponse {
  medications: ScanMedicationResponse[];
  rawText: string;
  confidence: number;
}
