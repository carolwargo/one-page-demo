import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaBootstrap, FaWordpressSimple } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCanva, SiAdobecreativecloud } from "react-icons/si";
//import "./WebBar.css"; // Add this line to import the CSS file

const WebBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
  
    <div className="container-fluid w3-black py-2 shadow">
      <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >



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
  animation: ticker 20s linear infinite;
}

.ticker-item {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 0 2rem;
  font-size: 1rem;
  flex: 0 0 auto;
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
        <div className="ticker-container">
          <div className="ticker">
            <div className="ticker-item px-3 mx-5">
              <FaBootstrap style={{ fontSize: '1.75rem' }} /> Bootstrap
            </div>
            <div className="ticker-item px-4 mx-5">
              <RiJavascriptFill style={{ fontSize: '1.75rem' }} /> JavaScript
            </div>
            <div className="ticker-item px-4 mx-5">
              <SiAdobecreativecloud style={{ fontSize: '1.75rem' }} /> Adobe CC
            </div>
            <div className="ticker-item px-4 mx-5">
              <FaWordpressSimple style={{ fontSize: '1.7rem' }} /> Wordpress
            </div>
            <div className="ticker-item px-4 mx-5">
              <FaReact style={{ fontSize: '1.75rem' }} /> React.js
            </div>
            <div className="ticker-item px-4 mx-5">
              <SiCanva style={{ fontSize: '1.75rem' }} /> Canva
            </div>
            <div className="ticker-item px-4 mx-5">
              <TbBrandFramerMotion style={{ fontSize: '1.75rem' }} /> Framer
            </div>
          </div>
        </div>
        {/* End bar */}
      </motion.div>
    </div>
  );
};

export default WebBar;
