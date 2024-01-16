import { TImageType } from "@/types";

export type TProps = {
    image: TImageType;
    price: number;
    buttonLink: string;
    title: string;
    address: string;
    beds: number;
    baths: number;
    parking: number;
    square: number;
};
