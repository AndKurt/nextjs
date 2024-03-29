import React from "react";

import {
    Brands,
    Counter,
    ExpertsSection,
    HouseSection,
    IntroAboutSectionChild,
    MainBanner,
    ProcessSection,
    SliderSection,
    VintroSection,
} from "@/components";
import { HOUSE_SECTION_ABOUT_PAGE } from "@/constants";
import { INTRO_ABOUT_CONTENT } from "@/constants/pages/about/intro-about-content";
import { BANNER_IMAGES } from "@public";

const About = () => {
    const vintroCommonTitle = () => (
        <>
            Buying & Selling Property
            <br />
            In An Easy Way
        </>
    );

    return (
        <>
            <MainBanner
                backgroundImg={BANNER_IMAGES.about}
                isHomePage={false}
                labelTitle='About Properland'
                title='About our real estate'
            />
            <VintroSection
                commonTitle={vintroCommonTitle()}
                imgUrl={BANNER_IMAGES.about_intro}
                sectionNumber='01'
                sectionTitle='VIntro Video'
                text='Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
                '
            >
                <IntroAboutSectionChild content={INTRO_ABOUT_CONTENT} />
            </VintroSection>
            <ProcessSection
                commonTitle='Our Main Focus'
                sectionNumber='02'
                sectionTitle='Process'
            />
            <SliderSection title='What our customers say about us' />
            <HouseSection {...HOUSE_SECTION_ABOUT_PAGE} />
            <Counter isSecondaryBackground />
            <ExpertsSection
                commonTitle='Our Property Team'
                sectionNumber='06'
                sectionTitle='Experts'
            />
            <Brands />
        </>
    );
};

export default About;
