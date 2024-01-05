import React from "react";

import { SliderCard } from "@/components";
import { SLIDER_CARDS } from "@/constants";

import cn from "./styles.module.scss";

export const Slider = () => {
    return (
        <div className={cn.slider}>
            <div className={cn.navigation}></div>
            <button
                type='button'
                onClick={() => {}}
            >
                left
            </button>
            <button
                type='button'
                onClick={() => {}}
            >
                right
            </button>
            <div className={cn.cardsContainer}>
                {SLIDER_CARDS.map(({ customerName, customerPhoto, text }, index) => (
                    <SliderCard
                        customerName={customerName}
                        customerPhoto={customerPhoto}
                        key={index}
                        text={text}
                    />
                ))}
            </div>
        </div>
    );
};
