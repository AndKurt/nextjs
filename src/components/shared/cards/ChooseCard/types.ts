import { StaticImageData } from "next/image";

export type TProps = {
    image: StaticImageData;
    title: string;
    text: string[];
    width?: "full" | "short";
    background?: "none" | "top" | "bottom";
};
