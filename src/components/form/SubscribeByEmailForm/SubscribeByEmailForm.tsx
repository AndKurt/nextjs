"use client";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { sendSubscribeEmail } from "@/app/_actions";
import { CommonButton, Text } from "@/components";
import { EmailZodSchema } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";

import { TEmailFormInput } from "./types";

import cn from "./styles.module.scss";

import { toast } from "sonner";

export const SubscribeByEmailForm: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<TEmailFormInput>({
        resolver: zodResolver(EmailZodSchema),
    });

    const errorMessage = errors.email?.message;

    const processForm: SubmitHandler<TEmailFormInput> = async data => {
        const result = await sendSubscribeEmail(data);

        if (result) {
            console.log({ data: result.data });
            toast.success("Email sent!");
            reset();

            return;
        }

        toast.error("Something went wrong!");
    };

    return (
        <form
            className={cn.emailBlock}
            onSubmit={handleSubmit(processForm)}
        >
            <div className={cn.emailContainer}>
                <input
                    className={cn.emailInput}
                    placeholder='your email address here'
                    {...register("email")}
                />
                <CommonButton
                    className={cn.subscribeButton}
                    disabled={isSubmitting}
                    text={isSubmitting ? "Subscribing..." : "Subscribe Now"}
                    type='submit'
                />
            </div>
            {errorMessage && (
                <Text
                    className={cn.errorMessage}
                    size={20}
                >
                    {errorMessage}
                </Text>
            )}
        </form>
    );
};
