import NavbarAboutContact from "../../components/NavbarAbout&Contact/NavbarAboutContact";
import HeroAboutContact from "../../components/HeroAboutContact/HeroAboutContact";
import RowServicesAbout from "../../components/RowServicesAbout/RowServicesAbout";
import TeammemberSecAbout from "../../components/TeammemberSecAbout/TeammemberSecAbout.";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
export default function About() {
  return (
    <>
      <header>
        <NavbarAboutContact />
        <HeroAboutContact title="AboutUs" />
      </header>
      <main>
        <RowServicesAbout />
        <TeammemberSecAbout />
      </main>
      <FooterComponent />
    </>
  );
}
