import React from "react";

import { Logo } from "@/components";
import { MenuList } from "@/constants";

import { DesktopMenu, MobileMenu } from "./Menu";

import cn from "./styles.module.scss";

export const Header = () => {
    return (
        <header className={cn.header}>
            <Logo />
            <nav className={cn.navigation}>
                <DesktopMenu options={MenuList} />
                <MobileMenu options={MenuList} />
            </nav>
        </header>
    );
};
