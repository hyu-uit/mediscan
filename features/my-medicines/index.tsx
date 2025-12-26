import { MedicineDto } from "@/api/medicines";
import { MedicineListItem } from "@/components/medicine-list-item";
import { Colors } from "@/constants/theme";
import { useMedicines } from "@/hooks/useMedicines";
import { router } from "expo-router";
import { ChevronLeft, Pill, Search } from "lucide-react-native";
import { useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MyMedicinesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch medicines
  const { data, isLoading, error } = useMedicines();

  // Filter medicines by search query
  const filteredMedicines = useMemo(() => {
    if (!data?.medicines) return [];
    if (!searchQuery.trim()) return data.medicines;

    const query = searchQuery.toLowerCase().trim();
    return data.medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(query)
    );
  }, [data?.medicines, searchQuery]);

  const handleBack = () => {
    router.back();
  };

  const handleMedicinePress = (medicine: MedicineDto) => {
    router.push(`/edit-medicine?id=${medicine.id}`);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-neutral-900"
      edges={["top"]}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity
          onPress={handleBack}
          className="w-10 h-10 items-center justify-center"
          activeOpacity={0.7}
        >
          <ChevronLeft
            size={24}
            color={isDark ? Colors.icon.light : Colors.icon.dark}
          />
        </TouchableOpacity>
        <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
          My Medicines
        </Text>
        <View className="w-10" />
      </View>

      {/* Search Bar */}
      <View className="px-4 mb-4">
        <View className="flex-row items-center bg-white dark:bg-neutral-800 rounded-xl px-4 py-3 border border-neutral-200 dark:border-neutral-700">
          <Search size={20} color={Colors.icon.muted} />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search medicines..."
            placeholderTextColor={Colors.text.placeholder}
            className="flex-1 ml-3 text-base text-neutral-900 dark:text-neutral-100 font-poppins"
          />
        </View>
      </View>

      {/* Content */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color={Colors.primaryBright} />
        </View>
      ) : error ? (
        <View className="flex-1 items-center justify-center px-8">
          <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold text-center mb-2">
            Failed to Load Medicines
          </Text>
          <Text className="text-base text-neutral-500 dark:text-neutral-400 font-poppins text-center">
            {error.message}
          </Text>
        </View>
      ) : filteredMedicines.length === 0 ? (
        <View className="flex-1 items-center justify-center px-8">
          <View
            className="w-16 h-16 rounded-full items-center justify-center mb-4"
            style={{
              backgroundColor: isDark
                ? "rgba(255, 209, 220, 0.2)"
                : Colors.primaryLight,
            }}
          >
            <Pill size={28} color={Colors.primaryBright} />
          </View>
          <Text className="text-xl text-neutral-900 dark:text-neutral-100 font-poppins-bold text-center mb-2">
            {searchQuery ? "No Results" : "No Medicines"}
          </Text>
          <Text className="text-base text-neutral-500 dark:text-neutral-400 font-poppins text-center">
            {searchQuery
              ? `No medicines found matching "${searchQuery}"`
              : "You haven't added any medicines yet. Scan a prescription or add medicines manually."}
          </Text>
        </View>
      ) : (
        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          {filteredMedicines.map((medicine) => (
            <MedicineListItem
              key={medicine.id}
              medicine={medicine}
              onPress={() => handleMedicinePress(medicine)}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

