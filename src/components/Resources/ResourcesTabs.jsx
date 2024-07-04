import React, { useState, useEffect } from 'react';
import './resources.css'; 
import Entry1 from './BlogEntries/PartialEntries/PartialEntry1';
const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState('London');

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  return (
    <div>
      
      <div className="tab shadow">
        <div className='container w3-black justify-content-center align-items-center'>
        <div className='w3-padding-16'><h4><i><b>Hot Topics</b></i></h4> 
        <p>Click on the buttons inside the tabbed menu:</p></div>
     

        </div>
        <button
          className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
          onClick={() => openCity('London')}
          id="defaultOpen"
        >
         <b>MARKETING: </b>
        The Importance of Marketing Yourself as a Student Athlete.
        </button>
        <button
          className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`}
          onClick={() => openCity('Paris')}
        >
              <b>MARKETING: </b>
        The Importance of Marketing Yourself as a Student Athlete.
        
        </button>
        <button
          className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`}
          onClick={() => openCity('Tokyo')}
        >
             <b>MARKETING: </b>
        The Importance of Marketing Yourself as a Student Athlete.
        
        </button>
      </div>

      <div id="London" style={{backgroundColor:'white'}} className={`tabcontent ${activeTab === 'London' ? 'show' : ''}`}>
    <Entry1/>
      </div>

      <div id="Paris" className={`tabcontent ${activeTab === 'Paris' ? 'show' : ''}`}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className={`tabcontent ${activeTab === 'Tokyo' ? 'show' : ''}`}>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  );
};

export default VerticalTabs;
