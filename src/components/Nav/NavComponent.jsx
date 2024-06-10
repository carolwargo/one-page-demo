import React, {useState} from 'react';
//import GirlCamera from '../assets/images/GirlCamera.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarDarkExample() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [isHovered, setIsHovered] = useState(false);
  

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);



  
  const handleMouseEnter = () => {
    setIsHovered(true);
    // Add your logic here when the dropdown is hovered
    console.log('Dropdown is hovered!');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Add your logic here when the mouse leaves the dropdown
    console.log('Mouse left the dropdown!');
  };

 
  const handleCloseDropdown = () => {
    setIsHovered(false);
  };


  const handleNavLinkClick = () => {
    scrollToTop();
  };
  
  return (
    <div>

        <br />
    <br />
   
  
    <Navbar variant="light" bg="light" expand="lg" className='text-black'>
      <Container fluid>
      <Link to="/" className="navbar-brand" ><b>CW</b>HOME</Link>
        <Navbar.Toggle aria-controls="navbar-light-example" onClick={handleToggle}>
  <i className='fa fa-bars' style={{ color: 'black'}}></i> {/* Corrected class name */}
</Navbar.Toggle>
      
        <Navbar.Collapse id="navbar-light-example">
        <Nav className="me-auto">
              <Link to="/about#about" className="nav-link" onClick={handleNavLinkClick}>About</Link>
              <Link to="/resume#resume" className="nav-link" onClick={handleNavLinkClick}>Resume</Link>
             <Link to="/page-samples#page-samples" className="nav-link" onClick={handleNavLinkClick}>Samples</Link>
          <NavDropdown 
            id="collapsible-nav-dropdown"
              title="Dropdown"
              className='w3-hide-large'
            >
                <div className="dropdown-menu justify-content-center" 
                style={{ display: 'block', width: '70vw', borderRadius:'0px' }}>
     
              <div className='row d-flex w3-padding-large w3-padding-16 justify-content-center'>
              <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Web Page Samples</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
             
              <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Web Page Samples</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
              <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Web Page Samples</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
             <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Heading 1</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
        <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Heading 1</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
        <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Heading 1</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
             
          
              </div> 
              </div>
            </NavDropdown>
            <NavDropdown 
            id="collapsible-nav-dropdown"
              title="Dropdown"
              className='w-100 w3-hide-small w3-hide-medium'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={isHovered}
            >
                <div className="dropdown-menu" 
                style={{ display: 'block', width: '60vw', borderRadius:'0px' }}>
     
              <div className='row d-flex w3-padding-large w3-padding-16 justify-content-center'>
              <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Heading 1</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
             <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Heading 1</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
        <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Heading 1</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
        <div className='flex-col col-sm-12 col-md-2 col-lg-2 p-2'>
           <h3>Heading 1</h3>
           <p>Lorem ipsum sapiente maiores neque inventore?</p>
           <Link onClick={handleCloseDropdown}>
           <button className="w3-button w3-round-xxlarge" 
           style={{backgroundColor:'#FF385C', color:'white'}} >
           Click Here</button>
         </Link>
        </div>
             
          
              </div> 
              </div>
            </NavDropdown>
          </Nav>





      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarDarkExample;