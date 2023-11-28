import Image from "next/image";
import React, { FC } from "react";

import { CommonButton, Text, Title } from "@/components";
import { BannerImages, COMMON_ICONS } from "@public";

import { LabelTitle } from "./LabelTitle";
import { IProps } from "./types";

import cn from "./styles.module.scss";

export const MainBanner: FC<IProps> = ({ backgroundImg, labelTitle, title, text }) => {
    return (
        <section className={cn.mainBanner}>
            <div className={cn.container}>
                <div className={cn.content}>
                    <LabelTitle labelTitle={labelTitle} />
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                    <CommonButton
                        color='white'
                        link='/'
                        rightAddon={COMMON_ICONS.yellowArrow}
                        text='Explore Property'
                    />
                </div>
            </div>
            <div className={cn.backgroundImg}>
                <Image
                    alt='banner-image'
                    className={cn.backgroundImg}
                    objectFit='cover'
                    src={backgroundImg}
                />
            </div>
            <div className={cn.leftBackgroundImg}>
                <Image
                    alt='left-background'
                    objectFit='cover'
                    src={BannerImages.leftBackground}
                />
            </div>
            <div className={cn.rightBackgroundImg}>
                <Image
                    alt='left-background'
                    objectFit='cover'
                    src={BannerImages.rightBackground}
                />
            </div>
        </section>
    );
};
