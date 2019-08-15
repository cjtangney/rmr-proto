import React from 'react';

import './style.css';

/**
 * all rates / items should be loaded from the cms and
 * displayed dynamically on the page / in tables / etc
 * 
 * consider a loader for while the pages are being loaded /
 * rendered
 */

export default function RentalsPage() {
  return (
    <div id='winter-page-wrapper'>
      <div className='pure-g'>
        <div className='pure-u-1 rentals-packages-header'>
          <h1>&#8606;&nbsp;Rentals&nbsp;&#8608;</h1>
        </div>
        <section className='pure-u-1' id='rentals-packages'>
          <p className='description text-center'>Choose from any of our great rental packages! We also offer seasonal lease and seasonl rental options for those of you who don't want to buy!</p>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-lg-1-4 package default-shadow'>
              <h2>Ski or Board only</h2>
              <span className='price'><span className='little-money-sign'>$</span>15</span>
              <button className='button'>Buy now!</button>
            </div>
            <div className='pure-u-1 pure-u-lg-1-4 package default-shadow'>
              <h2>Ski or Snowboard Package</h2>
              <span className='price'><span className='little-money-sign'>$</span>20</span>
              <button className='button'>Buy now!</button>
            </div>
            <div className='pure-u-1 pure-u-lg-1-4 package default-shadow'>
              <h2>Boots only</h2>
              <span className='price'><span className='little-money-sign'>$</span>45</span>
              <button className='button'>Buy now!</button>
            </div>
            <div className='pure-u-1 pure-u-lg-11-12 package add-ons default-shadow'>
              <h2>Extras &amp; Add-on's</h2>
              <table className='pure-table mx-auto'>
                <tbody>
                  <tr>
                    <td>Helmet</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>Ski poles</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>Helmet and ski poles</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>Helmet with package</td>
                    <td>$10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='pure-u-1 pure-u-lg-11-12 package add-ons with-image default-shadow'>
              <h2>Seasonal Lease Program</h2>
              <div className='content'>
                <div className='text'>
                  <p>If you don't own your own equipment, the seasonal lease program is a great way to get on the snow today. Simply pay one fee at the start of the season and return your gear in the spring!</p>
                  <table className='pure-table mx-auto'>
                    <tbody>
                      <tr>
                        <td>Helmet</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>Ski poles</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>Helmet and ski poles</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>Helmet with package</td>
                        <td>$10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <img src='https://placehold.it/1000x500' alt='Seasonal Lease Program' title='Seasonal Lease Image' />
              </div>
            </div>
            <div className='pure-u-1 pure-u-lg-11-12 package add-ons with-image default-shadow'>
              <h2>Seasonal Rental Program</h2>
              <div className='content'>
                <img src='https://placehold.it/1000x500' alt='Seasonal Lease Program' title='Seasonal Lease Image' />
                <div className='text'>
                  <p>If you don't own your own equipment, the seasonal lease program is a great way to get on the snow today. Simply pay one fee at the start of the season and return your gear in the spring!</p>  
                  <table className='pure-table mx-auto'>
                    <tbody>
                      <tr>
                        <td>Helmet</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>Ski poles</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>Helmet and ski poles</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>Helmet with package</td>
                        <td>$10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
