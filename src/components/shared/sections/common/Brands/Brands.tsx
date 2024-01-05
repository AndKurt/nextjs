import Image from "next/image";
import React, { FC } from "react";

import { CommonButton, Title } from "@/components";
import { BRANDS_IMG, COMMON_ICONS } from "@public";

import cn from "./styles.module.scss";

export const Brands: FC = () => {
    return (
        <div className={cn.brands}>
            <Title
                align='center'
                className={cn.title}
                size={25}
                tag='h3'
            >
                More than 50+ Brands Trusted World Wide
            </Title>
            <div className={cn.container}>
                {BRANDS_IMG.map((image, index) => (
                    <div
                        className={cn.image}
                        key={index}
                    >
                        <Image
                            alt={String(image)}
                            src={image}
                        />
                    </div>
                ))}
            </div>
            <CommonButton
                color='white'
                rightAddon={COMMON_ICONS.yellowArrow}
                text='Explore Now'
            />
        </div>
    );
};
