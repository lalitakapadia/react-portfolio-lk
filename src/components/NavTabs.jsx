import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (

    <Navbar bg="info" data-bs-theme="light"  sticky="top">
      <Container>
        <Navbar.Brand href="/aboutme">Lalita Kapadia</Navbar.Brand>
        <Nav className="mr-auto mt-2" >
          <Nav.Link href="/aboutme">About Me</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
