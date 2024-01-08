import {
    AboutUs,
    Blog,
    Counter,
    FeaturedProperties,
    Intro,
    MainBanner,
    Neighborhoods,
    Services,
    SliderSection,
    WhyChoose,
} from "@/components";
import { BannerImages } from "@public";

export default function Home() {
    const IntroTitle = () => (
        <>
            Buying & Selling Property
            <br />
            In An Easy Way
        </>
    );

    return (
        <>
            <MainBanner
                backgroundImg={BannerImages.home}
                button={{ text: "Explore Property", link: "/" }}
                labelTitle='Real Estate Agency'
                text='Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.'
                title='Find the perfect place to Live with your family'
            />
            <Intro
                commonTitle={IntroTitle()}
                sectionNumber='01'
                sectionTitle='Properland intro'
            />
            <FeaturedProperties
                commonTitle='Properties for sale in your favorite area'
                sectionNumber='02'
                sectionTitle='Featured properties'
            />
            <WhyChoose
                commonTitle='Why Choose Our Properties Of Real Estate Industries'
                sectionNumber='03'
                sectionTitle='Why choose'
            />
            <AboutUs
                commonTitle='42+ years of helping you find the right Propertys'
                sectionNumber='04'
                sectionTitle='About us'
            />
            <Services
                commonTitle='See How Can Help'
                sectionNumber='05'
                sectionTitle='Services'
            />
            <SliderSection title='What our customers say about us' />
            <Counter />
            <Neighborhoods
                commonTitle='Discover The Neighborhoods'
                sectionNumber='06'
                sectionTitle='Neighborhoods'
            />
            <Blog
                commonTitle='Discover The Neighborhoods'
                sectionNumber='07'
                sectionTitle='Blog'
            />
        </>
    );
}
