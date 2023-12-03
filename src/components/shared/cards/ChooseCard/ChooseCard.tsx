import Image from "next/image";
import React, { FC } from "react";

import { Text, Title } from "@/components/core";

import { TProps } from "./types";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const ChooseCard: FC<TProps> = ({
    image,
    title,
    text,
    width = "short",
    background = "none",
}) => {
    const cardClasses = clsx(
        cn.chooseCard,
        background === "bottom" && cn.backgroundBottom,
        background === "top" && cn.backgroundTop,
        width === "full" && cn.fullWidth,
    );

    return (
        <div className={cardClasses}>
            <div className={cn.image}>
                <Image
                    alt={title}
                    src={image}
                />
            </div>

            <div className={cn.container}>
                <Title
                    color='primary'
                    size={25}
                >
                    {title}
                </Title>
                {text &&
                    text.map(str => (
                        <Text
                            color='link'
                            key={str}
                        >
                            {str}
                        </Text>
                    ))}
            </div>
        </div>
    );
};
