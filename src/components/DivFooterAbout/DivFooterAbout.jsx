import "./DivFooterAbout.css";

export default function DivFooterAbout({
  className1,
  className2,
  text1,
  text2,
}) {
  return (
    <div className={className1}>
      <div className="icon">
        <i className={className2}></i>
      </div>
      <div className="information">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
