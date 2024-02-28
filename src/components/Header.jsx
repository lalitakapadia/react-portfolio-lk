import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <>
      {/* <style type="text/css">
          {`
          .navbar-lk {
            background-color: teal;
            color: white;
            font-weight: bold;
          }
          .navbar-lk-toggle {
            background-color: teal;
            color: white;
            font-weight: bold;
          }
        `}
        </style> */}

      <Navbar  bg="secondary" data-bs-theme="light"   sticky="top">
        <Container>
          <Navbar.Brand href="/">Lalita Kapadia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
    </>
  );
}

export default Header;