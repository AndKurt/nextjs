import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Logo } from "@/components";
import { SOCIAL_LIST } from "@/constants";

import cn from "./styles.module.scss";

export const SocialsContainer = () => {
    return (
        <section className={cn.socialsContainer}>
            <Logo className={cn.logo} />
            <div className={cn.socialsBlock}>
                {SOCIAL_LIST.map(({ img, alt, link }) => (
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
                ))}
            </div>
        </section>
    );
};
