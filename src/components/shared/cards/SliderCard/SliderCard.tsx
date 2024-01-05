import Image from "next/image";
import React, { FC } from "react";

import { SliderReviewText } from "@/components";
import { Text } from "@/components/core";

import { TProps } from "./types";

import cn from "./styles.module.scss";

export const SliderCard: FC<TProps> = ({ text, customerName, customerPhoto }) => {
    return (
        <div className={cn.sliderCard}>
            <div className={cn.reviewInfo}>
                <SliderReviewText text={text} />
            </div>
            <div className={cn.customer}>
                <Image
                    alt='customer-photo'
                    className={cn.customerPhoto}
                    src={customerPhoto}
                />
                <div>
                    <Text
                        color='primary'
                        font='kufam'
                        size={25}
                        weight='semi-bold'
                    >
                        {customerName}
                    </Text>
                    <Text>Happy Customers</Text>
                </div>
            </div>
        </div>
    );
};
