import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCanva } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";

const WebBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });

    return (
      <div  className="container-fluid w3-black py-2 shadow">
<motion.div
      ref={ref}
      initial={{ y: -20, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 20, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
    >

  {/*Start bar */}
  <div className="container-fluid w3-hide-small w3-hide-medium">
 <div className="w3-bar w3-black  d-flex justify-content-around align-items-center">
<div className="w3-bar-item">
<FaBootstrap style={{fontSize:'1.75rem'}}/> Bootstrap
</div>
<div className="w3-bar-item">
<RiJavascriptFill style={{fontSize:'1.75rem'}}/> JavaScript
</div>

<div className="w3-bar-item">
<SiAdobecreativecloud style={{fontSize:'1.75rem'}}/> Adobe CC
</div>

<div className="w3-bar-item">
<FaWordpressSimple style={{fontSize:'1.7rem'}}/> Wordpress
</div>
<div className="w3-bar-item">
<FaReact style={{fontSize:'1.75rem'}}/> React.js
</div>

<div className="w3-bar-item">
<SiCanva style={{fontSize:'1.75rem'}}/> Canva
</div>
<div className="w3-bar-item">
<TbBrandFramerMotion style={{fontSize:'1.75rem'}}/> Framer
</div>
 </div>
 </div>
{/*End bar*/}




<style>
          {`
  /* WebBar.css */

.ticker-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.ticker {
  display: flex;
  animation: ticker 15s linear infinite;
}

.ticker-item {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0 2rem;
  font-size: 1rem;
  width: 100vw; /* Ensure each item takes the full viewport width */
}

@keyframes ticker {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .ticker-item {
    padding: 0 1rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 576px) {
  .ticker-item {
    padding: 0 0.5rem;
    font-size: 0.75rem;
  }
}

        `}
        </style>
     
        {/* Start bar */}
        <div className="ticker-container w3-hide-large py-2">
        <div className="ticker">
        <div className="ticker-item me-2">
          <FaBootstrap style={{ fontSize: '1.75rem' }} /> <span>Bootstrap</span>
        </div>
        <div className="ticker-item me-2">
          <RiJavascriptFill style={{ fontSize: '1.75rem' }} /> <span>JavaScript</span>
        </div>
        <div className="ticker-item me-2">
          <SiAdobecreativecloud style={{ fontSize: '1.75rem' }} /> <span>Adobe CC</span>
        </div>
        <div className="ticker-item me-2">
          <FaWordpressSimple style={{ fontSize: '1.7rem' }} /> <span>Wordpress</span>
        </div>
        <div className="ticker-item me-2">
          <FaReact style={{ fontSize: '1.75rem' }} /> <span>React.js</span>
        </div>
        <div className="ticker-item me-2">
          <SiCanva style={{ fontSize: '1.75rem' }} /> <span>Canva</span>
        </div>
        <div className="ticker-item me-2">
          <TbBrandFramerMotion style={{ fontSize: '1.75rem' }} /> <span>Framer</span>
        </div></div>
        </div>
        {/* End bar */}
     </motion.div>
      </div>
    )
}

export default WebBar