import React, { FC } from "react";

import { Text } from "@/components/core";

import { TProps } from "./types";

import cn from "./styles.module.scss";

export const SectionTitle: FC<TProps> = ({ sectionNumber, title }) => {
    return (
        <Text
            className={cn.sectionTitle}
            color='primary'
            tag='div'
        >
            <div className={cn.stick} />
            <Text
                color='secondary'
                tag='span'
            >
                {sectionNumber}
            </Text>{" "}
            {title}
            <div className={cn.stick} />
        </Text>
    );
};
