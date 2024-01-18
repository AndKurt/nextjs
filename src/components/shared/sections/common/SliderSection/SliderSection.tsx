import React, { FC } from "react";

import { Title } from "@/components";
import { Slider } from "@/components/shared/Slider/Slider";

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
                <Slider />
            </div>
        </section>
    );
};
