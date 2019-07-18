import React, { Component } from 'react';

// custom components
import Routes from './routes';
import PageBanner from './components/PageBanner';
import MainNav from './components/MainNav';

export default class app extends Component {
  render() {
    return (
      <div className='page-wrapper'>
        <PageBanner imgSrc='https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
        <MainNav />
        <Routes />
      </div>
    );
  };
};
