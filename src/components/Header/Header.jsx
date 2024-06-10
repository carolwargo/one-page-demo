import React from "react";
//import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import FenceBackground from "../../assets/images/FenceBackground.png";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { SiGooglehome } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import "./header.css";
import Logo from "../../assets/images/Logo.png";

const Header = () => {

  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });

  return (
    <motion.div
    ref={ref}
    initial={{ y: 0, opacity: 0.8 }}
    animate={inView ? { y: 0, opacity: 1 } : {}}
    exit={{ y: 0, opacity: -0.8 }}
    transition={{ duration: 1.6 }}
    >
    <header >
      <Navbar bg="light" expand="lg" className="navbar px-4">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          alt="Your Logo"
          height="30" // Set the height as per your design
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="mr-auto align-items-center">
            <Link to="/" className="nav-home-link">
              
              <span>
                <SiGooglehome className="nav-home-link-span" style={{fontSize:'1.5rem'}}/>
              </span>
              
            </Link>
            <Link to="/" className="nav-link"> <span>
                <SiGooglehome className="nav-home-link-span" style={{fontSize:'1.5rem'}}/>
              </span></Link>
            <Link to="/about" className="nav-link">ABOUT</Link>
            <Link to="/services" className="nav-link">SERVICES</Link>
            <Link to="/resources" className="nav-link">RESOURCES</Link>
            <Link to="/demo" className="nav-link">DEMO</Link>
            <NavDropdown
              title="About"
              id="navbarDropdownMenuLink"
              className="nav-about-dropdown">
              <NavDropdown.Item as={Link} to="/about#who-we-are">Who We Are</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#our-values">What We Do</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#testimonials">Why We Do It</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Services"
              id="navbarDropdownMenuLink"
              className="nav-camp-dropdown"
            >
              <NavDropdown.Item href="/">Graphic Elements</NavDropdown.Item>
              <NavDropdown.Item href="/">Recruit Website</NavDropdown.Item>
          </NavDropdown>

            <NavDropdown
              title="Resources"
              id="navbarDropdownMenuLink"
              className="resource-dropdown"
            >
            <Link to='resources' className="nav-link">Blog</Link>
            <Link to='resources' className="nav-link">FAQS</Link>
            <Link to='resources' className="nav-link">Links</Link>
            <Link to='resources' className="nav-link">Articles</Link>
            
            </NavDropdown>

            <Nav.Link href="/contact" className="nav-link-contact">
              Contact
            </Nav.Link> </Nav>
          </Navbar.Collapse>
      </Navbar>
      <div
        id="intro-example"
        className="bg-image position-relative"
        style={{
          backgroundImage: `url(${FenceBackground})`,
          backgroundSize: "cover", // Set the background size to cover the entire viewport
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Optional: Keep the background fixed while scrolling
        paddingTop: "7rem",
        paddingBottom: "7rem",
        }}
      >
        {/* Overlay div for masking */}

        <div className="row d-flex px-5 text-white text-center position-relative">
          <br></br>
          <div className="p-2" id="header-intro">
            <h1>Conscribe.</h1>
            <h5>"Customized Sports Marketing and Web Development Solutions for Athletics.."</h5>

            <h3>"OnePage"</h3>
            <p>
              Click "get start" to see our customized one-page recruiting website for athletes looking to take control of their recruiting.
            </p>
            <br></br>
            <Link to="/demo">
              <button type="button" className="btn btn-outline-warning">
                Get Started
              </button>
            </Link>
            <Link to="/site-sample">
              <button type="button" className="btn btn-outline-warning">
                site sample
              </button>
            </Link>
          </div>
        </div>
        
       
      </div>
    </header>
    </motion.div>
  );
};

export default Header;
