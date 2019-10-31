import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Transition from './components/Transition'
import Actions from './components/Actions'

import './App.css'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/transition" component={Transition} />
      <Route path="/actions" component={Actions} />
    </div>
  );
}

export default App;
