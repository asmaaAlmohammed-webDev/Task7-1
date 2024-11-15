import HeroHomeComp from "../../components/HeroHome/HeroHomeComp";
import PricingSectionHome from "../../components/PricingSectionHome/PricingSectionHome";
import ServiceSectionHome from "../../components/ServiceSectionHome/ServiceSectionHome";
import TestimonilsSection from "../../components/TestimonilsSection/TestimonilsSection";
import NavbarHome from "../../components/NavbarHome/NavbarHome";
import RowImages from "../../components/RowImages/RowImages";
import FeaturedSecionHome from "../../components/FeaturedSecionHome/FeaturedSecionHome"
import FooterComponent from "../../components/FooterComponent/FooterComponent";
export default function Home() {
  return (
    <>
      <header>
        <NavbarHome />
        <HeroHomeComp />
      </header>
      <main>
        <RowImages />
        <ServiceSectionHome />
        <PricingSectionHome />
        <TestimonilsSection />
        <FeaturedSecionHome />
      </main>
      <FooterComponent/>
    </>
  );
}
