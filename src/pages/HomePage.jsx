import React from "react";
import About from "../components/Home/About";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "../components/Home/CustomCards";
import Cards from "../components/Home/Cards";
import Stats from "../components/Home/Stats";
import Intro from "../components/Home/Intro";
import Subscribe from "../components/Forms/Subscribe";

const HomePage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >
      </motion.div>


        <Intro />
     
        <About />
   
        <Cards />
   
        <Services />
   

      
        <Stats />
   

   
        <Subscribe />
  
    </div>
  );
};

export default HomePage;
