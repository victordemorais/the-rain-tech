import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from 'pages/LandingPage/Home';
import Dashboard from 'pages/Admin/Dashboard';

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  </Router>
);
