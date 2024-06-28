import React from "react";
import About from "../components/Home/About";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "../components/Home/CustomCards";
import Cards from "../components/Home/Cards";
import Stats from "../components/Home/Stats";
import SubscribeModal from "../components/Modal/SubscribeModal";
//import Intro from "../components/Home/Intro";
import ContactComponent from '../components/Home/ContactComponent'
//import Subscribe from "../components/Forms/Subscribe";

const HomePage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });

  return (
    <div
    style={{ backgroundImage: 'linear-gradient(to bottom right, #424242, black, black, #565656, #424242, black)'}}
    className="text-white"
    >
      <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <SubscribeModal />
      </motion.div>
   
     
     <div className="container-fluid" >
        <About />
        </div>
        <div className="container-fluid">
        <Cards />
   </div>
        <Services />
   
        <Stats />
        <div className="container-fluid">
<ContactComponent />
  </div>
    </div>
  );
};

export default HomePage;
