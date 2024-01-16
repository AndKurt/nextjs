import { TImageType } from "@/types";

export type TProps = {
    image: TImageType;
    title: string;
    text: string[];
    width?: "full" | "short";
    background?: "none" | "top" | "bottom";
};
