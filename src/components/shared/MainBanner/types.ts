import { StaticImageData } from "next/image";

export type TProps = {
    backgroundImg: StaticImageData;
    labelTitle: string;
    title: string;
    text?: string;
    button?: TButton;
    isHomePage?: boolean;
    isErrorPage?: boolean;
};

type TButton = {
    text: string;
    link: string;
};
