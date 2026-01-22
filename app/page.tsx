import { CaseStudies } from "./components/case-studies";
import GameCardsSection from "./components/game-brands";
import Hero from "./components/hero-new";
// import SecondSection from "./components/second-section";
import { ServicesCarousel } from "./components/services-carousel";
import StickyCards from "./components/sticky-cards";
import PartnersSection from "./components/common/partners-section";
import HOMEGSP from "./components/home-gsp";
import MapSection from "./components/map-section";
import ContactSection from "./components/contact-section";
import NewsletterSection from "./components/newsletter";
import SecondSection from "./components/second-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In-Game Marketing & Brand Activation Agency | Spawn Point",
  description:
    "Spawn Point Studio is a premier in-game marketing and brand activation agency creating immersive experiences that connect global brands with modern audiences.",
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <SecondSection />
      <HOMEGSP />
      <ServicesCarousel />
      <PartnersSection />
      <GameCardsSection />
      <CaseStudies isabout={false} />
      <StickyCards />
      <MapSection />
      <ContactSection />
      <NewsletterSection />
    </div>
  );
}
