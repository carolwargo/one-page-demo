import React from "react";
//import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import FenceBackground from "../../assets/images/FenceBackground.png";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { SiGooglehome } from "react-icons/si";
//import { FaPhotoVideo } from "react-icons/fa";

import "./header.css";
import Logo from "../../assets/images/placeholders/Logo.png";

const Header = () => {
  return (
    <header style={{fontFamily:'roboto', fontSize:'14px'}}>
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
            <Nav.Link href="/" className="nav-home-link">
              H
              <span>
                <SiGooglehome className="nav-home-link-span" />
              </span>
              ME
            </Nav.Link>
            <NavDropdown
              title="About"
              id="navbarDropdownMenuLink"
              className="nav-about-dropdown"
            >
              <NavDropdown.Item as={Link} to="/about#who-we-are">Who We Are</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#our-values">Our Values</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#testimonials">
                Testimonials
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Events"
              id="navbarDropdownMenuLink"
              className="nav-camp-dropdown"
            >
              <NavDropdown.Item href="/">General Info</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Showcase Registration
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Camp Registration</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Success"
              id="navbarDropdownMenuLink"
              className="camp-dropdown"
            >
              <NavDropdown.Item href="/success">Players Drafted</NavDropdown.Item>
              <NavDropdown.Item href="/success">Players Signed</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Exposure"
              id="navbarDropdownMenuLink"
              className="exposure-dropdown"
            >
              <NavDropdown.Item href="/exposure#guest-speakers">Guest Speakers</NavDropdown.Item>
              <NavDropdown.Item href="/exposure#coaching-staff">Coaching Staff</NavDropdown.Item>
              <NavDropdown.Item href="/exposure#colleges">Colleges Represented</NavDropdown.Item>
              <NavDropdown.Item href="/exposure#conference">Conferences Represented</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact" className="nav-link-contact">
              Contact
            </Nav.Link>

            <Nav.Link href="/site" className="nav-link-site">
              Site
            </Nav.Link>
            <Nav.Link href="/daly-blog" className="nav-link-site">
            DB
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      <div
        id="intro-example"
        className="p-4 bg-image position-relative"
        style={{
          backgroundImage: `url(${FenceBackground})`,
          backgroundSize: "cover", // Set the background size to cover the entire viewport
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Optional: Keep the background fixed while scrolling
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
  );
};

export default Header;
