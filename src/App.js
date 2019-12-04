import React from 'react';
import logo from './logo.svg';
import ConfigTab from './components/configuration-tab/config-tab'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Wifinder
      </header>
      <ConfigTab />
    </div> 
  )
}

export default App;
