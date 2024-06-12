import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaQuestionCircle } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";


const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm fixed-top" expanded={expanded}>
      <Container fluid>
        <Link to="/" className="navbar-brand w3-text-blue" onClick={closeNav}><b>CON</b>SCRIBE</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className='w3-margin-right'>
          <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about#about" className="nav-link" onClick={handleNavLinkClick}>About</Link>

            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={isHovered}
            >
              <div style={{ borderRadius: '5px' }} className="shadow">
               

                <NavDropdown.Item>
                  <Link to="/forms#forms" className="text-black">FORM SAMPLES</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/page-samples" className="text-black">PAGE SAMPLES</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/server#server" className="text-black">UTILITY APPS</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/graphics#graphics" className="text-black">COMING SOON! <br />Graphics Page</Link>
                </NavDropdown.Item>
              </div>
            </NavDropdown>
       </Nav>

          <Nav className='mr-auto'>
            <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}><AiTwotoneMail /></Link>
            <Link to="/help" className="nav-link" onClick={handleNavLinkClick}><FaQuestionCircle/></Link>
         
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

