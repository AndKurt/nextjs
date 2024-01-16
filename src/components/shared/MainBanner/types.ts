import { TImageType } from "@/types";

export type TProps = {
    backgroundImg: TImageType;
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
