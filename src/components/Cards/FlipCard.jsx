import React, { useState, useEffect } from 'react';
import Catch from '../../assets/images/Catch.png';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 400);
    };

    handleResize(); // Set initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    body: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      padding: '20px',
      textAlign: 'center'
    },
    flipCard: {
      backgroundColor: 'transparent',
      width: '100%',
      maxWidth: isSmallScreen ? '200px' : '300px',
      height: 'auto',
      perspective: '1000px',
      margin: '0 auto',
      cursor: isSmallScreen ? 'pointer' : 'default' // Change cursor for clickability on small screens
    },
    flipCardInner: {
      position: 'relative',
      width: '100%',
      height: '0',
      paddingBottom: '100%', // This creates a square aspect ratio
      textAlign: 'center',
      transition: 'transform 0.6s',
      transformStyle: 'preserve-3d',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transform: isFlipped ? 'rotateY(180deg)' : 'none'
    },
    flipCardFrontBack: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden'
    },
    flipCardFront: {
      backgroundColor: '#bbb',
      color: 'black'
    },
    flipCardBack: {
      backgroundColor: '#2980b9',
      color: 'white',
      transform: 'rotateY(180deg)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px',
      boxSizing: 'border-box'
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  };

  const handleCardClick = () => {
    if (isSmallScreen) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div style={styles.body}>
      <h1>Card Flip with Text</h1>
      <h3>Hover over the image below:</h3>

      <div
        className="flip-card"
        style={styles.flipCard}
        onMouseEnter={() => !isSmallScreen && setIsFlipped(true)}
        onMouseLeave={() => !isSmallScreen && setIsFlipped(false)}
        onClick={handleCardClick}
      >
        <div className="flip-card-inner" style={styles.flipCardInner}>
          <div className="flip-card-front" style={{ ...styles.flipCardFrontBack, ...styles.flipCardFront }}>
            <img src={Catch} alt="catch" style={styles.img} />
          </div>
          <div className="flip-card-back" style={{ ...styles.flipCardFrontBack, ...styles.flipCardBack }}>
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

