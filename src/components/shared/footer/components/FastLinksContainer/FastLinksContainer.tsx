import Link from "next/link";
import React from "react";

import { Text, Title } from "@/components/core";
import { FastLinks } from "@/constants";

import cn from "./styles.module.scss";

export const FastLinksContainer = () => {
    return (
        <section className={cn.socialsContainer}>
            {FastLinks.map(({ title, items }) => (
                <div
                    className={cn.linksContainer}
                    key={title}
                >
                    <Title
                        className={cn.title}
                        color='primary'
                        size={25}
                        tag='h4'
                        weight='semi-bold'
                    >
                        {title}
                    </Title>
                    <ul className={cn.list}>
                        {items.map(({ link, name }) => (
                            <li
                                className={cn.item}
                                key={name}
                            >
                                <Link
                                    href={link}
                                    target='_blank'
                                >
                                    <Text>{name}</Text>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};
