import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// custom components
import Routes from './routes';
import PageBanner from './components/PageBanner';
import MainNav from './components/MainNav';
import MainFooter from './components/MainFooter';

export default class app extends Component {
  render() {
    return (
      <Router>
        <PageBanner imgSrc='https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
        <MainNav />
        <Routes />
        <MainFooter />
      </Router>
    );
  };
};
