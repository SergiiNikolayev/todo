import React, {Component} from 'react';
import {connect} from 'react-redux'

import Controls from './components/Controls'
import Input from './components/Input'
import Output from './components/Output'
import {getFilteredItems} from './store/selects'
import './index.css'
import {VisibilityFilters} from './store/actions';
import * as actionCreators from './store/actions';

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
          userClickFilterOne={e => this.props.changeFilter(VisibilityFilters.SORT_RED)}
          userClickFilterTwo={e => this.props.changeFilter(VisibilityFilters.SORT_BLACK)}
          userClickFilterThree={e => this.props.changeFilter(VisibilityFilters.SORT_ALL)}
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
  mapStateToProps => ({
    //todoItems: state.items,
    todoItems: getFilteredItems(mapStateToProps) //store
  }),
  mapDispatchToProps => ({
    onItemAdd: (item) => {
      mapDispatchToProps(actionCreators.add({id: Date.now(), name: item}));
    },
    onItemDone: (id) => {
      mapDispatchToProps(actionCreators.markDone(id));
    },
    changeFilter: (filter) => {
      mapDispatchToProps(actionCreators.changeFilter(filter))
    }
  })
)(App);
