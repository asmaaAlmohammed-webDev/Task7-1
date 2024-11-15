import "./CardPricingHome.css";
import BtnComponent from "../Button/BtnComponent";
export default function CardPricingHome({ title, price, duration, image ,className ,styBtn}) {
  return (
    <div className={className}>
      <div className="title ">
        <div>
          <h6 className="text-white">{title}</h6>
          <p className="text-white">
            <strong>{price}</strong>/{duration}
          </p>
        </div>
        <img src={image} alt="pricingIcon1_1" />
      </div>
      <div className="content">
        <div className="row">
          <div className="col1 d-flex ">
            <i className="fa-solid fa-check me-2"></i>
            <p className="text-dark-emphasis">100 GB SSD Storage</p>
          </div>
          <div className="icon border border-1 rounded-circle ms-auto p-2">
            <i className="fa-solid fa-question"></i>
          </div>
        </div>
        <div className="row">
          <div className="col1 d-flex">
            <i className="fa-solid fa-check me-2"></i>
            <p className="text-dark-emphasis">Weekly Backups</p>
          </div>
          <div className="icon border border-1 rounded-circle  ms-auto p-2">
            <i className="fa-solid fa-question"></i>
          </div>
        </div>
        <div className="row">
          <div className="col1 d-flex">
            <i className="fa-solid fa-check me-2"></i>
            <p className="text-dark-emphasis">Unlimited Free SSL</p>
          </div>
          <div className="icon border border-1 rounded-circle  ms-auto p-2">
            <i className="fa-solid fa-question"></i>
          </div>
        </div>
        <div className="row">
          <div className="col1 d-flex">
            <i className="fa-solid fa-check me-2"></i>
            <p className="text-dark-emphasis">24/7 System Monitoring</p>
          </div>
          <div className="icon border border-1 rounded-circle  ms-auto p-2">
            <i className="fa-solid fa-question"></i>
          </div>
        </div>
        <div className="row">
          <div className="col1 d-flex">
            <i className="fa-solid fa-check me-2"></i>
            <p className="text-dark-emphasis">Free Domain ($9.9Value)</p>
          </div>
          <div className="icon border border-1 rounded-circle  ms-auto p-2 ">
            <i className="fa-solid fa-question"></i>
          </div>
        </div>
        <div className="row">
          <div className="col1 d-flex">
            <i className="fa-solid fa-xmark me-2"></i>
            <p className="text-dark-emphasis">Frame 164236</p>
          </div>
          <div className="icon border border-1 rounded-circle  ms-auto p-2">
            <i className="fa-solid fa-question"></i>
          </div>
        </div>
        <div className="row">
          <div className="col1 d-flex">
            <i className="fa-solid fa-xmark me-2"></i>
            <p className="text-dark-emphasis">20+ Payment Methods</p>
          </div>
          <div className="icon border border-1 rounded-circle  ms-auto p-2 mb-3">
            <i className="fa-solid fa-question"></i>
          </div>
        </div>
        <BtnComponent text="GET STARTED NOW" className={styBtn} />
      </div>
    </div>
  );
}
