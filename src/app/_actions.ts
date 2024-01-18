"use server";

import { ThanksSubscribeEmail } from "@/emails/ThanksSubscribeEmail";
import { EmailZodSchema } from "@/lib";

import { Resend } from "resend";
import { z } from "zod";

type EmailFormInput = z.infer<typeof EmailZodSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSubscribeEmail(data: EmailFormInput) {
    const result = EmailZodSchema.safeParse(data);

    if (result.success) {
        const { email } = result.data;

        try {
            const data = await resend.emails.send({
                from: "Modsen ProperLand Inc. <onboarding@resend.dev>",
                to: [email],
                subject: "Thank you for subscribing!",
                react: ThanksSubscribeEmail({ email }),
            });

            return { success: true, data };
        } catch (error) {
            return { success: false, error };
        }
    }

    if (result.error) {
        return { success: false, error: result.error.format() };
    }
}
