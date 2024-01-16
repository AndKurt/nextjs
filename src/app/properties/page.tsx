import React from "react";

import {
    Counter,
    HouseSection,
    IntroPropertySectionChild,
    MainBanner,
    ProcessSection,
    Services,
    VintroSection,
} from "@/components";
import { INTRO_PROPERTIES_TEXT_CONTENT } from "@/constants";
import { HOUSE_SECTION_PROPERTY_PAGE } from "@/constants/pages/properties";
import { BANNER_IMAGES } from "@public";

const Properties = () => {
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
                backgroundImg={BANNER_IMAGES.service}
                isHomePage={false}
                labelTitle='Services'
                title="We're Leading Land Market"
            />
            <VintroSection
                commonTitle={vintroCommonTitle()}
                imgUrl={BANNER_IMAGES.service_intro}
                sectionNumber='01'
                sectionTitle='VIntro Video'
                text={[
                    "Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
                    "We've gathered som beautiful images of the place here. However, if you would like to see images of something specific please get in touch and we'll see what we can do.",
                ]}
            >
                <IntroPropertySectionChild contentArr={INTRO_PROPERTIES_TEXT_CONTENT} />
            </VintroSection>
            <ProcessSection
                commonTitle='Our Main Focus'
                sectionNumber='02'
                sectionTitle='Process'
            />
            <Services
                commonTitle='See How Can Help'
                sectionNumber='03'
                sectionTitle='Services'
            />
            <HouseSection {...HOUSE_SECTION_PROPERTY_PAGE} />
            <Counter isSecondaryBackground />
        </>
    );
};

export default Properties;
