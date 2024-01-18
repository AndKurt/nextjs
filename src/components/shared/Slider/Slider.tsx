"use client";
import React from "react";

import { SliderCard } from "@/components";
import { SLIDER_CARDS } from "@/constants";

import cn from "./styles.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3.2,
                    spaceBetween: 40,
                },
            }}
            className={cn.slider}
            modules={[Navigation]}
            slidesPerView={3.2}
            spaceBetween={40}
        >
            {SLIDER_CARDS.map(({ customerName, customerPhoto, text }, index) => (
                <SwiperSlide
                    className={cn.card}
                    key={index}
                >
                    <SliderCard
                        customerName={customerName}
                        customerPhoto={customerPhoto}
                        text={text}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
