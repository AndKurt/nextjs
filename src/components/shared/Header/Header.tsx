import React from "react";

import { Logo } from "@/components";
import { MENU_LIST } from "@/constants";

import { DesktopMenu, MobileMenu } from "./Menu";

import cn from "./styles.module.scss";

export const Header = () => {
    return (
        <header className={cn.header}>
            <Logo />
            <nav className={cn.navigation}>
                <DesktopMenu options={MENU_LIST} />
                <MobileMenu options={MENU_LIST} />
            </nav>
        </header>
    );
};
