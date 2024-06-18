import React from 'react';
import PinkBlackBG from '../../assets/images/PinkBlackBG.png';
export default function Header2() {

  return (
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${PinkBlackBG})`, height: '600px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white px-1'>
              <h1 className='mb-3' style={{fontSize:"5rem"}}>Con<span style={{fontFamily:"Dancing Script"}}>Scribe</span></h1>
              <h4 className='mb-3'>PROVIDING <span className='w3-text-pink' style={{ fontWeight:'bold'}}> CONTROLLED</span> MARKETING STRATEGIES & MATERIALS FOR STUDENT-ATHELETES.</h4>
             <p>Click the "Learn more" button for a better understanding of <span className='w3-text-pink' style={{ fontWeight:'bold'}}> CONTROL</span> and why it matters.</p>
              <button tag="a" className='btn w3-pink' size="lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
