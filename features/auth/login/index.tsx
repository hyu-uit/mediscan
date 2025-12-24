import { yupResolver } from "@hookform/resolvers/yup";
import * as Crypto from "expo-crypto";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react-native";
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
import * as yup from "yup";

import { AppLogo } from "@/components/app-logo";
import { Button } from "@/components/button";
import { FormInput } from "@/components/form-input";
import { GoogleLoginButton } from "@/components/google-login-button";

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup.string().required("Password is required"),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

interface LoginScreenProps {
  onLogin?: () => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  onGoogleLogin?: () => void;
}

export function LoginScreen({
  onLogin,
  onForgotPassword,
  onSignUp,
  onGoogleLogin,
}: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    // Placeholder for authentication logic
    console.log("Login attempt:", data.email);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onLogin?.();
  };

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoading(true);
      // Generate a random nonce for security
      const nonce = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        Math.random().toString()
      );

      // Placeholder for Google OAuth configuration
      // In production, configure with actual Google OAuth credentials
      console.log("Google login initiated with nonce:", nonce.substring(0, 8));

      // Simulate OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onGoogleLogin?.();
    } catch (error) {
      console.error("Google login error:", error);
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
        className="flex-1 pt-20"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 px-6 pt-16 pb-8">
          {/* Logo */}
          <View className="items-center mb-8">
            <AppLogo size={72} />
          </View>

          {/* Header */}
          <View className="items-center mb-10">
            <Text className="text-3xl font-poppins-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Welcome Back
            </Text>
            <Text className="text-base font-poppins-medium text-neutral-500 dark:text-neutral-400">
              Sign in to manage your prescriptions
            </Text>
          </View>

          {/* Form */}
          <View className="gap-5 mb-3">
            <FormInput
              control={control}
              name="email"
              label="Email Address"
              placeholder="name@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              leftIcon={<Mail size={20} color="#9CA3AF" />}
            />

            <View>
              <FormInput
                control={control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="password"
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

              <TouchableOpacity
                className="self-end mt-2"
                onPress={onForgotPassword}
              >
                <Text className="text-sm font-poppins-medium text-neutral-500 dark:text-neutral-400">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <View className="mt-6">
            <Button
              fullWidth
              size="lg"
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              icon={<ArrowRight size={20} color="#171717" />}
              iconPosition="right"
            >
              {isSubmitting ? "Signing in..." : "Login"}
            </Button>
          </View>

          {/* Divider */}
          <View className="flex-row items-center my-8">
            <View className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
            <Text className="mx-4 text-xs font-poppins-medium text-neutral-400 uppercase tracking-wider">
              or continue with
            </Text>
            <View className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
          </View>

          {/* Google Login */}
          <GoogleLoginButton
            onPress={handleGoogleLogin}
            loading={isGoogleLoading}
          />

          {/* Sign Up Link */}
          <View className="flex-row items-center justify-center mt-8">
            <Text className="text-sm font-poppins text-neutral-500 dark:text-neutral-400">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={onSignUp}>
              <Text className="text-sm font-poppins-semibold text-primary">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
