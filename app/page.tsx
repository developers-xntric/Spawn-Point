import { CaseStudies } from "./components/case-studies";
import GameCardsSection from "./components/game-brands";
import HeroSection from "./components/hero-section";
import SecondSection from "./components/second-section";
import { ServicesCarousel } from "./components/services-carousel";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <SecondSection />
      <ServicesCarousel />
      <GameCardsSection />
      <CaseStudies />

    </>
  );
}
