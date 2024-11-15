import BtnComponent from "../Button/BtnComponent";
import "./HeroHomeComp.css";
import { motion } from "framer-motion";
export default function HeroHomeComp() {
  const hVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren:0.05,
      }
    },
  }; 
  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const text = "Business Innovation With IT Services Expertise";
  
  return (
    <>
      <div className="hero-home-parent ">
        <section className="hero-home ">
          <img
            src="../../../public/images/images/heroShape1_1.webp"
            className="hero-shap1 position-absolute bottom-0 end-0 d-lg-block d-md-none d-none"
            alt="heroShape1_1"
          />
          <img
            src="../../../public/images/images/heroShape1_2.webp"
            className="position-absolute bottom-0 start-0 d-lg-block d-md-block d-none"
            alt="heroShape1_2"
          />
          <img
            src="../../../public/images/images/heroThumb1_1.webp"
            className=" img-hero-home"
            alt="heroThumb1_1"
          />
          <div className="div-shap-hero-home position-absolute  top-100 start-50 translate-middle  ">
            <img
              src="../../../public/images/images/heroShape1_3.webp"
              className=""
              alt="heroShape1_3"
            />
          </div>
          <div className="content-hero-home">
            <div className="">
              <i className="fa-solid fa-wave-square me-2 "></i>
              <p className="mt-2 fs-9">
                Everything You Need To Create a Website
              </p>
            </div>
            <motion.h1
              className="title-hero-home my-3"
              variants={hVariants}
              initial="hidden"
              animate="visible"
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={spanVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <div className="box2-hero-home mb-3">
              <div className="row1 ">
                <div className="d-flex  align-items-center text-white ">
                  <i className="fa-solid fa-check me-2 "></i>
                  <p className="desc me-3 ">Deployment and Support</p>
                </div>
                <div className="d-flex  align-items-center text-white">
                  <i className="fa-solid fa-check me-2 "></i>
                  <p className="desc">Flexibility and Adaptability</p>
                </div>
              </div>
              <div className="row2">
                <div className="d-flex  align-items-center text-white">
                  <i className="fa-solid fa-check me-2 "></i>
                  <p className="desc me-4">Discovery and Analysis</p>
                </div>
                <div className="d-flex  align-items-center text-white ">
                  <i className="fa-solid fa-check me-2 "></i>
                  <p className="desc">Competitive Advantage</p>
                </div>
              </div>
            </div>
            <BtnComponent
              text="GET STARTED"
              className="BtnOrange  "
            />
          </div>
          <div className="div-box-reviwes   ">
            <div className="p-2 col1">
              <p className="title text-white">
                <i className="fa-solid fa-star text-success"></i>Trustipilot
              </p>
              <div>
                <div className="d-flex box-reviwes-hero-home ">
                  <img
                    src="../../../public/images/images/profileShape1_1.webp"
                    className="profileShape1_1 "
                    alt="profileShape1_1"
                  />
                  <div className="p-1">
                    <i className="fa-solid fa-star text-warning mt-2 ms-2"></i>
                    <i className="fa-solid fa-star text-warning mt-2"></i>
                    <i className="fa-solid fa-star text-warning mt-2 me-2"></i>
                    <p className="text-white  ">450+ reviwes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 col2">
              <p className="title text-white ">Google</p>
              <div>
                <div className="d-flex box-reviwes-hero-home2 ">
                  <img
                    src="../../../public/images/images/profileShape1_1.webp"
                    className="profileShape1_1"
                    alt="profileShape1_1"
                  />
                  <div className="p-1">
                    <i className="fa-solid fa-star text-warning mt-2 ms-2"></i>
                    <i className="fa-solid fa-star text-warning mt-2"></i>
                    <i className="fa-solid fa-star text-warning mt-2 me-2"></i>
                    <p className="text-white  ">450+ reviwes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
