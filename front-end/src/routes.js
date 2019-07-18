import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage'

export default function Routes() {
  return (
    <Router>
      <Route path='/' exact render={ () =>
        <HomePage />
      } />
    </Router>
  );
};
