import React from 'react';
import Tabs from './components/main/tabs.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        Welcome to Wifinder
      </header>
      <div id='main'>
        <Tabs />
      </div>
    </div>
  )
}

export default App;
