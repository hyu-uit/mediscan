import { yupResolver } from "@hookform/resolvers/yup";
import * as Crypto from "expo-crypto";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as yup from "yup";

import { AppLogo } from "@/components/app-logo";
import { Button } from "@/components/button";
import { FormInput } from "@/components/form-input";
import { GoogleLoginButton } from "@/components/google-login-button";

const signupSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

type SignupFormData = yup.InferType<typeof signupSchema>;

interface SignupScreenProps {
  onBack?: () => void;
  onSignUp?: () => void;
  onGoogleSignUp?: () => void;
  onLogIn?: () => void;
}

export function SignupScreen({
  onBack,
  onSignUp,
  onGoogleSignUp,
  onLogIn,
}: SignupScreenProps) {
  const insets = useSafeAreaInsets();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    // Placeholder for registration logic
    console.log("Sign up attempt:", data.email);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onSignUp?.();
  };

  const handleGoogleSignUp = async () => {
    try {
      setIsGoogleLoading(true);
      // Generate a random nonce for security
      const nonce = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        Math.random().toString()
      );

      // Placeholder for Google OAuth configuration
      console.log(
        "Google sign up initiated with nonce:",
        nonce.substring(0, 8)
      );

      // Simulate OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onGoogleSignUp?.();
    } catch (error) {
      console.error("Google sign up error:", error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background dark:bg-neutral-900"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View
          className="flex-row items-center px-4 py-3"
          style={{ paddingTop: insets.top + 12 }}
        >
          <TouchableOpacity
            onPress={onBack}
            className="p-2 -ml-2"
            activeOpacity={0.7}
          >
            <ArrowLeft size={24} color="#171717" />
          </TouchableOpacity>
          <Text className="text-lg font-poppins-semibold text-neutral-900 dark:text-neutral-100 ml-2">
            Sign Up
          </Text>
        </View>

        <View className="flex-1 px-6 pt-6 pb-8">
          {/* Logo */}
          <View className="items-center mb-6">
            <AppLogo size={64} />
          </View>

          {/* Header */}
          <View className="items-center mb-8">
            <Text className="text-2xl font-poppins-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Create Account
            </Text>
            <Text className="text-base font-poppins text-neutral-500 dark:text-neutral-400 text-center leading-6">
              Join to manage your medication schedule, scan prescriptions, and
              get timely reminders.
            </Text>
          </View>

          {/* Form */}
          <View className="gap-4 mb-6">
            <FormInput
              control={control}
              name="email"
              label="Email"
              placeholder="name@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              leftIcon={<Mail size={20} color="#9CA3AF" />}
            />

            <FormInput
              control={control}
              name="password"
              label="Password"
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoComplete="new-password"
              leftIcon={<Lock size={20} color="#9CA3AF" />}
              rightIcon={
                showPassword ? (
                  <Eye size={20} color="#9CA3AF" />
                ) : (
                  <EyeOff size={20} color="#9CA3AF" />
                )
              }
              onRightIconPress={() => setShowPassword(!showPassword)}
            />

            <FormInput
              control={control}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="••••••••"
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
              autoComplete="new-password"
              leftIcon={<ShieldCheck size={20} color="#9CA3AF" />}
              rightIcon={
                showConfirmPassword ? (
                  <Eye size={20} color="#9CA3AF" />
                ) : (
                  <EyeOff size={20} color="#9CA3AF" />
                )
              }
              onRightIconPress={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            />
          </View>

          {/* Sign Up Button */}
          <Button
            fullWidth
            size="lg"
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Sign Up"}
          </Button>

          {/* Divider */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
            <Text className="mx-4 text-xs font-poppins-medium text-neutral-400 uppercase tracking-wider">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
          </View>

          {/* Google Sign Up */}
          <GoogleLoginButton
            label="Sign up with Google"
            onPress={handleGoogleSignUp}
            loading={isGoogleLoading}
          />

          {/* Log In Link */}
          <View className="flex-row items-center justify-center mt-6">
            <Text className="text-sm font-poppins text-neutral-500 dark:text-neutral-400">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={onLogIn}>
              <Text className="text-sm font-poppins-semibold text-primary">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
