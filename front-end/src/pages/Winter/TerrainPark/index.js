import React from 'react';

import ScrollToTop from '../../../components/ScrollToTop';
import VideoBanner from '../../../components/VideoBanner';

import './style.css';

export default function TerrainParkPage() {
  return (
    <div id='winter-page-wrapper' className='terrain-parks'>
      <section className='pure-g'>
        <div className='pure-u-1'>
          <VideoBanner 
            header = '&#8606;&nbsp;RAGGED MTN PARKS&nbsp;&#8608;'
            headerPosition = 'top'
          />
        </div>
        <div className='pure-u-1 pure-u-lg-11-12 mx-auto text-center'>
          <p>Ragged Mountain Resort is home to a passionate, dedicated, and experienced terrain park staff. With a long list of successful events, many hours logged behind the snowcats, and meticulous hand shaping on their resumes, our park staff consistently provides features that RMR is renowned for. We continue to build fun and creative terrain parks for skiers and riders of all ability levels. You will often find Ragged Park Staff out on the hill, working hard to keep features looking sharp and riding safely.</p>
          <p>Here at Ragged we strive to provide fun and progression for all ability levels. We want our skiers and riders to feel comfortable on all of our terrain as well as provide the flow and challenge you desire. Please be mindful of park safety and etiquette and be sure to check out Smart Style to learn more!</p>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};
