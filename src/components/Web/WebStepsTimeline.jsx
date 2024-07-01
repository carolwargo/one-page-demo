import React from 'react';
import { Timeline, Grid, Row, Col } from 'rsuite';
import { FaAngleRight } from "react-icons/fa";
import 'rsuite/dist/rsuite.min.css';
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";

const SimpleTimeline = () => {
  return (

<div className='w3-padding-32 w3-margin-bottom'>
<style>
        {`
          .timeline-dot {
            display: inline-block;
            width: 24px;
            height: 24px;
            line-height: 24px;
            border-radius: 50%;
            border: 2px solid black; /* Default blue color */  
            background-color: black; /* Default blue color */
            color: white;
            text-align: center;
            font-weight: bold;
          }
          
          .rs-timeline-item-tail {
            background-color: black; /* Connector color */
          }
        `}
      </style>
 
      <div className="w3-container w3-content text-center">
    <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 flex-column">
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 flex-column">
            <h5>Protection from risks related to the day-to-day running of your small- from legal liability to property damage.</h5>
   
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 flex-column">
            </div>
     </div>
 </div>

  
    <Grid fluid className="d-flex justify-content-center mt-3">
      <div className='row'>
        <div className='col' xs={24}>
 
    <div>
    <p> <TbCircleNumber1 style={{fontSize:'2rem'}}/> Fill in our quick form.</p>
    </div>
    <div>
    <p><TbCircleNumber2 style={{fontSize:'2rem'}}/> Select site options.</p>
   </div>
   <div>
   <p> <TbCircleNumber3 style={{fontSize:'2rem'}}/> Relax while we work!</p>  
 </div>
 
        </div>
      </div>
      </Grid>
      <div className="container w3-padding-32 d-flex justify-content-center">
      <button  className='btn btn-outline-black button-glow px-5 w3-margin-top'>
     S<span className='text-lowercase'>tart your inquiry </span>   < FaAngleRight />
              </button>
              </div>
  
   

    <div className="w3-container w3-content text-center">
    <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 flex-column">
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 flex-column">
            <p>Protection from risks related to the day-to-day running of your small- from legal liability to property damage.</p>
   
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 flex-column">
            </div>
     </div>
 </div>



 
 <div className="w3-container w3-content text-center">
    <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 flex-column">
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 flex-column">
            <p>Protection from risks related to the day-to-day running of your small- from legal liability to property damage.</p>
   
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 flex-column">
            </div>
     </div>
 </div>
    </div>
  );
}

export default SimpleTimeline;
