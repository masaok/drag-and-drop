import React, { Component } from 'react';

class TableRow extends Component {
  state = {
    index: this.props.index,
    targetbox: null
  }

  cssGrid = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
  }

  dragEnd = (event) => {
    this.setState({targetbox: null})
  }

  dragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id)
    this.setState({targetbox: true})
  }

  drop = (event) => {
    if (event.target.id) {
      this.props.swap(event.dataTransfer.getData("text"), event.target.id)
      event.dataTransfer.clearData()
    }
  }

  render(){
    if (this.state.targetbox === null) {
      console.log("TARGET BOX NULL")
      return (
        <React.Fragment>
          <tr 
            className={this.cssGrid[this.state.index]} 
            id={this.props.title} 
            draggable="true" 
            onDrop={this.drop} 
            onDragStart={this.dragStart} 
            onDragOver={(event) => event.preventDefault()} 
            onDragEnd={this.dragEnd}
          >
            <td>{this.props.title}</td><td>{this.props.details}</td>
          </tr>
        </React.Fragment>
      )
    }
    else {
      console.log("TARGET BOX NOT NULL")
      const style = {backgroundColor: 'red'}
      return (
        <React.Fragment>
          <tr 
            style={style} 
            className={this.cssGrid[this.state.index]} 
            id={this.props.title} 
            draggable="true" 
            onDrop={this.drop} 
            onDragStart={this.dragStart} 
            onDragOver={(event) => event.preventDefault()} 
            onDragEnd={this.dragEnd}
          ></tr>
        </React.Fragment>
      )
    }
  }

}

export default TableRow
