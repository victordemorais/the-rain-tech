import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from 'pages/LandingPage/Home';
import Dashboard from 'pages/Admin/Dashboard';
import Users from 'pages/Admin/Users';
import ChatPage from 'pages/Admin/Chat';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin/dashboard" exact component={Dashboard} />
      <Route path="/admin/users" exact component={Users} />
      <Route path="/admin/chat" exact component={ChatPage} />
    </Switch>
  </Router>
);
