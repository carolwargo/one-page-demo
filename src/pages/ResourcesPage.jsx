// BlogPage.js
import React from 'react';
import {motion } from 'framer-motion';
//import { Link } from 'react-router-dom';
//import Clay2 from '../assets/images/Clay2.png';
import CoverResize from '../assets/images/CoverResize.png';
import ResourcesTabs from '../components/Resources/ResourcesTabs';

  
function ResourcesPage() {

  return (
    <div>
  
    <motion.div
          initial={{ y: -20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: 20, opacity: 0}}
          className="resources"
          
          >
<header
  className="w3-margin-bottom d-flex justify-content-center align-items-center"
  style={{
    position: "relative",
    backgroundImage: `url(${CoverResize})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: '80vh',
  }}
>
  <div className="w3-content w3-container  text-center w3-padding-32 w3-margin-top">
    <p>Keep it simple... Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam odio illum ex? Totam porro, iusto reiciendis dolorem natus excepturi at dolor non explicabo facere repellendus unde, culpa reprehenderit beatae.</p>
 
  </div>
</header>


     

<div className="w3-container">
<ResourcesTabs />
</div>

{/** 
<div className='row w3-row-padding'>
        <div className='w3-col l4 s12'>
        <div className="w3-display-container ">
        <div className='w3-card w3-white w3-margin-top w3-margin w3-grayscale'>
  <img src={Clay2} alt='corey' style={{ width: '100%' }} className='w3-opacity w3-hover-opacity-off' />
  <div className='w3-container w3-padding-16'>
    <div className='card-header'>
      <h3><b>Corey Wargo</b></h3>
      <p className='w3-opacity ' style={{color:'red'}}>Baseball Nut</p>
    </div>
    <div className='card-body w3-margin-top'>
     
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint corporis commodi necessitatibus odio, laborum odit enim in cumque eum nisi eligendi ullam quis ipsum tenetur dolorem similique iure saepe.</p>
    </div>
    <div className='card-footer w3-margin-bottom w3-padding-8'>
      <Link to="/contact" className='text-decoration-none'>
        <button className='w3-button w3-black w3-block'>Contact</button>
      </Link>
    </div>
    </div>
  </div>


        </div>
        </div>
        <div className='w3-col l8 s12'>
          </div>
      </div>
      */}
      </motion.div>
    </div>
  );
}

export default ResourcesPage;
