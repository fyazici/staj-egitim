import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import MyDataComponent from "./components/MyDataComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyDataComponent />
      </header>
    </div>
  );
}

export default App;
