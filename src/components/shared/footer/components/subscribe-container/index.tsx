import React from "react";

import { CommonButton, Text, Title } from "@/components/core";

import cn from "./styles.module.scss";

export const SubscribeContainer = () => {
    return (
        <section className={cn.subscribeContainer}>
            <Title
                className={cn.title}
                tag='h2'
            >
                Get a free estimate
            </Title>
            <Text className={cn.description}>
                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                approaches lverall value proposition. Organically grow the holistic world view of
                disruptive.
            </Text>
            <form className={cn.emailBlock}>
                <input
                    className={cn.emailInput}
                    placeholder='your email address here'
                    type='email'
                />
                <CommonButton text='Subscribe Now' />
            </form>
        </section>
    );
};
