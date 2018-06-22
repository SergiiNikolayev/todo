import React from 'react';

const controls = (props) => {
  return (
    <div>
      <h4>{props.children}</h4>
      <button onClick={props.userClick}>Add</button>
      <button onClick={props.userClickFilterOne}>Filter 1</button>
      <button onClick={props.userClickFilterTwo}>Filter 2</button>
    </div>
  );
};

export default controls;
