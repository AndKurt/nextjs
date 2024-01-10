import Image from "next/image";
import React, { FC } from "react";

import { Text, Title } from "@/components";

import { TProps } from "./types";

import cn from "./styles.module.scss";

export const IntroAboutSectionChild: FC<TProps> = ({ content }) => {
    return (
        <div className={cn.introAboutSectionChild}>
            {content.map(({ img, text, title }) => (
                <div
                    className={cn.item}
                    key={title}
                >
                    <div className={cn.image}>
                        <Image
                            alt={title}
                            src={img}
                        />
                    </div>
                    <div>
                        <Title
                            className={cn.title}
                            size={25}
                            weight='semi-bold'
                        >
                            {title}
                        </Title>
                        <Text color='grey'>{text}</Text>
                    </div>
                </div>
            ))}
        </div>
    );
};
