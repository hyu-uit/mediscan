import {
  DosageUnit,
  DosageUnitType,
  FrequencyType,
  FrequencyTypeValue,
  IntakeTime,
  IntakeTimeType,
  IntakeTimeTypeValue,
  IntervalUnit,
  IntervalUnitType,
} from "@/features/edit-medicine/types";
import { ScheduleMedicine } from "@/stores/schedule-store";
import { ScanResultDto } from "./scan.dto";
import {
  ScanIntakeTimeResponse,
  ScanMedicationResponse,
  ScanResponse,
} from "./scan.response";

// ============================================
// Response Transformers (API -> App DTO)
// ============================================

/**
 * Normalize unit string to valid DosageUnitType
 */
function normalizeUnit(unit: string): DosageUnitType {
  const upperUnit = unit?.toUpperCase();
  if (Object.values(DosageUnit).includes(upperUnit as DosageUnitType)) {
    return upperUnit as DosageUnitType;
  }
  return DosageUnit.TABLET;
}

/**
 * Normalize frequency type string to valid FrequencyTypeValue
 */
function normalizeFrequencyType(frequencyType: string): FrequencyTypeValue {
  const upperType = frequencyType?.toUpperCase();
  if (Object.values(FrequencyType).includes(upperType as FrequencyTypeValue)) {
    return upperType as FrequencyTypeValue;
  }
  return FrequencyType.DAILY;
}

/**
 * Normalize interval unit string to valid IntervalUnitType
 */
function normalizeIntervalUnit(intervalUnit: string): IntervalUnitType {
  const upperUnit = intervalUnit?.toUpperCase();
  if (Object.values(IntervalUnit).includes(upperUnit as IntervalUnitType)) {
    return upperUnit as IntervalUnitType;
  }
  return IntervalUnit.DAYS;
}

/**
 * Normalize intake time type string to valid IntakeTimeTypeValue
 */
function normalizeIntakeTimeType(type: string): IntakeTimeTypeValue {
  const upperType = type?.toUpperCase();
  if (
    Object.values(IntakeTimeType).includes(upperType as IntakeTimeTypeValue)
  ) {
    return upperType as IntakeTimeTypeValue;
  }
  return IntakeTimeType.MORNING;
}

/**
 * Transform intake time response to IntakeTime
 */
function toIntakeTime(response: ScanIntakeTimeResponse): IntakeTime {
  return {
    id: response.id,
    time: response.time,
    type: normalizeIntakeTimeType(response.type),
  };
}

/**
 * Transform medication response to ScheduleMedicine
 */
function toScheduleMedicine(
  response: ScanMedicationResponse
): ScheduleMedicine {
  return {
    id: response.id,
    name: response.name || "",
    dosage: response.dosage || "",
    unit: normalizeUnit(response.unit),
    instructions: response.instructions || "",
    notes: response.notes || "",
    frequencyType: normalizeFrequencyType(response.frequencyType),
    intervalValue: response.intervalValue || "1",
    intervalUnit: normalizeIntervalUnit(response.intervalUnit),
    selectedDays: [],
    intakeTimes: response.intakeTimes?.map(toIntakeTime) ?? [],
  };
}

/**
 * Transform scan response to ScanResultDto
 */
export function toScanResultDto(response: ScanResponse): ScanResultDto {
  return {
    medications: response.medications.map(toScheduleMedicine),
    rawText: response.rawText,
    confidence: response.confidence,
  };
}
