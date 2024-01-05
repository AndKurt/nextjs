import Image from "next/image";
import Link from "next/link";

import { Text, Title } from "@/components/core";
import { ContactsData } from "@/constants";

import cn from "./styles.module.scss";

export const ContactsContainer = () => {
    return (
        <section className={cn.contactsContainer}>
            <Title
                className={cn.title}
                color='primary'
                size={25}
                tag='h4'
                weight='semi-bold'
            >
                Contact us
            </Title>
            <address>
                <ul>
                    {ContactsData.map(({ alt, img, link, name, target }) => (
                        <li key={name}>
                            <Link
                                className={cn.link}
                                href={link}
                                target={target}
                            >
                                <Image
                                    alt={alt}
                                    src={img}
                                />
                                <Text color='primary'>{name}</Text>
                            </Link>
                        </li>
                    ))}
                </ul>
            </address>
        </section>
    );
};
//123 456 7890
//support@example.com
