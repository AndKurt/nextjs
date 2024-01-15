import React from "react";

import { Logo, SocialLink } from "@/components";
import { SOCIAL_LIST } from "@/constants";

import cn from "./styles.module.scss";

export const SocialsContainer = () => {
    return (
        <section className={cn.socialsContainer}>
            <Logo
                className={cn.logo}
                isLink
            />
            <div className={cn.socialsBlock}>
                {SOCIAL_LIST.map(({ img, alt, link }) => (
                    <SocialLink
                        alt={alt}
                        img={img}
                        key={alt}
                        link={link}
                    />
                ))}
            </div>
        </section>
    );
};
