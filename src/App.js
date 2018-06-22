import React, {Component} from 'react';
import {connect} from 'react-redux'

import Controls from './components/Controls'
import Input from './components/Input'
import Output from './components/Output'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.getTextInput = React.createRef();
  }

  itemAddHandler = () => {
    this.props.onItemAdd(this.getTextInput.value);
    this.getTextInput.value = '';
  }

  doneHandler = (event, id, name) => {
    console.log('click made on:  \"' + name + " : " + id + '\"  |event: ' + event);
    this.props.onItemDone(id);
  }

  render() {
    return (
      <React.Fragment>
        <Input
          cN="myInput"
          userRef={(input) => {
            this.getTextInput = input
          }}
        />
        <Controls
          userClick={this.itemAddHandler}
          userClickFilterOne={e => console.log('second button')}
          userClickFilterTwo={e => console.log('third button')}
        />
        <ol>
          {/*          {
            this.props.todoItems.map((el, index) =>
              (el !== '' && el !== ' ' && el !== null) ?
                <Output makeClick={(event) => this.doneHandler(event, index)} key={index}>{el}</Output> : null
            )}*/}
          {
            this.props.todoItems.map((el, index) =>
              (el.name !== '' && el.name !== ' ' && el.name !== null) ?
                <Output userDone={el.isDone} makeClick={(event) => this.doneHandler(event, el.id, el.name)}
                        key={el.id}>{el.name}</Output> : null
            )}
        </ol>
      </React.Fragment>
    );
  }
}


export default connect(
  state => ({
    todoItems: state
  }),
  dispatch => ({
    onItemAdd: (item) => {
      dispatch({
        type: 'ADD', payload: {
          id: Date.now(),
          name: item
        }
      })
    },
    onItemDone: (id) => {
      dispatch({
        type: 'DONE', id
      })
    }
  })
)(App);
