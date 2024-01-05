"use client";
import React, { FC, SyntheticEvent } from "react";

import cn from "./styles.module.scss";

type TProps = {
    isOpen: boolean;
    handleOpen: (e?: SyntheticEvent) => void;
    handleClose: (e?: SyntheticEvent) => void;
};

export const BurgerButton: FC<TProps> = ({ isOpen, handleOpen, handleClose }) => {
    const buttonClassName = isOpen ? cn.burgerButtonClose : cn.burgerButton;
    const clickHandler = isOpen ? handleClose : handleOpen;
    const numberOfSpans = isOpen ? 2 : 3;

    return (
        <div
            className={buttonClassName}
            onClick={clickHandler}
        >
            {[...Array(numberOfSpans)].map((_, index) => (
                <span key={index} />
            ))}
        </div>
    );
};
