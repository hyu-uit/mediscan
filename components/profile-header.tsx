import { Image, Text, View } from "react-native";

export interface ProfileHeaderProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

export function ProfileHeader({ name, email, avatarUrl }: ProfileHeaderProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <View className="items-center mb-4">
      {/* Avatar */}
      {avatarUrl ? (
        <Image
          source={{ uri: avatarUrl }}
          className="w-20 h-20 rounded-full mb-3"
        />
      ) : (
        <View className="w-20 h-20 rounded-full bg-neutral-200 items-center justify-center mb-3">
          <Text className="text-3xl text-neutral-500 font-poppins-semibold">
            {initials}
          </Text>
        </View>
      )}

      {/* Name */}
      <Text className="text-xl text-neutral-900 font-poppins-bold mb-0.5">
        {name}
      </Text>

      {/* Email */}
      <Text className="text-sm text-neutral-400 font-poppins">{email}</Text>
    </View>
  );
}
