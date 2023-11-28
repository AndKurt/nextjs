import { StaticImageData } from "next/image";

export type TProps = {
    image: StaticImageData;
    price: number;
    buttonLink: string;
    title: string;
    address: string;
    beds: number;
    baths: number;
    parking: number;
    square: number;
};
