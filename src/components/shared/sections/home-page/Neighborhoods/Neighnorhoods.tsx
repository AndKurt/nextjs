import React from "react";

import { Brands, NeighborhoodsCard, SectionTitle, Title } from "@/components";
import { NEIGHBORHOODS_CARDS } from "@/constants";

import cn from "./styles.module.scss";

export const Neighborhoods = () => {
    return (
        <section className={cn.neighborhoods}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber='06'
                        title='Neighborhoods'
                    />
                    <Title className={cn.title}>Discover The Neighborhoods</Title>
                    <div className={cn.cardsContainer}>
                        {NEIGHBORHOODS_CARDS.map(({ image, title, countOfProperties }) => (
                            <NeighborhoodsCard
                                countOfProperties={countOfProperties}
                                image={image}
                                key={title}
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
