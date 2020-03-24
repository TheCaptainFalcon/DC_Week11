import React from 'react';
import './App.css';
import MemoryCard from './Components/MemoryCard';

function App() {
  return (
    <div className="App" >
      <header className="App-header" >
        <h2 className="title">Memory Game</h2>
        <h2 className="subtitle">Match cards to win</h2>
      </header>
      <MemoryCard />
    </div>
  );
}

export default App;
