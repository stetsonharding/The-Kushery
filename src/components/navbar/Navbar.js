import React from "react";
import Logo from "../../images/TheKusheryLogo.jpg";
import { Navbar, Nav } from "react-bootstrap";

// import { Link } from "react-router-dom"

import "./Navbar.css";

function NavigationBar() {
  return (
    <Navbar
      className="color-nav"
      collapseOnSelect
      expand="lg"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="/">
        <img
          style={{ width: "130px" }}
          id="logo"
          src={Logo}
          alt="The Kushery Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link id="navbar-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link id="navbar-link" href="/location">
            Locations
          </Nav.Link>
          <Nav.Link id="navbar-link" href="/Rewards">
            Rewards
          </Nav.Link>
          <Nav.Link id="navbar-link" href="/OrderOnline">
            Order Online
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
