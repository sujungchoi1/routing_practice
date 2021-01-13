import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import PageOne from './practice/PageOne';
import PageTwo from './practice/PageTwo';

function App() {
  return (
    <div className="App">
      <Router>
        <PageOne path="/route-one"/>
        <PageTwo path="/route-two"/>
      </Router>
    </div>
  );
}

export default App;
