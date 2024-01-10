import React, { FC } from "react";

import { Text, Title } from "@/components";

import { TProps } from "./types";

import cn from "./styles.module.scss";

export const IntroPropertySectionChild: FC<TProps> = ({ contentArr }) => {
    if (!contentArr.length) return null;

    return (
        <>
            {contentArr.map(({ text, title }) => (
                <div
                    className={cn.contentBlock}
                    key={title}
                >
                    <Title
                        className={cn.title}
                        size={25}
                        tag='h3'
                        weight='semi-bold'
                    >
                        {title}
                    </Title>
                    <Text className={cn.text}>{text}</Text>
                </div>
            ))}
        </>
    );
};
