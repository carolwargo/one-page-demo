import React from "react";
import { Carousel } from "react-bootstrap";
import "./header.css";
import { Link } from "react-router-dom";
import LightBBBG from "../../assets/images/LightBBBG.png";



const Header = () => {
  /*const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time the div enters the viewport
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
*/
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

  return (

     <div>
        <header>
        <Carousel
          id="intro-example"
          className="bg-image position-relative"
          interval={2000}
        >

<Carousel.Item>
  <div
    className="d-block"
    style={{
      backgroundImage: `url(${LightBBBG})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      height: "70vh",
    }}
  >
    <div
      className="container d-flex align-items-center justify-content-center text-white"
      style={{ height: '100%' }}  // Ensure full height for flexbox alignment
    >
      <div className="text-center">  {/* Center align text */}
      <div className=" w3-content">
         <h1 className="glowing-brand text-pink">
            <span className="w3-text-pink fw-bold" style={{fontSize:'4rem'}}>CONSCRIBE</span>.</h1>
         <h2 className="align-items-center mb-4 text-black fw-bold w3-padding-16"> PROVIDING CONTROLLED
<span className="glowing-text text-pink fw-bold"><i> RECRUITING STRATEGIES & PLATFORMS</i></span> FOR STUDENT-ATHELETES. 
        </h2>
<br />

<Link to="/about">
<button 
type="button" 
className="button-glow btn w3-padding-large w3-blue mx-1"
style={{ fontSize:'16px'}}
onClick={scrollToTop}
>
<b>LEARN MORE</b>
</button>
 </Link>

{/** 
        <Link to="/services">
          <button type="button" className="button-glow btn w3-blue mx-1">
           <b>VIEW SERVICES</b></button>
        </Link>
        */}
        </div>
        <br />
      </div>
    </div>
  </div>
</Carousel.Item>
        </Carousel>
      </header>
      </div>
  );
};

export default Header;
