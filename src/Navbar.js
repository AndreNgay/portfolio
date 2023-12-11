import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";

const Navbar = () => {
  return (  
    <div className="">
      <BootstrapNavbar expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <BootstrapNavbar.Brand>Andre John Ngay</BootstrapNavbar.Brand>
          </Link>
          <BootstrapNavbar.Toggle aria-controls="navbarResponsive" />
          <BootstrapNavbar.Collapse id="navbarResponsive">
            <Nav className="ml-auto">
              <Nav.Item>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/reviews" className="nav-link">
                  Reviews
                </Link>
              </Nav.Item>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
      <Outlet />
    </div>
  );
};
 
export default Navbar;
