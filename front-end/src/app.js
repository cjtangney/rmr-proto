import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

// custom components
import Routes from './routes';
import PageBanner from './components/PageBanner';
import MainNav from './components/MainNav';
import MainFooter from './components/MainFooter';

// CMS connection info
const cmsString = 'http://localhost:1337';

/**
 * TODO:
 *   => Loading animation FOR TRAILS / LIFTS while network loads
 */

export default class app extends Component {
  constructor(props){
    super(props)

    this.state = {
      trails: [],
      lifts: [],
      // isLoading: true,
    };
  };

  componentDidMount(){
    this.loadTrails();
    this.loadLifts();
  };

  loadTrails = () => {
    axios.get(`${cmsString}/trails`).then(response => {
      this.setState({
        trails: response.data,
      });
    });
  };

  loadLifts = () => {
    axios.get(`${cmsString}/lifts`).then(response => {
      this.setState({
        lifts: response.data,
      });
    });
  }

  render() {
    return (
      <Router>
        <PageBanner imgSrc='https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
        <MainNav />
        <Routes 
          data={this.state} 
        />
        <MainFooter />
      </Router>
    );
  };
};
