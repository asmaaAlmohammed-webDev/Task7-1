import "./Card2ServiceHome.css";

export default function Card2ServiceHome({ num, title, desc, className }) {
  return (
    <div className={className}>
      <p className="num">{num}</p>

      <h6 className="title">{title}</h6>
      <p className="desc">{desc}</p>
    </div>
  );
}
