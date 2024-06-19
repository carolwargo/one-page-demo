import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


function ContactPage() {
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


<div className="w3-container">
<div className="w3-card w3-padding-large">
<div className="w3-container">
<h3 className="w3-border-light-grey w3-padding-16 fw-light"><b>CONTACT</b> US to get started!</h3>
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

      <button 
      className="w3-button w3-black w3-section" 
      type="submit">
      <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>
</div>
</div>
</div>
    );
}

export default ContactPage;