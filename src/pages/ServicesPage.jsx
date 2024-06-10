// BlogPage.js
import React from 'react';
import {motion } from 'framer-motion';
import TextTransition, {presets} from "react-text-transition";
import { Link } from 'react-router-dom';
import CatchingBlog from '../components/Catching/CatchingBlog';
import Clay2 from '../assets/images/Clay2.png';
import Catch from '../assets/images/Catch.png';
import Button from "react-bootstrap/Button";
import Hit from "../assets/images/Hit.png";
import CoverResize from '../assets/images/CoverResize.png';



const TEXTS = [ 'CATCH', 'BLOCK', 'THROW', 'LEAD!!'];
  


function CatchingPage() {
  
  const [index, setIndex] = React.useState(0);

React.useEffect(() => {
  const intervalId = setInterval(() =>

    setIndex(index => index + 1),
    2000
  );
  return () => clearTimeout(intervalId);
}
, []);

  return (
    <div>
  
    <motion.div
          initial={{ y: -20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: 20, opacity: 0}}
          className="home"
          
          >
<header
  className="w3-black w3-margin-bottom d-flex justify-content-center align-items-center"
  style={{
    position: "relative",
    backgroundImage: `url(${CoverResize})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: '80vh',
  }}
>
  <div className="w3-content w3-container text-center w3-padding-32 w3-margin-top">
    <p>Keep it simple... Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam odio illum ex? Totam porro, iusto reiciendis dolorem natus excepturi at dolor non explicabo facere repellendus unde, culpa reprehenderit beatae.</p>
    <div className='d-flex justify-content-center align-items-center'>
      <TextTransition springConfig={presets.gentle} className='text-center' style={{ fontSize: '4rem', color: 'red' }} >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  </div>
</header>



        <div className='row w3-row-padding'>
      
        <div className='w3-col l4 s12'>
        <div className="w3-display-container ">
        <div className='w3-card w3-white w3-margin-top w3-margin w3-grayscale'>
  <img src={Clay2} alt='corey' style={{ width: '100%' }} className='w3-opacity w3-hover-opacity-off' />
  <div className='w3-container w3-padding-16'>
    <div className='card-header'>
      <h3><b>Corey Wargo</b></h3>
      <p className='w3-opacity ' style={{color:'red'}}>Baseball Nut</p>
    </div>
    <div className='card-body w3-margin-top'>
     
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint corporis commodi necessitatibus odio, laborum odit enim in cumque eum nisi eligendi ullam quis ipsum tenetur dolorem similique iure saepe.</p>
    </div>
    <div className='card-footer w3-margin-bottom w3-padding-8'>
      <Link to="/contact" className='text-decoration-none'>
        <button className='w3-button w3-black w3-block'>Contact</button>
      </Link>
    </div>
    </div>
  </div>
        <div className='w3-card w3-margin w3-margin-top'>
              {/*card start for all popular posts elements*/}
              <div className="w3-container w3-black w3-padding-16">
                  {/*container start header popular posts */}
                  <h4>Popular Posts</h4>
                </div>
                {/*container end header popular posts */}
                <ul className="w3-ul w3-hoverable w3-white">
                  {/*list start popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Catch}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">CATCHING</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-1 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Catch}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">THROWING</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-2 end popular posts */}
                  <li className="w3-padding-16">
                    {/*list-item-3 start popular posts */}
                    <img
                      src={Catch}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">BLOCKING</span>
                    <br></br>
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-3 end popular posts */}
                  <li className="w3-padding-16 ">
                    {" "}
                    {/*list-item-4 start popular posts */}
                    <img
                      src={Catch}
                      alt="Business"
                      className="w3-left w3-margin-right"
                      style={{ width: "15%" }}
                    ></img>
                    <span className="w3-large">LEADING</span>
                    <br />
                    <span>Sed mattis nunc</span>
                  </li>
                  {/*list-item-4 end popular posts */}
                </ul>
                {/*list end popular posts */}
                </div>
              {/*card end for all popular posts elements*/}
              <hr />

        </div>
        </div>
        <div className='w3-col l8 s12'>
          

{/**Start Fundamentals */}
<div id="fundamentals"> 

    <div className="w3-row-padding">
    <div className="w3-display-container w3-padding">
    <h4><b>TRAIN</b><span className="fw-light">|301</span></h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit natus facere veritatis blanditiis saepe voluptate velit molestias quasi. Fugit quae delectus inventore eius aliquam natus voluptas minus nulla voluptatum?</p>
        </div>
    <div className="w3-display-container w3-padding">
    <div className="w3-col l3 m6 w3-margin-bottom ">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Catch</div>
        <img src={Catch} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Throw</div>
        <img src={Hit} alt="House" style={{width:"100%"}}/>
      </div>
    </div>

    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Block</div>
        <img src={Catch} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    
  
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Lead</div>
        <img src={Hit} alt="House" style={{width:"100%"}}/>
      </div>
    </div>

   
    <div className="border-bottom border-top shadow w3-padding-large">
  <div className="row justify-content-center align-items-center">
    <div className="col-sm-12 col-md-8 col-lg-8 px-2">
  <h4><b>Title</b></h4>  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui 
    exercitationem doloribus totam itaque? Velit soluta ea dolores 
    molestias pariatur reiciendis maxime nostrum. Distinctio possimus 
    sed consequatur reprehenderit repudiandae velit 
    <span>   
        <Link to="/" 
        className="link-primary justify-content-end text-decoration-none"> 
        learn more...</Link>
        </span>
        </p> 
       </div>
    

    <div className="col-sm-12 col-md-4 col-lg-4">
    <div className="w3-margin-top w3-margin-bottom">
  <div className="mb-2">
    <Button variant="dark" className="w-100">
      <Link className="text-white text-decoration-none">
        <i className="fas fa-download"></i> Specs</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100">
      <Link className="text-white text-decoration-none">
        <i className="fas fa-calendar-alt"></i> Showing</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100">
      <Link className="text-white text-decoration-none">
        <i className="fas fa-share"></i> Share</Link>
    </Button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/**End Fundamentals */}
<br />

        <div className='w3-margin w3-margin-top'>
      <CatchingBlog />
      </div>
      </div>
      </div>
      </motion.div>
    </div>
  );
}

export default CatchingPage;
