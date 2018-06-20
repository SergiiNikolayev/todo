import React from 'react';

const list = (props) => {
  return (
    <div>
      <h4>{props.children}</h4>
      <button onClick={props.userClick}>Add</button>
      <button onClick={props.userClickFilter}>Filter 1</button>
      <button onClick={props.userClickFilter2}>Filter 2</button>
    </div>
  );
};

export default list;
