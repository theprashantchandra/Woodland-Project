import React from 'react';
import '../App.css'; // Make sure to create this CSS file
import Treeinhand from '../assets/Tree-in-hand.png';


const InfoSection_HomePage = () => {
    return (
      <div className="header">
        <div className="left-section">
          <h1>Start getting customers from Google now!</h1>
          <p className="left-section-subTitle">9K+ business owners like you have added Local to their toolkit and promoted their local business with us.</p>
        </div>
        <div className="right-section">
          <img src={Treeinhand} alt="Promotion" />
        </div>
      </div>
    );
  };

  export default InfoSection_HomePage;