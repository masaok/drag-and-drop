import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Card from './Card';

export default class App extends Component {

  componentDidMount() {
    document.title = "React Classes DND"
  }

  render() {
    return (
      <div className="App">
        HELLO
        <Card />
      </div>
    );
  }
}

// export default App;
