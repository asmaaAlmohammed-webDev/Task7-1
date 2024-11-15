import HeroAboutContact from "../../components/HeroAboutContact/HeroAboutContact";
import NavbarAboutContact from "../../components/NavbarAbout&Contact/NavbarAboutContact";
import Contactsec from "../../components/Contactsec/Contactsec";
import MapComp from "../../components/MapComp/MapComp";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

export default function Contact() {
  return (
    <>
      <header>
        <NavbarAboutContact />
        <HeroAboutContact title="ContactUs" />
      </header>
      <main>
        <Contactsec />
        <MapComp />
      </main>
      <FooterComponent />
    </>
  );
}
