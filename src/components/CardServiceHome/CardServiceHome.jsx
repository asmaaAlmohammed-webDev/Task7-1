import "./CardServiceHome.css";

export default function CardServiceHome({ image, title, desc, className }) {
  return (
    <div className={(className)}>
      <img src={image} className="rounded p-2 border" alt="serviceIcon1_2" />
      <h5 className="mt-2">{title}</h5>
      <p className="text-light-emphasis">{desc}</p>
      <button className="py-2 px-3 border rounded-pill text-secondary">
        Read more
        <i className="fa-solid fa-angles-right me-2 text-secondary "></i>
      </button>
    </div>
  );
}
