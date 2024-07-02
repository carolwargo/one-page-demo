import React from 'react';
import BlueYellowBGCentered from '../../assets/images/BlueYellowBGCentered.png';
import AnimatedHeading from '../Home/AnimatedHeading';

export default function WebHeader() {
            
  return (
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${BlueYellowBGCentered})`, height: '500px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='container text-white w3-padding-large'>
          <AnimatedHeading />
          <div className="row">
            <div className="col-sm-12 col-md-1 col-lg-1"></div>
            <div className="col-sm-12 col-md-10 col-lg-10">
          <h2 className='mb-4 mx-3'>
  PERSONALIZED <span className='w3-text-blue' style={{ fontWeight: 'bold', textShadow:' -1px 1px 13px yellow' }}>RECRUITING WEBSITES </span> 
   FOR STUDENT-ATHLETES & TEAMS ALIKE.
</h2>     
<div className="container d-flex justify-content-center w3-padding-16 mb-3">
      <button  className='btn w3-yellow fw-bold px-5 hover-zoom' 
       style={{ fontWeight: 'bold', boxShadow:' -1px 1px 13px white' }}
       >
     learn more
              </button>
            </div>
              </div>
              <div className="col-sm-12 col-md-1 col-lg-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
