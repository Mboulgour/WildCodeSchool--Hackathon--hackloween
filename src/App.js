import React from 'react';

import { Route } from 'react-router-dom'

import Home from './components/Home'
import Actions from './components/Actions'

import './App.css'
import TextPage from './components/TextPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/text-page" component={TextPage} />
      <Route path="/actions" component={Actions} />
    </div>
  );
}

export default App;
