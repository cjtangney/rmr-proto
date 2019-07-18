import React from 'react';
import './style.css';

/**
 * NOTES:
 * 
 * Consider a CallToAction component.
 * Consider a Keynote component.
 * Blog will for sure want it's own component.
 */

export default function HomePage() {
  return (
    <div id='home-page-wrapper'>
      <section className='pure-g' id='call-to-action'>
        <div className='pure-u-1 pure-u-lg-1-3 text-center btn'>
          <span>Mission Affordable<br />Season Pass</span>
        </div>
        <div className='pure-u-1 pure-u-lg-1-3 text-center btn'>
          <span>Get Your<br />Tickets Now</span>
        </div>
        <div className='pure-u-1 pure-u-lg-1-3 text-center btn'>
          <span>Book Your<br/>Wedding Today</span>
        </div>
      </section>
      <section className='pure-g' id='blog'>
        <div className='pure-u-1 pure-u-lg-1-3 side-bar'>
          <div className='content text-right'>
            <h2 className='label'>&#8606;&nbsp;Mountain Message Blog&nbsp;&#8608;</h2>
            <button title='Blog Archive'>Archive</button>
          </div>
        </div>
        <div className='pure-u-1 pure-u-lg-2-3 featured-post'>
          <div className='content'>
            <h2>Blog post title!</h2>
            <p>Here is where a blog would load! It would pull in information from the CMS and display it in this box.
            It would probably just take the top / most recent post from the CMS and set it to the 'featured post'.</p>
            <p>I still need to come up with a good way to add featured images, but that's not difficult and shouldn't
            take me more than an hour or two? If that? Could be some room along the bottom of this section, maybe 
            floated somewhere in the container... Who knows.</p>
            <button title='Read More...'>Read More...</button>
          </div>
        </div>
      </section>
      
      <section className='pure-g' id='keynote'>
        <div className='pure-u-1 pure-u-lg-2-3 keynote-body'>
          <div className='content'>
            <h2>Keynote content!</h2>
            <p>You can use this section to highlight upcoming events, featured marketing campaigns, and more. Obviously, any
            element on this page can be moved or re-arranged as necessary. Placing the Keynote section (this section) higher up
            on the page (before the blog) can be done pretty easily.</p>
            <p>Moving the layout around is not something you would want to do once the site has been published. Ultimately, this is
            something that would need to be decided upon prior to being published. Really depends on what you want the
            focus of the page to be.</p>
          </div>
        </div>
        <div className='pure-u-1 pure-u-lg-1-3 side-bar'>
          <div className='content'>
            <h2 className='label'>&#8606;&nbsp;Keynote!&nbsp;&#8608;</h2>
            <button title='Learn More'>Learn More!</button>
          </div>
        </div>
      </section>

      <section className='pure-g' id='directions'>

      </section>
    </div>  
  );
};
