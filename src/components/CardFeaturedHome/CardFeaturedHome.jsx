import "./CardFeaturedHome.css";

export default function CardFeaturedHome({
  img,
  desc,
  date,
  title,
  name,
  job,
  img2,
  className
}) {
  return (
    <div className={className}>
      <img src={img} alt="blogProfile" className="img1" />
      <div className="content">
        <div className="d-flex justify-content-between mt-3">
          <div className="desc1">
            <p className="mt-2">{desc}</p>
          </div>
          <p className="date mt-2 text-secondary">{date}</p>
        </div>
        <h6 className="title">{title}</h6>
        <div className="information d-flex justify-content-between">
          <div className="d-flex mt-3">
            <img src={img2} alt="blogProfile" className="img2" />
            <div>
              <h6 className="name">{name}</h6>
              <p className="job text-secondary">{job}</p>
            </div>
          </div>
          <div className="icon mt-3">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
