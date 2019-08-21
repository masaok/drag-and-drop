import React, { Component } from 'react';
import './App.css';

export default class ToDoDragDropDemo extends Component {

  state = {
    tasks: [
      {id: "1", taskName:"Read book",type:"inProgress", backgroundColor: "red"},
      {id: "2", taskName:"Pay bills", type:"inProgress", backgroundColor:"green"},
      {id: "3", taskName:"Go to the gym", type:"Done", backgroundColor:"blue"},
      {id: "4", taskName:"Play baseball", type:"Done", backgroundColor:"green"}
    ]
  }

  onDragStart = (event, index) => {
    console.log('dragstart on div: ', index);
    event.dataTransfer.setData("dragIndex", index);
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDrop = (event, dropIndex) => {
    console.log("ON DROP > dropIndex: " + dropIndex)
    let dragIndex = event.dataTransfer.getData("dragIndex");
    console.log("dragIndex: " + dragIndex)

    let tasks = this.state.tasks
    var temp = tasks[dropIndex]
    tasks[dropIndex] = tasks[dragIndex]
    tasks[dragIndex] = temp

    this.setState({
      // ...this.state,  // not necessary?
      tasks
    });
  }

  render() {
    // var tasks = {
    //   inProgress: [],
    //   Done: []
    // }

    let tasks = []

    this.state.tasks.forEach((task, index) => {
      tasks.push(
        <tr key={task.id} 
          onDragStart = {(event) => this.onDragStart(event, index)}
          onDragOver={(event)=>this.onDragOver(event)}
          onDrop={(event)=>{this.onDrop(event, index)}}
          draggable
          className="draggable"
          style = {{backgroundColor: task.bgcolor}}>
          <td>{task.taskName}</td>
        </tr>
      );
    });
    
    return (
      <div className="drag-container">
        <h2 className="head">To Do List Drag & Drop</h2>

        <table>
          <tbody>
            {tasks}
          </tbody>
        </table>

        {/* <div className="inProgress"
          onDragOver={(event)=>this.onDragOver(event)}
          onDrop={(event)=>{this.onDrop(event, "inProgress")}}
        >
          <span className="group-header">In Progress</span>
          {tasks.inProgress}
        </div>
        <div className="droppable"
          onDragOver={(event)=>this.onDragOver(event)}
          onDrop={(event)=>this.onDrop(event, "Done")}
        >
          <span className="group-header">Done</span>
          {tasks.Done}
        </div>           */}
      </div>
    );

  }
}
