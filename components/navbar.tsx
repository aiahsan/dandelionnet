import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 mx-auto">
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <Navbar.Brand href="#home">
                {" "}
                <img src="/img/logo.png" alt="" className="img-fluid" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav ">
                <Nav className="me-auto nav-cstm">
                  <Nav.Link href="#Home">Home</Nav.Link>
                  <Nav.Link href="#Features">About</Nav.Link>
                  <Nav.Link href="#pricing">Blog</Nav.Link>
                  <Nav.Link href="#faq">Contant</Nav.Link>
                </Nav>
                <Nav className="mr-85">
                  <Nav.Link className="nav-btn d-flex" eventKey={2} href="#memes">
                    Login
                  </Nav.Link>
                  <Nav.Link className="nav-btn d-flex login-btn" eventKey={2} href="#memes">
                    Get started
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
};
