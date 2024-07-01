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
 <div className="w3-bar w3-black d-flex justify-content-around align-items-center">
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
  
{/*End bar*/}

     </motion.div>
      </div>

    )
}

export default WebBar