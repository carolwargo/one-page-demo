import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Form } from "react-bootstrap";

const WebContactForm = () => {
    const form = useRef();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
   
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
        <div>
            <style>
                {`
                .form-control {
                   border-color: darkgray;
                  color: black;
                  background-color: #E0F1FF;
                `}
            </style>
           <div className="card shadow w3-blue">
        <div className="container w3-padding-16 d-flex justify-content-end align-items-center">
          <div className="container">
          <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                <label 
              htmlFor="firstname" 
             className="w-100 my-1">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder=" First Name"
                  value={inputs.firstname || ""}
                  onChange={handleChange}
                  className="form-control w-100 py-2"
                  style={{fontSize:'11px'}}
                />
              </label>  
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
              <label 
              htmlFor="lastname" 
             className="w-100 my-1">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder=" Last Name"
                  value={inputs.lastname || ""}
                  onChange={handleChange}
                  className="form-control w-100 py-2"
                  style={{fontSize:'11px'}}
                />
              </label>  
              </div>
                </div>
          
              <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                    <label 
                    htmlFor="gradyear" 
                    className="w-100 my-1">
                <input
                  type="number"
                  name="gradyear"
                  id="gradyear"
                  placeholder=" Grad Year"
                  value={inputs.gradyear || ""}
                  onChange={handleChange}
                  className="form-control py-2"
                  style={{fontSize:'11px'}}
                />
              </label> 
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
              <label 
              htmlFor="phone" 
              className="w-100 my-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder=" Phone Number"
                  value={inputs.phone || ""}
                  onChange={handleChange}
                  className="form-control py-2"
                  style={{fontSize:'11px'}}
                />
              </label>  
              </div>
                </div>


                <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                <label 
              htmlFor="email" 
              className="my-1 w-100">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" Email Address"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  className="form-control w-100 py-2"
                  style={{fontSize:'11px'}}
                />
              </label>
              </div>
                </div>


                <div className="container">

<p className="mb-0 mt-2"
     style={{fontSize:'12px'}}>Choose service of desired:</p>

</div>
                <div className="container d-flex w3-padding-large">
                <span className="w3-margin-right">
                    
                <Form.Check aria-label="website" 
                onChange={handleChange}
        
                label="Website"
                name="website"
                value={inputs.website || ""}
                id="website"
                style={{fontSize:'12px'}}
                />
</span>
  <span className="w3-margin-right">
<Form.Check aria-label="graphics" 
  onChange={handleChange}
  label="Graphics"
  name="graphics"
  value={inputs.graphics || ""}
  id="graphics"
  style={{fontSize:'12px'}}
/>
</span>
  <span className="w3-margin-right">
<Form.Check aria-label="marketing" 
  onChange={handleChange}
  label="Marketing"
  name="marketing"
  value={inputs.marketing || ""}
  id="marketing"
  style={{fontSize:'12px'}}
/>
</span>
</div>

                <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
              <textarea 
                name="textarea"
                id="textarea"
                placeholder="Type description of what you are looking for..."
                rows="4"
              value={inputs.textarea || ""}
              onChange={handleChange} 
              className="form-control w-100 "
              style={{fontSize:'11px'}}
              />
                </div>
</div>
<div className="row mt-1">
<div className="col-sm-12 col-md-12 col-lg-12">
              <label 
              htmlFor="submit"
              className="mt-1">
              <input 
              type="submit" 
                value="Submit"
                onChange={handleChange}
              className='btn w3-black fw-bold px-4 my-1 py-2'
              >
              </input>
              </label>
              </div>
              </div>
            </form>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default WebContactForm;