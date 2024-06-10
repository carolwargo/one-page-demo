import React from 'react';
import catchingvideo from '../../assets/catchingvideo.mp4';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from "react-router-dom";
import BBSocialIcons from '../Baseball/BBSocialIcons';

function CatchingHeader() {

    return (
        <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        className="home"
        
        >
            <header className='video-header' style={{ marginTop: '56px' }}>
                <video src={catchingvideo} autoPlay loop muted></video>
                <div className='video-overlay'></div>
                <div className='video-content'>
                    <div className='row'>
                 
                        <div className='col-lg-12'>
                    <div className='w3-content w3-container justify-content-center align-items-center text-center px-5'>
  <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
<BBSocialIcons />

          <h1 className='w3-hide-small' style={{ fontSize: '50px' }}>
    <span><b>301</b></span><span>|CATCHING</span>
  </h1>
  <h1 className='w3-hide-large' style={{ fontSize: '50px' }}>
    <span><b>301</b></span><span>|CATCHING</span>
  </h1>
        <h4 style={{color:'red'}}> <b><i>"THE FOUNDATIONAL EXPERTS FOR EVERYTHING CATCHING!"</i></b></h4>
        <h6 style={{color:'white'}}> Providing Players with the skills to master their craft & elevate their game.</h6>
        <hr/>
        <div className='w3-padding-large'>
<button className="w3-button w3-large w3-black m-1" style={{boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'
}}
>
LEARN MORE
      </button>
    
      <button className="w3-button w3-large w3-black m-1" style={{boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)'
}}
>
WHAT'S NEW
      </button>
</div>
      </motion.div>
    </AnimatePresence>
</div>
                       
            </div>
                    </div>
                    <Navbar expand="lg" className="fixed-top shadow" style={{ backgroundColor: 'white', zIndex: 100, boxShadow: '0 4px 12px rgba(255, 255, 255, 0.2)' }}>
                <Container fluid className='align-items-center'>
                    <Navbar.Brand   href="/" className="w3-tag w3-hover-opacity shadow">
                   <b style={{fontFamily:'serif', color:'white'}}>301</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor:'white' }} className='border-none '/>
                    <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'black' }}  className='border-none'>
                        <Nav className="me-auto" id="custom-bb-nav-links">
                            <Nav.Link as={Link} to="/about" style={{ color: 'black', textShadow: '0 6px 12px rgba(255, 0, 0, 0.4)' }} id="custom-bb-nav-links" >
                                ABOUT
                            </Nav.Link>
                            <Nav.Link as={Link} to="/catching" style={{ color: 'black', textShadow: '0 6px 12px rgba(255, 0, 0, 0.4)' }} id="custom-bb-nav-links" >
                                CATCHING
                            </Nav.Link>
                            <Nav.Link as={Link} to="/performance" style={{ color: 'black', textShadow: '0 6px 12px rgba(255, 0, 0, 0.4)' }} id="custom-bb-nav-links" >
                              PERFORMANCE
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" style={{ color: 'black', textShadow: '0 6px 12px rgba(255, 0, 0, 0.4)' }} id="custom-bb-nav-links" >
                                CONTACT
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                </div>
            </header>
        </motion.div>
    );

}

export default CatchingHeader;
