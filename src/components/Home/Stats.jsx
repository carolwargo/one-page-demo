import React from "react";
//import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ListGroup } from 'react-bootstrap';
//import Clay2 from "../../assets/images/Clay2.png";
import about from '../../assets/images/about.png';   
import { PiNumberSquareOneFill  } from "react-icons/pi";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import { PiNumberSquareFourFill } from "react-icons/pi";
import { PiNumberSquareFiveFill } from "react-icons/pi";
import { PiNumberSquareSixFill } from "react-icons/pi";

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et voluptas tempora! Repellendus excepturi quod fuga blanditiis quos. Magnam ipsum, aut fuga assumenda magni totam voluptatibus reiciendis laboriosam nihil autem!</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
         
          <img src={about} alt="about" style={{ width: "100%" }}  className='w3-opacity w3-hover-opacity-off w3-greyscale'/>
        </div>
      </div>
      </div>

   
 {/**Start STATS List Group container*/}
<div className="w3-container w3-content">
<div className="row d-flex justify-content-center align-items-center">
<div className="col-sm-12 col-md-6 col-sm-6">
            <ListGroup as="ol" style={{ borderRadius: '0px' }} className="d-flex align-items-center justify-content-center">
      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row justify-content-end align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            < PiNumberSquareOneFill style={{ fontSize:'10rem', color:'black' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            
            < PiNumberSquareTwoFill style={{ fontSize:'10rem', color:'black' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <PiNumberSquareThreeFill style={{ fontSize:'10rem', color:'black' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
            </div>
            <div className="col-sm-12 col-md-6 col-sm-6">
            <ListGroup as="ol" style={{ borderRadius: '0px' }} className="d-flex align-items-center justify-content-center">
      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <PiNumberSquareFourFill style={{ fontSize:'10rem', color:'black' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            
            <PiNumberSquareFiveFill style={{ fontSize:'10rem', color:'black' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <PiNumberSquareSixFill style={{ fontSize:'10rem', color:'black' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
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