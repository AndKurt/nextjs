import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cn from './styles.module.scss';

export const Header = () => {
    return (
        <header className={cn.header}>
            <Link
                href="/"
                className={cn.logo}
            >
                <Image
                    src={''}
                    alt="logo"
                />
                Modsen ProperLand
            </Link>
        </header>
    );
};
