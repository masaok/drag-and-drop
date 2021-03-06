import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import Table from './components/Table'

const REACT_VERSION = React.version;

class App extends Component {
  constructor(props){
    super(props)
    this.swap = this.swap.bind(this)
  }
  state = {
    info: [
      {title:"1. potato", details: "blah blah blah"},
      {title:"2. tomato", details: "red and juicy"},
      {title:"3. taco", details: "burrito burrito"},
      {title:"4. oregano", details: "spicy"},
      {title:"5. oranges", details: "are orange"},
      {title:"6. raccoon", details: "trash panda"}
    ],

  }

  drag = (event) => {
    event.preventDefault()
  }

  swap = (title1, title2) => {
    let pos2 = this.state.info.findIndex((object) => {return (object.title === title2)})
    let pos1 = this.state.info.findIndex((object) => {return (object.title === title1)})
    let samplearray = this.state.info
    let temp = this.state.info[pos1]
    samplearray[pos1] = this.state.info[pos2]
    samplearray[pos2] = temp
    this.setState({info: samplearray})
  }

  componentDidMount() {
    document.title = "Bother7 Table Test"
  }

  render() {
    return ( <div><h1>Bother7 Table Test {REACT_VERSION}</h1>
      <Table swap={this.swap} info={this.state.info} /> </div>
    );
  }
}

export default App;
