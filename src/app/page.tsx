import { MainBanner, PropertyCard, SectionTitle } from "@/components";
import { PROPERTY_CARDS } from "@/constants/pages/home";

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
            <section>
                <SectionTitle
                    sectionNumber='01'
                    title='Properland intro'
                />
                {PROPERTY_CARDS.map(
                    ({
                        address,
                        baths,
                        beds,
                        buttonLink,
                        image,
                        parking,
                        price,
                        square,
                        title,
                    }) => (
                        <PropertyCard
                            address={address}
                            baths={baths}
                            beds={beds}
                            buttonLink={buttonLink}
                            image={image}
                            key={title}
                            parking={parking}
                            price={price}
                            square={square}
                            title={title}
                        />
                    ),
                )}
            </section>
            <section>Why Choose Our Properties Of Real Estate Industries</section>
            <section>42+ years of helping you find the right Propertys</section>
        </>
    );
}
