import React, { FC } from "react";

import { ChooseCard, SectionTitle, Title } from "@/components";
import { CHOOSE_CARDS } from "@/constants";
import { TSectionProps } from "@/types";

import cn from "./styles.module.scss";

export const WhyChoose: FC<TSectionProps> = ({ commonTitle, sectionNumber, sectionTitle }) => {
    return (
        <section className={cn.whyChoose}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber={sectionNumber}
                        title={sectionTitle}
                    />
                    <Title className={cn.title}>{commonTitle}</Title>
                    <div className={cn.cardsContainer}>
                        {CHOOSE_CARDS.map(({ image, title, text, width, background }) => (
                            <ChooseCard
                                background={background}
                                image={image}
                                key={title}
                                text={text}
                                title={title}
                                width={width}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
