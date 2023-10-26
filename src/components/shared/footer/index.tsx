import React from "react";

import { Copyright, SocialsContainer, SubscribeContainer } from "./components";

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
                <div>
                    <section className={cn.fastLinksContainer}></section>
                    <section className={cn.contactContainer}></section>
                </div>
                <Copyright/>
            </div>
        </footer>
    );
};
