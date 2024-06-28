import React from "react";
//import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import { ListGroup } from 'react-bootstrap';
//import Clay2 from "../../assets/images/Clay2.png";
import about from '../../assets/images/about.png';   

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });



  return (
    <div className="container-fluid"> 
    <motion.div
      ref={ref}
      initial={{ y: -20, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 20, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
       className="w3-padding-32"
    >


     <div className="w3-container w3-content">
{/**Start About Section*/}
      <div className="row w3-padding-32 justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6">
        <h1 className='mb-3' style={{fontSize:"2.5rem"}}>
    <span style={{fontSize:"2.5rem"}}><b>Recruitment</b></span>
    <br />
    <i>Statistics</i> &
    <span style={{fontFamily:"Dancing Script"}}> Facts</span>
</h1>
<h3 style={{fontFamily:'sans-serif'}}>College Sports: Participation, Scholarships, and Commitment</h3>
<p style={{fontFamily:'sans-serif'}}>Explore key metrics and insights for aspiring college athletes aiming to play at the next level.</p>
</div>

        <div className="col-sm-12 col-md-6 col-lg-6">
         
          <img src={about} alt="about" style={{ width: "100%" }}  
          className='rounded shadow'/>
        </div>
      </div>
      </div>

      <div className="w3-container w3-content" style={{fontFamily:'sans-serif'}}>
<div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title w3-text-pink mb-1"><b style={{fontSize:'24px'}}>QUESTION:</b></div>
              <div className="card-text w3-margin-bottom"
              style={{fontSize:'14px'}}>
                <i> WHAT IS THE HIGH SCHOOL TO COLLEGE CONVERSION RATE?</i>
              </div>
              <div className="card-title w3-text-pink mb-1"><b style={{fontSize:'24px'}}>ANSWER:</b></div>
              <div className="card-text w3-margin-bottom"
              style={{fontSize:'14px'}}>
                <i> Only about 7% of high school student-athletes end up competing in the 
                    NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA 
                    sports, just under 500,000 make it to the NCAA.</i>
              </div>
              </div>
          </div>
          </ div>
          <div className="col-sm-12 col-md-6">
          </ div>
          </div>
          </div>
   
 {/**Start STATS List Group container
<div className="w3-container w3-content">
<div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <ListGroup as="ol" style={{ borderRadius: '0px' }} >
            <ListGroup.Item as="li" className="my-3 d-flex align-items-center justify-content-center">
              <div  className='w3-padding w3-margin-top'>
             <h5 className="w3-text-pink"><b>Q:<i> WHAT IS THE HIGH SCHOOL TO COLLEGE 
             CONVERSION RATE?</i></b></h5>
          
                  <p style={{fontSize:'14px'}}>A: <i> Only about 7% of high school student-athletes end up competing in the 
                    NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA 
                    sports, just under 500,000 make it to the NCAA.</i></p>
                  </div>
            </ListGroup.Item>


           
            <ListGroup.Item as="li" className="my-3 d-flex align-items-center justify-content-center">
              <div  className='w3-padding w3-margin-top'>
             <h5 className="w3-text-pink"><b>Q:<i> HOW MUCH DO GRADES REALLY MATTER & WHY?</i></b></h5>
          
                  <p style={{fontSize:'14px'}}>A: <i> Only about 7% of high school student-athletes end up competing in the 
                    NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA 
                    sports, just under 500,000 make it to the NCAA.</i></p>
                  </div>
            </ListGroup.Item>
     
          </ListGroup>
        </div>
        <div className="col-sm-12 col-md-6">
          <ListGroup as="ol" style={{ borderRadius: '0px' }} className="d-flex align-items-center justify-content-center">
          <ListGroup.Item as="li" className="my-3 d-flex align-items-center justify-content-center">
              <div  className='w3-padding w3-margin-top'>
             <h5 className="w3-text-pink"><b>Q:<i> WHAT IS THE HIGH SCHOOL TO COLLEGE 
             CONVERSION RATE?</i></b></h5>
          
                  <p style={{fontSize:'14px'}}>A: <i> Only about 7% of high school student-athletes end up competing in the 
                    NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA 
                    sports, just under 500,000 make it to the NCAA.</i></p>
                  </div>
            </ListGroup.Item>


           
            <ListGroup.Item as="li" className="my-3 d-flex align-items-center justify-content-center">
              <div  className='w3-padding w3-margin-top'>
             <h5 className="w3-text-pink"><b>Q:<i> HOW MUCH DO GRADES REALLY MATTER & WHY?</i></b></h5>
          
                  <p style={{fontSize:'14px'}}>A: <i> Only about 7% of high school student-athletes end up competing in the 
                    NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA 
                    sports, just under 500,000 make it to the NCAA. </i></p>
                  </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
</div>
*/}
{/**End STATS List Group container*/}
</motion.div>
        </div>
    
        );
        }   

export default Stats;