import React from "react";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  import Clay2 from "../../assets/images/Clay2.png";

const About = () => {
    
        return (
            <div className="w3-padding-64">
            <h1>About</h1>
<MDBRow className="w3-margin">
        <MDBCol sm={12} md={6}>
        <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='6'>
        <MDBCardImage src={Clay2} alt='...' fluid />
         </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
            </MDBCol>
            
            <MDBCol sm={12} md={6}>
        <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='6'>
          <MDBCardImage src={Clay2} alt='...' fluid />
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
            </MDBCol>
</MDBRow>
<MDBRow>
<MDBCol sm={12} md={6}>
        <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='6'>
          <MDBCardImage src={Clay2} alt='...' fluid />
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
            </MDBCol>
            
            <MDBCol sm={12} md={6}>
            <MDBCard style={{ maxWidth: '540px'}} className="w3-black">
      <MDBRow className='g-0'>
        <MDBCol md='6'>
          <MDBCardImage src={Clay2} alt='...' fluid  className="w3-round-xlarge px-0 shadow"/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

            </MDBCol>
</MDBRow>
  
        </div>
    
        );
        }   

export default About;