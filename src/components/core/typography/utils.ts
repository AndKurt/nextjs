import { TFontSize, TFontWeight, TTextColors } from "@/types";

import cn from "./styles.module.scss";

export const setColorClassName = (color: TTextColors) => {
    switch (color) {
        case "white":
            return cn.white;
        case "primary":
            return cn.primary;
        case "content":
            return cn.content;
        case "secondary":
            return cn.secondary;
        case "link":
            return cn.link;
        case "border":
            return cn.border;
        default:
            return cn.primary;
    }
};

export const setFontSizeClassName = (size: TFontSize) => {
    switch (size) {
        case 278:
            return cn.size278;
        case 65:
            return cn.size65;
        case 45:
            return cn.size45;
        case 40:
            return cn.size40;
        case 35:
            return cn.size35;
        case 30:
            return cn.size30;
        case 25:
            return cn.size25;
        case 20:
            return cn.size20;
        default:
            return cn.size45;
    }
};

export const setFontWeightClassName = (weight: TFontWeight) => {
    switch (weight) {
        case "bold":
            return cn.bold;
        case "semi-bold":
            return cn.semiBold;
        case "thin":
            return cn.thin;
        default:
            return cn.bold;
    }
};
