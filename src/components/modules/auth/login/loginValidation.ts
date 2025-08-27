import z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
 