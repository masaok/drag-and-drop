// import React from 'react';
import React, { useState, useEffect } from 'react';

// import logo from './logo.svg';
import './App.css';

function App() {

  const [targetBox, setTargetBox] = useState(null);

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

  // https://medium.com/bother7-blog/drag-and-drop-functionality-in-react-eaa4161a041d
  const dragStart = event => {
    console.log('react SyntheticEvent ==> ', event);
    console.log('nativeEvent ==> ', event.nativeEvent); //<- gets native JS event

    // const ev = event.nativeEvent
    const ev = event

    ev.target.style.color = 'blue';

    // Allow the drag effect
    ev.dataTransfer.effectAllowed='move';

    const attr = ev.target.id
    console.log(attr)

    const attr2 = ev.target.getAttribute('id')
    console.log(attr2)

    // Save the dragged element ID as the dataTransfer attribute
    ev.dataTransfer.setData("Text", attr)

    // Set the image of the element as it is being dragged
    ev.dataTransfer.setDragImage(ev.target,0,0);

    // https://medium.com/bother7-blog/drag-and-drop-functionality-in-react-eaa4161a041d
    setTargetBox(true)

    return true;
  }

  const dragEnter = event => {
    // const ev = event.nativeEvent
    const ev = event

    ev.preventDefault();
    return true;
  }

  const dragOver = event => {
    return false;
  }

  const dragLeave = event => {
    // const ev = event.nativeEvent
    const ev = event
    ev.target.parentNode.style.opacity = '1.0';
    return false;
  }

  const dragDrop = event => {
    // const ev = event.nativeEvent
    const ev = event


    // Get the ID of element being dragged based on the "Text" key
    var src = ev.dataTransfer.getData("Text");

    if (ev.target.id) {
      this.props.swap(src, ev.target.id)
      ev.dataTransfer.clearData()
    }

    // Get the element and append it to the DOM of the target
    // TODO: should *not* modify the DOM in React
    // ev.target.appendChild(document.getElementById(src));

    // Stop, because we're done
    ev.stopPropagation();

    return false;
  }

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>

          {/* https://daveceddia.com/usestate-hook-examples/ */}
          {data.map(row => (
            <tr
              id={row[0]}
              key={row[0]}
              draggable="true"
              onDragStart={dragStart}
              onDragEnter={dragEnter}
              onDragOver={dragOver}
              onDragLeave={dragLeave}
              onDrop={dragDrop}
            >
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
