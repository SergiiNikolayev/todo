import React, { Component } from 'react';

import List from './components/List'
import Input from './components/Input'
import Output from './components/Output'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Input/>
        <List/>
        <Output>Hello</Output>
      </React.Fragment>
    );
  }
}

export default App;
