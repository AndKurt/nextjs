import React from "react";

import { BlogCard, CommonButton, SectionTitle, Title } from "@/components";
import { BLOG_CARDS } from "@/constants";
import { COMMON_ICONS } from "@public";

import cn from "./styles.module.scss";

export const Blog = () => {
    return (
        <section className={cn.blog}>
            <div className={cn.wrapper}>
                <div className={cn.container}>
                    <SectionTitle
                        sectionNumber='07'
                        title='Blog'
                    />
                    <Title className={cn.title}>Discover The Neighborhoods</Title>
                    <div className={cn.cardsContainer}>
                        {BLOG_CARDS.map(({ image, date, text, title }) => (
                            <BlogCard
                                date={date}
                                image={image}
                                key={text}
                                text={text}
                                title={title}
                            />
                        ))}
                    </div>
                    <CommonButton
                        color='white'
                        rightAddon={COMMON_ICONS.primaryArrow}
                        text='See All Articles'
                    />
                </div>
            </div>
        </section>
    );
};
