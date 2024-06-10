import React from "react";
import { Carousel, Navbar, Nav, NavDropdown } from "react-bootstrap";
//import { SiGooglehome } from "react-icons/si";
import { Link } from "react-router-dom";
import ConcreteBG from "../../assets/images/ConcreteBG.png";
import "./header.css";


const Header = () => {
  /*const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time the div enters the viewport
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
*/

  return (

      <header>
        <Navbar bg="light" expand="lg" className="navbar">
         {/* <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="Your Logo"
            
              className="d-inline-block align-top w-100"
            />
          </Navbar.Brand>
          */}
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="mr-auto align-items-center">
              <Link to="/" className="nav-link">
               HOME
              </Link>
              <Link to="/about" className="nav-link">ABOUT</Link>
              <Link to="/services" className="nav-link">SERVICES</Link>
              <Link to="/resources" className="nav-link">RESOURCES</Link>
              <Link to="/demo" className="nav-link">DEMO</Link>
              <NavDropdown title="About" id="navbarDropdownMenuLink" className="nav-about-dropdown">
                <NavDropdown.Item as={Link} to="/about#who-we-are">Who We Are</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about#our-values">What We Do</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about#testimonials">Why We Do It</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="navbarDropdownMenuLink" className="nav-camp-dropdown">
                <NavDropdown.Item href="/">Graphic Elements</NavDropdown.Item>
                <NavDropdown.Item href="/">Recruit Website</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="navbarDropdownMenuLink" className="resource-dropdown">
                <Link to='resources' className="nav-link">Blog</Link>
                <Link to='resources' className="nav-link">FAQS</Link>
                <Link to='resources' className="nav-link">Links</Link>
                <Link to='resources' className="nav-link">Articles</Link>
              </NavDropdown>
              <Nav.Link href="/contact" className="nav-link-contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>



        
        <Carousel
          id="intro-example"
          className="bg-image position-relative"
          interval={2000}
        >

<Carousel.Item>
  <div
    className="d-block"
    style={{
      backgroundImage: `url(${ConcreteBG})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      height: "85vh",
    }}
  >
    <div
      className="container  d-flex align-items-center justify-content-center text-white"
      style={{ height: '100%' }}  // Ensure full height for flexbox alignment
    >
      <div className="text-center">  {/* Center align text */}
      <div className=" w3-content w3-padding-32">
     
        <div className="row justify-content-center align-items-center w3-padding-large w3-row-padding">
         
         <div className="col-sm-12 col-md-8 col-lg-8">  
         <h1 className="glowing-brand text-blue">
            <span className="w3-text-blue fw-bold w3-margin-bottom " style={{fontSize:'4rem'}}>CONSCRIBE</span>.</h1>
         <h3 className="align-items-center mb-4 text-black fw-bold"> PROVIDING CONTROLLED
<span className="glowing-text text-blue fw-bold"><i> RECRUITING STRATEGIES & PLATFORMS</i></span> FOR STUDENT-ATHELETES ALIKE. 
        </h3>
     
         <Link to="/about">
          <button type="button" className="button-glow btn w3-blue mx-1">
         <b>HOW WE WORK</b>  
          </button>
        </Link>
        <Link to="/services">
          <button type="button" className="button-glow btn w3-blue mx-1">
           <b>VIEW SERVICES</b> 
          </button>
        </Link>
        </div>
   
        </div>
        </div>
        <br />
       
      </div>
    </div>
  </div>
</Carousel.Item>
        </Carousel>
      </header>
   
  );
};

export default Header;
