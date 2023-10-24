import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../../public/logo.svg";

import cn from "./styles.module.scss";

import clsx from "clsx";

const inter = Inter({ subsets: ["cyrillic"] });

export const Logo = () => (
    <Link
        className={clsx(inter.className, cn.logo)}
        href='/'
    >
        <div className={cn.logo__img}>
            <Image
                alt='logo'
                fill
                src={logo}
            />
        </div>
        Modsen ProperLand
    </Link>
);
