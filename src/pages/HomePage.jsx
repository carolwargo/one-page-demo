import React from "react";
import Clay2 from "../assets/images/Clay2.png";
import About from "../components/Home/About";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextTransition, {presets} from "react-text-transition";
const TEXTS = [ 'TRANSFER PORTAL PLAYERS', 'HIGH SCHOOL RECRUITS',];
  

const HomePage = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });

  const [index, setIndex] = React.useState(0);

React.useEffect(() => {
  const intervalId = setInterval(() =>

    setIndex(index => index + 1),
    3000
  );
  return () => clearTimeout(intervalId);
}
, []);

  return (
    <motion.div
      ref={ref}
      initial={{ y: -40, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 40, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
      className="w3-padding-64"
    >

        {/** START ABOUT DIV*/}

   {/** START ABOUT DIV*/}
   <div className="w3-white">
      <div className=" w3-content w3-padding-16">
            <div className="text-center flex-container align-items-center justify-content-center">
            <br /><h1 >ABOUT <span className="w3-text-blue fw-bolder">CONSCRIBE</span>.</h1>
            <hr />
            <h5 className="text-black">Whether you're an established player 
          entering the transfer portal or a high school athlete aiming to 
          play at the next level, we empower you through the process with 
          high-quality content that you control. </h5>
            <h3 className="align-items-center mb-4"> PROVIDING 
<b className="w3-text-blue fw-bolder"> CONTROLLED MARKETING STRATEGIES</b> FOR STUDENT-ATHELETES. 
         <br />Whether you need to find a new home or move on play at the next-level, be in control of your marketing.       
            </h3>
            </div> 

 
  
        <div className="row justify-content-center align-items-center w3-padding-large w3-row-padding">
         
         <div className="col-sm-12 col-md-7 col-lg-7">  
          <h3><span className="w3-text-blue"><b>RECRUITMENT</b></span> IS PART OF THE PROCESS WHETHER WE LIKE IT OR NOT!</h3>
         <br />
         <TextTransition springConfig={presets.gentle}>
   <h1 className="text-center align-items-center justify-content-center w3-text-blue fw-bolder">
      {TEXTS[index % TEXTS.length]}
      </h1> 
    </TextTransition>
    <br />
          <p> <i>Conscribe- 'to enlist; voluntarily or by force.' </i> Playing at the next level is a choice. However, enlisting in the recruitment process is not. <br/> Strategic marketing through a controlled platform allows student-athletes to showcase their academic and athletic achievements on their own terms. Conscribe is a platform that allows student-athletes to take control of their recruitment process and connect with college coaches.</p>
       
       
        </div>
        <div className="col-sm-12 col-md-5 col-lg-5"> 
            <img src={Clay2} alt="clay" style={{ width: "100%" }} />
         </div>
        </div>
        </div>
      </div>


        {/** END ABOUT DIV*/}

        {/** START ABOUT DIV*/}
      <div className="container-fluid w3-black">
        <About />
      </div>
        {/** END ABOUT DIV*/}
      <div className="container-fluid"></div>
      <div className="container-fluid w3-blue"></div>
      <div className="container-fluid"></div>
    </motion.div>
  );
};

export default HomePage;

/** 
<div className="row justify-content-center align-items-center w3-padding-large">
<div className="col-sm-12 col-md-2 col-lg-2 px-0">
          <img src={Clay2} alt="clay" style={{width:'100%'}}/> 
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 w3-red "  style={{paddingLeft:'0px', paddingRight:'10px'}}>
        <div className="container">
            <h2>Column 1</h2>
        <p>Some text.. Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sapiente sed asperiores magnam nemo 
                mollitia assumenda! Quibusdam, sapiente. Sapiente 
                earum iure, aperiam, blanditiis ducimus nesciunt quod 
                culpa nulla provident dolores placeat!</p>
        </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2" style={{paddingLeft:'10px', paddingRight:'0px'}}>
          <img src={Clay2} alt="clay" style={{width:'100%'}}/> 
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 w3-red ">
        <div className="container">
            <h2>Column 1</h2>
        <p>Some text.. Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sapiente sed asperiores magnam nemo 
                mollitia assumenda! Quibusdam, sapiente. Sapiente 
                earum iure, aperiam, blanditiis ducimus nesciunt quod 
                culpa nulla provident dolores placeat!</p>
        </div>
        </div>
</div>
*/
