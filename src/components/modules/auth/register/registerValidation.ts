import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string("Name is required")
    .min(2, "Name must be between 2 and 50 characters")
    .max(50, "Name must be between 2 and 50 characters"),
  email: z.email("Invalid email address"),
  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters"),
  passwordConfirm: z.string("Password Confirmation is required").min(1),
});
