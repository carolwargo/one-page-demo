import React from "react";
//import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ListGroup } from 'react-bootstrap';
import Clay2 from "../../assets/images/Clay2.png";
import TextTransition, {presets} from "react-text-transition";
import about from '../../assets/images/about.png';   
import TopQuote from '../../assets/images/TopQuote.png';
import BottomQuote from '../../assets/images/BottomQuote.png';

const TEXTS = [ 'NCAA TRANSFERS', 'HIGH SCHOOL RECRUITS','TEAMS & COACHES'];
 

const About = () => {
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
    <div>
    <motion.div
      ref={ref}
      initial={{ y: -40, opacity: 0.5 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      exit={{ y: 40, opacity: 0.5 }}
      transition={{ duration: 0.8 }}
      className="w3-padding-64"
    >

       
     <div className="w3-container w3-content">
{/**Start About Section*/}
      <div className="row w3-padding-32 justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6 col-lg-6">
        <h1 className='mb-3' 
             style={{fontSize:"5rem"}}>About Con
             <span style={{fontFamily:"Dancing Script"}}>Scribe</span>
             </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et voluptas tempora! Repellendus excepturi quod fuga blanditiis quos. Magnam ipsum, aut fuga assumenda magni totam voluptatibus reiciendis laboriosam nihil autem!</p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src={about} alt="about" style={{ width: "100%" }}  className='w3-opacity w3-hover-opacity-off w3-greyscale'/>
        </div>
      </div>
      </div>

      <div className="w3-container w3-content">
    <div className="row w3-padding-32 justify-content-center align-items-center w3-grayscale">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title"> <b>OUR</b><span className="text-secondary">VISION.</span></h3> 
            <div className="card-text">
            Driven by a visionary outlook, our approach to real estate is refreshingly distinct. Unlike conventional definitions of luxury that prioritize size and paid amenities, our vision is centered around the notion of uniqueness. For us, luxury properties are not merely defined by their grandeur, but by their exceptional qualities and unparalleled character. It's this emphasis on individuality and exclusivity that sets their projects apart in a crowded marketplace.
            </div>
          </div>
        </div>
        </div>

      <div className="col-md-4">
      <div className="card">
          <div className="card-body">
            <h3 className="card-title"> <b>OUR</b><span className="text-secondary">PASSION.</span></h3> 
            <div className="card-text">
            Our passion lies in uncovering hidden gems, each property meticulously chosen for its ability to transport you to a world of unparalleled tranquility and opulence. Whether you seek the solace of a high-end cabin enveloped by nature's embrace, the serenity of a she shed designed for refined relaxation, or the rustic charm of a barn transformed into a luxurious abode, Peasant Properties is your gateway to an extraordinary living experience.
            </div>
          </div>
        </div>
        </div>

      <div className="col-md-4">
      <div className="card">
          <div className="card-body">
            <h3 className="card-title"><b>OUR</b><span className="text-secondary">COMMITMENT.</span></h3> 
            <div className="card-text">
            We pledge and fully commitment to personalized service and an unwavering dedication to excellence, striving to make an impact on the recruiting process and dream of owning a unique sanctuary a reality. Trust in Peasant Properties to guide you on a journey to discover the extraordinary, where luxury meets seclusion and exclusivity knows no bounds. Welcome to a world where every property tells a story, and your next chapter begins with us.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <hr />
    {/* Start Testimonials Grid */}
    <div className="w3-container w3-content">
    <img src={TopQuote} alt="topquote" style={{ width: "100%", marginBottom:'0px',  paddingBottom:'0px' }}/>
    <h1 className="text-center" style={{fontSize:'2rem'}}><b>OUR</b><span className="text-secondary">|REPUTATION.</span></h1>
   </div>
    <div className="w3-content w3-container w3-center">
  <div className="row d-flex">
  <div className="col-sm-12 col-md-4 col-lg-4 flex-column align-items-center justify-content-center ">
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 flex-column align-items-center justify-content-center ">
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4 flex-column align-items-center justify-content-center ">
    <h1 style={{ fontSize: '2rem', color: 'red', }} className="text-center align-items-center">
   <TextTransition springConfig={presets.gentle}>
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  </h1>
  <p className="text-center"> What others have to say...</p>
    </div> 
<div className="col-sm-12 col-md-4 col-lg-4 flex-column align-items-center justify-content-center">
    </div>
</div>
</div>
<div className="w3-content w3-container w3-margin-top">
    <img src={BottomQuote} alt="topquote" style={{ width: "100%"}}/>
    </div>
{/**End About Grid */}
{/**End About Section */}


<div className="w3-container w3-content">
<div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6 col-sm-6">
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed hic delectus! Sit voluptatem dolorum iusto laudantium! Quis, quo quidem quod quasi magnam expedita odio cumque iusto libero repellat alias.</p>
            </div>
            <div className="col-sm-12 col-md-6 col-sm-6">
            <ListGroup as="ol" style={{ borderRadius: '0px' }} className="d-flex align-items-center justify-content-center">
      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img src={Clay2} alt='clay' style={{ width: '100%' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            
            <img src={Clay2} alt='clay' style={{ width: '100%' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>

      <ListGroup.Item as="li" className="mb-2 px-3">
        <div className="row align-items-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img src={Clay2} alt='clay' style={{ width: '100%' }} />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 mt-3" style={{ fontSize: '14px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quisquam cumque rem. Quaerat nemo alias corporis sapiente nisi debitis, cum officia quod ea porro dolor quia dolorum explicabo eveniet obcaecati!</p>
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
            </div>
</div>
</div>
</motion.div>
        </div>
    
        );
        }   

export default About;