import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { TProps } from "./types";

export const SocialLink: FC<TProps> = ({ link, img, alt }) => {
    return (
        <Link
            href={link}
            key={alt}
            target='_blank'
        >
            <Image
                alt={alt}
                src={img}
            />
        </Link>
    );
};
