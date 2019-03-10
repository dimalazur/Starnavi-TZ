import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';


import HouseMap from './containers/HouseMap';


class App extends Component {
  render() {
    return (
      <div className="App">
      <HouseMap />
      </div>
    );
  }
}


const AppConnect = connect()(App);

export default AppConnect