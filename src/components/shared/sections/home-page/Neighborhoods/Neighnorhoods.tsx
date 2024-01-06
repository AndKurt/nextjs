import React, { FC } from "react";

import { Brands, NeighborhoodsCard, SectionTitle, Title } from "@/components";
import { NEIGHBORHOODS_CARDS } from "@/constants";
import { TSectionProps } from "@/types";

import cn from "./styles.module.scss";

export const Neighborhoods: FC<TSectionProps> = ({ commonTitle, sectionNumber, sectionTitle }) => {
    return (
        <section className={cn.neighborhoods}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber={sectionNumber}
                        title={sectionTitle}
                    />
                    <Title className={cn.title}>{commonTitle}</Title>
                    <div className={cn.cardsContainer}>
                        {NEIGHBORHOODS_CARDS.map(({ image, title, countOfProperties }, index) => (
                            <NeighborhoodsCard
                                countOfProperties={countOfProperties}
                                image={image}
                                key={title + index}
                                title={title}
                            />
                        ))}
                    </div>
                    <Brands />
                </div>
            </div>
        </section>
    );
};
