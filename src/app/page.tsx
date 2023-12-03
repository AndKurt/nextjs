import {
    AboutUs,
    Blog,
    Counter,
    FeaturedProperties,
    MainBanner,
    Neighborhoods,
    Services,
    WhyChoose,
} from "@/components";
import { BannerImages } from "@public";

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
            <WhyChoose />
            <AboutUs />
            <Services />
            <Counter />
            <Neighborhoods />
            <Blog />
        </>
    );
}
