import "./PricingSectionHome.css";
import BlueTitleWithArrow from "./../../components/BlueTitleWithArrow/BlueTitleWithArrow";
import CardPricingHome from "./../../components/CardPricingHome/CardPricingHome";
export default function PricingSectionHome() {
  const cards = [
    {
      title: "Regular plans",
      price: "$49",
      duration: "month",
      image: "./../../../public/images/images/pricingIcon1_1.svg",
      className: "card-pric",
      styBtn: "BtnPric",
    },
    {
      title: "Regular plans",
      price: "$49",
      duration: "month",
      image: "./../../../public/images/images/pricingIcon1_1.svg",
      className: "card-pric2",
      styBtn: "BtnPric2",
    },
    {
      title: "Regular plans",
      price: "$49",
      duration: "month",
      image: "./../../../public/images/images/pricingIcon1_1.svg",
      className: "card-pric",
      styBtn: "BtnPric",
    },
  ];
  return (
    <section className="pricing-home">
      <div className="title-sec">
        <BlueTitleWithArrow text="OUR PRICING" className={"arrowBlue"} />
        <h2 className="text-center">Our Awesome Pricing Plans</h2>
        <div className="buttons ">
          <button className="btn1">
            <button className="btn2">Monthly</button>
            Yearly
          </button>
          <img
            src="./../../../public/images/images/pricingIcon1_2.svg "
            alt="pricingIcon1_2"
          />
          <p>Save 25%</p>
        </div>
      </div>
      <div className="row-cards">
        {cards.map((e, index) => {
          return (
            <CardPricingHome
              key={index}
              title={e.title}
              price={e.price}
              duration={e.duration}
              image={e.image}
              className={e.className}
              styBtn={e.styBtn}
            />
          );
        })}
        <img
          src="./../../../public/images/images/pricingShape1_1.webp "
          alt="pricingShape1_1"
          className="pricingShape1"
        />
        <img
          src="./../../../public/images/images/pricingShape1_2.webp "
          alt="pricingShape1_1"
          className="pricingShape2"
        />
      </div>
    </section>
  );
}
