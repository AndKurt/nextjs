import { SyntheticEvent } from "react";

import { TColors } from "@/types";

export type IProps = {
    text: string;
    link?: string;
    onClick?: (e?: SyntheticEvent) => void;
    rightAddon?: string;
    color?: TColors;
    sidePadding?: number;
    className?: string;
    type?: "button" | "submit";
};
