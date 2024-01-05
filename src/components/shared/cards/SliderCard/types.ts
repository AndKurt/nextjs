import { StaticImageData } from "next/image";

export type TProps = {
    text: string | string[];
    customerName: string;
    customerPhoto: StaticImageData;
};
