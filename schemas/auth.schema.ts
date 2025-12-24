import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup.string().required("Password is required"),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;

export const signupSchema = yup.object({
  name: yup.string().required("Name is required"),
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

export type SignupFormData = yup.InferType<typeof signupSchema>;
