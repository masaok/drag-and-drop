import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
// import Card from './Card';

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
    console.log("DRAG START ... ")
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
    console.log("DRAG ENTER")
    // const ev = event.nativeEvent
    const ev = event

    ev.preventDefault();
    return true;
  }

  dragOver = event => {
    // console.log("DRAG OVER")
    // return false;
    // let event = e as Event;

    // https://stackoverflow.com/questions/50230048/react-ondrop-is-not-firing/50230145
    event.stopPropagation();
    event.preventDefault();
  }

  dragLeave = event => {
    console.log("DRAG LEAVE")
    // const ev = event.nativeEvent
    const ev = event
    ev.target.parentNode.style.opacity = '1.0';
    return false;
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  // TODO: Get the ID of the element being dropped upon (the destination row)
  // https://stackoverflow.com/questions/38512668/how-to-get-the-target-id-of-the-ondrop-event
  dragDrop = (event) => {
    event.preventDefault()

    console.log("DRAG DROP ...")
    console.log("EVENT TARGET ID")
    console.log(event.target.id)

    // console.log("TARGET")
    // console.log(target)

    const ev = event.nativeEvent
    // const ev = event
    console.log("EV TARGET ID")
    console.log(ev.target.id)
    console.log(event.target.id)

    const attr2 = ev.target.getAttribute('id')
    console.log(attr2)

    // Get the ID of element being dragged based on the "Text" key
    var src = ev.dataTransfer.getData("Text");
    console.log("SRC:")
    console.log(src)

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
            {data.map((row, index) => (
              <tr
                id={index}
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
