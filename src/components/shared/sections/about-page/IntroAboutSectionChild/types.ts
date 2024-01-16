import { TImageType } from "@/types";

export type TContentAboutIntro = {
    img: TImageType;
    title: string;
    text: string;
};

export type TProps = {
    content: TContentAboutIntro[];
};
