import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";

import { Text, Title, VideoPlayer } from "@/components";
import { BANNER_IMAGES } from "@public";

import {
    TProps,
    TSubTextContent as TRenderSubTextContent,
    TTextContent as TRenderTextContent,
} from "./types";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const HouseSection: FC<TProps> = ({
    invertedBackground = false,
    firstSection,
    secondSection,
}) => {
    const renderTextContent = ({
        title,
        text,
        children,
    }: PropsWithChildren<TRenderTextContent>) => (
        <div className={cn.textContent}>
            <div className={clsx(children && cn.textContentIndent)}>
                <Title
                    className={clsx(cn.title, cn.contentTitle)}
                    size={45}
                >
                    {title}
                </Title>
                <Text className={cn.text}>{text}</Text>
            </div>
            {children}
        </div>
    );

    const renderSubTextContent = (textContent: TRenderSubTextContent) => (
        <>
            {textContent.map(({ text, title }) => (
                <div
                    className={cn.subTextContent}
                    key={text}
                >
                    <Title
                        className={clsx(cn.title, cn.subContentTitle)}
                        size={25}
                    >
                        {title}
                    </Title>
                    <Text
                        className={cn.text}
                        color='grey'
                    >
                        {text}
                    </Text>
                </div>
            ))}
        </>
    );

    return (
        <section className={clsx(cn.houseSection, invertedBackground && cn.invertedBackground)}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <div className={clsx(cn.block, cn.firstBlock)}>
                        <div className={cn.imageContainer}>
                            <Image
                                alt={firstSection.image.alt}
                                src={BANNER_IMAGES.house}
                            />
                        </div>
                        {renderTextContent({
                            title: firstSection.textContent.title,
                            text: firstSection.textContent.text,
                        })}
                    </div>
                    <div className={clsx(cn.block, cn.secondBlock)}>
                        {renderTextContent({
                            title: secondSection.textContent.title,
                            text: secondSection.textContent.text,
                            children: renderSubTextContent(secondSection.subTextContent),
                        })}
                        <div className={cn.videoContainer}>
                            <VideoPlayer
                                poster={secondSection.video.poster}
                                videoLink={secondSection.video.videoLink}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
