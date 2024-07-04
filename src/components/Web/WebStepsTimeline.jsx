import React from 'react';
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled} from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import WebForm from "../../components/Web/WebForm";
import ErrorBoundary from '../ErrorBoundary';

const SimpleTimeline = () => {

  return (
<ErrorBoundary>
<div className="w3-container w3-content w3-padding-32 shadow "
    style={{ backgroundImage: 'linear-gradient(to bottom right, #2196F3, black, black, lightblue, #2196F3, black, #2196F3 )'}}>
  
      <div className="w3-container">
    <div className="row d-flex justify-content-center align-items-center ">
    <div className="col-sm-12 col-md-5 col-lg-5 flex-column text-white">
    <div className="container-fluid">
    <h2 className="w3-text-white mb-2">Getting Started Made Easy.</h2>
            <p>Protection from risks related to the day-to-day running of your small- from legal liability to property damage.</p>
           </div>
            <div className="container-fluid mt-4">
    <div className='d-flex justify-content-start align-items-center'>
    <p> 
      <TbCircleNumber1Filled style={{fontSize:'1.75rem', color:'white',  }} 
      className='w3-round-xxlarge'/> Fill out the <i><b className='w3-text-blue'>INQUIRY FORM</b></i> provided.</p>   
   </div>
   <div className='d-flex justify-content-start align-items-center'>
    <p><TbCircleNumber2Filled style={{fontSize:'1.75rem', color:'white',  
      }} className='w3-round-xxlarge'/> Collaborate with Designer.</p>
   </div>
   <div className='d-flex justify-content-start align-items-center'>
   <p> <TbCircleNumber3Filled  
   style={{
    fontSize:'1.75rem', 
    color:'white',  
    }} 
    className='w3-round-xxlarge'/> Relax while we work!</p>  
      </div>
            </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7 flex-column">
            <div className="container-fluid mt-3">
         <WebForm/>
           </div>
            </div>    
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">

                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
<p><i className='text-seconday'></i></p>
</div>
                <div className="col-sm-12 col-md-3 col-lg-3">

</div>
              </div>
            </div>
     </div>
 </div>
      </div>
      </ErrorBoundary>
  );
}

export default SimpleTimeline;
