import React, { FC } from "react";

import { SliderCard, Title } from "@/components";
import { SLIDER_CARDS } from "@/constants";

import cn from "./styles.module.scss";

type TProps = {
    title: string;
};

export const SliderSection: FC<TProps> = ({ title }) => {
    return (
        <section className={cn.sliderSection}>
            <div className={cn.wrapper}>
                <div className={cn.title}>
                    <Title>{title}</Title>
                </div>
                <div className={cn.cardsContainer}>
                    {SLIDER_CARDS.map(({ customerName, customerPhoto, text }) => (
                        <SliderCard
                            customerName={customerName}
                            customerPhoto={customerPhoto}
                            key={customerName}
                            text={text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
