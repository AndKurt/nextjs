import { Kufam, Source_Sans_3 } from "next/font/google";
import React, { FC, PropsWithChildren } from "react";

import { TColors, TFont, TFontSize, TFontWeight, TTitleTag } from "@/types";

import { setColorClassName, setFontSizeClassName, setFontWeightClassName } from "../utils";

import cn from "../styles.module.scss";

import clsx from "clsx";

type TProps = {
    weight?: TFontWeight;
    color?: TColors;
    tag?: TTitleTag;
    size?: TFontSize;
    className?: string;
    font?: TFont;
    align?: "center" | "left";
};

const kufam = Kufam({ subsets: ["latin"] });
const sans3 = Source_Sans_3({ subsets: ["latin"] });

export const Title: FC<PropsWithChildren<TProps>> = ({
    children,
    weight = "bold",
    color = "primary",
    tag = "div",
    size = 35,
    className,
    font = "kufam",
    align = "left",
}) => {
    const TitleTag = tag;

    const colorCn = setColorClassName(color);
    const sizeCn = setFontSizeClassName(size);
    const weightCn = setFontWeightClassName(weight);
    const fontCn = font === "kufam" ? kufam.className : sans3.className;
    const alignCn = align === "center" ? cn.alignCenter : cn.alignLeft;

    const classes = clsx(colorCn, sizeCn, weightCn, fontCn, alignCn, className);

    return <TitleTag className={classes}>{children}</TitleTag>;
};
