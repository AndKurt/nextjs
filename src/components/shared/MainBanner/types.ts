import { StaticImageData } from "next/image";

export type TProps = {
    backgroundImg: StaticImageData;
    labelTitle: string;
    title: string;
    text?: string;
};
