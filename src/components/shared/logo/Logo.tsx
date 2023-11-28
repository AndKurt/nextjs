import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import logo from "@public/logo.svg";

import cn from "./styles.module.scss";

import clsx from "clsx";

const inter = Inter({ subsets: ["cyrillic"] });

type TProps = {
    isLink?: boolean;
    className?: string;
};

export const Logo: FC<TProps> = ({ isLink = false, className }) => {
    const commonProps = {
        className: clsx(inter.className, cn.logo, className),
    };

    const logoContent = (
        <>
            <div className={cn.logo__img}>
                <Image
                    alt='logo'
                    fill
                    src={logo}
                />
            </div>
            Modsen ProperLand
        </>
    );

    return isLink ? (
        <Link
            href='/'
            {...commonProps}
        >
            {logoContent}
        </Link>
    ) : (
        <div {...commonProps}>{logoContent}</div>
    );
};
