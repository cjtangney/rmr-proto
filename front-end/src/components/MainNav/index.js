import React from 'react';
import { Link } from 'react-router-dom';
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
  function collapseMenus() {
    const mainNav = document.getElementById('main-nav');
    const subMenus = mainNav.querySelectorAll('.sub');
    for (let sub of subMenus) {
      sub.classList.contains('active') &&
        sub.classList.remove('active');
    }
  }

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

    if (target.classList.contains('page-link')) {
      collapseMenus();
    } else {
      target.children[0].classList !== undefined && 
        target.children[0].classList.toggle('active');
    };
  };
  return (
    <nav id='main-nav'>
      <ul>
        <li onClick={ event => toggleMenu(event) }>Buy Now
          <ul className='sub text-center'>
            <Link to='/SeasonPass'><li className='page-link'>Season Passes</li></Link>
            <Link to='/LiftTickets'><li className='page-link'>Lift Tickets</li></Link>
            <Link to=''><li className='page-link'>Reload Online</li></Link>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Winter
          <ul className='sub text-center'>
            <Link to='/Winter/SnowReport'><li className='page-link'>Snow Report</li></Link>
            <Link to='/Rentals'><li className='page-link'>Rentals</li></Link>
            <Link to='/Tuning-Repairs'><li className='page-link'>Tuning &amp; Repairs</li></Link>
            <Link to='/TerrainPark'><li className='page-link'>Terrain Park</li></Link>
            <Link to='/MountainSafety'><li className='page-link'>Mountain Safety</li></Link>
            <Link to='/Winter/TrailMap'><li className='page-link'>Trail Map</li></Link>
            <Link to='/MountainInfo'><li className='page-link'>Mountain Information</li></Link>
            <Link to='/Winter/Groups'><li className='page-link'>Group &amp; Corporate</li></Link>
            <Link to='/Directions'><li className='page-link'>Directions</li></Link>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Learn
          <ul className='sub text-center'>
            <Link to='/LearningCenter'><li className='page-link'>Learning Center</li></Link>
            <Link to='/LearningCenter/BebeWood'><li className='page-link'>Bebe Wood Program</li></Link>
            <Link to='/CompetitionCenter/'><li className='page-link'>Competition Programs</li></Link>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Dining
          <ul className='sub text-center'>
            <Link to='/Dining/Birches'><li className='page-link'>Birches Mountain Restaurant</li></Link>
            <Link to='/Dining/StoneHearth'><li className='page-link'>The Stone Hearth Bar</li></Link>
            <Link to='/Dining/HarvestCafe'><li className='page-link'>The Harvest Cafe</li></Link>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Weddings
          <ul className='sub text-center'>
            <Link to='/Weddings'><li className='page-link'>Weddings Home Page</li></Link>
            <Link to='/Weddings/Venues'><li className='page-link'>Venues</li></Link>
            <Link to='/Weddings/Vendors'><li className='page-link'>Preferred Vendors</li></Link>
          </ul>
        </li>
        <li onClick={ event => toggleMenu(event) }>Lodging
          <ul className='sub text-center'>
            <Link to='/Lodging'><li className='page-link'>Lodging Home Page</li></Link>
            <Link to=''><li className='page-link'>New Hampshire Mountain Inn</li></Link>
            <Link to='/Lodging/CardiganCabins'><li className='page-link'>Cardigan Cabins</li></Link>
            <Link to='/Lodging/Partners'><li className='page-link'>Lodging Partners</li></Link>
            <Link to='/Directions'><li className='page-link'>Directions</li></Link>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
