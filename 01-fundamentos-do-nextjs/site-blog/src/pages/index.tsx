import { FeatureSection } from "@/components/feature-seaction";
import { HeroSection } from "@/components/hero-section";

export default function HomePage() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
      </article>
    </>
  );
}
