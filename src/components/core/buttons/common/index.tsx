import Link from "next/link";
import React, { FC } from "react";

import { IProps } from "./types";
import { sesColorClassName } from "./utils";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const CommonButton: FC<IProps> = ({
    text,
    onClick,
    link,
    rightAddon,
    color = "primary",
    sidePadding = 23,
    className,
}) => {
    const colorClassName = sesColorClassName(color);
    const buttonClasses = clsx(colorClassName, cn.commonButton, className);

    const renderButton = () => (
        <button
            className={clsx(!link && buttonClasses)}
            style={{ paddingLeft: `${sidePadding}px`, paddingRight: `${sidePadding}px` }}
            onClick={onClick}
        >
            {text}
            {rightAddon && <div className={cn.rightAddon}>{rightAddon}</div>}
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
