import { StaticImageData } from "next/image";

export type TProps = {
    backgroundImg: StaticImageData;
    labelTitle: string;
    title: string;
    text?: string;
    button?: TButton;
    isErrorPage?: boolean;
};

type TButton = {
    text: string;
    link: string;
};
