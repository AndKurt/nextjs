import Image from "next/image";
import React, { FC } from "react";

import { Text } from "@/components/core";

import { TProps } from "./types";

import cn from "./styles.module.scss";

export const NeighborhoodsCard: FC<TProps> = ({ image, title, countOfProperties }) => {
    return (
        <div className={cn.neighborhoodsCard}>
            <div className={cn.image}>
                <Image
                    alt={title}
                    src={image}
                />
            </div>
            <div className={cn.container}>
                <Text
                    color='white'
                    size={25}
                >
                    {title}
                </Text>
                <Text color='secondary'>{countOfProperties} Property</Text>
            </div>
        </div>
    );
};
