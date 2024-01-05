import Image from "next/image";
import React, { FC } from "react";

import { Text } from "@/components/core";
import chainImage from "@public/chain.svg";
import starImage from "@public/star.svg";

type TProps = {
    text: string | string[];
};

import cn from "./styles.module.scss";

export const SliderReviewText: FC<TProps> = ({ text }) => {
    const replaceTokens = (str: string) => {
        const parts = str.split(/(\{star\}|\{chain\}|\{boldSecondary\}|\{boldPrimary\})/);

        let boldSecondary = false;
        let boldPrimary = false;

        const result = parts.map((part, index) => {
            if (part === "{star}") {
                return (
                    <Image
                        alt='Star'
                        key={String(chainImage) + index}
                        src={starImage}
                    />
                );
            } else if (part === "{chain}") {
                return (
                    <Image
                        alt='Chain'
                        key={String(chainImage) + index}
                        src={chainImage}
                    />
                );
            } else if (part === "{boldSecondary}") {
                boldSecondary = !boldSecondary;

                return null;
            } else if (part === "{boldPrimary}") {
                boldPrimary = !boldPrimary;

                return null;
            } else if (boldSecondary || boldPrimary) {
                return (
                    <Text
                        color={boldPrimary ? "primary" : "link"}
                        key={part + index}
                        tag='span'
                        weight='bold'
                    >
                        {` ${part} `}
                    </Text>
                );
            }

            return (
                <Text
                    key={part + index}
                    tag='span'
                >
                    {part}
                </Text>
            );
        });

        return result.filter(item => item !== null);
    };

    if (typeof text === "string") {
        const formattedText = replaceTokens(text);

        return (
            <Text
                className={cn.sliderReviewText}
                tag='div'
            >
                {formattedText}
            </Text>
        );
    }

    if (Array.isArray(text)) {
        const mappedText = text.map(item => replaceTokens(item));

        return (
            <>
                {mappedText.map((item, index) => (
                    <div
                        className={cn.sliderReviewTextContainer}
                        key={String(item) + index}
                    >
                        {item}
                    </div>
                ))}
            </>
        );
    }

    return null;
};
