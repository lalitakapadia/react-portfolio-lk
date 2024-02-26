// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function NavTabs() {
//   const currentPage = useLocation().pathname;

//   return (

//     <Navbar bg="info" data-bs-theme="light"  sticky="top">
//       <Container>
//         <Navbar.Brand href="/">Lalita Kapadia</Navbar.Brand>
//         <Nav className="mr-auto mt-2" >
//           <Nav.Link href="/">About Me</Nav.Link>
//           <Nav.Link href="/portfolio">Portfolio</Nav.Link>
//           <Nav.Link href="/contact">Contact</Nav.Link>
//           <Nav.Link href="/resume">Resume</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavTabs;


import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h1><a class="navbar-brand " href="/">Lalita Kapadia</a></h1>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              AboutMe
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Portfolio"
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Resume"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
            Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
 
  );
}

export default NavTabs;
