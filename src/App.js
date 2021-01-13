import React, {useState} from 'react';
import './App.css';

import { Router } from '@reach/router';
import Home from './components/Home'
import Hello from './components/Hello'
import Number from './components/Number'
import Color from './components/Color'


function App() {

  return (
    <div className="App">
      <Router>
        <Home path="/home" exact/>
        <Number path="/:number" />
        <Hello path="/:hello" />
        <Color path="/:hello/:color/:background" />
      </Router>
    </div>
  );
}

export default App;
