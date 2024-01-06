import React, { FC } from "react";

import { PropertyCard, SectionTitle, Title } from "@/components";
import { PROPERTY_CARDS } from "@/constants";
import { TSectionProps } from "@/types";

import cn from "./styles.module.scss";

export const FeaturedProperties: FC<TSectionProps> = ({
    commonTitle,
    sectionNumber,
    sectionTitle,
}) => {
    return (
        <section className={cn.featuredProperties}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber={sectionNumber}
                        title={sectionTitle}
                    />
                    <Title className={cn.title}>{commonTitle}</Title>
                    <div className={cn.cardsContainer}>
                        {PROPERTY_CARDS.map(
                            (
                                {
                                    address,
                                    baths,
                                    beds,
                                    buttonLink,
                                    image,
                                    parking,
                                    price,
                                    square,
                                    title,
                                },
                                index,
                            ) => (
                                <PropertyCard
                                    address={address}
                                    baths={baths}
                                    beds={beds}
                                    buttonLink={buttonLink}
                                    image={image}
                                    key={title + index}
                                    parking={parking}
                                    price={price}
                                    square={square}
                                    title={title}
                                />
                            ),
                        )}
                    </div>
                </div>
            </div>
            <div className={cn.decoration}></div>
        </section>
    );
};
