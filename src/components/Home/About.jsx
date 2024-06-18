import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ListGroup } from 'react-bootstrap';
import Clay2 from "../../assets/images/Clay2.png";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });


  return (
    <div>
    <motion.div
      ref={ref}
      initial={{ y: -40, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 40, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
      className="w3-padding-64"
    >
     <div className="w3-container w3-content">
             <h1 className='mb-3' 
             style={{fontSize:"5rem"}}>About Con
             <span style={{fontFamily:"Dancing Script"}}>Scribe</span>
             </h1>
            
<div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6 col-sm-6">
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed hic delectus! Sit voluptatem dolorum iusto laudantium! Quis, quo quidem quod quasi magnam expedita odio cumque iusto libero repellat alias.</p>
            </div>
            <div className="col-sm-12 col-md-6 col-sm-6">
            <ListGroup as="ol" style={{ borderRadius: '0px' }} className="d-flex align-items-center justify-content-center">
      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img src={Clay2} alt='clay' style={{ width: '100%' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            
            <img src={Clay2} alt='clay' style={{ width: '100%' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img src={Clay2} alt='clay' style={{ width: '100%' }} />
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
</motion.div>
        </div>
    
        );
        }   

export default About;