import React, { FC } from "react";

import { ProcessCard, SectionTitle } from "@/components";
import { Title } from "@/components/core";
import { PROCESS_CARDS } from "@/constants";
import { TSectionProps } from "@/types";

import cn from "./styles.module.scss";

export const ProcessSection: FC<TSectionProps> = ({ commonTitle, sectionNumber, sectionTitle }) => {
    return (
        <section className={cn.processSection}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber={sectionNumber}
                        title={sectionTitle}
                    />
                    <Title className={cn.title}>{commonTitle}</Title>
                    <div className={cn.cardsContainer}>
                        {PROCESS_CARDS.map(({ id, text, title }) => (
                            <ProcessCard
                                id={id}
                                key={id}
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
