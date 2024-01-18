import { EmailZodSchema } from "@/lib";

import { z } from "zod";

export type TEmailFormInput = z.infer<typeof EmailZodSchema>;
