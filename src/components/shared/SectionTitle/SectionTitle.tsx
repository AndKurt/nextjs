import React, { FC } from "react";

import { Text } from "@/components/core";

import { TProps } from "./types";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const SectionTitle: FC<TProps> = ({ sectionNumber, title, className }) => {
    return (
        <Text
            className={clsx(cn.sectionTitle, className)}
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
