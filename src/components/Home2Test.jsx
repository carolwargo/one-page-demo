import React from "react";
import { Link } from "react-router-dom";
import {motion } from 'framer-motion';
import TextTransition, {presets} from "react-text-transition";
import Subscribe from '../components/Forms/Subscribe';
import LocationView from "../assets/images/LocationView.png";
import Hit from "../assets/images/Hit.png";
import Catch from "../assets/images/Catch.png";
import about from '../assets/images/about.png';   
import TopQuote from '../assets/images/TopQuote.png';
import BottomQuote from '../assets/images/BottomQuote.png';
import ContactForm from '../components/Forms/ContactForm';

const TEXTS = [ 'EMPOWERING', 'TREMENDOUS', 'OUTSTANDING', 'ELITE', 'LEADING', 'UNDENIABLE','PRESENCE',];
  


function HomePage2() {

const [index, setIndex] = React.useState(0);

React.useEffect(() => {
  const intervalId = setInterval(() =>

    setIndex(index => index + 1),
    3000
  );
  return () => clearTimeout(intervalId);
}
, []);

    return (
        <div className="home w3-black" id="home">
       
  <motion.div
        initial={{ y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        className="home"
        
        >
  
 {/*Start Page Content */}
 <div className="w3-content w3-padding">
 {/**Start page container */}
 <div className="w3-container w3-padding-top-64">
 <div className='container w3-padding-top-64 text-center mb-2'>
  <h2 className='text-center w3-text-pink'><b>THINK OF THE POSSIBILITIES!</b></h2>
  <h3>Responsive image styling examples that enhance visual appeal without complicating or compromising function.</h3>
  </  div>

<div className="row d-flex justify-content-center align-items-center w3-padding-large w3-padding-24">
  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
    {/* Image Container */}
    <div className="position-relative">
      <img src={Catch} alt="girlcamera" style={{ width: '100%' }} className=" shadow shadow-5-strong hover-shadow w3-hover-pink" />
      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
    </div>
    {/* Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
      <h2>Text on Top</h2>
      <p>This is the text overlaid on the image.</p>
    </div>
  </div>
  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
    {/* Image Container */}
    <div className="position-relative">
      <img src={Hit} alt="girlcamera" style={{ width: '100%' }} className=" shadow shadow-5-strong hover-shadow w3-hover-pink" />
      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
    </div>
    {/* Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
      <h2>Text on Top</h2>
      <p>This is the text overlaid on the image.</p>
    </div>
  </div>
  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
    {/* Image Container */}
    <div className="position-relative">
      <img src={Catch} alt="girlcamera" style={{ width: '100%' }} className=" shadow shadow-5-strong hover-shadow w3-hover-pink" />
      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
    </div>
    {/* Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-black text-center">
      <h2>Text on Top</h2>
      <p>This is the text overlaid on the image.</p>
    </div>
  </div>
</div>
     
   

   <div className="">
   <h3 className=" w3-border-light-grey "><b>MOTOR</b>
    <span className='fw-light'> |PREFERENCE</span></h3>
  <p className="w3-margin-bottom">What is Motor Preference?</p>
  <h4>When you're in the zone, mastering baseball becomes effortless, and 
    every move feels like second nature.</h4>
  
  <p>Entering this state of flow occurs when your natural coordination 
    reaches its peak, allowing you to effortlessly achieve your goals with precision and adaptability.

This seamless coordination relies on your motor preferences, which are 
identified and leveraged through our innovative approach.</p>

   <h5>BENEFITS: </h5>
   <p>
By understanding an athlete's unconscious movement patterns and capitalizing 
on their strengths, we create a personalized Motor Preferences profile. 
This profile guides us in aligning mechanics with individual preferences, 
enhancing performance while reducing the risk of injury and extending 
athletic careers.</p>
<p>Whether you're a physiotherapist, podiatrist, trainer, or coach, this isn't just a passing 
    trend- It's a scientifically backed revolution that transforms how we approach athlete care, 
    prevention, and training.
    <span> <Link to="/" 
    className="link-primary justify-content-end text-decoration-none"> Review the science, Click to learn more...</Link>
        </span>
        </p> 
   <br />
   <br />
    </div>
   
    <h1 className="text-center w3-padding-16" style={{fontSize:'2rem'}}><b>MOTOR</b><span className="text-secondary">|PREFERENCES.</span></h1>
    <div className="container text-align d-flex justify-content-center align-items-center flex-wrap">
<div className="row">
<div className="col-sm-12 col-md-3 col-lg-2"></div>
<div className="col-sm-12 col-md-4 col-lg-4">
  <div className="justify-content-center">
  <p className="text-center"> Click Start Now To Schedule a Profile Evaluation.</p>
   <button className="w3-button w3-blue w3-section mx-1" style={{ boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)', width:'100%' }}>
      <b>START NOW</b><i className="fas fa-angle-double-right w3-margin-left"></i>
    </button>
   </div>
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4">
  <div className="justify-content-center">
  <p className="text-center"> Have Questions? Click Learn more to get the answers. </p>
      <button className="w3-button w3-blue w3-section mx-1" style={{ boxShadow: '0 4px 10px rgba(255, 255, 255, 0.4)', width:'100%' }}>
      <b>LEARN MORE</b><i className="fas fa-angle-double-right w3-margin-left"></i>
    </button>
   </div>
    </div>
    <div className="col-sm-12 col-md-2 col-lg-2"></div>
</div>
</div>

    </div> 
    </div>







{/***********************************************************************/}
{/**Start About Section*/}
<div id="about" className="about-section" style={{ backgroundColor: 'black', width: '100%' }}>
  <div className="w3-padding-large w3-padding-32 text-white">
    <div className="w3-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h1><b>ABOUT</b></h1>
          <h3><b>301</b><span className='fw-light'>|CATCHING</span> </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et voluptas tempora! Repellendus excepturi quod fuga blanditiis quos. Magnam ipsum, aut fuga assumenda magni totam voluptatibus reiciendis laboriosam nihil autem!</p>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <img src={about} alt="about" style={{ width: "100%" }}  className='w3-opacity w3-hover-opacity-off w3-greyscale'/>
        </div>
      </div>
      <br />
    </div>
    <hr />
    <div className="row w3-padding w3-grayscale">
      <div className="col-md-4">
        <div className="container">
          <h3><b>OUR</b><span className="text-secondary">VISION.</span></h3>
          <p style={{ fontSize: '14px' }}>Driven by a visionary outlook, our approach to real estate is refreshingly distinct. Unlike conventional definitions of luxury that prioritize size and paid amenities, our vision is centered around the notion of uniqueness. For us, luxury properties are not merely defined by their grandeur, but by their exceptional qualities and unparalleled character. It's this emphasis on individuality and exclusivity that sets their projects apart in a crowded marketplace.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="container ">
          <h3><b>OUR</b><span className="text-secondary">PASSION.</span></h3>
          <p style={{ fontSize: '14px' }}>Our passion lies in uncovering hidden gems, each property meticulously chosen for its ability to transport you to a world of unparalleled tranquility and opulence. Whether you seek the solace of a high-end cabin enveloped by nature's embrace, the serenity of a she shed designed for refined relaxation, or the rustic charm of a barn transformed into a luxurious abode, Peasant Properties is your gateway to an extraordinary living experience.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="container">
          <h3><b>OUR</b><span className="text-secondary">COMMITMENT.</span></h3>
          <p style={{ fontSize: '14px' }}>We pledge and commitment to personalized service and an unwavering dedication to excellence, we strive to make your dream of owning a unique sanctuary a reality. Trust in Peasant Properties to guide you on a journey to discover the extraordinary, where luxury meets seclusion and exclusivity knows no bounds. Welcome to a world where every property tells a story, and your next chapter begins with us.</p>
        </div>
      </div>
    </div>
    <hr />
    {/* Start Testimonials Grid */}
    <div className="w3-content w3-container  w3-margin-bottom ">
    <img src={TopQuote} alt="topquote" style={{ width: "100%", marginBottom:'0px',  paddingBottom:'0px' }}/>
    <h1 className="text-center" style={{fontSize:'2rem'}}><b>OUR</b><span className="text-secondary">|REPUTATION.</span></h1>
   </div>
    <div className="w3-content w3-container w3-center">
  <div className="row d-flex">
  <div className="col-sm-12 col-md-4 col-lg-4 flex-column align-items-center justify-content-center ">
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 flex-column align-items-center justify-content-center ">
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 flex-column align-items-center justify-content-center ">
    <h1 style={{ fontSize: '2rem', color: 'red', }} className="text-center align-items-center">
   <TextTransition springConfig={presets.gentle}>
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  </h1>
  <p className="text-center"> What others have to say...</p>

    </div>
   
<div className="col-sm-12 col-md-4 col-lg-4 flex-column align-items-center justify-content-center">
    </div>
</div>
</div>
<div className="w3-content w3-container  w3-margin-top">
    <img src={BottomQuote} alt="topquote" style={{ width: "100%"}}/>
    </div>
  </div>
</div>

    <br />
{/**End About Grid */}
{/**End About Section */}
<div className="w3-container w3-padding-48 w3-light-gray" id="contact">
  <div className="row justify-content-center align-items-center">
    <div className="col-sm-12 col-md-6 col-lg-6 w3-margin-bottom" >

<ContactForm/>
    </div>
    
    <div className="col-sm-12 col-md-6 col-lg-6 w3-margin-bottom" >
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
{/*Start Footer*/}
<Subscribe/>

   

</motion.div>
</div>

    );
};

export default HomePage2;