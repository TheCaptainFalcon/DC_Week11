import React from 'react';
import './App.css';
import Profile from './Components/Profile';
import Results from './Components/Results';
import Email from './Components/Email';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Card style={{ width: '18rem', }}>
            <Card.Text>
              <Results />
            </Card.Text>
          
        </Card>
                <Card style={{ width: '18rem' }}>
          
            <Card.Text>
              <Results />
            </Card.Text>
    
        </Card>
                <Card style={{ width: '18rem' }}>
          
            <Card.Text>
              <Results />
            </Card.Text>
        
        </Card>


      </header>
    </div>
  );
}


export default App;
