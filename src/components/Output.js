import React from 'react';

const output = (props) => {
  return (
    <li onClick={props.makeClick} style={{
      color: props.userDone ? 'red' : 'black'
    }}>{props.children}</li>
  );
};

export default output;
