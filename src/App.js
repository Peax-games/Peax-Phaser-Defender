import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Defender from './Game/Defender';

class App extends Component {
  render() {
    Defender();
    return (
      <div id="myCanvas">

      </div>
    );
  }
}

export default App;
