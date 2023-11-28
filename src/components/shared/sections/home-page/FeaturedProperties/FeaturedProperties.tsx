import React from "react";

import { PropertyCard, SectionTitle, Title } from "@/components";
import { PROPERTY_CARDS } from "@/constants";

import cn from "./styles.module.scss";

export const FeaturedProperties = () => {
    return (
        <section className={cn.featuredProperties}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber='02'
                        title='Featured properties'
                    />
                    <Title className={cn.title}>Properties for sale in your favorite area</Title>
                    <div className={cn.cardsContainer}>
                        {PROPERTY_CARDS.map(
                            ({
                                address,
                                baths,
                                beds,
                                buttonLink,
                                image,
                                parking,
                                price,
                                square,
                                title,
                            }) => (
                                <PropertyCard
                                    address={address}
                                    baths={baths}
                                    beds={beds}
                                    buttonLink={buttonLink}
                                    image={image}
                                    key={title}
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
