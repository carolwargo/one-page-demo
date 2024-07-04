import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k9br2bn", "template_cbcuf3i", form.current, {
        publicKey: "istqPyzB2IlqKLona",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      {/* CONTENT START */}

      <div className="card shadow">
          <div className="w3-container justify-content-start align-items-center mt-3">
            <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="container mb-1 w3-text-blue text-start">
                    <b><i>INQUIRY FORM</i></b>
                  </div>
                <div className="col-sm-6 col-md-6 col-lg-6 mt-1">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                 className="form-control shadow border-dark-subtle"
                 style={{fontSize:'12px'}}
                />
</div>
<div className="col-sm-6 col-md-6 col-lg-6 mt-1">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="form-control shadow border-dark-subtle"
                  style={{fontSize:'12px'}}
                />
                </div>
                </div>
                <div className="row mt-1">
                <div className="col-sm-5 col-md-5 col-lg-5 mt-1">
                <input
                  type="number"
                  name="user_phone"
                  placeholder="123-456-7890"
                 className="form-control shadow border-dark-subtle"
                 style={{fontSize:'12px'}}
                />
</div>
<div className="col-sm-7 col-md-7 col-lg-7 mt-1">
<input
                  type="email"
                  name="user_email"
                  placeholder="email@mail.com"
                  className="form-control shadow border-dark-subtle"
                  style={{fontSize:'12px'}}
                />
                </div>
                </div>
           

              <div className="form-group">
              <p className="m-1 py-2 text-start" style={{ fontSize: '12px' }}>
  Share your vision <span style={{ fontStyle: 'italic' }}>(e.g., on behalf of whom, the specific club or sport, deadlines, etc.).</span>
</p>

<textarea
                  name="message"
                  className="form-control shadow border-dark-subtle"
                  placeholder="type message..."
                    rows="5"
                    style={{fontSize:'12px'}}
                />
              </div>
              <div className="w3-margin-top">
                <input
                  type="submit"
                  value="Submit"
                  className="text-white w3-button w3-round-large w3-blue"
                  style={{fontSize:'13px', paddingTop:'5px', paddingBottom:'5px', paddingRight:'2rem', paddingLeft:'2rem'}}
                />
              </div>
            </form>
          </div>

          <br />
       
      </div>
    </div>
  );
};

export default ContactPage;
