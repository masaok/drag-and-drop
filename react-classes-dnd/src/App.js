import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Card from './Card';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ]
    }
  }

  componentDidMount() {
    document.title = "React Classes DND"
  }

  // https://medium.com/bother7-blog/drag-and-drop-functionality-in-react-eaa4161a041d
  dragStart = event => {
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
    // this.setTargetBox(true)

    return true;
  }

  dragEnter = event => {
    // const ev = event.nativeEvent
    const ev = event

    ev.preventDefault();
    return true;
  }

  dragOver = event => {
    return false;
  }

  dragLeave = event => {
    // const ev = event.nativeEvent
    const ev = event
    ev.target.parentNode.style.opacity = '1.0';
    return false;
  }

  dragDrop = event => {
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

  render() {
    const { data } = this.state
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
                onDragStart={this.dragStart}
                onDragEnter={this.dragEnter}
                onDragOver={this.dragOver}
                onDragLeave={this.dragLeave}
                onDrop={this.dragDrop}
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
}

// export default App;
