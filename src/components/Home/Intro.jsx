import React from "react";
import { Link } from "react-router-dom";
import Clay2 from "../../assets/images/Clay2.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextTransition, {presets} from "react-text-transition";
const TEXTS = [ 'NCAA TRANSFERS', 'HIGH SCHOOL RECRUITS','TEAMS & COACHES'];
  

const Intro = () => {
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
  
    <div className="container-fluid">
    <motion.div
      ref={ref}
      initial={{ y: -20, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 20, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
    className="w3-padding-32"
    >

        {/** START ABOUT DIV*/}

   {/** START ABOUT| Description DIV*/}

      <div className=" w3-content mt-4">
            <div className="text-center flex-container align-items-center justify-content-center">
           
            <h1 className='mb-3' >About <span style={{fontSize:"5rem"}} className="fw-bold">Con</span><span  style={{fontFamily:"Dancing Script", fontSize:"5rem"}}>Scribe</span></h1>
            <hr />
     
            <h3 className="align-items-center mb-4 "> PROVIDING 
<b className="w3-text-pink fw-bolder"> CONTROLLED MARKETING STRATEGIES </b> 
FOR STUDENT-ATHELETES.      
            </h3>
            <h5 className="">Whether you're an established player 
          entering the <Link to='/' className=" w3-hover-text-red"> transfer portal</Link> or a <Link to='/'>high school</Link> athlete aiming to 
          play at the next level, we empower you through the process with 
          high-quality content that you control. </h5>
            </div> 

 
  
        <div className="row justify-content-center align-items-center w3-padding-large w3-row-padding">
        <div className="col-sm-12 col-md-5 col-lg-5"> 
            <img src={Clay2} alt="clay" style={{ width: "100%" }} />
         </div>
         <div className="col-sm-12 col-md-7 col-lg-7">  
          <h3><span className="w3-text-pink"><b>RECRUITMENT</b></span> IS PART OF THE PROCESS WHETHER WE LIKE IT OR NOT!</h3>
         <br />
         <TextTransition springConfig={presets.gentle}>
   <h1 className="text-center align-items-center justify-content-center w3-text-pink fw-bolder">
      {TEXTS[index % TEXTS.length]}
      </h1> 
    </TextTransition>
    <br />
          <p> <i>Conscribe- 'to enlist; voluntarily or by force.' </i> Playing at the next level is a choice. However, enlisting in the recruitment process is not. <br/> Strategic marketing through a controlled platform allows student-athletes to showcase their academic and athletic achievements on their own terms. Conscribe is a platform that allows student-athletes to take control of their recruitment process and connect with college coaches.</p>
       
       
        </div>
      
        </div>
        </div>
  

    </motion.div>
    </div>
  );
};

export default Intro;