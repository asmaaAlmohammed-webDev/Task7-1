import "./HeroAboutContact.css";

export default function HeroAboutContact({ title }) {
  return (
    <section className="hero-about-contact">
      <img
        src="./../../../public/images/images/line-element.webp"
        className="ms-3 line-element-img"
        alt="line-element-img"
      />
      <div className="content">
        <h1 className="text-white">{title}</h1>
        <div className=" text-white ">
          <a
            href="#"
            className="link-underline link-underline-opacity-0  text-white"
          >
            Home
          </a>
          <i className="fa-solid fa-angle-right mx-2"></i>
          <a
            href="#"
            className="link-underline link-underline-opacity-0  text-white"
          >
            {title}
          </a>
        </div>
      </div>
    </section>
  );
}
