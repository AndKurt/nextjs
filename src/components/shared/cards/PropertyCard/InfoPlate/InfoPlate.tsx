import Image from "next/image";
import React, { FC } from "react";

import { Text } from "@/components/core";
import { TImageType } from "@/types";

import cn from "./styles.module.scss";

type TProps = {
    img: TImageType;
    text: string;
};

export const InfoPlate: FC<TProps> = ({ img, text }) => {
    return (
        <div className={cn.infoPlate}>
            <Image
                alt='icon'
                src={img}
            />
            <div className={cn.stick} />
            <Text
                className={cn.infoText}
                color='content'
            >
                {text}
            </Text>
        </div>
    );
};
