import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBContainer,
  MDBModalBody,
  MDBInput,
    MDBRow,
    MDBCol,
    MDBCheckbox

} from 'mdb-react-ui-kit';

export default function App() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);
  


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
    <div>
      <MDBBtn onClick={() => setOpen(!open)} className='btn w3-pink' tag='a'><b>Subscribe</b></MDBBtn>
      <MDBModal open={open} setOpen={setOpen} tabIndex={-1}>
        <MDBModalDialog >
          <MDBModalContent className='w3-pale-red w3-margin-top'>
            <div className='d-flex justify-content-end px-2'> 
              <MDBBtn className='btn-close mt-2  border border-black border-3 shadow bg-white' style={{fontSize:'8px'}} color='light' onClick={() => setOpen(!open)}></MDBBtn>
            </div>
            <MDBModalBody className='text-black'>
        <MDBContainer className='d-flex justify-content-center align-items-center'>
         <form onSubmit={handleSubmit}>
           <MDBRow className="d-flex justify-content-start mb-3">
             <div className="text-black">
             <h6
         style={{fontSize:"2rem"}}>Con
         <span style={{fontFamily:"Dancing Script"}}>Scribe</span>     
         </h6>
         <p style={{fontSize:'13px'}}>
              Subscribe to receive tips, tricks, insights and more. 
              </p>
           </div>
             <MDBCol md="8" size="12" >
        
               <MDBInput
                 type="email"
                 id="user_email"
                 label="Email address"
                
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
                
                 className='mt-1 shadow bg-white'
               />
               <MDBCheckbox 
     wrapperClass='d-flex w3-margin-top link-offset-1-hover mt-4'
     style={{fontSize:'12px'}}
     id='form5Example3'
     label={
       <span>
         I agree to the following <a href="/terms-and-conditions" className="text-decoration-underline text-blue">terms & conditions</a>.
       </span>
     }
     required
     labelStyle={{ fontSize: '12px' }} 
   />
 
             </MDBCol>
             <MDBCol md="4" size="12" className="mt-1">
               <MDBBtn color="dark" type="submit">
                 <b>Subscribe</b>
               </MDBBtn>
             </MDBCol>
           </MDBRow>
         </form>
        </MDBContainer>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}