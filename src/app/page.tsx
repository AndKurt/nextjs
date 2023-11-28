import { FeaturedProperties, MainBanner } from "@/components";

import { BannerImages } from "../../public";

export default function Home() {
    return (
        <>
            <MainBanner
                backgroundImg={BannerImages.home}
                labelTitle='Real Estate Agency'
                text='Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.'
                title='Find the perfect place to Live with your family'
            />
            <section>Buying & Selling Property In An Easy Way</section>
            <FeaturedProperties />
            <section>Why Choose Our Properties Of Real Estate Industries</section>
            <section>42+ years of helping you find the right Propertys</section>
        </>
    );
}
