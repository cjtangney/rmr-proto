import React from 'react';

import ScrollToTop from '../../../components/ScrollToTop';

import './style.css';

export default function TuningPage() {
  return (
    <div id='winter-page-wrapper'>
      <div className='pure-g'>
        <div className='pure-u-1 tuning-packages-header'>
          <h1>&#8606;&nbsp;Ragged Edge Tuning &amp; Repair&nbsp;&#8608;</h1>
        </div>
        <section className='pure-u-1' id='tuning-packages'>
          <p className='description text-center'>Ragged Mountain offers full tuning and repair services right on site!</p>
          <div className='pure-g'>
            <div className='pure-u-1 pure-u-lg-11-12 package add-ons default-shadow'>
              <h2>Rates &amp; Services</h2>
              <table className='pure-table'>
                <tbody>
                  <tr>
                    <td>Tune</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>Wax</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>Hand wax</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>Binding adjustment</td>
                    <td>$10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <ScrollToTop />
    </div>
  );
};
