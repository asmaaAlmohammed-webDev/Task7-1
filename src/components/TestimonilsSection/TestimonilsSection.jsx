import "./TestimonilsSection.css";
import BlueTitleWithArrow from "./../../components/BlueTitleWithArrow/BlueTitleWithArrow";
import CardClientReviewHome from "./../../components/CardClientReviewHome/CardClientReviewHome";
 import DivContactHome from "./../../components/DivContactHome/DivContactHome";
export default function TestimonilsSection() {
  const cards = [
    {
      image: "./../../../public/images/images/testiThumb3_1.webp",
      name: "John Deo",
      desc: "Lorem ipsum dolor sit adipisicing elit Molestiae eligendi voluptatemsed laudantium beatae.",
      job: "Web Desighner",
      className: "card-client-sty1",
    },

    {
      image: "./../../../public/images/images/testiThumb3_2.webp",
      name: "Ashely Smith",
      desc: "Lorem ipsum dolor sit adipisicing elit. Molestiae eligendi voluptatem sed laudantium beatae.",
      job: "Tech Manager",
      className: "card-client-sty2",
    },
    {
      image: "./../../../public/images/images/testiThumb3_3.webp",
      name: "Theresa Webb",
      desc: " Lorem ipsum dolor sit adipisicing elit. Molestiae eligendi voluptatem sed laudantium beatae.",
      job: "Markting Manager ",
      className: "card-client-sty3",
    },
  ];
  return (
    <section className="test-monoils-sec">
      <div className="title-client-sec">
        <BlueTitleWithArrow text="TESTIMONILS" className={"arrowBlue"} />
        <h2>Our Latest Client Feedback</h2>
      </div>
      <div className="row-client-cards">
        {cards.map((e, index) => {
          return (
            <CardClientReviewHome
              key={index}
              image={e.image}
              name={e.name}
              desc={e.desc}
              job={e.job}
              className={e.className}
            />
          );
        })}
      </div>
      <DivContactHome />
      <div className="to-move">
        <div></div>
      </div>
    </section>
  );
}
