import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import LocationView from '../../assets/images/LocationView.png';

const ContactComponent = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs
        .sendForm('service_7wugrj8', 
        'template_0m8r0nf', form.current, {
          publicKey: '7JdmPQuTf_Xt-WdCk',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
<div >
<div className="w3-container w3-content w3-padding-48" id="contact">
  <div className="row justify-content-between align-items-center">
    
    
    <div className="col-sm-12 col-md-7 col-lg-7 w3-margin-bottom" >
  <h3 className="w3-border-light-grey w3-padding-8 w3-margin-bottom">WHERE WE OPERATE!</h3> 
  <img src={LocationView} className="w3-image w3-round-xlarge shadow" alt='location-map' style={{width:"100%"}}/>
    <div className="w3-margin-top">
    <p>Days of Operation: <br />Sunday-Saturday: By Appointment Only
    <br/> Schedule today! 
    </p>
    </div>
    </div>

<div className="col-sm-12 col-md-5 col-lg-5 w3-margin-bottom" >
<div className="w3-card w3-padding-small w3-round-xlarge">
<div className="w3-container w3-padding-16 ">
<h5 className="w3-border-light-grey fw-light"> Contact us to get started!</h5>
    <form ref={form} onSubmit={sendEmail}>
      <input  className="form-control w3-section w3-border" 
     type="text" 
     name="user_name" 
     placeholder='Name'
      />
      <input 
    className="form-control w3-section w3-border" 
      type="email" 
      name="user_email" 
      placeholder='Email'
      />
  
  <textarea 
  className="form-control w3-section w3-border" 
  name="message" 
  placeholder='Type message...'
  rows='4'
/>

      <button  tag="a" className='btn w3-pink' size="sm"
      type="submit">
      <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>

</div>
    </div>
    </div>
  </div>
  </div>
  </div>
    );
}

export default ContactComponent;