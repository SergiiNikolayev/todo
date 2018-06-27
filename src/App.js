import React, {Component} from 'react';
import {connect} from 'react-redux'

import Controls from './components/Controls'
import Input from './components/Input'
import Output from './components/Output'
import {getFilteredItems} from './store/selects'
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
    console.log(this.props);
  };

  doneHandler = (event, id, name) => {
    console.log('click made on:  \"' + name + " : " + id + '\"  |event: ' + event);
    this.props.onItemDone(id);
  };

  sortDoneHandler = () => {
    this.props.onItemSortDone();
  };

  sortUnDoneHandler = () => {
    this.props.onItemSortUnDone();
  };

  sortAllHandler = () => {
    this.props.onItemSortAll()
  };

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
          userClickFilterOne={this.sortDoneHandler}
          userClickFilterTwo={e => this.sortUnDoneHandler(e)}
          userClickFilterThree={e => this.sortAllHandler(e)}
        />
        <ol>
          {
            this.props.todoItems.map((el, index) =>
              (el.name !== '' && el.name !== ' ' && el.name !== null)
                ? <Output
                  userDone={el.isDone}
                  makeClick={(event) =>
                    this.doneHandler(event, el.id, el.name)}
                  key={el.id}>{el.name}</Output>
                : null
            )}
        </ol>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    //todoItems: state.items,
    todoItems: getFilteredItems({ ...state }) //store
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
        type: 'MARK_DONE', id
      })
    },
    onItemSortDone: () => {
      dispatch({
        type: 'SORT_RED', /*whatToSort: item.items.isDone = true*/
      })
    },
    onItemSortUnDone: () => {
      dispatch({
        type: 'SORT_BLACK'
      })
    },
    onItemSortAll: () => {
      dispatch({
        type: 'SORT_ALL'
      })
    }
  })
)(App);
