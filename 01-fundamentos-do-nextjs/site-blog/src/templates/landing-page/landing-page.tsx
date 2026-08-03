import { CustomerStorySection } from "./sections/customer-story-section";
import { FeatureSection } from "./sections/feature-seaction";
import { HeroSection } from "./sections/hero-section";
import { SupportSection } from "./sections/support-section";


export function LandingPage() {
    return (
        <article className="flex flex-col">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
        </article>
    )
}