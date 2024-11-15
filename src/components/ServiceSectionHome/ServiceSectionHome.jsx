import "./ServiceSectionHome.css";
import BlueTitleWithArrow from "./../../components/BlueTitleWithArrow/BlueTitleWithArrow";
import CardServiceHome from "./../../components/CardServiceHome/CardServiceHome";
import Card2ServiceHome from "./../../components/Card2ServiceHome/Card2ServiceHome";
import IconsArrowRightLeft from "./../../components/IconsArrowRight&Left/IconsArrowRightLeft";
import { Container } from "react-bootstrap";
export default function ServiceSectionHome() {
  const cards = [
    {
      image: "./../../../public/images/images/serviceIcon1_2.svg",
      title: "Woo Commerce",
      desc: "Collecboratively formulate principle capital.progressively evolve user revolutionary hosting service.",
      className: "card-sty1",
    },
    {
      image: "./../../../public/images/images/serviceIcon1_3.svg",
      title: "CRM solutions",
      desc: "Collecboratively formulate principle capital.progressively evolve user revolutionary hosting service.",
      className: "card-sty2",
    },
    {
      image: "./../../../public/images/images/serviceIcon1_4.svg",
      title: "Web Design",
      desc: "Collecboratively formulate principle capital.progressively evolve user revolutionary hosting service.",
      className: "card-sty3",
    },
    {
      image: "./../../../public/images/images/serviceIcon1_1.svg",
      title: "Data Guard Sentinel",
      desc: "Collecboratively formulate principle capital.progressively evolve user revolutionary hosting service.",
      className: "card-sty4",
    },
  ];
  const cards2 = [
    {
      num: "1",
      title: "Requierment",
      desc: "There are many variations of passages of Lorem ipsum of available , but the majority have suffered.",
      className: "card2-sty1",
    },
    {
      num: "2",
      title: "UI/UX Design",
      desc: "There are many variations of passages of Lorem ipsum of available , but the majority have suffered.",
      className: "card2-sty2",
    },
    {
      num: "3",
      title: "Prototype",
      desc: "There are many variations of passages of Lorem ipsum of available , but the majority have suffered.",
      className: "card2-sty3",
    },
    {
      num: "4",
      title: "Development",
      desc: "There are many variations of passages of Lorem ipsum of available , but the majority have suffered.",
      className: "card2-sty4",
    },
  ];
  return (
    <section className="service-section-home ">
      <Container className="titles-section mt-5">
        <BlueTitleWithArrow text="OUR SERVICES" className={"arrowBlue"} />
        <div className="d-flex justify-content-between">
          <h2>Elevating Businesses With IT Ingenuity</h2>
          <IconsArrowRightLeft />
        </div>
      </Container>
      <div className="row-cards">
        {cards.map((e, index) => {
          return (
            <CardServiceHome
              key={index}
              image={e.image}
              title={e.title}
              desc={e.desc}
              className={e.className}
            />
          );
        })}
      </div>

      <div className="row-cards2">
        {cards2.map((e, index) => {
          return (
            <Card2ServiceHome
              key={index}
              num={e.num}
              title={e.title}
              desc={e.desc}
              className={e.className}
            />
          );
        })}
        <video
          src="https://youtu.be/qZJxwwhx29A"
          muted
          controls
          className="videoServiceHome"
        ></video>
      </div>
    </section>
  );
}
