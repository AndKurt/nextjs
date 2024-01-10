import React from "react";

import { MainBanner } from "@/components";
import { BANNER_IMAGES } from "@public";

export const NotFoundBanner = () => {
    return (
        <MainBanner
            backgroundImg={BANNER_IMAGES.error}
            button={{ text: "Go to Home", link: "/" }}
            isErrorPage
            labelTitle='404'
            text='Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum.'
            title='Error'
        />
    );
};
