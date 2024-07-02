import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled} from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import WebContactForm from "../../components/Web/WebContactForm";

const SimpleTimeline = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });
  return (
  

      <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >
      
<div>
 
<div className="w3-container w3-content w3-padding-32 shadow w3-padding-large"
    style={{ backgroundImage: 'linear-gradient(to bottom right, black,  #2196F3, black )'}}>
  
      <div className="w3-container w3-content">
    <div className="row d-flex justify-content-center align-items-center w3-padding-large">
    <div className="col-sm-12 col-md-5 col-lg-5 flex-column text-white">
    <div className="container-fluid">
    <h2 className="w3-text-white mb-2">Getting Started Made Easy.</h2>
            <p>Protection from risks related to the day-to-day running of your small- from legal liability to property damage.</p>
           </div>
            <div className="container-fluid mt-4">
    <div className='d-flex justify-content-start align-items-center'>
    <p> 
      <TbCircleNumber1Filled style={{fontSize:'1.75rem', color:'white',  }} 
      className='w3-round-xxlarge'/> Fill out the form provided.</p>   
   </div>
   <div className='d-flex justify-content-start align-items-center'>
    <p className='mt-2'><TbCircleNumber2Filled style={{fontSize:'1.75rem', color:'white',  
      }} className='w3-round-xxlarge'/> Collaborate with Designer.</p>
   </div>
   <div className='d-flex justify-content-start align-items-center'>
   <p className='mt-2'> <TbCircleNumber3Filled  
   style={{
    fontSize:'1.75rem', 
    color:'white',  
    }} 
    className='w3-round-xxlarge'/> Relax while we work!</p>  
      </div>
            </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7 flex-column">
            <div className="container-fluid">
         <WebContactForm/>
           </div>
            </div>    
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">

                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
<p><i className='text-seconday'></i></p>
</div>
                <div className="col-sm-12 col-md-3 col-lg-3">

</div>
              </div>
            </div>
     </div>
 </div>
      </div>
      </div>
    </motion.div>
  
  );
}

export default SimpleTimeline;
