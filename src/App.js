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
      deck: generateDeck(),
      pickedCards : []
    }
    function pickCard(cardIndex) {
      if (this.state.deck[cardIndex].isFlipped) {
        return
        
      } 
      let cardToFlip = {...this.state.deck[cardIndex]}
      let newDeck = this.state.deck.map((card, index) => {
        if (cardIndex === index) {
          return cardToFlip
        }
        return card;
      })
    }
    this.setState({
      deck: newDeck, pickedCards: newPickedCards
    })
  }
   
  render() {  
    let deck = [];    
    let cardsJSX = this.state.deck.map((card, index) => {
      return(
        <MemoryCard symbol= {card.symbol} isFlipped= {card.isFlipped} key= {index}/>
      )
    })


  return (
    <div className="App" >
      <header className="App-header" >
        <h2 className="title">Memory Game</h2>
        <h2 className="subtitle">Match cards to win</h2>
      </header>

      {cardsJSX.slice(0,4)}
      {cardsJSX.slice(4,8)}
      {cardsJSX.slice(8,12)}
      {cardsJSX.slice(12,16)}
      
    </div>
  );
}
}

export default App;