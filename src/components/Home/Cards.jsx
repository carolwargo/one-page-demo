import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Catch from '../../assets/images/Catch.png';
import Hit from '../../assets/images/Hit.png';
import Website2 from '../../assets/images/Website2.png';



const HomeCards = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });

    return (
      <div  className="container-fluid">
<motion.div
      ref={ref}
      initial={{ y: -20, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 20, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
       className="w3-padding-32"
    >
             <div className='w3-container w3-content text-center mb-2'>
  <h2 className='text-center w3-text-pink'><b>THINK OF THE POSSIBILITIES!</b></h2>
  <h3>Responsive image styling examples that enhance visual appeal without complicating or compromising function.</h3>
  </  div>
  <div className='w3-container w3-content text-center mb-2'>
<div className="row d-flex justify-content-center align-items-center w3-padding-large w3-padding-24">
  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-2">
    {/* Image Container */}
    <div className="position-relative ">
      <img src={Website2} alt="website-service" style={{ width: '100%' }} className="w3-round-xlarge shadow shadow-5-strong hover-shadow w3-hover-pink" />
      {/* Dark Overlay */}
      <div className="position-absolute w3-round-xlarge top-0 start-0 w-100 h-100 bg-danger-subtle opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
    </div>
    {/* Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
      <h2 className="w3-text-pink" style={{ fontSize:'3rem'}}>Websites</h2>
      <p>This is the text overlaid on the image.</p>
      <button tag="a" className='btn w3-pink' size="lg">
                Learn More
              </button>
    </div>
  </div>
  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-2">
    {/* Image Container */}
    <div className="position-relative">
      <img src={Hit} alt="girlcamera" style={{ width: '100%' }} className=" w3-round-xlarge shadow shadow-5-strong hover-shadow w3-hover-pink" />
      {/* Dark Overlay */}
      <div className="position-absolute w3-round-xlarge top-0 start-0 w-100 h-100 bg-danger-subtle opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
    </div>
    {/* Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
    <h2 className="w3-text-pink" style={{ fontSize:'3rem'}}>Graphics</h2> 
    <p>This is the text overlaid on the image.</p>
    <button tag="a" className='btn w3-pink' size="lg">
                Learn More
              </button>
    </div>
  </div>
  <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-2">
    {/* Image Container */}
    <div className="position-relative ">
      <img src={Catch} alt="website-service" style={{ width: '100%' }} className="w3-round-xlarge shadow shadow-5-strong hover-shadow w3-hover-pink" />
      {/* Dark Overlay */}
      <div className="position-absolute w3-round-xlarge top-0 start-0 w-100 h-100 bg-danger-subtle opacity-70  shadow shadow-5-strong  w3-hover-pink"></div>
    </div>
    {/* Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
    <h2 className="w3-text-pink" style={{ fontSize:'3rem'}}>Marketing</h2> 
    <p>This is the text overlaid on the image.</p>
    <button tag="a" className='btn w3-pink' size="lg">
                Learn More
              </button>
    </div>
  </div>
</div>
</div>
     </motion.div>
      </div>

    )
}

export default HomeCards