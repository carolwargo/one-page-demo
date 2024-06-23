import React from "react";
//import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ListGroup } from 'react-bootstrap';
//import Clay2 from "../../assets/images/Clay2.png";
import about from '../../assets/images/about.png';   
import { PiNumberSquareTwo } from "react-icons/pi";
import { PiNumberSquareThree } from "react-icons/pi";
import { PiNumberSquareFour } from "react-icons/pi";
import { PiNumberSquareFive } from "react-icons/pi";
import { PiNumberSquareSix } from "react-icons/pi";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });



  return (
    <div className="container-fluid w3-aqua"> 
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
        <h1 className='mb-3' 
             style={{fontSize:"3rem"}}><span style={{fontSize:"3rem"}}>Recruitment</span>
             <br /> 
              <i>Stats</i> &
             <span style={{fontFamily:"Dancing Script"}}> Facts</span>
             </h1>
          <p>Below you will find some key metrics to consider when aspiring to play at the next level. </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
         
          <img src={about} alt="about" style={{ width: "100%" }}  
          className='rounded shadow'/>
        </div>
      </div>
      </div>

   
 {/**Start STATS List Group container*/}
<div className="w3-container w3-content">
<div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <ListGroup as="ol" style={{ borderRadius: '0px' }} className="d-flex align-items-center justify-content-center">
            <ListGroup.Item as="li" className="my-3">
              <div className="row justify-content-end align-items-center">
                <div className="col-3">
                  <h1 style={{ fontSize: '5rem', color: 'black' }}>7%</h1> 
                </div>
                <div className="col-9 mt-3" style={{ fontSize: '14px' }}>
                  <p className="w3-text-pink"><b>Q: WHAT IS THE HIGH SCHOOL TO COLLEGE CONVERSION RATE?</b></p>
                  <p>Only about 7% of high school student-athletes end up competing in the NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA sports, just under 500,000 make it to the NCAA. And if you think that’s low, only about 2% of that 7% make it into the professional arena.</p>
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item as="li" className="my-3">
              <div className="row align-items-center">
                <div className="col-3">
                  <PiNumberSquareTwo style={{ fontSize: '5rem', color: 'black' }} />
                </div>
                <div className="col-9 mt-3" style={{ fontSize: '14px' }}>
                <p className="w3-text-pink"><b>Q: DO GRADES REALLY MATTER?</b></p>
                  <p></p>
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item as="li" className="my-3">
              <div className="row align-items-center">
                <div className="col-3">
                  <PiNumberSquareThree style={{ fontSize: '5rem', color: 'black' }} />
                </div>
                <div className="col-9 mt-3" style={{ fontSize: '14px' }}>
                <p className="w3-text-pink"><b>Q: DO GRADES REALLY MATTER?</b></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col-sm-12 col-md-6">
          <ListGroup as="ol" style={{ borderRadius: '0px' }} className="d-flex align-items-center justify-content-center">
            <ListGroup.Item as="li" className="my-3">
              <div className="row align-items-center">
                <div className="col-3">
                  <PiNumberSquareFour style={{ fontSize: '5rem', color: 'black' }} />
                </div>
                <div className="col-9 mt-3" style={{ fontSize: '14px' }}>
                <p className="w3-text-pink"><b>Q: DO GRADES REALLY MATTER?</b></p>
                  <p>lit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item as="li" className="my-3">
              <div className="row align-items-center">
                <div className="col-3">
                  <PiNumberSquareFive style={{ fontSize: '5rem', color: 'black' }} />
                </div>
                <div className="col-9 mt-3" style={{ fontSize: '14px' }}>
                <p className="w3-text-pink"><b>Q: DO GRADES REALLY MATTER?</b></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
                </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item as="li" className="my-3">
              <div className="row align-items-center">
                <div className="col-3">
                  <PiNumberSquareSix style={{ fontSize: '5rem', color: 'black' }} />
                </div>
                <div className="col-9 mt-3" style={{ fontSize: '14px' }}>
                <p className="w3-text-pink"><b>Q: DO GRADES REALLY MATTER?</b></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
                </div>
                <div className="card-footer text-end text-muted" style={{ fontSize: '10px'}}>updated: 6/22/2024</div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
</div>
{/**End STATS List Group container*/}
</motion.div>
        </div>
    
        );
        }   

export default Stats;