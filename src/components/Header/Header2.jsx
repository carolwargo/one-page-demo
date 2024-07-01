import React from 'react';
import PinkBlackBG from '../../assets/images/PinkBlackBG.png';
import AnimatedHeading from '../Home/AnimatedHeading';

export default function Header2() {
            
  return (
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${PinkBlackBG})`, height: '500px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='container text-white w3-padding-large'>
          <AnimatedHeading />
          <h2 className='mb-4 mx-5'>
  PROVIDING  CUSTOMIZED <span className='w3-text-pink' style={{ fontWeight: 'bold' }}>DIGITAL MARKETING </span> 
   FOR STUDENT-ATHLETES & TEAMS ALIKE.
</h2>
 <p className='px-4 w3-hide-small'>Click <span className='w3-text-pink'><i>LEARN MORE</i></span>  to explore <span className='w3-text-pink' style={{ fontWeight:'bold'}}> <i>CONTROLLED MARKETING</i></span> and why it matters.</p>
              <button tag="a" className='btn w3-pink mt-4' size="lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
