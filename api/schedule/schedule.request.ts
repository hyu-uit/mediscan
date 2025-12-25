/**
 * Intake time for medication request
 */
export interface IntakeTimeRequest {
  id: string;
  time: string;
  type: string;
}

/**
 * Medication data for bulk create request
 */
export interface MedicationRequest {
  id: string;
  name: string;
  dosage: string;
  unit: string;
  instructions: string;
  frequencyType: string;
  intervalValue: string;
  intervalUnit: string;
  selectedDays: string[];
  intakeTimes: IntakeTimeRequest[];
  notes: string;
}

/**
 * Bulk create schedules request
 */
export interface BulkCreateSchedulesRequest {
  medications: MedicationRequest[];
}
