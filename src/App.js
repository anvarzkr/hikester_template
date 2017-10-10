import React, { Component } from 'react';
import MainLayout from './components/layouts/MainLayout';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <MainLayout/>
        </BrowserRouter>
      </div>
    );
  }

}
