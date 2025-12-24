// API Enum Values
export const DosageUnit = {
  MG: "MG",
  ML: "ML",
  IU: "IU",
  TABLET: "TABLET",
  CAPSULE: "CAPSULE",
  DROPS: "DROPS",
  TSP: "TSP",
  TBSP: "TBSP",
} as const;
export type DosageUnitType = (typeof DosageUnit)[keyof typeof DosageUnit];

export const FrequencyType = {
  DAILY: "DAILY",
  INTERVAL: "INTERVAL",
  SPECIFIC_DAYS: "SPECIFIC_DAYS",
} as const;
export type FrequencyTypeValue =
  (typeof FrequencyType)[keyof typeof FrequencyType];

export const IntervalUnit = {
  DAYS: "DAYS",
  WEEKS: "WEEKS",
  MONTHS: "MONTHS",
} as const;
export type IntervalUnitType = (typeof IntervalUnit)[keyof typeof IntervalUnit];

export const IntakeTimeType = {
  MORNING: "MORNING",
  NOON: "NOON",
  AFTERNOON: "AFTERNOON",
  NIGHT: "NIGHT",
  BEFORE_SLEEP: "BEFORE_SLEEP",
} as const;
export type IntakeTimeTypeValue =
  (typeof IntakeTimeType)[keyof typeof IntakeTimeType];

export type DayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

export interface IntakeTime {
  id: string;
  time: string;
  type: IntakeTimeTypeValue;
}

export interface MedicineFormData {
  name: string;
  dosage: string;
  unit: DosageUnitType;
  instructions: string;
  frequencyType: FrequencyTypeValue;
  intervalValue: string;
  intervalUnit: IntervalUnitType;
  selectedDays: DayOfWeek[];
  intakeTimes: IntakeTime[];
  notes: string;
}

export const DEFAULT_FORM_DATA: MedicineFormData = {
  name: "",
  dosage: "",
  unit: DosageUnit.MG,
  instructions: "",
  frequencyType: FrequencyType.DAILY,
  intervalValue: "1",
  intervalUnit: IntervalUnit.DAYS,
  selectedDays: [],
  intakeTimes: [],
  notes: "",
};

// Mock initial data for editing (will be replaced with API data)
export const MOCK_MEDICINE: MedicineFormData = {
  name: "Amoxicillin",
  dosage: "500",
  unit: DosageUnit.MG,
  instructions: "Take with food",
  frequencyType: FrequencyType.DAILY,
  intervalValue: "1",
  intervalUnit: IntervalUnit.DAYS,
  selectedDays: [],
  intakeTimes: [
    { id: "1", time: "08:00 AM", type: IntakeTimeType.MORNING },
    { id: "2", time: "08:00 PM", type: IntakeTimeType.NIGHT },
  ],
  notes: "Dr. Smith said to finish the whole bottle even if I feel better.",
};
