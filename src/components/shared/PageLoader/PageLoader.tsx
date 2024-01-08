import React from "react";

import cn from "./styles.module.scss";

import clsx from "clsx";

export const PageLoader = () => {
    return (
        <div className={cn.pageLoader}>
            <div className={cn.wrapper}>
                <div className={cn.loader}>
                    <div className={clsx(cn.loaderCube, cn.loaderCubeColor)} />
                    <div className={clsx(cn.loaderCube, cn.loaderCubeGlowing)} />
                </div>
            </div>
        </div>
    );
};
