"use client";
import Link from "next/link";
import React, { FC, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

import { CommonButton } from "@/components/core";
import { TMenuItem } from "@/types";

import { BurgerButton } from "./burger-button";

import cn from "./styles.module.scss";

import clsx from "clsx";

type TProps = {
    options: TMenuItem[];
};

export const MobileMenu: FC<TProps> = ({ options }) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleOpen = () => {
        setOpenMenu(true);
    };
    const handleClose = () => {
        setOpenMenu(false);
    };

    const ref = useOnclickOutside(() => {
        handleClose();
    });

    return (
        <div className={cn.mobileMenu}>
            <BurgerButton
                handleClose={handleClose}
                handleOpen={handleOpen}
                isOpen={openMenu}
            />
            <div
                className={cn.wrapperList}
                ref={ref}
            >
                <ul className={clsx(cn.list, openMenu ? cn.show : cn.hide)}>
                    {options.map(({ name, link }) => (
                        <li key={name}>
                            <Link href={link}>{name}</Link>
                        </li>
                    ))}
                    <li>
                        <CommonButton
                            className={cn.button}
                            link='/contact'
                            sidePadding={20}
                            text='Contact'
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};
