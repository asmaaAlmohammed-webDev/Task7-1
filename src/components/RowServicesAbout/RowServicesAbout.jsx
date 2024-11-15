import IconImgDiv from "../Icon&imgDiv/IconImgDiv";
import "./RowServicesAbout.css";

export default function RowServicesAbout() {
  const text = ["Cuber Security", "IT solution", "Technology", "Data Security"];
  return (
    <>
      <div className="row-services-about ">
        {text.map((index) => {
          return <IconImgDiv key={index} text={index} />;
        })}
      </div>
      <div className="icon-img-div d-lg-none d-md-none d-flex">
        <img
          src="./../../../public/images/images/asterisk.svg"
          alt="asterisk-img"
        />
        <p>Cuber Security</p>
        <img
          src="./../../../public/images/images/asterisk.svg"
          alt="asterisk-img"
        />
      </div>
    </>
  );
}
