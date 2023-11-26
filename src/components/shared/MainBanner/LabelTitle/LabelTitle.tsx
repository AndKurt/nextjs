import Image from "next/image";
import React, { FC } from "react";

import { Text } from "@/components/core";

import { CommonIcons } from "../../../../../public";

import { IProps } from "./types";

import cn from "./styles.module.scss";

export const LabelTitle: FC<IProps> = ({ labelTitle }) => {
    return (
        <div className={cn.labelTitle}>
            <Image
                alt='label-image'
                src={CommonIcons.home}
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
