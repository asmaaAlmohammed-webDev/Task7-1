import "./BtnComponent.css";
export default function BtnComponent({ text, className }) {
  return (
    <button className={className}>
      {text}
      <i className="fa-solid fa-arrow-right ms-2"></i>
    </button>
  );
}
