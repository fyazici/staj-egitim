import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent name="fatih">CHILD</MyComponent>
        <MyComponent name="fatih">CHILD</MyComponent>
      </header>
    </div>
  );
}

export default App;
