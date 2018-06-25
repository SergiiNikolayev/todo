import React from 'react';

const controls = (props) => {
  return (
    <div>
      <h4>{props.children}</h4>
      <button onClick={props.userClick}>Add</button>
      <button onClick={props.userClickFilterOne}>Done [red]</button>
      <button onClick={props.userClickFilterTwo}>Not Done [black]</button>
      <button onClick={props.userClickFilterThree}>Show all</button>
    </div>
  );
};

export default controls;
