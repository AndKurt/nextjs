import { z } from "zod";

export const EmailZodSchema = z.object({
    email: z
        .string()
        .nonempty('Email is required.')
        .min(6, { message: "Email must be at least 6 characters." })
        .email("Invalid email."),
});
