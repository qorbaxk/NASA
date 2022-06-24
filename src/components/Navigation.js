import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//맨 위 네비바 구성

const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              width={100}
              src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="nav-menu">
                TODAY
              </Link>
              <Link to="/gallery" className="nav-menu">
                GALLERY
              </Link>
              <Link to="/apod" className="nav-menu">
                APOD
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
