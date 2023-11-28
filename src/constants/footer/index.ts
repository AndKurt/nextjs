import { TContacts, TFastLinks, TMenuItem, TSocialList } from "@/types";

import { CONTACT_ICONS, SOCIAL_ICONS } from "../../../public";

export const SOCIAL_LIST: TSocialList = [
    {
        img: SOCIAL_ICONS.instagram,
        alt: "instagram",
        link: "https://instagram.com/",
    },
    {
        img: SOCIAL_ICONS.facebook,
        alt: "facebook",
        link: "https://facebook.com/",
    },
    {
        img: SOCIAL_ICONS.twitter,
        alt: "twitter",
        link: "https://twitter.com/",
    },
    {
        img: SOCIAL_ICONS.linkedIn,
        alt: "linkedIn",
        link: "https://linkedIn.com/",
    },
    {
        img: SOCIAL_ICONS.youtube,
        alt: "youtube",
        link: "https://youtube.com/",
    },
];

const COMPANY_FAST_LINKS: TMenuItem[] = [
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

const SERVICES_FAST_LINKS: TMenuItem[] = [
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

const UTILITY_FAST_LINKS: TMenuItem[] = [
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

export const FAST_LINKS: TFastLinks = [
    {
        title: "Company",
        items: COMPANY_FAST_LINKS,
    },
    {
        title: "Services",
        items: SERVICES_FAST_LINKS,
    },
    {
        title: "Utility Pages",
        items: UTILITY_FAST_LINKS,
    },
];

export const ContactsData: TContacts = [
    {
        name: "329 Queensberry Street, North Melbourne VIC 3051, Australia.",
        link: "https://www.google.com/maps/place/329+Queensberry+St,+North+Melbourne+VIC+3051,+Australia/@-37.8040909,144.9545306,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad65d33b7f9a9d1:0x615ec2ddd8da29d5!8m2!3d-37.8040909!4d144.9571055!16s%2Fg%2F11c21lzhlf?entry=ttu",
        img: CONTACT_ICONS.address,
        alt: "address",
        target: "_blank",
    },
    {
        name: "123 456 7890",
        link: "tel:+123 456 7890",
        img: CONTACT_ICONS.phone,
        alt: "phone",
    },
    {
        name: "support@example.com",
        link: "mailto:+123 456 7890",
        img: CONTACT_ICONS.email,
        alt: "email",
    },
];
