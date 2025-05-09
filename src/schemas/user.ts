import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters long.")
    .regex(/^[A-Za-z\s]+$/, "Full name can only contain letters and spaces.") // Allows only letters and spaces
    .refine((name) => name.split(" ").length >= 2, {
      // Ensures at least 2 words
      message: "Full name must contain at least a first name and a last name.",
    }),
  email: z.string().email(),
  password: z.string().min(8),
});
