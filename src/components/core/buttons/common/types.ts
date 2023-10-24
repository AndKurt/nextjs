import { ReactNode, SyntheticEvent } from "react";

export type IProps = {
    text: string;
    link?: string;
    onClick?: (e?: SyntheticEvent) => void;
    rightAddon?: ReactNode;
    color?: TColors;
    sidePadding?: number;
    className?: string;
};
export type TColors = "white" | "primary" | "secondary";
