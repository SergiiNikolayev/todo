import React from 'react';

const input = (props) => {
  return (
    <div>
      <input
        placeholder="type here pls"
        type="text"
        onChange={props.onUserChange}
        className={props.cN}
        ref={props.userRef}
      />
    </div>
  );
};

export default input;
