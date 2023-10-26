import { TColors } from "@/types";

import cn from "./styles.module.scss";

export const sesColorClassName = (color: TColors) => {
    switch (color) {
        case "primary":
            return cn.primary;
        case "secondary":
            return cn.secondary;
        case "white":
            return cn.white;
        default:
            return cn.white;
    }
};
