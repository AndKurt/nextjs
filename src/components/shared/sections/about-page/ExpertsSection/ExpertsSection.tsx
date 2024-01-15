import React, { FC } from "react";

import { ExpertCard, SectionTitle, Title } from "@/components";
import { EXPERT_CARDS } from "@/constants";
import { TSectionProps } from "@/types";

import cn from "./styles.module.scss";

export const ExpertsSection: FC<TSectionProps> = ({ commonTitle, sectionNumber, sectionTitle }) => {
    return (
        <section className={cn.expertsSection}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber={sectionNumber}
                        title={sectionTitle}
                    />
                    <Title className={cn.title}>{commonTitle}</Title>
                    <div className={cn.cardsContainer}>
                        {EXPERT_CARDS.map(
                            ({
                                name,
                                image,
                                jobTitle,
                                instagramLink,
                                facebookLink,
                                linkedInLink,
                            }) => (
                                <ExpertCard
                                    facebookLink={facebookLink}
                                    image={image}
                                    instagramLink={instagramLink}
                                    jobTitle={jobTitle}
                                    key={name}
                                    linkedInLink={linkedInLink}
                                    name={name}
                                />
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
