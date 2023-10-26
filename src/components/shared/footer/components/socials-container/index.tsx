import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Logo } from "@/components";
import { SocialsList } from "@/constants";

import cn from "./styles.module.scss";

export const SocialsContainer = () => {
    return (
        <section className={cn.socialsContainer}>
            <Logo className={cn.logo} />
            <div className={cn.socialsBlock}>
                {SocialsList.map(({ img, alt, link }) => (
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
