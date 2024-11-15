import "./TeammemberSecAbout.css";
import { Container } from "react-bootstrap";
import BlueTitleWithArrow from "./../../components/BlueTitleWithArrow/BlueTitleWithArrow";
import BtnComponent from "../Button/BtnComponent";
import CardTeammemberAbout from "../CardTeammemberAbout/CardTeammemberAbout";
export default function TeammemberSecAbout() {
  const cards = [
    {
      className: "bg-card1",
      name: "Masirul Islam",
      job: "Web Designer",
    },
    {
      className: "bg-card2",
      name: "Jessica Mardol",
      job: "Cyber Expert",
    },
    {
      className: "bg-card3",
      name: "Arnold Hgway",
      job: "Web Expert",
    },
    {
      className: "bg-card4",
      name: "Shkan Haque",
      job: "Data Analyst",
    },
    ];
  return (
    <section className="team-sec-about">
      <Container className="titles-section mt-5">
        <BlueTitleWithArrow text="TEAMMEMBERS" className={"arrowBlue"} />
        <div className="d-flex justify-content-between">
          <h2>Our Dedicated Team Members</h2>
          <BtnComponent text="All Members" className="BtnBlue " />
        </div>
      </Container>
      <div className="row-cards">
        {cards.map((e, index) => {
          return (
            <CardTeammemberAbout
              key={index}
              name={e.name}
              job={e.job}
              className={e.className}
            />
          );
        })}
      </div>
      <div className="brand">
        <p>1k + Brands Trust Us</p>
        <div className="row-images">
          <img
            src="./../../../public/images/images/about (2).jpg"
            alt="about-img"
            className="about-img"
          />
          <img
            src="./../../../public/images/images/about (2).jpg"
            alt="about-img"
            className="about-img"
          />
          <img
            src="./../../../public/images/images/about (2).jpg"
            alt="about-img"
          />
          <img
            src="./../../../public/images/images/about (2).jpg"
            alt="about-img"
            className="about-img"
          />
          <img
            src="./../../../public/images/images/about (2).jpg"
            alt="about-img"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
}
