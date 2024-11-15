import DivFooterAbout from "../DivFooterAbout/DivFooterAbout";
import "./FooterChildAbout.css";

export default function FooterChildAbout() {
      const cards = [
        {
          text1: "Call Us 7/24",
          text2: "+208-555-1122",
          className1: "styl-card1",
          className2: "fa-solid fa-phone",
        },
        {
          text1: "Make a Quote",
          text2: "Infotech@gmail.com",
          className1: "styl-card2",
          className2: "fa-solid fa-envelope",
        },
        {
          text1: "Location",
          text2: "4517 Washington ave",
          className1: "styl-card3",
          className2: "fa-solid fa-location-dot",
        },
      ];
  return (
    <div className="row-child ">
      {cards.map((e, index) => {
        return (
          <DivFooterAbout
            key={index}
            text1={e.text1}
            text2={e.text2}
            className1={e.className1}
            className2={e.className2}
          />
        );
      })}
    </div>
  );
}
