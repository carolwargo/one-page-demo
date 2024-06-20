import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
    <div className='footer' id='footer' style={{fontFamily:'Raleway'}}>
    <MDBFooter className=' w3-padding-32 w3-black' >
    

   
    <section className='text-center'>
      <MDBContainer className='text-center text-md-start'>
        <MDBRow className='mt-3 justify-content-end align-items-center'>
          <MDBCol md="5" lg="5" xl="5" className='mx-auto mb-5  w3-padding-large'>
          <MDBContainer className="w3-card w3-padding-large w3-padding-32 w3-pink w3-round-large">
         
         <form onSubmit={handleSubmit}>
           <MDBRow className="d-flex justify-content-start">
             <div className="">
             <h6
         style={{fontSize:"2rem"}}>Con
         <span style={{fontFamily:"Dancing Script"}}>Scribe</span>     
         </h6>
         <p style={{fontSize:'14px'}}>
              Subscribe to receive tips, insights & more. 
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
     wrapperClass='d-flex w3-margin-top link-offset-1-hover mt-3'
     id='form5Example3'
     label={
       <span>
         I agree to the <a href="/terms-and-conditions" className="text-decoration-underline text-light">terms & conditions</a>.
       </span>
     }
     required
     labelStyle={{ fontSize: '12.5px' }} 
   />
 
             </MDBCol>
             <MDBCol md="4" size="12" className="mt-2">
               <MDBBtn color="light" type="submit">
                 <b>Subscribe</b>
               </MDBBtn>
             </MDBCol>
           </MDBRow>
         </form>
         </MDBContainer>
          </MDBCol>
          <MDBCol md="1" lg="1" xl="1" className='mx-auto mb-4'>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
          
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

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 '>
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


          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
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
      </MDBContainer>
    </section>
    <hr />
    {/** 
    <section className='text-center d-flex justify-content-center w3-padding-large border-bottom'>
      <div className='mx-auto justify-content-center w3-margin-left'>
      <a href='tel:+4437711726' className='me-4 text-reset'>
      <MDBIcon icon="phone-alt" />

        </a>
        <a href='mailto:carolwargo.dev@gmail.com' className='me-4 text-reset'>
        <MDBIcon icon="envelope" />
        </a>
    
        <a href='https://www.linkedin.com/in/carol-wargo-35021baa/' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='https://github.com/carolwargo' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>
      */}
    <section className='d-flex justify-content-center w3-padding-large border-bottom'>
      <div className='d-none d-lg-block ' >
      <p style={{fontSize:'12px', fontWeight:'light'}}> © 2023    
        <a className='text-white' href='https:carolwargo.github.io/one-page-demo'  style={{fontSize:"12px"}}> Con
            <span style={{fontFamily:"Dancing Script"}}>Scribe</span>
              </a>
        </p>
      </div>

    </section>
    </MDBFooter> 
  </div>
  </motion.div>
  );
}