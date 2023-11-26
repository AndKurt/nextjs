import Link from "next/link";
import React, { FC } from "react";

import { CommonButton } from "@/components/core";
import { TMenuItem } from "@/types";

import cn from "./styles.module.scss";

type TProps = {
    options: TMenuItem[];
};

export const DesktopMenu: FC<TProps> = ({ options }) => {
    return (
        <ul className={cn.list}>
            {options.map(({ name, link }) => (
                <li key={name}>
                    <Link href={link}>{name}</Link>
                </li>
            ))}
            <CommonButton
                className={cn.button}
                link='/contact'
                sidePadding={61}
                text='Contact'
            />
        </ul>
    );
};
