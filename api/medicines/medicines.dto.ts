import { MedicineStatusType } from "./medicines.response";

/**
 * Medicine DTO for frontend use
 */
export interface MedicineDto {
  id: string;
  name: string;
  dosage: string;
  unit: string;
  frequency: string;
  instructions: string;
  status: MedicineStatusType;
  iconColor?: string;
}

/**
 * Medicines list DTO
 */
export interface MedicinesListDto {
  medicines: MedicineDto[];
  totalCount: number;
}

