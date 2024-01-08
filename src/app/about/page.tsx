import React from "react";

import { Brands, Counter, MainBanner, ProcessSection, SliderSection } from "@/components";
import { BannerImages } from "@public";

const About = () => {
    return (
        <>
            <MainBanner
                backgroundImg={BannerImages.about}
                isHomePage={false}
                labelTitle='About Properland'
                title='About our real estate'
            />
            <ProcessSection
                commonTitle='Our Main Focus'
                sectionNumber='02'
                sectionTitle='Process'
            />
            <SliderSection title='What our customers say about us' />
            <Counter isSecondaryBackground />
            <Brands />
        </>
    );
};

export default About;
