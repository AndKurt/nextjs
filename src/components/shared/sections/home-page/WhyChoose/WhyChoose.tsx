import React from "react";

import { ChooseCard, SectionTitle, Title } from "@/components";
import { CHOOSE_CARDS } from "@/constants";

import cn from "./styles.module.scss";

export const WhyChoose = () => {
    return (
        <section className={cn.whyChoose}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber='03'
                        title='Why choose'
                    />
                    <Title className={cn.title}>
                        Why Choose Our Properties Of Real Estate Industries
                    </Title>
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
