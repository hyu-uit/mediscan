import { MedicineFormData } from "@/features/edit-medicine/types";
import { create } from "zustand";

// Medicine with ID for the schedule
export interface ScheduleMedicine extends MedicineFormData {
  id: string;
}

interface ScheduleState {
  medicines: ScheduleMedicine[];
  addMedicine: (medicine: MedicineFormData) => void;
  updateMedicine: (id: string, medicine: MedicineFormData) => void;
  deleteMedicine: (id: string) => void;
  clearMedicines: () => void;
  getMedicineById: (id: string) => ScheduleMedicine | undefined;
}

export const useScheduleStore = create<ScheduleState>((set, get) => ({
  medicines: [],

  addMedicine: (medicine: MedicineFormData) => {
    const newMedicine: ScheduleMedicine = {
      ...medicine,
      id: Date.now().toString(),
    };
    set((state) => ({
      medicines: [...state.medicines, newMedicine],
    }));
  },

  updateMedicine: (id: string, medicine: MedicineFormData) => {
    set((state) => ({
      medicines: state.medicines.map((m) =>
        m.id === id ? { ...medicine, id } : m
      ),
    }));
  },

  deleteMedicine: (id: string) => {
    set((state) => ({
      medicines: state.medicines.filter((m) => m.id !== id),
    }));
  },

  clearMedicines: () => {
    set({ medicines: [] });
  },

  getMedicineById: (id: string) => {
    return get().medicines.find((m) => m.id === id);
  },
}));
