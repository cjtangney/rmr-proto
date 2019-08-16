import React from 'react';

import './style.css';

/**
 * @props
 * src {video src}
 * header {=string}
 * headerPosition {=string}
 * logo {=img src}
 * logoPosotion {=string}
 * autoplay {=boolean}
 */

export default function VideoBanner(props) {
  return (
    <div id='video-banner'>
      <h1>{props.header}</h1>
      <video data-id='1-qUIrqMq1E' />
    </div>
  );
};
