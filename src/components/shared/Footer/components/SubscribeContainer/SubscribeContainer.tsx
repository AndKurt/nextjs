import React from "react";

import { Text, Title } from "@/components";
import { SubscribeByEmailForm } from "@/components/form/SubscribeByEmailForm/SubscribeByEmailForm";

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
            <SubscribeByEmailForm />
        </section>
    );
};
