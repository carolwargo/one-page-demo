import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaQuestionCircle } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import LogoTrans from '../../assets/images/LogoTrans.png';
import { TbScreenShare } from "react-icons/tb";

const TopNavbar = () => {
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
        <Link to="/" className="navbar-brand w3-text-blue" onClick={closeNav}>
          <img src={LogoTrans} height='25' alt='logo' loading='lazy' />
        </Link>
        <Link to="/test" className="navbar-brand w3-text-blue" onClick={closeNav}>
         Test
        </Link>
        <Link to="/services" className="navbar-brand w3-text-blue" onClick={closeNav}>
         Services
        </Link>
        <Link to="/resources" className="navbar-brand w3-text-blue" onClick={closeNav}>
         Resources
        </Link>
        <Link to="/about" className="navbar-brand w3-text-blue" onClick={closeNav}>
         About
        </Link>
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
                <NavDropdown.Item as={Link} to="/resources" className="text-black">Resources</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/main" className="text-black">Main</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services" className="text-black">Services</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/demo" className="text-black">Demo <br />Graphics Page</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>

          <Nav>
            
          </Nav>
          <Nav className='ml-auto'>
          <Link to="/help" className="nav-link" onClick={handleNavLinkClick} style={{fontSize:'14px'}}>DEMO SITE<TbScreenShare className='mx-2' style={{fontSize:'16px'}}/></Link>
         
            <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}><AiTwotoneMail /></Link>
            <Link to="/help" className="nav-link" onClick={handleNavLinkClick}><FaQuestionCircle/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
