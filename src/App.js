import React from 'react';
import Title from './components/Title'
import Home from './components/Home'
import Actions from './components/Actions'

import './App.css'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/actions" component={Actions} />
    </div>
  );
}

export default App;
