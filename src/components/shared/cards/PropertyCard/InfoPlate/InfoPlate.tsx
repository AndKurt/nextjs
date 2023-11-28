import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

import { Text } from "@/components/core";

type IProps = {
    img: StaticImageData;
    text: string;
};

import cn from "./styles.module.scss";

export const InfoPlate: FC<IProps> = ({ img, text }) => {
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
