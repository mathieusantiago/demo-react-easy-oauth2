import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const NavBar = () => {
  const navigate = useNavigate();
  function Href(path) {
    navigate(path);
  }
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button className="btn-Duck ms-5" onClick={() => Href("/")}>
                Home
              </Button>
              <Button className="btn-Duck ms-5" onClick={() => Href("/form")}>
                Demo
              </Button>
              <Button className="btn-Duck ms-5" onClick={() => Href("/docs")}>
                Docs
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
