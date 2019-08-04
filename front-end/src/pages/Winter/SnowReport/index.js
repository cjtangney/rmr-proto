import React from 'react';

import './style.css';

/**
 * trails and trail status should be loaded from the cms
 * and displayed dynamically on the page.
 * 
 * consider a loader for while the pages are being loaded /
 * rendered
 * 
 * is there a way you could add a filter feature to this page?
 * -> user wants to see only blue squares, select from drop-down,
 * -- then re-render with updated information?
 */

/**
 * TODO:
 *  ->> LIFTS
 */

export default function SnowReportPage(props) {
  const { trails, lifts } = props;

  const easyGroomerTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'easy' && 
    trail.trailType.toLowerCase() === 'groomer'
  );
  
  const intermediateGroomerTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'intermediate' &&
    trail.trailType.toLowerCase() === 'groomer'
  );

  const advancedGroomerTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'advanced' &&
    trail.trailType.toLowerCase() === 'groomer'
  );

  const expertGroomerTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'expert' &&
    trail.trailType.toLowerCase() === 'groomer'
  );

  const easyGladeTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'easy' &&
    trail.trailType.toLowerCase() === 'glade'
  );

  const intermediateGladeTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'intermediate' &&
    trail.trailType.toLowerCase() === 'glade'
  );

  const advancedGladeTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'advanced' &&
    trail.trailType.toLowerCase() === 'glade'
  );

  const expertGladeTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'expert' &&
    trail.trailType.toLowerCase() === 'glade'
  );

  const easyParkTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'easy' &&
    trail.trailType.toLowerCase() === 'park'
  );

  const intermediateParkTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'intermediate' &&
    trail.trailType.toLowerCase() === 'park'
  );

  const advancedParkTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'advanced' &&
    trail.trailType.toLowerCase() === 'park'
  );

  const expertParkTrails = trails.filter(trail => 
    trail.difficulty.toLowerCase() === 'expert' &&
    trail.trailType.toLowerCase() === 'park'
  );

  return (
    <div id='winter-page-wrapper'>
      <section className='pure-g' id='snow-report-overview'>
        <div className='pure-u-1' id='label'>
          <h1>&#8606;&nbsp;Snow Report&nbsp;&#8608;</h1>
        </div>
        <div className='pure-u-1 pure-u-lg-1-4 header default-shadow'>
          <h2>New Snow</h2>
          <p>0"</p>
        </div>
        <div className='pure-u-1 pure-u-lg-1-4 header default-shadow'>
          <h2>Trails Open</h2>
          <p>0</p>
        </div>
        <div className='pure-u-1 pure-u-lg-1-4 header default-shadow'>
          <h2>Lifts Open</h2>
          <p>0</p>
        </div>
        {/* <div className='pure-u-1 report-text'>
          <p>The "Last Chair" signs have reached the top of the chairlifts, and we are now closed for the 2018-19 winter season.</p>
          <p>It's been a great ski season at beautiful Ragged Mountain. We had good snowmaking temps in December, received lots of natural snow and enjoyed lots of great camaraderie with our Ragged friends and families.</p>
          <p>We want to THANK all of our Mission:Affordable Season Pass holders, and all of the passionate skiers and riders who visited us at Ragged Mountain this winter. You made it a memorable year for us all.</p>
          <p>We plan to open on Friday, November 29, 2019 for the 2019-20 winter season.  Until then, we hope you have a great summer and fall, and we look forward to seeing you again next season!</p>
        </div> */}
      </section>

      <section className='pure-g trail-section' id='groomed'>
        <div className='pure-u-1 default-shadow' id='label'>
          <h2>&#8606;&nbsp;Groomers&nbsp;&#8608;</h2>
        </div>
        <div className='pure-u-1 default-shadow' id='easy'>
          <div className='pure-g'>
            <span className='trails-header pure-u-1'><i className='fas fa-circle green'></i>&nbsp;Easy&nbsp;<i className='fas fa-circle green'></i></span>
            {
              easyGroomerTrails.map(trail => (
                <div className='pure-u-1 pure-u-md-1-3 trail'>
                  <span className='trail-name'>{trail.trailName}</span>
                  <span className='trail-status'>{trail.status === 1 ? 'Open' : 'Closed'}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className='pure-u-1 default-shadow' id='intermediate'>
          <div className='pure-g'>
            <span className='trails-header pure-u-1'><i className="fas fa-square blue"></i>&nbsp;Intermediate&nbsp;<i className="fas fa-square blue"></i></span>
            {
              intermediateGroomerTrails.map(trail => (
                <div className='pure-u-1 pure-u-md-1-3 trail'>
                  <span className='trail-name'>{trail.trailName}</span>
                  <span className='trail-status'>{trail.status === 1 ? 'Open' : 'Closed'}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className='pure-u-1 default-shadow' id='advanced'>
          <div className='pure-g'>
            <span className='trails-header pure-u-1'><i className="fas fa-square black"></i>&nbsp;Advanced&nbsp;&nbsp;<i className="fas fa-square black"></i></span>
            {
              advancedGroomerTrails.map(trail => (
                <div className='pure-u-1 pure-u-md-1-3 trail'>
                  <span className='trail-name'>{trail.trailName}</span>
                  <span className='trail-status'>{trail.status === 1 ? 'Open' : 'Closed'}</span>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='pure-g trail-section' id='ungroomed'>
        <div className='pure-u-1 default-shadow' id='label'>
          <h2>&#8606;&nbsp;Glades&nbsp;&#8608;</h2>
        </div>
        <div className='pure-u-1 default-shadow' id='glade-intermediate'>
          <div className='pure-g'>
            <span className='trails-header pure-u-1'><i className="fas fa-square blue"></i>&nbsp;Intermediate&nbsp;<i className="fas fa-square blue"></i></span>
            {
              intermediateGladeTrails.map(trail => (
                <div className='pure-u-1 pure-u-md-1-3 trail'>
                  <span className='trail-name'>{trail.trailName}</span>
                  <span className='trail-status'>{trail.status === 1 ? 'Open' : 'Closed'}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className='pure-u-1 default-shadow' id='glade-advanced'>
          <div className='pure-g'>
            <span className='trails-header pure-u-1'><i className="fas fa-square black"></i>&nbsp;Advanced&nbsp;&nbsp;<i className="fas fa-square black"></i></span>
            {
              advancedGladeTrails.map(trail => (
                <div className='pure-u-1 pure-u-md-1-3 trail'>
                  <span className='trail-name'>{trail.trailName}</span>
                  <span className='trail-status'>{trail.status === 1 ? 'Open' : 'Closed'}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className='pure-u-1 default-shadow' id='glade-expert'>
          <div className='pure-g'>
            <span className='trails-header pure-u-1'><i className="fas fa-square black"></i>&nbsp;&nbsp;<i className="fas fa-square black"></i>&nbsp;Expert&nbsp;&nbsp;<i className="fas fa-square black"></i>&nbsp;&nbsp;<i className="fas fa-square black"></i></span>
            {
              expertGladeTrails.map(trail => (
                <div className='pure-u-1 pure-u-md-1-3 trail'>
                  <span className='trail-name'>{trail.trailName}</span>
                  <span className='trail-status'>{trail.status === 1 ? 'Open' : 'Closed'}</span>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='pure-g trail-section' id='parks'>
        <div className='pure-u-1 default-shadow' id='label'>
          <h2>&#8606;&nbsp;Parks&nbsp;&#8608;</h2>
        </div>
        <div className='pure-u-1 default-shadow' id='park-easy'>
          <div className='pure-g'>
            <span className='trails-header pure-u-1'><i className='fas fa-circle green'></i>&nbsp;Easy&nbsp;<i className='fas fa-circle green'></i></span>
            {
              easyParkTrails.map(trail => (
                <div className='pure-u-1 pure-u-md-1-3 trail'>
                  <span className='trail-name'>{trail.trailName}</span>
                  <span className='trail-status'>{trail.status === 1 ? 'Open' : 'Closed'}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className='pure-u-1 default-shadow' id='park-advanced'>
          <div className='pure-g'>
            <span className='trails-header pure-u-1'><i className="fas fa-square black"></i>&nbsp;Advanced&nbsp;&nbsp;<i className="fas fa-square black"></i></span>
            {
              intermediateParkTrails.map(trail => (
                <div className='pure-u-1 pure-u-md-1-3 trail'>
                  <span className='trail-name'>{trail.trailName}</span>
                  <span className='trail-status'>{trail.status === 1 ? 'Open' : 'Closed'}</span>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='pure-g' id='snow-report-info'>
        <div className='pure-u-1 content text-center'>
          <hr></hr>
          <p>This report is a reflection of the most up to date information. Trail count includes both groomed and ungroomed terrain. Please understand that conditions may vary due to weather and skier/snowboarder traffic. Trails may close or open without prior notice due to many reasons. This report is updated every morning and more frequently as changes on the mountain dictate. Be aware of changing conditions. Trails marked as groomed mean they have been groomed within the past 12 hours. If a trail is marked as snowmaking, this means that snowmaking is either currently taking place, or has taken place over the past 12 hours.</p>
          <p>Some trails, including some glades and outer trails close at 3:30 pm, every day. Those trails are marked as such at the top of the trail. To view the full trail map, click here!</p>
        </div>
      </section>
    </div>
  );
};
