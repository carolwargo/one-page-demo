import React from 'react';
import LocationView from '../../assets/images/LocationView.png';


function CatchingFooter() {

    return (
        <div>
            <div className="w3-container w3-padding-48" id="contact">
  <div className="row justify-content-center align-items-center">
    <div className="col-sm-12 col-md-6 col-lg-6" >
<div className="container">
<h1 className="w3-border-light-grey w3-padding-16"><b>CONTACT</b>US</h1>
    <p>Let's talk about our next project.</p>
 
<form action="/action_page.php" target="_blank">
      <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment"/>
      <button className="w3-button w3-black w3-section" type="submit">
        <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>
</div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
    <div className="container">
  <h3 className="w3-border-light-grey w3-padding-8 w3-margin-bottom">WHERE WE OPERATE!</h3>
   
   
   
  <img src={LocationView} className="w3-image" alt='location-map' style={{width:"100%"}}/>
    <div className="w3-margin-top">
    <p>Days of Operation: <br />Sunday-Saturday: By Appointment Only
    <br/> Schedule today! 
    </p>
    </div>
    </div>
</div>

  </div>
  </div>
  
   {/*End Page Container */}
   
 {/*End Page Content */}

        </div>
    );
    }

export default CatchingFooter;