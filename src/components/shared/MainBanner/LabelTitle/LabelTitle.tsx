import Image from "next/image";
import React, { FC } from "react";

import { Text } from "@/components";
import { COMMON_ICONS } from "@public";

import { TProps } from "./types";

import cn from "./styles.module.scss";

export const LabelTitle: FC<TProps> = ({ labelTitle }) => {
    return (
        <div className={cn.labelTitle}>
            <Image
                alt='label-image'
                src={COMMON_ICONS.home}
            />
            <Text
                className={cn.title}
                font='kufam'
                tag='span'
                upperCase
            >
                {labelTitle}
            </Text>
        </div>
    );
};
