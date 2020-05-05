import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from 'pages/LandingPage/Home';
import Dashboard from 'pages/Admin/Dashboard';
import SelectLogin from 'pages/Admin/SelectLogin';
import Users from 'pages/Admin/Users';
import ChatPage from 'pages/Admin/Chat';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const Routes = () => (
  <BrowserRouter>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={SelectLogin} />
        <Route path="/admin/dashboard/:user" component={Dashboard} />
        <Route path="/admin/users/:user" component={Users} />
        <Route path="/admin/chat/:user" component={ChatPage} />
      </Switch>
    </Router>
  </BrowserRouter>
);
