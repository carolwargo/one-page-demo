import React, { useState, useEffect } from 'react';
import './resources.css'; // Assuming you will add the styles here

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
      <h2>Vertical Tabs</h2>
      <p>Click on the buttons inside the tabbed menu:</p>

      <div className="tab">
        <button
          className={`tablinks ${activeTab === 'London' ? 'active' : ''}`}
          onClick={() => openCity('London')}
          id="defaultOpen"
        >
          London
        </button>
        <button
          className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`}
          onClick={() => openCity('Paris')}
        >
          Paris
        </button>
        <button
          className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`}
          onClick={() => openCity('Tokyo')}
        >
          Tokyo
        </button>
      </div>

      <div id="London" className={`tabcontent ${activeTab === 'London' ? 'show' : ''}`}>
        <h3>London</h3>
        <p>London is the capital city of England.</p>
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
