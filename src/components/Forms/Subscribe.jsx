import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBIcon
} from "mdb-react-ui-kit";

export default function Subscribe() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    const templateParams = {
      email_address: email,
    };

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      templateParams,
      "YOUR_USER_ID"
    )
    .then((response) => {
      console.log("Email sent successfully!", response);
      alert("Thank you for subscribing!");
    })
    .catch((error) => {
      console.error("Email failed to send!", error);
      alert("Oops! Something went wrong. Please try again.");
    });

    // Reset form
    setEmail("");
  };

  return (
    <div className="container-fluid w3-pink" >
       <motion.div
      ref={ref}
      initial={{ y: -40, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 40, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
  
    >
    <MDBFooter
    className="w3-padding-64 w3-pink text-lg-left">
      <MDBContainer className="">
      <MDBRow className="d-flex justify-content-center align-items-center">
  
          <MDBCol md="6" size="12" className="mb-4 mb-md-0 ">
          <MDBContainer className="w3-card w3-padding-large w3-padding-32 d-flex justify-content-center align-items-center">
         
         <form onSubmit={handleSubmit}>
           <MDBRow className="d-flex justify-content-start">
             <div className="">
             <h6
         style={{fontSize:"2rem"}}>Con
         <span style={{fontFamily:"Dancing Script"}}>Scribe</span>     
         </h6>
         <p>
              Subscribe to receive tricks, insights and more. 
              </p>
           </div>
             <MDBCol md="8" size="12" >
        
               <MDBInput
                 type="email"
                 id="user_email"
                 label="Email address"
                 contrast
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                 style={{border:'2px solid #fff'}}
               />
               <MDBCheckbox 
     wrapperClass='d-flex w3-margin-top link-offset-1-hover mt-4'
     id='form5Example3'
     label={
       <span>
         I agree to the <a href="/terms-and-conditions" className="text-decoration-underline text-light">terms & conditions</a>.
       </span>
     }
     required
     labelStyle={{ fontSize: '13px' }} 
   />
 
             </MDBCol>
             <MDBCol md="4" size="12" className="mt-2 ">
               <MDBBtn color="light" type="submit">
                 <b>Subscribe</b>
               </MDBBtn>
             </MDBCol>
           </MDBRow>
         </form>
         </MDBContainer>
          </MDBCol>
          <MDBCol md="2" size="12" className="mb-4 mb-md-0 p-4">
            
          <h6 className='w3-margin-bottom fw-bold'>PAGES</h6>
          
          <Link to='/' className='text-reset fw-light' onClick={scrollToTop} >
          <p style={{fontSize:'14px'}}>
          Home
          </p>
          </Link>
      
       
          <Link to='/about' className='text-reset fw-light' onClick={scrollToTop} >
          <p style={{fontSize:'14px'}}>
            About
            </p>
          </Link>
       
       
          <Link to='/services' className='text-reset fw-light' onClick={scrollToTop} >
          <p style={{fontSize:'14px'}}>
          Services
            </p>
          </Link>
      
        
          <Link to='/pricing' className='text-reset fw-light' onClick={scrollToTop} >
          <p style={{fontSize:'14px'}}>
           Pricing
           </p>
          </Link>
          </MDBCol>

          <MDBCol md="2" size="12" className="mb-4 mb-md-0 p-4">
          <h6 className='w3-margin-bottom fw-bold'>RESOURCES</h6>
            <p style={{fontSize:'14px'}}>
              <Link to='/blog' className='text-reset' onClick={scrollToTop} >
               Blog
              </Link>
            </p>
            <p style={{fontSize:'14px'}}>
            <Link to='/album' className='text-reset' onClick={scrollToTop} >
                Album
              </Link>
            </p>
            <p style={{fontSize:'14px'}}>
              <a href='http://carolwargo.github.io/realestate' className='text-reset' onClick={scrollToTop} >
                Real Estate
              </a>
            </p>
            <p style={{fontSize:'14px'}}>
              <Link to='sidenav' className='text-reset' onClick={scrollToTop} >
               Price Menu
              </Link>
            </p>
       
            </MDBCol>

            <MDBCol md="2" size="12" className="mb-4 mb-md-0 p-4">
            <h6 className='fw-bold'>CONTACT</h6>
           
           <p style={{fontSize:'14px'}}>
             <MDBIcon icon="home" className="me-2" />
             Huntingtown, MD
           </p>
           <p style={{fontSize:'14px'}} >
          
             <a href='mailto:carolwargo.dev@gmail.com' 
             className='text-reset'>
                    <MDBIcon icon="envelope" className="me-2" />
             Email
             </a>
           </p>
           <p style={{fontSize:'14px'}} >
           <a href='tel:+4437711726'className='text-reset'>
           <MDBIcon icon="phone-alt" className="me-2" />
             Call
</a>
           </p>
           <button className="mt-2 w3-button w3-text-light-grey w3-padding w3-round-xxlarge" 
             style={{backgroundColor:'#FF385C', fontSize:'14px'}}>
             <Link to="/contact#contact"
                 className="text-white button"
                 onClick={scrollToTop}
               >
               Contact
               </Link>
             </button>
         
            </MDBCol>
     
        </MDBRow>
        <MDBRow className="d-flex justify-content-start"></MDBRow>
      </MDBContainer>
    </MDBFooter>
    </motion.div>
    </div>
  );
}
