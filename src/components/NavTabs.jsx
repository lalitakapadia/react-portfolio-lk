import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (

    <Navbar  bg="light" data-bs-theme="light" sticky="top">
      <Container>
        <Navbar.Brand href="/">Lalita Kapadia</Navbar.Brand>
  
        <Nav className="mr-auto mt-2" >
        <Nav.Item>
          <Nav.Link href="/">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavTabs;