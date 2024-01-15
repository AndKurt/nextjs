import Image from "next/image";
import React, { FC } from "react";

import { SocialLink, Text, Title } from "@/components";
import { SOCIAL_ICONS } from "@public";

import { TProps } from "./types";

import cn from "./styles.module.scss";

export const ExpertCard: FC<TProps> = ({
    name,
    image,
    jobTitle,
    instagramLink,
    linkedInLink,
    facebookLink,
}) => {
    return (
        <div className={cn.expertCard}>
            <div className={cn.imgContainer}>
                <Image
                    alt={name}
                    src={image}
                />
            </div>
            <div className={cn.expertDetailsWrapper}>
                <Title
                    size={25}
                    weight='semi-bold'
                >
                    {name}
                </Title>
                <div className={cn.expertDetails}>
                    <Text>{jobTitle}</Text>
                    <div className={cn.socials}>
                        <SocialLink
                            alt='instagram'
                            img={SOCIAL_ICONS.instagram}
                            link={instagramLink}
                        />
                        <SocialLink
                            alt='facebook'
                            img={SOCIAL_ICONS.facebook}
                            link={facebookLink}
                        />
                        <SocialLink
                            alt='linkedIn'
                            img={SOCIAL_ICONS.linkedIn}
                            link={linkedInLink}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
