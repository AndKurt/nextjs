"use client";

import React, { FC, PropsWithChildren } from "react";

import { Toaster } from "sonner";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
            <Toaster
                closeButton
                expand
                position='top-right'
                richColors
            />
        </>
    );
};
