import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  const currentPage = useLocation().pathname;

  return (

<>
<Navbar className="navbar navbar-expand-lg navbar-dark" style={{background:'#12486B'}}  expand="lg" >
    <Container>
      <Navbar.Brand href="/">Lalita Kapadia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">About Me</Nav.Link>
          <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Portfolio">Grid View</NavDropdown.Item>
            <NavDropdown.Item href="/PortfolioCarousel">Carousel View</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Resume">Resume</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>    
  );
}

export default Header;