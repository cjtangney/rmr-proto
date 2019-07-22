import React from 'react';
import './style.css';

export default function MainFooter() {
  return (
    <footer className='pure-g text-center'>
      <section className='pure-u-1 pure-u-lg-1-2' id='info'>
        <h3 className='label'>Ragged Mountain Resort</h3>
        <ul>
          <li>620 Ragged Mountain Road</li>
          <li>Danbury, NH 03230</li>
          <li>(603) 768-3600</li>
        </ul>
      </section>
      <section className='pure-u-1 pure-u-lg-1-2' id='links'>
        <ul>
          <li>Accessibility</li>
          <li>Directions</li>
          <li>Contact Us</li>
          <li>Media</li>
          <li>Employment</li>
        </ul>
      </section>
    </footer>
  );
};
