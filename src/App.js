import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameType from './GameType.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">One Night Ultimate Werewolf React</h1>
        </header>
        <GameType />
      </div>
    );
  }
}

export default App;
