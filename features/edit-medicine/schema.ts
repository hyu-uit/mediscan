import * as yup from "yup";
import { DosageUnit, FrequencyType, IntervalUnit } from "./types";

export const medicineFormSchema = yup.object({
  name: yup.string().required("Medicine name is required").trim(),
  dosage: yup.string().required("Dosage is required").trim(),
  unit: yup
    .string()
    .oneOf(Object.values(DosageUnit))
    .required("Unit is required"),
  instructions: yup.string().default(""),
  frequencyType: yup
    .string()
    .oneOf(Object.values(FrequencyType))
    .required("Frequency type is required"),
  intervalValue: yup.string().default("1"),
  intervalUnit: yup
    .string()
    .oneOf(Object.values(IntervalUnit))
    .default(IntervalUnit.DAYS),
  selectedDays: yup.array().of(yup.string()).default([]),
  intakeTimes: yup
    .array()
    .min(1, "At least 1 intake time is required")
    .required("Intake times are required"),
  notes: yup.string().default(""),
});

export type MedicineFormErrors = {
  name?: string;
  dosage?: string;
  unit?: string;
  intakeTimes?: string;
};
