import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Transition from './components/Transition'
import Actions from './components/Actions'

import './App.css'

function App() {
  return (
    <div className="App">
      <Transition />
    </div>
  );
}

export default App;
