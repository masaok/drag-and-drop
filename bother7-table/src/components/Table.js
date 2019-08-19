import React from 'react';
import TableRow from './TableRow';

const Table = (props) => {
  return (
    <table className="wrapper" onDragOver={props.drag}>
      <tbody>
        {props.info.map((blurb, index) => {
          return (
            <TableRow 
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
