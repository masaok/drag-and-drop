import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoDragDropDemo from './ToDoDragDropDemo'
import ToDoDragDropDemoMUI from './ToDoDragDropDemoMUI'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoDragDropDemo />
        <ToDoDragDropDemoMUI />
      </header>
    </div>
  );
}

export default App;
