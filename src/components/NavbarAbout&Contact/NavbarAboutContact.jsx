import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BtnComponent from "../Button/BtnComponent";
import "./NavbarAboutContact.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function NavbarAboutContact() {
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
      <Navbar
        expand="lg"
        className={`nav2 ${isScrolled ? "scrolled-nav2" : ""}`}
      >
        <div className="arrow-nav2 d-lg-flex d-md-none d-none">
          <BtnComponent
            text="GET A QUOTE"
            className="BtnWhite btn-nav2 d-lg-block d-md-none d-none"
          />
        </div>
        <img
          src="./../../../public/images/images/plane.webp"
          className="plane-img ms-3"
          alt="plane-img"
        />

        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./../../../public/images/images/logo.svg"
              className="ms-3"
              alt="logo"
            />
          </Navbar.Brand>

          <i className="fa-solid fa-magnifying-glass search-icon-nav2 d-lg-none d-md-block d-block"></i>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-comp ">
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
            <i className="fa-solid fa-magnifying-glass search-icon-nav2 d-lg-block d-md-none d-none"></i>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
