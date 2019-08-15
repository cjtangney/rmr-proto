import React from 'react';

import './style.css';

export default function RentalsPage() {
  return (
    <div id='winter-page-wrapper'>
      <div className='pure-g'>
        <div className='pure-u-1 rentals-packages-header'>
          <h1>&#8606;&nbsp;Rentals&nbsp;&#8608;</h1>
        </div>
        <section className='pure-u-1' id='rentals-packages'>
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
              <table className='pure-table'>
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
        </section>
        <div className='pure-u-1 rentals-packages-header'>
          <h1>&#8606;&nbsp;Ragged Edge Tuning &amp; Repair&nbsp;&#8608;</h1>
        </div>
      </div>
    </div>
  );
};
