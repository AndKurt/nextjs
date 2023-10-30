import { TFastLinks, TMenuItem, TSocialList } from "@/types";

import { socialIcons } from "../../../public/icons/socials";

export const SocialsList: TSocialList = [
    {
        img: socialIcons.instagram,
        alt: "instagram",
        link: "https://instagram.com/",
    },
    {
        img: socialIcons.facebook,
        alt: "facebook",
        link: "https://facebook.com/",
    },
    {
        img: socialIcons.twitter,
        alt: "twitter",
        link: "https://twitter.com/",
    },
    {
        img: socialIcons.linkedIn,
        alt: "linkedIn",
        link: "https://linkedIn.com/",
    },
    {
        img: socialIcons.youtube,
        alt: "youtube",
        link: "https://youtube.com/",
    },
];

const CompanyFastLinks: TMenuItem[] = [
    {
        name: "About",
        link: "/",
    },
    {
        name: "Blog",
        link: "/",
    },
    {
        name: "Properties",
        link: "/",
    },
    {
        name: "Agents",
        link: "/about",
    },
    {
        name: "Services",
        link: "/",
    },
    {
        name: "Contact us",
        link: "/",
    },
];

const ServicesFastLinks: TMenuItem[] = [
    {
        name: "Rent A Home",
        link: "/",
    },
    {
        name: "Sell A Home",
        link: "/",
    },
    {
        name: "Buy A Home",
        link: "/",
    },
    {
        name: "Property Insurance",
        link: "/about",
    },
    {
        name: "Member Support",
        link: "/",
    },
    {
        name: "Experience Agent",
        link: "/",
    },
];

const UtilityFastLinks: TMenuItem[] = [
    {
        name: "Style Guide",
        link: "/",
    },
    {
        name: "Licenses",
        link: "/",
    },
    {
        name: "Changelog",
        link: "/",
    },
    {
        name: "Password",
        link: "/about",
    },
    {
        name: "Not Found",
        link: "/",
    },
    {
        name: "More Template",
        link: "/",
    },
];

export const FastLinks: TFastLinks = [
    {
        title: "Company",
        items: CompanyFastLinks,
    },
    {
        title: "Services",
        items: ServicesFastLinks,
    },
    {
        title: "Utility Pages",
        items: UtilityFastLinks,
    },
];
