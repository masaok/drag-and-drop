import React from 'react';
import TableRow from './TableRow';

const Table = (props) => {
  return (
    <table 
      // The following two props do not seem to affect the drag and drop
      // className="wrapper" 
      // onDragOver={props.drag}
      style={{
        border: '1px solid black'
      }}
    >
      <tbody>
        {props.info.map((blurb, index) => {
          return (
            <TableRow 
              key={index}
              title={blurb.title} 
              swap={props.swap} 
              index={index+1} 
              details={blurb.details}/>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table
