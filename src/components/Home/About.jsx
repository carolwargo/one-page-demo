import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Def6 from '../../assets/images/Def6.png';   
import Website2 from '../../assets/images/Website2.png';
import FlipCard from "../Cards/FlipCard";


const About = () => {
  const { ref, inView } = useInView({
    
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });


  return (
    <div  className="container-fluid ">
    <motion.div
      ref={ref}
      initial={{ y: -20, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 20, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
      className="w3-padding-32">

       
     <div className="w3-container w3-content">
      
{/**Start About Section*/}
      <div className="row w3-padding-32 justify-content-center align-items-center">
        <FlipCard />
        <div className="col-sm-12 col-md-7 col-lg-7 w3-padding-large">
      
  
      
      <div className="content">
        <section className="section">
          
          <h2>Playing at the next level is a choice. However, engaging in the recruitment process is essential.</h2>
        </section>
        
        <section className="section mt-4">
          <p>Conscribe empowers student-athletes to take charge of their recruitment journey. Our strategic marketing platform enables them to showcase their academic and athletic achievements on their own terms, connecting directly with college coaches. Take control of your future with Conscribe.</p>
        </section>
        
        <div className="cta">
          <p>Ready to take control of your recruitment journey?</p>
         <Link to='/' className="w3-text-pink">
     <b className="w3-margin-right"> Get Started Now</b> <i className="fas fa-arrow-right"></i>
        
          </Link> 
        </div>
      </div>

     </div>
           
     <div className="col-sm-12 col-md-5 col-lg-5 w3-padding-large">

     <img src={Def6} alt="about" 
            style={{
              width: "100%", 
              boxShadow: "1px 1px 10px rgba(255, 255, 255, .4)"
            }}
            className=' w3-round-xlarge shadow-3-secondary'/>
        </div>
      </div>
  
<div className="row d-flex justify-content-center align-items-center w3-padding-large w3-padding-16">
  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-2">
    {/* Image Container */}
    <div className="position-relative ">
      <img src={Website2} alt="website-service" style={{ width: '100%' }} className="w3-round-xlarge shadow shadow-5-strong hover-shadow w3-hover-pink" />
      {/* Dark Overlay */}
      <div className="position-absolute w3-round-xlarge top-0 start-0 w-100 h-100 bg-black opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
    </div>
    {/* Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
      <h2 className="w3-text-pink" style={{ fontSize:'3rem'}}>Websites</h2>
      <p>This is the text overlaid on the image.</p>
    </div>
  </div>

  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-2">
    {/* Image Container */}
    <div className="position-relative ">
      <img src={Website2} alt="website-service" style={{ width: '100%' }} className="w3-round-xlarge shadow shadow-5-strong hover-shadow w3-hover-pink" />
      {/* Dark Overlay */}
      <div className="position-absolute w3-round-xlarge top-0 start-0 w-100 h-100 bg-black opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
    </div>
    {/* Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
      <h2 className="w3-text-pink" style={{ fontSize:'3rem'}}>Websites</h2>
      <p>This is the text overlaid on the image.</p>
    </div>
  </div>

  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-2">
    {/* Image Container */}
    <div className="position-relative ">
      <img src={Website2} alt="website-service" style={{ width: '100%' }} className="w3-round-xlarge shadow shadow-5-strong hover-shadow w3-hover-pink" />
      {/* Dark Overlay */}
      <div className="position-absolute w3-round-xlarge top-0 start-0 w-100 h-100 bg-black opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
    </div>
    {/* Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
      <h2 className="w3-text-pink" style={{ fontSize:'3rem'}}>Websites</h2>
      <p>This is the text overlaid on the image.</p>
    </div>
  </div>
</div>
</div>

{/** 
      <div className="w3-container w3-content">
    <div className="row w3-padding-32 justify-content-center align-items-center w3-grayscale">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title"> <b>OUR</b><span className="text-secondary">VISION.</span></h3> 
            <div className="card-text">
            Driven by a visionary outlook, our approach to real estate is refreshingly distinct. Unlike conventional definitions of luxury that prioritize size and paid amenities, our vision is centered around the notion of uniqueness. For us, luxury properties are not merely defined by their grandeur, but by their exceptional qualities and unparalleled character. It's this emphasis on individuality and exclusivity that sets their projects apart in a crowded marketplace.
            </div>
          </div>
        </div>
        </div>

      <div className="col-md-4">
      <div className="card">
          <div className="card-body">
            <h3 className="card-title"> <b>OUR</b><span className="text-secondary">PASSION.</span></h3> 
            <div className="card-text">
            Our passion lies in uncovering hidden gems, each property meticulously chosen for its ability to transport you to a world of unparalleled tranquility and opulence. Whether you seek the solace of a high-end cabin enveloped by nature's embrace, the serenity of a she shed designed for refined relaxation, or the rustic charm of a barn transformed into a luxurious abode, Peasant Properties is your gateway to an extraordinary living experience.
            </div>
          </div>
        </div>
        </div>

      <div className="col-md-4">
      <div className="card">
          <div className="card-body">
            <h3 className="card-title"><b>OUR</b><span className="text-secondary">COMMITMENT.</span></h3> 
            <div className="card-text">
            We pledge and fully commitment to personalized service and an unwavering dedication to excellence, striving to make an impact on the recruiting process and dream of owning a unique sanctuary a reality. Trust in Peasant Properties to guide you on a journey to discover the extraordinary, where luxury meets seclusion and exclusivity knows no bounds. Welcome to a world where every property tells a story, and your next chapter begins with us.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  */}
  

</motion.div>
        </div>
    
        );
        }   

export default About;