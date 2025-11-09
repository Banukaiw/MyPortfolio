import React, { useState, useEffect } from 'react';
import './Index.css';

export const Index = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    // Check if the scroll position is beyond a certain threshold (e.g., 200px from the top)
    if (window.pageYOffset > 200) { // Adjust 200px as needed for when the button should appear
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scroll animated and smooth
    });
  };

  // useEffect to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function: This runs when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount and cleans up on unmount

  return (
    <div>
      {/* Fallback for users with JavaScript disabled */}
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div> {/* Assuming you have a root div for your React app */}
      
      <div className="social-buttons">
        <a href="5" className="social-button facebook">Facebook<i className="fa-brands fa-square-facebook"></i></a>
        <a href="1" className="social-button twitter">Twitter<i className="fa-brands fa-square-twitter"></i></a>
        <a href="https://github.com/Banukaiw" className="social-button github">GitHub<i className="fa-brands fa-square-github"></i></a>
        <a href="https://www.linkedin.com/in/banuka-weththasinghe-86a7332b4/" className="social-button linkedin">linkedIn<i className="fa-brands fa-linkedin"></i></a>
      </div>

      {/* The sticky button */}
      <button
        id="stickyButton"
        onClick={scrollToTop}
        // Use inline style to control display based on 'showButton' state
        style={{ display: showButton ? 'block' : 'none' }}
      >
      <i class="fa-solid fa-angles-up"></i>
      </button>
      {/* Removed <script src="script.js"></script> as the logic is now handled by React */}
    </div>
  );
};