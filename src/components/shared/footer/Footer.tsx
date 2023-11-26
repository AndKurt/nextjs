import React from "react";

import {
    ContactsContainer,
    Copyright,
    FastLinksContainer,
    SocialsContainer,
    SubscribeContainer,
} from "./components";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const Footer = () => {
    return (
        <footer className={cn.footer}>
            <div className={cn.wrapper}>
                <div className={clsx(cn.section, cn.firstSection)}>
                    <SocialsContainer />
                    <SubscribeContainer />
                </div>
                <div className={clsx(cn.section, cn.secondSection)}>
                    <FastLinksContainer />
                    <ContactsContainer />
                </div>
                <Copyright />
            </div>
        </footer>
    );
};
