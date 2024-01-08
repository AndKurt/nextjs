import React, { FC } from "react";

import { Text, Title } from "@/components/core";

import { TProps } from "./types";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const ProcessCard: FC<TProps> = ({ id, text, title }) => {
    const setBackgroundClassName = (id: number) => {
        switch (true) {
            case id % 2 === 0:
                return cn.doubleLineBg;
            case id % 3 === 0:
                return cn.tripleLineBg;
            default:
                return cn.singleLineBg;
        }
    };

    return (
        <div className={clsx(cn.processCard, setBackgroundClassName(id))}>
            <div className={cn.number}>
                <Title color='white'>{id > 9 ? id : `0${id}`}</Title>
            </div>
            <Title
                className={cn.title}
                color='primary'
                size={25}
            >
                {title}
            </Title>
            <Text>{text}</Text>
        </div>
    );
};
