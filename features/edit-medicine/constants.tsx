import { SelectOption } from "@/components/select";
import { TimeValue } from "@/components/time-picker";
import { Bed, CloudSun, MoonStar, Sun, Sunrise } from "lucide-react-native";
import {
  DayOfWeek,
  DosageUnit,
  FrequencyType,
  FrequencyTypeValue,
  IntakeTimeType,
  IntakeTimeTypeValue,
} from "./types";

// Unit options for dosage
export const UNIT_OPTIONS: SelectOption[] = [
  { label: "mg", value: DosageUnit.MG },
  { label: "ml", value: DosageUnit.ML },
  { label: "IU", value: DosageUnit.IU },
  { label: "Tablet", value: DosageUnit.TABLET },
  { label: "Capsule", value: DosageUnit.CAPSULE },
  { label: "Drops", value: DosageUnit.DROPS },
  { label: "tsp", value: DosageUnit.TSP },
  { label: "tbsp", value: DosageUnit.TBSP },
];

// Frequency type options
export const FREQUENCY_TYPE_OPTIONS: {
  id: FrequencyTypeValue;
  label: string;
  description: string;
}[] = [
  {
    id: FrequencyType.DAILY,
    label: "Daily",
    description: "Remind every day",
  },
  {
    id: FrequencyType.INTERVAL,
    label: "Interval",
    description: "Every X days/weeks/months",
  },
  {
    id: FrequencyType.SPECIFIC_DAYS,
    label: "Specific Days",
    description: "Choose days of week",
  },
];

// Days of week
export const DAYS_OF_WEEK: { id: DayOfWeek; label: string; short: string }[] = [
  { id: "MON", label: "Monday", short: "M" },
  { id: "TUE", label: "Tuesday", short: "T" },
  { id: "WED", label: "Wednesday", short: "W" },
  { id: "THU", label: "Thursday", short: "T" },
  { id: "FRI", label: "Friday", short: "F" },
  { id: "SAT", label: "Saturday", short: "S" },
  { id: "SUN", label: "Sunday", short: "S" },
];

// Time slot options for adding intake time
export interface TimeSlotOption {
  id: IntakeTimeTypeValue;
  name: string;
  icon: (color: string) => React.ReactNode;
  defaultTime: TimeValue;
  allowedPeriod: "AM" | "PM"; // Lock AM/PM based on time slot
}

export const TIME_SLOT_OPTIONS: TimeSlotOption[] = [
  {
    id: IntakeTimeType.MORNING,
    name: "Morning",
    icon: (color) => <Sunrise size={24} color={color} />,
    defaultTime: { hour: "08", minute: "00", period: "AM" },
    allowedPeriod: "AM",
  },
  {
    id: IntakeTimeType.NOON,
    name: "Noon",
    icon: (color) => <Sun size={24} color={color} />,
    defaultTime: { hour: "12", minute: "00", period: "PM" },
    allowedPeriod: "PM",
  },
  {
    id: IntakeTimeType.AFTERNOON,
    name: "Afternoon",
    icon: (color) => <CloudSun size={24} color={color} />,
    defaultTime: { hour: "04", minute: "00", period: "PM" },
    allowedPeriod: "PM",
  },
  {
    id: IntakeTimeType.NIGHT,
    name: "Night",
    icon: (color) => <MoonStar size={24} color={color} />,
    defaultTime: { hour: "08", minute: "00", period: "PM" },
    allowedPeriod: "PM",
  },
  {
    id: IntakeTimeType.BEFORE_SLEEP,
    name: "Before Sleep",
    icon: (color) => <Bed size={24} color={color} />,
    defaultTime: { hour: "10", minute: "00", period: "PM" },
    allowedPeriod: "PM",
  },
];
