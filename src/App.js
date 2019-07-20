import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Game from './components/Game.js';

var style = {"backgroundColor": "blue", "height": "150px", "color": "white"};

function App() {
  return (
    <div className="container-fluid">
      <header className="row" style={style}>
        <h2 className="mx-auto mt-5">Game - Rock Paper Scissors</h2>
      </header>
      <section>
        <Game />
      </section>
    </div>
  );
}

export default App;
