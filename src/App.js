import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Actions from './components/Actions'
import Transition from './components/Transition'

import './App.css'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/actions" component={Actions} />
      <Route path="/transition" component={Transition} />
    </div>
  );
}

export default App;
