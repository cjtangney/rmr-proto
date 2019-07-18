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
  function toggleMenu(e) {
    const target = e.target;
    const parent = target.parentNode;
    const children = Array
      .from(parent.children)
        .filter(child => child !== target);

    for (let child of children) {
      child.children[0].classList.contains('active') &&
        child.children[0].classList.remove('active');
    }

    target.children[0].classList !== undefined && 
      target.children[0].classList.toggle('active')
  };
  return (
    <nav id='main-nav'>
      <ul>
        <li onClick={ event => toggleMenu(event) }>Buy Now
          <ul className='sub text-center'>
            <li>Season Passes</li>
            <li>Lift Tickets</li>
            <li>Reload Online</li>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Winter
          <ul className='sub text-center'>
            <li>Snow Report</li>
            <li>Rentals</li>
            <li>Terrain Park</li>
            <li>Mountain Safety</li>
            <li>Trail Map</li>
            <li>Mountain Information</li>
            <li>Group &amp; Corporate</li>
            <li>Directions</li>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Learn
          <ul className='sub text-center'>
            <li>Learning Center</li>
            <li>Bebe Wood Program</li>
            <li>Competition Programs</li>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Dining
          <ul className='sub text-center'>
            <li>Birches Mountain Restaurant</li>
            <li>The Stone Hearth Bar</li>
            <li>The Harvest Cafe</li>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Weddings
          <ul className='sub text-center'>
            <li>Weddings Home Page</li>
            <li>Venues</li>
            <li>Preferred Vendors</li>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Lodging
          <ul className='sub text-center'>
            <li>Lodging Home Page</li>
            <li>New Hampshire Mountain Inn</li>
            <li>Cardigan Cabins</li>
            <li>Lodging Partners</li>
            <li>Directions</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
