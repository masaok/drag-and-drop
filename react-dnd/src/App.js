import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  // https://daveceddia.com/usestate-hook-examples/
  const [data] = React.useState([
    [
      "A company",
      "A contact",
      "A country",
    ],
    [
      "B company",
      "B contact",
      "B country",
    ],
    [
      "C company",
      "C contact",
      "C country",
    ],
    [
      "D company",
      "D contact",
      "D country",
    ],
    [
      "E company",
      "E contact",
      "E country",
    ],
  ])

  const dragStart = event => {
    console.log('react SyntheticEvent ==> ', event);
    console.log('nativeEvent ==> ', event.nativeEvent); //<- gets native JS event
  }

  return (
    <div className="App">
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>

        {/* https://daveceddia.com/usestate-hook-examples/ */}
        {data.map(row => (
          <tr
            id={row[0]}
            draggable="true" 
            ondragstart={dragStart}
            ondragenter="return dragEnter(event)" 
            ondragover="return dragOver(event)"
            ondragleave="return dragLeave(event)"
            ondrop="return dragDrop(event)" 
          >
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
          </tr>
        ))}
        <tr 
          id="row1" 
          draggable="true" 
          ondragstart="return dragStart(event)"
          ondragenter="return dragEnter(event)" 
          ondragover="return dragOver(event)"
          ondragleave="return dragLeave(event)"
          ondrop="return dragDrop(event)" 
        >
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr 
          id="row2" 
          draggable="true" 
          ondragstart="return dragStart(event)"
          ondragenter="return dragEnter(event)" 
          ondragover="return dragOver(event)"
          ondragleave="return dragLeave(event)"
          ondrop="return dragDrop(event)" 
        >
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr
          id="row3" 
          draggable="true" 
          ondragstart="return dragStart(event)"
          ondragenter="return dragEnter(event)" 
          ondragover="return dragOver(event)"
          ondragleave="return dragLeave(event)"
          ondrop="return dragDrop(event)" 
        >
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr
          id="row4" 
          draggable="true" 
          ondragstart="return dragStart(event)"
          ondragenter="return dragEnter(event)" 
          ondragover="return dragOver(event)"
          ondragleave="return dragLeave(event)"
          ondrop="return dragDrop(event)" 
        >
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr
          id="row5" 
          draggable="true" 
          ondragstart="return dragStart(event)"
          ondragenter="return dragEnter(event)" 
          ondragover="return dragOver(event)"
          ondragleave="return dragLeave(event)"
          ondrop="return dragDrop(event)" 
        >
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr
          id="row6" 
          draggable="true" 
          ondragstart="return dragStart(event)"
          ondragenter="return dragEnter(event)" 
          ondragover="return dragOver(event)"
          ondragleave="return dragLeave(event)"
          ondrop="return dragDrop(event)" 
        >
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>

    </div>
  );
}

export default App;
