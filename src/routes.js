import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from 'pages/LandingPage/Home';

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);
