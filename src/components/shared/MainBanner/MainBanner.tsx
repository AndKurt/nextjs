import Image from "next/image";
import React, { FC } from "react";

import { CommonButton, PageTitle, Text, Title } from "@/components";
import { BANNER_IMAGES, COMMON_ICONS } from "@public";

import { TProps } from "./types";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const MainBanner: FC<TProps> = ({
    backgroundImg,
    labelTitle,
    title,
    text,
    button,
    isErrorPage = false,
    isHomePage = true,
}) => {
    return (
        <section className={clsx(cn.mainBanner, !isErrorPage && !isHomePage && cn.banner)}>
            <div className={clsx(cn.container, isErrorPage && cn.containerError)}>
                <div className={clsx(cn.content, isErrorPage && cn.contentError)}>
                    <PageTitle labelTitle={labelTitle} />

                    <Title
                        size={isErrorPage ? 278 : 65}
                        tag='h1'
                    >
                        {title}
                    </Title>

                    {isErrorPage && (
                        <div className={cn.backgroundImgError}>
                            <Image
                                alt='banner-image'
                                src={backgroundImg}
                            />
                        </div>
                    )}

                    {isErrorPage && <Title size={65}>Page Not Found</Title>}

                    {text && <Text align={isErrorPage ? "center" : "left"}>{text}</Text>}

                    {button && (
                        <CommonButton
                            color='white'
                            link={button.link}
                            rightAddon={COMMON_ICONS.yellowArrow}
                            text={button.text}
                        />
                    )}
                </div>
            </div>
            {!isErrorPage && (
                <div className={cn.backgroundImg}>
                    <Image
                        alt='banner-image'
                        src={backgroundImg}
                    />
                </div>
            )}
            <div className={cn.leftBackgroundImg}>
                <Image
                    alt='left-background'
                    src={BANNER_IMAGES.leftBackground}
                />
            </div>
            <div className={cn.rightBackgroundImg}>
                <Image
                    alt='right-background'
                    src={BANNER_IMAGES.rightBackground}
                />
            </div>
        </section>
    );
};
