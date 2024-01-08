import React, { FC } from "react";

import { Text, Title } from "@/components";

import cn from "./styles.module.scss";

import clsx from "clsx";

const COUNTER_DATA = [
    {
        title: "56,180",
        text: "In property sales",
    },
    {
        title: "99%",
        text: "Customer satisfaction",
    },
    {
        title: "25K+",
        text: "Property Transaction",
    },
    {
        title: "2,918",
        text: "Price Reduce",
    },
];

type TProps = {
    isSecondaryBackground?: boolean;
};

export const Counter: FC<TProps> = ({ isSecondaryBackground = false }) => {
    return (
        <section className={clsx(cn.counter, isSecondaryBackground && cn.secondary)}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    {COUNTER_DATA.map(({ title, text }) => (
                        <div
                            className={cn.block}
                            key={title}
                        >
                            <Title
                                align='center'
                                className={cn.title}
                                size={45}
                                tag='h3'
                            >
                                {title}
                            </Title>
                            <Text
                                align='center'
                                color={isSecondaryBackground ? "white" : "link"}
                            >
                                {text}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
