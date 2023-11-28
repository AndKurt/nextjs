import Image from "next/image";
import React, { FC, useMemo } from "react";

import { CommonButton, Text, Title } from "@/components/core";

import { COMMON_ICONS } from "../../../../../public/";

import { InfoPlate } from "./InfoPlate/InfoPlate";
import { TProps } from "./types";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const PropertyCard: FC<TProps> = ({
    image,
    title,
    price,
    buttonLink,
    address,
    beds,
    baths,
    parking,
    square,
}) => {
    const INFO_DATA = useMemo(
        () => [
            { img: COMMON_ICONS.bed, text: `${beds} ${beds === 1 ? "Bed" : "Beds"}` },
            { img: COMMON_ICONS.bath, text: `${baths} ${baths === 1 ? "Bath" : "Baths"}` },
            { img: COMMON_ICONS.parking, text: `${parking} Parking` },
            { img: COMMON_ICONS.ruler, text: `${square}sqft` },
        ],
        [beds, baths, parking, square],
    );

    return (
        <div className={cn.propertyCard}>
            <Image
                alt={title}
                className={cn.image}
                src={image}
            />
            <div className={clsx(cn.aligner, cn.piceBlock)}>
                <Text
                    color='secondary'
                    size={35}
                >
                    ${price}/Mo
                </Text>
                <CommonButton
                    className={cn.button}
                    color='secondary'
                    link={buttonLink}
                    text='For Sale'
                />
            </div>
            <Title size={25}>{title}</Title>
            <div className={cn.addressBlock}>
                <Image
                    alt='address'
                    src={COMMON_ICONS.address}
                />
                <Text color='content'>{address}</Text>
            </div>
            <div className={clsx(cn.aligner, cn.mobileAligner)}>
                {INFO_DATA.map(({ img, text }) => (
                    <InfoPlate
                        img={img}
                        key={text}
                        text={text}
                    />
                ))}
            </div>
        </div>
    );
};
