import { TVideoPlayerProps } from "@/components";
import { TImageType } from "@/types";

export type TProps = {
    invertedBackground?: boolean;
    firstSection: {
        image: { link: TImageType; alt: string };
        textContent: TTextContent;
    };
    secondSection: {
        textContent: TTextContent;
        subTextContent: TSubTextContent;
        video: TVideoPlayerProps;
    };
};

export type TTextContent = {
    title: string;
    text: string;
};

export type TSubTextContent = TTextContent[];
