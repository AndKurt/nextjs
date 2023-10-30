export type TMenuItem = {
    name: string;
    link: string;
};

type TSocial = {
    img: string;
    alt: string;
    link: string;
};

export type TSocialList = TSocial[];

type TFastLinkGroup = {
    title: string;
    items: TMenuItem[];
};
export type TFastLinks = TFastLinkGroup[];
