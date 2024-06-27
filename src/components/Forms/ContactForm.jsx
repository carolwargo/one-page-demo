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



<div className="w3-card w3-padding-small w3-padding-24 w3-round-xlarge">
<div className="w3-container w3-content">
<h5 className="w3-border-light-grey fw-light">Contact us to get started!</h5>
    <form ref={form} onSubmit={sendEmail} >
      <input  className="form-control w3-section w3-border" 
     type="text" 
     name="user_name" 
     placeholder='Name'
     style={{fontSize:'12px'}}
      />
      <input 
    className="form-control w3-section w3-border" 
      type="email" 
      name="user_email" 
      placeholder='Email'
      style={{fontSize:'12px'}}
      />
  
  <textarea 
  className="form-control w3-section w3-border" 
  name="message" 
  placeholder='Type message...'
  rows='4'
  style={{fontSize:'12px'}}
/>

      <button tag="a" className='btn w3-pink' size="lg"
      type="submit">
      <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>

</div>
</div>

    );
}

export default ContactPage;