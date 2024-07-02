import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import '../../styles/features.css';
import WebStepsTimeline from "../../components/Web/WebStepsTimeline";
import WebOptions from "../../components/Web/WebOptions";

const WebLanding = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Animation triggers only once
        threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
      });
    
        return (
          <div  className="container-fluid">
    <motion.div
          ref={ref}
          initial={{ y: -20, opacity: 0.5 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          exit={{ y: 20, opacity: 0.5 }}
          transition={{ duration: 0.8 }}
           className="w3-padding-32"
        >
  
  


<main className="w3-margin-top">
    <WebStepsTimeline/>
<WebOptions />

    
</main> 
    </motion.div>
    </div>
  );
}

export default WebLanding;