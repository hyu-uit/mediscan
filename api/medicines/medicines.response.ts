import { DosageUnitType } from "@/features/edit-medicine/types";

/**
 * Medicine status enum
 */
export const MedicineStatus = {
  ACTIVE: "ACTIVE",
  LOW_STOCK: "LOW_STOCK",
  SUPP: "SUPP",
  INACTIVE: "INACTIVE",
} as const;
export type MedicineStatusType =
  (typeof MedicineStatus)[keyof typeof MedicineStatus];

/**
 * Medicine item from API
 */
export interface MedicineResponse {
  id: string;
  name: string;
  dosage: string;
  unit: DosageUnitType;
  frequency: string;
  instructions: string;
  status: MedicineStatusType;
  iconColor?: string;
}

/**
 * Medicines list response from API
 */
export interface MedicinesListResponse {
  medications: MedicineResponse[];
  totalCount: number;
}
