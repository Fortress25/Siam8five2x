import React, { Component } from 'react';
import './App.css';
import Home from './view/Home';
import GameAll from './view/SeeGame/GameAll';
import AppListGame from './ListProduct/AppListGame';
import { Route, Routes } from 'react-router-dom';
class App extends Component {

  componentDidMount() {
    

  }

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:nameGame" element={<GameAll />} />
          <Route path="/profile/game/:nameGame" element={<AppListGame />} />
          <Route path="/profile/casino/:nameGame" element={<AppListGame />} />
        </Routes>
      </>
    );
  }
}

export default App;
