import React from 'react';
import GoogleMap from '../GoogleMap';

import './style.css';

// require layoutOrientation prop
// default layout => left oriented

export default function Directions(props) {
  function initialize() {
    if(props.layout === 'directions-left') {
      return(
        <section className={`pure-g ${props.layout}`} id='directions'>
          <div className='pure-u-1 pure-u-lg-2-3' id='directions-pane'>
            {getDirectionWidget()}
          </div>
          <div className='pure-u-1 pure-u-lg-1-3' id='directions-text'>
            {getDirectionText()}
          </div>
        </section>
      )
    } else if(props.layout === 'directions-right') {
      return(
        <section className={`pure-g ${props.layout}`} id='directions'>
          <div className='pure-u-1 pure-u-lg-1-3' id='directions-text'>
            {getDirectionText()}
          </div>
          <div className='pure-u-1 pure-u-lg-2-3' id='directions-pane'>
            {getDirectionWidget()}
          </div>
        </section>
      )
    } else {
      console.warn('Directions/index.js: Invalid `prop.layout` attribute. Using default layout...');
      return(
        <section className={`pure-g ${props.layout}`} id='directions'>
          <div className='pure-u-1 pure-u-lg-2-3' id='directions-pane'>
            {getDirectionWidget()}
          </div>
          <div className='pure-u-1 pure-u-lg-1-3' id='directions-text'>
            {getDirectionText()}
          </div>
        </section>
      )
    }
  }

  function getDirectionWidget() {
    return(
      <div className='content'>
        <GoogleMap />
      </div>
    );
  }
  
  function getDirectionText() {
    return(
      <div className='content'>
        <h2 className='label'>&#8606;&nbsp;Directions&nbsp;&#8608;</h2>
        <p><span className='b'>Address:</span> <a href='https://www.google.com/maps/dir//Ragged+Mountain+Resort,+620+Ragged+Mountain+Rd,+Danbury,+NH+03230-4235,+USA' target='_blank' rel='noopener noreferrer'>620 Ragged Mountain Road Danbury, NH 03230</a></p>

        <p>Ragged Mountain Resort is conveniently located in the town of Danbury, NH. Just a short drive from Boston, Manchester, or parts north, getting here is quick and easy!</p>
        <ul>
          <li>Take I-93 to Exit 23.</li>
          <li>Merge onto NH Route 104.</li>
          <li>Continue through the Town of Bristol until you reach our access road.</li>
        </ul>

        <p>From the South, you can take an alternate route through the heart of Danbury!</p>
        <ul>
          <li>Take I-93N to Exit 17.</li>
          <li>Merge onto NH Route 4W.</li>
          <li>Turn right onto NH Route 104.</li>
          <li>Continue until you reach our access road.</li>
        </ul>
        <br />
        <sup>* GPS route not advised</sup>
      </div>
    );
  }

  return (
    initialize()
  );
};
