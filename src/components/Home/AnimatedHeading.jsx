import React, { useRef } from 'react';
import '../../App.css'; // Import your CSS file
import { useInView } from "framer-motion";


const AnimatedHeading = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false});
  

  return (
    <div>
    <h1 ref={ref}
      style={{
        fontSize: "5rem" ,
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      className='mb-3 '>
      Con
      <span style={{ fontFamily: "Dancing Script" }}>Scribe</span>
    
  </h1>

    </div>
  );
};

export default AnimatedHeading;