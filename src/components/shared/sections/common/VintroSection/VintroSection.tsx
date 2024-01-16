import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";

import { SectionTitle, Text, Title } from "@/components";
import { TImageType, TSectionProps } from "@/types";

import cn from "./styles.module.scss";

import clsx from "clsx";

type TProps = {
    imgUrl: TImageType;
    text: string | string[];
};

export const VintroSection: FC<PropsWithChildren<TSectionProps & TProps>> = ({
    commonTitle,
    sectionNumber,
    sectionTitle,
    imgUrl,
    children,
    text,
}) => {
    const isPropsTextArr = Array.isArray(text);

    return (
        <section className={cn.vintroSection}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <div className={cn.imageContainer}>
                        <Image
                            alt='intro-section'
                            src={imgUrl}
                        />
                    </div>
                    <div className={cn.contentContainer}>
                        <SectionTitle
                            sectionNumber={sectionNumber}
                            title={sectionTitle}
                        />
                        <Title className={cn.title}>{commonTitle}</Title>
                        {isPropsTextArr ? (
                            text.map(item => (
                                <Text
                                    className={clsx(cn.textHelper)}
                                    key={item}
                                >
                                    {item}
                                </Text>
                            ))
                        ) : (
                            <Text className={cn.text}>{text}</Text>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};
