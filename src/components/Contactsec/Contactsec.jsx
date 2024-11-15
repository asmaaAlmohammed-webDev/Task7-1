import DivCompContact from "../DivCompContact/DivCompContact";
import VideoComp from "../VideoComp/VideoComp";
import BtnComponent from "../Button/BtnComponent";
import "./Contactsec.css";
// import { Container } from "react-bootstrap";

export default function Contactsec() {
  const cards = [
    {
      text1: "Call Us 7/24",
      text2: "+208-555-1122",
      className1: "sty-card1",
      className2: "fa-solid fa-phone",
    },
    {
      text1: "Make a Quote",
      text2: "Infotech@gmail.com",
      className1: "sty-card2",
      className2: "fa-solid fa-envelope",
    },
    {
      text1: "Location",
      text2: "4517 Washington ave",
      className1: "sty-card3",
      className2: "fa-solid fa-location-dot",
    },
  ];
  return (
      <section className="contact-sec">
        <div className="col1 ">
          {cards.map((e, index) => {
            return (
              <DivCompContact
                key={index}
                text1={e.text1}
                text2={e.text2}
                className1={e.className1}
                className2={e.className2}
              />
            );
          })}

          <VideoComp
            source={"https://youtu.be/qZJxwwhx29A"}
            styling={"VideoContactSec"}
          />
        </div>
        <div className="col2 ">
          <h3>Ready To Get Started?</h3>
          <p className="desc text-secondary">
            Lorem ipsum dolor sit consectetur elit. Tempore, dolore, autem
            ducimus minima saepe obcaecati.
          </p>
          <form>
            <div className="inputs mb-3">
              <div className="input">
                <label for="name">Your Name*</label>
                <input type="text" id="name" />
              </div>
              <div className="input">
                <label for="email">Your Email*</label>
                <input type="email" id="email" />
              </div>
            </div>
            <div className="input-msg ">
              <label for="msg">Write message*</label>
              <textarea id="msg"></textarea>
            </div>
          </form>
          <BtnComponent text="Send Message" className="BtnBlue mt-5" />
        </div>
      </section>

  );
}
