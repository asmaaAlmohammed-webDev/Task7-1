import "./DivContactHome.css";
import BlueTitleWithArrow from "./../../components/BlueTitleWithArrow/BlueTitleWithArrow";
import BtnComponent from "./../../components/Button/BtnComponent";
export default function DivContactHome() {
  return (
    <div className="div-contact-home">
      <img
        src="./../../../public/images/images/ctaThumb1_1.webp"
        alt="ctaThumb1_1"
        className="img"
      />
      <div>
        <BlueTitleWithArrow text="CONTACTUs" className={"arrowWhite"} />
        <h4 className="title text-white ">
          24/7 Expert Hosting Support Our Customers Loves{" "}
        </h4>
      </div>
      <BtnComponent text="TALK TO A SPECIALIST" className={"BtnWhite"} />
    </div>
  );
}
