import "./FooterChildHome.css";
import BtnComponent from "./../../components/Button/BtnComponent";
export default function FooterChildHome() {
  return (
    <>
      <div className="footer-child1">
        <img
          src="./../../../public/images/images/ctaShape2_1.webp"
          className="shap1 d-lg-block d-md-none d-none"
          alt="footer-shap"
        />
        <img
          src="./../../../public/images/images/ctaShape2_4.webp"
          className="shap2 d-lg-block d-md-none d-none"
          alt="footer-shap"
        />
        <img
          src="./../../../public/images/images/ctaThumb.webp"
          className="shap3 d-lg-block d-md-none d-none"
          alt="footer-shap"
        />

        <BtnComponent
          text="TALK TO A SPECIALIST"
          className="BtnWhite BtnFooterHome"
        />
        <p>Stay Connected With Cutting Edge IT</p>
      </div>
    </>
  );
}
