import React from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './Components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Facebook Authentication</h1>

        <Facebook />
      </header>
    </div>
  );
}

export default App;
