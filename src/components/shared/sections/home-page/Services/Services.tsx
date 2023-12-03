import React from "react";

import { SectionTitle, ServiceCard, Title } from "@/components";
import { SERVICE_CARDS } from "@/constants/pages/home/service-cards";

import cn from "./styles.module.scss";

export const Services = () => {
    return (
        <section className={cn.services}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber='05'
                        title='Why choose'
                    />
                    <Title className={cn.title}>See How Can Help</Title>
                    <div className={cn.cardsContainer}>
                        {SERVICE_CARDS.map(({ image, title, text }) => (
                            <ServiceCard
                                image={image}
                                key={title}
                                text={text}
                                title={title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
