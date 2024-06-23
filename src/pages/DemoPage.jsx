import React from "react";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Clay2 from "../assets/images/Clay2.png"

//import { FaImage } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="w3-light-grey" >
      <div className="w3-bar w3-wide w3-padding  shadow">
        <a href="#backend" className="w3-bar-item w3-button" style={{fontSize:'14px'}}>
          <b>DALY</b> WARGO
        </a>

        <div className="w3-right">
          <a href="#projects" className="w3-bar-item w3-button" style={{fontSize:'14px'}}>
            BIO
          </a>
          <a href="#about" className="w3-bar-item w3-button" style={{fontSize:'14px'}}>
            ATHLETICS
          </a>
          <a href="#about" className="w3-bar-item w3-button" style={{fontSize:'14px'}}>
            ACADEMICS
          </a>
          
          <a href="#about" className="w3-bar-item w3-button" style={{fontSize:'14px'}}>
            FILM
          </a>
          <a href="#contact" className="w3-bar-item w3-button" style={{fontSize:'14px'}}>
            CONTACT
          </a>
        </div>
      </div> 
     

      {/*NOTES: 1. I certify I am in compliance... 2. Core Classes calculated... 3. Student pledge... 4. Metrics */}
      {/* nav start */}
      {/**  <div className="w3-bar w3-black ">
        <a href="/" className="w3-bar-item w3-button">
          <i className="fab fa-facebook-official"></i>
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <i className="fas fa-phone"></i>
        </a>
      </div>
        */}
      {/* nav end*/}
      {/* start whole page content container */}
      <div className="w3-content" style={{ maxWidth: "1600px" }}>
        {/* start header */}
        <header className="w3-container w3-center w3-padding-48 w3-white">
          <h1 className="w3-xxxlarge">
            <b>DALY WARGO</b>
          </h1>
          <p className="w3-tag bg-secondary-subtle  p-2 ">
            VOLLEYBALL RECRUIT <b>|</b> CLASS of 2026 <b>|</b> Maryland <b>|</b>{" "}
            6'0" <b>|</b> Setter
          </p>
          {/** <hr className='justify-content-center my-2' style={{width:'50%', margin:'0 auto'}} />*/}
          <div>
            <a href="/" className="w3-button">
              <i
                className="fab fa-facebook-official "
                style={{ fontSize: "1.5rem" }}
              ></i>
            </a>
            <a href="/" className="w3-button">
              <i
                className="fab fa-instagram text-black"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </a>
            <a href="/" className="w3-button">
              <i
                className="fas fa-envelope text-black"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </a>
            <a href="/" className="w3-button">
              <i
                className="fas fa-phone text-black"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </a>
          </div>
        </header>
        {/* end header */}

        {/* start main layout */}
        <div className="w3-row w3-padding">
          {/* start main layout entries*/}
          <div className="w3-col l8 s12">
            {/* start entry 1*/}
            <div className="w3-container w3-white w3-margin w3-padding-large">
              <div className="w3-center w3-margin-top">
            <h4>
               HIGH SCHOOL SEASON <span className="w3-opacity" style={{fontSize:'1rem'}}>
                  <br/>SOPHOMORE (2023)</span>
                </h4>
              </div>
              {/* end title div*/}
              {/* start image entry*/}
              <div className="w3-justify">
                <img
                  src={Clay2}
                  alt="clay-square"
                  style={{ width: "100%" }}
                  className="w3-padding-16"
                />
                <p>
                  <strong>Description!</strong> Provide some context... Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  nulla non veniam, quas hic magni eius veritatis eligendi
                  nostrum impedit ab vero, eaque cupiditate temporibus animi quo
                  nisi itaque pariatur.
                </p>

                <p className="w3-clear"></p>
                <div className="w3-row w3-margin-bottom" id="demo1" style={{}}>
             
                </div>
              </div>
              {/* end entry 1*/}
            </div>

            {/* start entry 2*/}
            <div className="w3-container w3-white w3-margin w3-padding-large">
              <div className="w3-center w3-margin-top">
              <h4>
               HIGH SCHOOL SEASON <span className="w3-opacity" style={{fontSize:'1rem'}}>
                  <br/>SOPHOMORE (2023)</span>
                </h4>
              </div>
              {/* end title div*/}
              {/* start image entry*/}
              <div className="w3-justify">
                <img
                  src={Clay2}
                  alt="clay-square"
                  style={{ width: "100%" }}
                  className="w3-padding-16"
                />
                <p>
                  <strong>Description!</strong> Provide some context... Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  nulla non veniam, quas hic magni eius veritatis eligendi
                  nostrum impedit ab vero, eaque cupiditate temporibus animi quo
                  nisi itaque pariatur.
                </p>

                <p className="w3-clear"></p>
                <div className="w3-row w3-margin-bottom" id="demo1" style={{}}>
             
                </div>
              </div>
              {/* end entry 1*/}
            </div>
            {/* end entry 2*/}

            {/* start entry 3*/}
            <div className="w3-container w3-white w3-margin w3-padding-large">
              <div className="w3-center w3-margin-top">
              <h4>
               HIGH SCHOOL SEASON <span className="w3-opacity" style={{fontSize:'1rem'}}>
                  <br/>SOPHOMORE (2023)</span>
                </h4>
              </div>
              {/* end title div*/}
              {/* start image entry*/}
              <div className="w3-justify">
                <img
                  src={Clay2}
                  alt="clay-square"
                  style={{ width: "100%" }}
                  className="w3-padding-16"
                />
                <p>
                  <strong>Description!</strong> Provide some context... Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  nulla non veniam, quas hic magni eius veritatis eligendi
                  nostrum impedit ab vero, eaque cupiditate temporibus animi quo
                  nisi itaque pariatur.
                </p>

                <p className="w3-clear"></p>
                <div className="w3-row w3-margin-bottom" id="demo1" style={{}}>
             
                </div>
              </div>
              {/* end entry 1*/}
            </div>
            {/* end entry 3*/}
          </div>
          {/* end entry col*/}
          <div className="w3-col l4">
            <div className="w3-white w3-margin">
              <img
                src={Clay2}
                alt="clay"
                style={{ width: "100%" }}
                className="w3-grayscale"
              />
              <div className="w3-container w3-black">
                <h5 className="w3-padding-top-16">DALY WARGO</h5>
                <p style={{fontSize:'12px'}}><b>Class of 2026</b><br/>
              </p>
              </div>
            </div>
            {/* end about container */}

            <div className="w3-white w3-margin">
              <div className="w3-container w3-padding w3-black">
                <h5> <i className="fas-fa-user"></i>PLAYER PROFILE</h5>
              </div>
              <div className="w3-container w3-white">
                <div
                  className="w3-container w3-display-container w3-light-grey w3-section d-flex justify-content-start align-items-center"
                  style={{ height: "200px" }}
                >
                    <p><b>GRAD YEAR: </b>2026
                    <br/>
                    <b> HEIGHT: </b>5'9
                   
                    <br/>
                    <b> POSITION:  </b>Setter
                    <br/>
                    <b> HOMETOWN: </b>Maryland 
                    <br/>
                    <b> HIGH SCHOOL:</b> Northern High School (Owings, MD)
                    <br/>
                    <b> SUMMER TEAM: </b>?
                  </p>
                </div>
              </div>
            </div>
            <hr />

            {/* start advertising */}
            <div className="w3-white w3-margin">
              <div className="w3-container w3-padding w3-black">
                <h5>PLAYER CONTACT</h5>
              </div>
              <div className="w3-container w3-white">
                <div
                  className="w3-container w3-display-container w3-light-grey w3-section align-items-center w3-margin-top"
                  style={{ height: "150px" }}
                >
                  <br />
              <i
                className="fas fa-envelope "
              ></i> <b>EMAIL </b>
               <a href="mailto:dalywargo@gmail.com" 
               className="w3-margin-left">dalywargo@gmail.com

            </a>
               <br />

               <i
                className="fa-solid fa-square-phone"
              ></i> <b>PHONE </b>
               <a  href="telto: 1(123)456-7890" 
               className="w3-margin-left">(301) 123-4567

            </a>

         
            <br />
            <br />
            <p>Connect on social media: <a href="/" className="w3-button rounded px-1 py-2">
              <i
                className="fab fa-facebook "
                style={{ fontSize: "1rem" }}
              ></i>
            </a>
         
              <a href="/" className="w3-button rounded px-1 py-2">
              <i
                className="fab fa-instagram "
                style={{ fontSize: "1rem" }}
              ></i>
            </a> 

            </p>
                </div>
              </div>
            </div>
            <hr />
            {/* end advertising */}

            <div className="w3-white w3-margin">
              <div className="w3-container w3-padding w3-black">
                <h4>References</h4>
              </div>
              <ul className="w3-ul w3-hoverable w3-white">
                <li className="w3-padding-16">
                  <img
                    src={Clay2}
                    alt="clay"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <span className="w3-large">Metrics</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src={Clay2}
                    alt="clay"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <span className="w3-large">Metrics</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src={Clay2}
                    alt="clay"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <span className="w3-large">Metrics</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src={Clay2}
                    alt="clay"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <span className="w3-large">Metrics</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </li>
              </ul>
            </div>
            <hr />
            {/* end posts */}
            {/* start testimonials | references*/}
            <div className="w3-white w3-margin">
              <div className="w3-container w3-margin-bottom w3-padding w3-black">
                <h4>Downloads Dashboard</h4>
              </div>
              <div className="w3-row-padding w3-white">
                <div className="w3-col s6">
                  <img src={Clay2} alt="clay" style={{ width: "100%" }} />
                  <p className="text-center">
                    <a href="/" alt="schedule">
                      School Schedule
                    </a>
                  </p>

                  <img src={Clay2} alt="clay" style={{ width: "100%" }} />
                  <p className="text-center">
                    {" "}
                    <a href="/" alt="schedule">
                      Contact Share
                    </a>
                  </p>
                </div>
                <div className="w3-col s6">
                  <img src={Clay2} alt="clay" style={{ width: "100%" }} />
                  <p className="text-center">
                    <a href="/" alt="schedule">
                      Club Schedule
                    </a>
                  </p>

                  <img src={Clay2} alt="clay" style={{ width: "100%" }} />
                  <p className="text-center">
                    {" "}
                    <a href="/" alt="schedule">
                      Stats Sheet
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <hr />

            {/* start tags*/}
            <div className="w3-white w3-margin">
              <div className="w3-container w3-margin-bottom w3-padding w3-black">
                <h4 className="">Tags</h4>
              </div>
              <div className="w3-container w3-white">
                <p>
                  <span className="w3-tag w3-black w3-margin-bottom">
                    NCAA{" "}
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Student-Athelete
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Volleyball
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Recruit
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    2026
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Maryland{" "}
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Rankings{" "}
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Passing
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Serve
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Assists
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Blocks
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Ace
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Kills
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Team Captain{" "}
                  </span>
                </p>
              </div>
            </div>
            <hr />
            {/* end tags*/}

            <div className="w3-white w3-margin">
              <div className="w3-container w3-margin-bottom w3-padding w3-black">
                <h4>Follow Me</h4>
              </div>
              <div className="w3-container w3-xlarge w3-padding">
                <i className="fab fa-facebook-official w3-hover-opacity"></i>
                <i className="fab fa-instagram w3-hover-opacity mx-2"></i>
                <i className="fab fa-snapchat w3-hover-opacity"></i>
              </div>
            </div>
            <hr />
            {/* end inspiration*/}
            {/* start subscribe*/}
            <div className="w3-white w3-margin">
              <div className="w3-container w3-margin-bottom w3-padding w3-black">
                <h4>Subscribe</h4>
              </div>
              <div className="w3-container w3-white">
                <p>Enter your e-mail below for update notifications.</p>
                <p>
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Enter e-mail"
                    style={{ width: "100%" }}
                  />
                </p>
                <p>
                  <button type="button" className="w3-button w3-block w3-red">
                    Subscribe
                  </button>
                </p>
              </div>
            </div>
            {/* end subscribe*/}
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end whole page content container */}
      {/* start subscribe model*/}
      <div id="subscribe" className="w3-modal w3-animate-opacity">
        <div className="w3-modal-content" style={{ padding: "32px" }}>
          <div className="w3-container w3-white">
            <i className="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
            <h2 className="w3-wide">SUBSCRIBE</h2>
            <br />
            <p>
              Join my mailing list to receive updates on the latest blog posts
              and other things.
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Enter e-mail"
              />
            </p>
            <button
              type="button"
              className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom"
              style={{ display: "none" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* end subscribe model*/}

      {/* start footer*/}
      <footer className="w3-container w3-dark-grey" style={{ padding: "32px" }}>
        <h4 className="text-center">
          I WILL FINISH FOOTER AT THE END WHEN LAYOUT IS COMPLETE
        </h4>
        <a
          href="/"
          className="w3-button w3-black w3-padding-large w3-margin-bottom"
        >
          <i className="fa fa-arrow-up w3-margin-right"></i>To the top
        </a>
        <div className="">
          <div>
            <a href="/" className="w3-bar-item w3-button">
              <i className="fab fa-facebook-official"></i>
            </a>
            <a href="/" className="w3-bar-item w3-button">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="w3-bar-item w3-button">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="/" className="w3-bar-item w3-button">
              <i className="fas fa-phone"></i>
            </a>
          </div>
          <div>
            <p className="text-center w3-margin-bottom w3-padding-large">
              <span className="mx-2">VIDES</span>{" "}
              <span className="mx-2">BIO</span>{" "}
              <span className="mx-2">PROFILE</span>{" "}
              <span className="mx-2">ACCOLADES</span>{" "}
              <span className="mx-2">CONTACT</span>
            </p>
          </div>
        </div>
      </footer>
      {/* end footer*/}
    </div>
  );
};

export default Blog;
