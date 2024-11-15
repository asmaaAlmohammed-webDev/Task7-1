import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BtnComponent from "../Button/BtnComponent";
import "./NavbarHome.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="nav-home-parent">
        <Navbar
          expand="lg"
          className={`nav-home ${isScrolled ? "scrolled" : ""}`}
        >
          <Container>
            <div className="logo-icons-div">
              <Navbar.Brand href="#home">
                <img
                  src="./../../../public/images/images/logo.svg"
                  className="logo-img ms-3"
                  alt="logo"
                />
              </Navbar.Brand>
              <div className="icons-nav-home d-flex  d-lg-none d-md-block d-block">
                <i className="fa-solid fa-magnifying-glass me-3"></i>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto ">
                <Nav.Link href="#link" className="me-3">
                  <Link to={"/"} className="link-move">
                    Home
                  </Link>
                  <i className="fa-solid fa-caret-down"></i>
                </Nav.Link>
                <Nav.Link href="#link" className="me-3">
                  <Link to={"/about"} className="link-move">
                    About
                  </Link>
                </Nav.Link>
                <NavDropdown
                  title="Services"
                  id="basic-nav-dropdown"
                  className="me-3"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Pages"
                  id="basic-nav-dropdown"
                  className="me-3"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Blog"
                  id="basic-nav-dropdown"
                  className="me-3"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link" className="me-3">
                  <Link to={"/contact"} className="link-move">
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
              <div className="icons-nav-home d-flex gap-3 me-5 ">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>

              <BtnComponent
                text="GET A QUOTE"
                className="BtnBlue d-lg-block d-md-none d-none "
              />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
