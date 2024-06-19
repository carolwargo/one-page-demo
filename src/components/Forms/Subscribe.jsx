import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCheckbox
} from "mdb-react-ui-kit";

export default function Subscribe() {
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
    <div className="container-fluid" style={{ backgroundColor: "#0188CB" }}>
       <motion.div
      ref={ref}
      initial={{ y: -40, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 40, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
      className="w3-padding-32"
    >
    <MDBFooter style={{backgroundColor:'#0188CB'}} 
    className="w3-padding-64 text-white text-lg-left">
      <MDBContainer className="">
      <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol md="6" size="12" className="mb-4 mb-md-0">
            <MDBContainer className="w3-card w3-padding-large w3-padding-24">
         
            <form onSubmit={handleSubmit}>
              <MDBRow className="d-flex justify-content-start">
                <div className="w3-margin-bottom">
              <h5 >SIGN UP</h5>
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
                  />
                  <MDBCheckbox 
        wrapperClass='d-flex w3-margin-top link-offset-1-hover mt-4'
        id='form5Example3'
        label={
          <span>
            I agree to the <a href="/terms-and-conditions" className="text-decoration-underline text-light">terms & conditions</a>.
          </span>
        }
        defaultChecked
        required
        labelStyle={{ fontSize: '13px' }} 
      />
    
                </MDBCol>
                <MDBCol md="4" size="12" >
                  <MDBBtn outline color="light" type="submit">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" size="12" className="mb-4 mb-md-0">
            <div
              className="text-center p-5"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >

              <p>
              Subscribe to receive real-time updates, exclusive offers, promotions, early access to new services products, be the first to know about upcoming events or our new innovative approaches: tricks, insights and more. 
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex justify-content-start"></MDBRow>
      </MDBContainer>
    </MDBFooter>
    </motion.div>
    </div>
  );
}
