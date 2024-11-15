import "./IconImgDiv.css";

export default function IconImgDiv({text}) {
    return (
      <div className="icon-img-div  d-lg-flex d-md-flex d-none">
        <img
          src="./../../../public/images/images/asterisk.svg"
          alt="asterisk-img"
        />
        <p>{text}</p>
      </div>
    );
}
