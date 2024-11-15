import "./CardClientReviewHome.css";
export default function CardClientReviewHome({
  image,
  name,
  desc,
  job,
  className,
}) {
  return (
    <div className={className}>
      <div className="stars-icons">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
      <p className="mb-5 desc">{desc}</p>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img src={image} alt="testiThumb3_1" className="image" />
          <div>
            <h6 className="name">{name}</h6>
            <p className="job">{job}</p>
          </div>
        </div>
        <i className="fa-solid fa-quote-right"></i>
      </div>
    </div>
  );
}
