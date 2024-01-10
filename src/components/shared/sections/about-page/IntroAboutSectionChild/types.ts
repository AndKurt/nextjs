import { StaticImageData } from "next/image";

export type TContentAboutIntro = {
    img: StaticImageData;
    title: string;
    text: string;
};

export type TProps = {
    content: TContentAboutIntro[];
};
