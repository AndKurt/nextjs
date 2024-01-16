import { THouseSection } from "@/components";
import introVideo from "@public/video/intro.mp4";

export const HOUSE_SECTION_ABOUT_PAGE: THouseSection = {
    firstSection: {
        image: {
            alt: "house_img",
            link: "",
        },
        textContent: {
            title: "Learn More About Who We Are in Real Estate",
            text: "Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore.",
        },
    },
    secondSection: {
        textContent: {
            title: "We're reinventing the space",
            text: "Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolore.",
        },
        subTextContent: [
            {
                title: "Full Services",
                text: "Interactively procrastinate high-payoff content without backward-compatible data.",
            },
            {
                title: "Safe Investments",
                text: "Interactively procrastinate high-payoff content without backward-compatible data.",
            },
        ],
        video: {
            poster: "/video/house-poster.png",
            videoLink: introVideo,
        },
    },
};
