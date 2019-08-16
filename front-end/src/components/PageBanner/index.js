import React from 'react';

import './style.css';

export default function PageBanner(props) {
  return (
    <div id='page-banner'>
      <img 
        className='pure-img'
        src={props.imgSrc} 
        title='Ragged Mountain Resort' 
        alt='Ragged Mountain Resort' />
    </div>
  );
};
