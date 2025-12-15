import { CaseStudies } from "./components/case-studies";
import GameCardsSection from "./components/game-brands";
import HeroSection from "./components/hero-section";
import SecondSection from "./components/second-section";
import { ServicesCarousel } from "./components/services-carousel";
import StickyCards from "./components/sticky-cards";
import PartnersSection from "./components/common/partners-section";
import HOMEGSP from "./components/home-gsp";
import MapSection from "./components/map-section";
import ContactSection from "./components/contact-section";
import NewsletterSection from "./components/newsletter";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <SecondSection />
      <ServicesCarousel />
      <PartnersSection />
      <HOMEGSP />
      <GameCardsSection />
      <CaseStudies />
      <StickyCards />
      <MapSection />
      <ContactSection />
      <NewsletterSection />
    </div>
  );
}
