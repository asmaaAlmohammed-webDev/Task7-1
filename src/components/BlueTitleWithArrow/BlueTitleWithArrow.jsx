import "./BlueTitleWithArrow.css";
export default function BlueTitleWithArrow({ text, className }) {
  return (
    <>
      <p className={className}>
        <i className="fa-solid fa-arrow-left-long me-1"></i>
        {text}
        <i className="fa-solid fa-arrow-right-long ms-1"></i>
      </p>
    </>
  );
}
