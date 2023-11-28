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
    const cardClasses = clsx(cn.chooseCard, {
        bottomBackground: background === "bottom",
        topBackground: background === "top",
        fullWidth: width === "full",
    });

    console.log({ width }, { background }, cardClasses);

    return (
        <div className={cardClasses}>
            <Image
                alt={title}
                className={cn.image}
                src={image}
            />
            <div className={clsx(cn.container)}>
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
