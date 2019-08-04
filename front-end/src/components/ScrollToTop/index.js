import React from 'react';

import './style.css';

export default function ScrollToTop() {
  const toTheTop = (e) => {
    window.scrollTo({
    	top: 0,
    	bottom: 0,
    	behavior: 'smooth'
    });
  };

  return (
    <div id='scroll-to-top' className='default-shadow' onClick={event => toTheTop(event)}>
      <i className='fas fa-angle-up arrow'></i>
    </div>
  );
};
