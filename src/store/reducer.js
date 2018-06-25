import * as actionTypes from './actions';

const initialState = [];

const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          isDone: false
        }
      ];
    case actionTypes.DONE:
      return state.map( item =>
        (item.id === action.id)
          ? {...item, isDone: !item.isDone}
          : item
      );
    case actionTypes.SORT_RED:
      return [
        ...state.filter( item =>
          item.isDone === true
        )
      ];
    case actionTypes.SORT_BLACK:
      return state.filter( item =>
        item.isDone !== true
      );
    case actionTypes.SORT_ALL:
      return state.filter( item =>
        item.isDone || !item.isDone
      );
    default:
      return state;
  }
  /*
    return state;*/
};

export default reducerTodo;
