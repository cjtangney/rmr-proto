import React from 'react';
import './style.css';

/**
 * IMPORTANT!!
 * 
 * Navigation label text is controlled by
 * the pseudo element in the CSS. See line
 * 43 of the style.css document in this
 * folder. Update the `content` attribute
 * to adjust the Navigation label
 */

export default function MainNav() {
  return (
    <nav id="main-nav">
      <ul>
        <li>Winter</li>
        <li>Buy Now</li>
        <li>Learn</li>
        <li>Dining</li>
        <li>Weddings</li>
        <li>Lodging</li>
      </ul>
    </nav>
  );
};
