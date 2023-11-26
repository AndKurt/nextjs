import { Kufam, Source_Sans_3 } from "next/font/google";
import React, { FC, PropsWithChildren } from "react";

import { TFont, TFontSize, TFontWeight, TTextColors, TTextTag } from "@/types";

import { setColorClassName, setFontSizeClassName, setFontWeightClassName } from "../utils";

import cn from "../styles.module.scss";

import clsx from "clsx";

type TProps = {
    weight?: TFontWeight;
    color?: TTextColors;
    tag?: TTextTag;
    font?: TFont;
    className?: string;
    size?: TFontSize;
    upperCase?: boolean;
};

const kufam = Kufam({ subsets: ["latin"] });
const sans3 = Source_Sans_3({ subsets: ["latin"] });

export const Text: FC<PropsWithChildren<TProps>> = ({
    children,
    className,
    color = "border",
    tag = "p",
    weight = "thin",
    font = "sans3",
    size = 20,
    upperCase = false,
}) => {
    const TextTag = tag;

    const colorCn = setColorClassName(color);
    const sizeCn = setFontSizeClassName(size);
    const weightCn = setFontWeightClassName(weight);
    const fontCn = font === "kufam" ? kufam.className : sans3.className;

    const classes = clsx(colorCn, sizeCn, weightCn, fontCn, upperCase && cn.upperCase, className);

    return <TextTag className={classes}>{children}</TextTag>;
};
