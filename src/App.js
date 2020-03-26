import React, { Component } from 'react';
import './App.css';
import MemoryCard from './Components/MemoryCard';

function generateDeck() {
  const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`];
  const deck = [];
  for (let i = 0; i < 16; i++) {
    deck.push({
      symbol:symbols[i % 8],
      isFlipped: false
    })
  }
  shuffle(deck);
  return deck;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      deck: generateDeck()
    }
  }
   
  render() {  
    let deck = [];
    let pickedCards = [];

  return (
    <div className="App" >
      <header className="App-header" >
        <h2 className="title">Memory Game</h2>
        <h2 className="subtitle">Match cards to win</h2>
      </header>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}
}

export default App;
