import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {  Grid } from 'rsuite';
import { FaAngleRight } from "react-icons/fa";
import 'rsuite/dist/rsuite.min.css';
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled} from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";

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

      <div className="w3-container w3-content text-center">
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-3 col-lg-3 flex-column">
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 flex-column text-black">
            <h5>Protection from risks related to the day-to-day running of your small- from legal liability to property damage.</h5>
   
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 flex-column">
            </div>
     </div>
 </div>

  
    <Grid fluid className="d-flex justify-content-center mt-3">
      <div className='row'>
        <div className='col' xs={24}>
 
    <div>
    <p> <TbCircleNumber1Filled style={{fontSize:'2rem', color:'#2196F3',  boxShadow:' -3px 0 10px yellow'}} className='w3-round-xxlarge'/> Fill in our quick form.</p>
    </div>
    <div>
    <p className='mt-2'><TbCircleNumber2Filled style={{fontSize:'2rem', color:'#2196F3',  boxShadow:' -3px 0 10px yellow'}} className='w3-round-xxlarge'/> Select site options.</p>
   </div>
   <div>
   <p className='mt-2'> <TbCircleNumber3Filled  style={{fontSize:'2rem', color:'#2196F3',  boxShadow:' -3px 0 10px yellow'}} className='w3-round-xxlarge'/> Relax while we work!</p>  
 </div>
 
        </div>
      </div>
      </Grid>
      <div className="container d-flex justify-content-center w3-padding-16 mb-3">
      <button  className='btn w3-yellow fw-bold button-glow px-4'>
     Start your inquiry
              </button>
              </div>
         



 
 <div className="w3-container w3-content text-center w3-padding-32 shadow"
    style={{ backgroundImage: 'linear-gradient(to bottom right, #2196F3, lightblue, lightblue, lightyellow, lightyellow )'}}
  
    >
    
      <div className="block w3-margin w3-text-black">
        <h2>Types of websites options</h2>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
      <button  className='btn w3-yellow button-glow px-4'>
     Start your inquiry < FaAngleRight /> 
              </button>
              </div>
  
   
 </div>
    </div>
    </motion.div>
  
  );
}

export default SimpleTimeline;
