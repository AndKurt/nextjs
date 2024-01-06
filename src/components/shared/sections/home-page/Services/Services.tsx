import React, { FC } from "react";

import { SectionTitle, ServiceCard, Title } from "@/components";
import { SERVICE_CARDS } from "@/constants";
import { TSectionProps } from "@/types";

import cn from "./styles.module.scss";

export const Services: FC<TSectionProps> = ({ commonTitle, sectionNumber, sectionTitle }) => {
    return (
        <section className={cn.services}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber={sectionNumber}
                        title={sectionTitle}
                    />
                    <Title className={cn.title}>{commonTitle}</Title>
                    <div className={cn.cardsContainer}>
                        {SERVICE_CARDS.map(({ image, title, text }) => (
                            <ServiceCard
                                image={image}
                                key={title}
                                text={text}
                                title={title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
