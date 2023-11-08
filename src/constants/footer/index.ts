import { TContacts, TFastLinks, TMenuItem, TSocialList } from "@/types";

import { ContactIcons, socialIcons } from "../../../public/icons";

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

export const ContactsData: TContacts = [
    {
        name: "329 Queensberry Street, North Melbourne VIC 3051, Australia.",
        link: "https://www.google.com/maps/place/329+Queensberry+St,+North+Melbourne+VIC+3051,+Australia/@-37.8040909,144.9545306,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad65d33b7f9a9d1:0x615ec2ddd8da29d5!8m2!3d-37.8040909!4d144.9571055!16s%2Fg%2F11c21lzhlf?entry=ttu",
        img: ContactIcons.address,
        alt: "address",
        target: "_blank",
    },
    {
        name: "123 456 7890",
        link: "tel:+123 456 7890",
        img: ContactIcons.phone,
        alt: "phone",
    },
    {
        name: "support@example.com",
        link: "mailto:+123 456 7890",
        img: ContactIcons.email,
        alt: "email",
    },
];
