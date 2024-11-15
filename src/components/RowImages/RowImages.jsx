import { Container } from "react-bootstrap";
import "./RowImages.css";
export default function RowImages() {
  return (
    <Container>
      <div className="row-images  border-bottom p-3 mt-5">
        <img
          src="../../../public/images/images/brandLogo1_1.svg"
          className="d-lg-block d-md-block d-none"
        />
        <img
          src="../../../public/images/images/brandLogo1_2.svg"
          className="d-lg-block d-md-block d-none"
        />
        <img src="../../../public/images/images/brandLogo1_3.svg" />
        <img
          src="../../../public/images/images/brandLogo1_4.svg"
          className="d-lg-block d-md-block d-none"
        />
        <img
          src="../../../public/images/images/brandLogo1_5.svg"
          className="d-lg-block d-md-block d-none"
        />
      </div>
    </Container>
  );
}
