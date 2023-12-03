import Image from "next/image";
import React, { FC } from "react";

import { Text, Title } from "@/components";

import { TProps } from "./types";

import cn from "./styles.module.scss";

export const BlogCard: FC<TProps> = ({ image, text, date, title }) => {
    return (
        <div className={cn.blogCard}>
            <div className={cn.image}>
                <Image
                    alt={text}
                    src={image}
                />
            </div>
            <div className={cn.container}>
                <Text
                    align='center'
                    className={cn.date}
                    color='link'
                    size={25}
                >
                    {date} | {text}
                </Text>
                <Title
                    align='center'
                    className={cn.title}
                    color='primary'
                    weight='thin'
                >
                    {title}
                </Title>
            </div>
        </div>
    );
};
