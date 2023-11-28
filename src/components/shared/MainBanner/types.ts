import { StaticImageData } from "next/image";

export type IProps = {
    backgroundImg: StaticImageData;
    labelTitle: string;
    title: string;
    text?: string;
};
