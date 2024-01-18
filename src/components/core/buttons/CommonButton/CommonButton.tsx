import Image from "next/image";
import Link from "next/link";
import React, { ButtonHTMLAttributes, FC } from "react";

import { TProps } from "./types";
import { sesColorClassName } from "./utils";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const CommonButton: FC<TProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
    text,
    onClick,
    link,
    rightAddon,
    color = "primary",
    sidePadding = 23,
    className,
    type = "button",
    ...props
}) => {
    const colorClassName = sesColorClassName(color);
    const buttonClasses = clsx(colorClassName, cn.commonButton, className);

    const renderButton = () => (
        <button
            className={clsx(!link && buttonClasses)}
            style={{ paddingLeft: `${sidePadding}px`, paddingRight: `${sidePadding}px` }}
            type={type}
            onClick={onClick}
            {...props}
        >
            {text}
            {rightAddon && (
                <Image
                    alt='addon-img'
                    className={cn.rightAddon}
                    src={rightAddon}
                />
            )}
        </button>
    );

    return link ? (
        <Link
            className={clsx(buttonClasses)}
            href={link}
        >
            {renderButton()}
        </Link>
    ) : (
        renderButton()
    );
};
