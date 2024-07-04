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
    <div className="contact" id="contact">
      {/* CONTENT START */}

      <div className="card">
        <div className="w3-container text-center justify-content-center align-items-center ">
          <div className="w3-container w3-justify align-items-center mt-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label style={{ fontSize: "14px" }}>Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label style={{ fontSize: "14px" }}>Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="email@mail.com"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label style={{ fontSize: "14px" }}>Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="type message..."
                    rows="6"
                />
              </div>
              <div className="w3-margin-top">
                <input
                  type="submit"
                  value="Send"
                  className="px-4 text-white w3-button w3-round-xxlarge"
                  style={{ backgroundColor: "#FF385C" }}
                />
              </div>
            </form>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
