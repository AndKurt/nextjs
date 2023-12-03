import Image from "next/image";
import React, { FC } from "react";

import { Text, Title } from "@/components/core";

import { TProps } from "./types";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const ServiceCard: FC<TProps> = ({ image, title, text }) => {
    return (
        <div className={cn.serviceCard}>
            <div className={cn.image}>
                <Image
                    alt={title}
                    src={image}
                />
            </div>

            <div className={clsx(cn.container)}>
                <Title
                    align='center'
                    className={cn.title}
                    color='primary'
                    size={25}
                >
                    {title}
                </Title>
                <Text
                    align='center'
                    className={cn.text}
                    color='content'
                >
                    {text}
                </Text>
            </div>
        </div>
    );
};
