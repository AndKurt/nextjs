import React, { FC } from "react";

import { ProcessCard, SectionTitle, TProcessCard } from "@/components";
import {} from "@/components";
import { Title } from "@/components/core";
import { TSectionProps } from "@/types";

import cn from "./styles.module.scss";

const PROCESS_CARDS: TProcessCard[] = [
    {
        id: 1,
        title: "Planning stage",
        text: "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
        id: 2,
        title: "Development",
        text: "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
    {
        id: 3,
        title: "New way of living",
        text: "High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.",
    },
];

export const ProcessSection: FC<TSectionProps> = ({ commonTitle, sectionNumber, sectionTitle }) => {
    return (
        <div className={cn.processSection}>
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
        </div>
    );
};
