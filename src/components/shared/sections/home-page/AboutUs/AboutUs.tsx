import React, { FC } from "react";

import { CommonButton, SectionTitle, Text, Title } from "@/components";
import { TSectionProps } from "@/types";
import { COMMON_ICONS } from "@public";

import cn from "./styles.module.scss";

export const AboutUs: FC<TSectionProps> = ({ commonTitle, sectionNumber, sectionTitle }) => {
    return (
        <section className={cn.aboutUs}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber={sectionNumber}
                        title={sectionTitle}
                    />
                    <Title className={cn.title}>{commonTitle}</Title>
                    <Text className={cn.text}>
                        Distinctively re-engineer revolutionary meta-services and premium At vero
                        eos et accusamus et iusto
                    </Text>
                    <Text className={cn.text}>
                        Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                        corrupti quos dolores et quas molestias excepturi.Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.
                    </Text>
                    <CommonButton
                        color='secondary'
                        rightAddon={COMMON_ICONS.primaryArrow}
                        sidePadding={26}
                        text='Learn more'
                    />
                </div>
            </div>
        </section>
    );
};
