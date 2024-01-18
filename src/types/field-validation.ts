import { EmailZodSchema } from "@/lib";

import { z } from "zod";

export type EmailFormInput = z.infer<typeof EmailZodSchema>;
