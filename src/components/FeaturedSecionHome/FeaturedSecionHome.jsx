import "./FeaturedSecionHome.css";
import BlueTitleWithArrow from "./../../components/BlueTitleWithArrow/BlueTitleWithArrow";
import IconsArrowRightLeft from "./../../components/IconsArrowRight&Left/IconsArrowRightLeft";
import CardFeaturedHome from "../CardFeaturedHome/CardFeaturedHome";
export default function FeaturedSecionHome() {

  const cards = [
    {
      img: "./../../../public/images/images/blogThumb1_2.webp",
      desc: "Uncatgorized",
      date: "MARCH14,2024",
      title: "Best And Fatest Data Server Ever",
      name: "Admin",
      job: "Co,founder",
      img2: "./../../../public/images/images/blogProfile1_1.webp",
      className: "card-feau2",
    },
    {
      img: "./../../../public/images/images/blogThumb1_3.webp",
      desc: "Technology",
      date: "MARCH29,2024",
      title: "Life won't One Beast Air Over Above All",
      name: "Admin",
      job: "Co,founder",
      img2: "./../../../public/images/images/blogProfile1_2.webp",
      className: "card-feau",
    },
    {
      img: "./../../../public/images/images/blogThumb1_1.webp",
      desc: "Shared Hosting ",
      date: "MARCH24,2024",
      title: "Attentive Was Born in 2015Help Seals Teams",
      name: "Admin",
      job: "Co,founder",
      img2: "./../../../public/images/images/blogProfile1_3.webp",
      className: "card-feau",
    },
  ];
  return (
    <section className="featured-sec-home">
    
        <div className="titles-section mt-5">
          <BlueTitleWithArrow text="Blog & News" className={"arrowBlue"} />
          <div className="d-md-flex justify-content-between">
            <h2>Featured News And Insights</h2>
            <IconsArrowRightLeft />
          </div>
        </div>
        <div className="row-cards ">
          {cards.map((e, index) => {
            return (
              <CardFeaturedHome
                key={index}
                img={e.img}
                desc={e.desc}
                date={e.date}
                title={e.title}
                name={e.name}
                job={e.job}
                img2={e.img2}
                className={e.className}
              />
            );
          })}
        </div>
    </section>
  );
}
