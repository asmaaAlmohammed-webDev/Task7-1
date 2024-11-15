import "./CardTeammemberAbout.css";

export default function CardTeammemberAbout({ name, job, className }) {
  return (
    <div className={className}>
      <div className="content-card-member">
        <h6 className="name">{name}</h6>
        <p className="job  ">{job}</p>
      </div>
      <div className="icon-card-member">
        <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  );
}
