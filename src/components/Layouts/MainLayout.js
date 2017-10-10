import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Event from '../pages/Event';
import Profile from '../pages/Profile';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => (
  <div>
    <Header />
    <div id="content">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/event" component={Event}/>
        <Route exact path="/profile" component={Profile}/>
      </Switch>
    </div>
  </div>
);

export default MainLayout;
