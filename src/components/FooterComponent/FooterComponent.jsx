import { useLocation } from "react-router-dom";
import FooterChildHome from "../../components/FooterChildHome/FooterChildHome";
import FooterChildAbout from "../../components/FooterChildAbout/FooterChildAbout";
import "./FooterComponent.css";
export default function FooterComponent() {
  const location = useLocation();
  return (
    <footer>
      <div className="row1 ">
        {location.path === "/" ? (
          <FooterChildHome />
        ) : location.path === "/about" ? (
          <FooterChildAbout />
        ) : null}
        <div className="col1 ">
          <img
            src="./../../../public/images/images/logo - footer.svg"
            alt="logo"
            className="logo mb-5"
          />
          <p className="text-white ">
            Extech is aphaseBus ulticries alquam Lorem ipsum dolor sit amet,
            consectetur fhkm ulticries elit molks.
          </p>
          <div className="footer-icons d-flex gap-1 my-3">
            <div className="icon  border-1 d-flex justify-content-center align-items-center  ">
              <a href="#">
                <i className="fa-brands fa-facebook-f text-white "></i>
              </a>
            </div>
            <div className="icon border-1 d-flex justify-content-center align-items-center ">
              <a href="#">
                <i className="fa-brands fa-twitter text-white "></i>
              </a>
            </div>
            <div className="icon  border-1 d-flex justify-content-center align-items-center  ">
              <a href="#">
                <i className="fa-brands fa-youtube text-white "></i>
              </a>
            </div>
            <div className="icon border-1 d-flex justify-content-center align-items-center  ">
              <a href="#">
                <i className="fa-brands fa-instagram text-white  "></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col2  mb-3">
          <h6 className="text-white">Quick Links</h6>
          <a
            href="#"
            className="text-white link-underline link-underline-opacity-0 d-block my-3"
          >
            <i className="fa-solid fa-angles-right me-2"></i>
            Exteach About
          </a>
          <a
            href="#"
            className="text-white link-underline link-underline-opacity-0 d-block"
          >
            <i className="fa-solid fa-angles-right me-2"></i>
            Our Services
          </a>
          <a
            href="#"
            className="text-white link-underline link-underline-opacity-0 d-block my-3"
          >
            <i className="fa-solid fa-angles-right me-2"></i>
            Our Blogs
          </a>
          <a
            href="#"
            className="text-white link-underline link-underline-opacity-0 d-block"
          >
            <i className="fa-solid fa-angles-right me-2"></i>
            FAQ S
          </a>
          <a
            href="#"
            className="text-white link-underline link-underline-opacity-0 d-block my-3"
          >
            <i className="fa-solid fa-angles-right me-2"></i>
            Contact Us
          </a>
        </div>
        <div className="col3  mb-3">
          <h6 className="text-white mb-3">Recent Posts</h6>
          <div className="box1 d-flex gap-3 ">
            <img
              src="./../../../public/images/images/footerThumb1_1.webp"
              alt="logo"
              className="logo"
            />
            <div>
              <div className="d-flex align-items-center  ">
                <i className="fa-solid fa-calendar-days text-white mx-2 mb-3"></i>
                <p className="text-white ">15th April 2024</p>
              </div>
              <p className="p2 text-white ">
                Top 5 Most Famous Technology Trend in 2024
              </p>
            </div>
          </div>
          <div className="box2 d-flex gap-3">
            <img
              src="./../../../public/images/images/footerThumb1_2.webp"
              alt="logo"
              className="logo"
            />
            <div>
              <div className="d-flex align-items-center  ">
                <i className="fa-solid fa-calendar-days text-white mx-2 mb-3"></i>
                <p className="text-white ">20th June 2024</p>
              </div>
              <p className="p2 text-white ">
                The Surfing Man Will Blow Your Mind
              </p>
            </div>
          </div>
        </div>
        <div className="col4">
          <h6 className="text-white mb-3">Contact Us</h6>
          <div className="d-flex align-items-center ">
            <i className="fa-solid fa-envelope text-white mx-2 mb-3"></i>
            <p className="text-white ">info@example.com</p>
          </div>
          <div className="d-flex align-items-center  ">
            <i className="fa-solid fa-phone text-white mx-2 mb-3"></i>
            <p className="text-white ">+208-6666-0112</p>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Your email address " />
            <div className="icon-arrow-send">
              <i className="fa-solid fa-arrow-right text-white"></i>
            </div>
          </div>

          <div className="d-flex my-3">
            <div className="check mx-2"></div>
            <p className="text-white ">
              i agree to the
              <a href="#" className="text-white ">
                privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row2 text-white">
        <p>©All Copyright 2024 by Extech</p>
        <div className="d-flex">
          <p className="mx-3">Terms&Condition</p>
          <p>PrivacyPolicy</p>
        </div>
      </div>
    </footer>
  );
}
