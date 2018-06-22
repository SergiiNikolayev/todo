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
    default:
      return state;
  }
  /*
    return state;*/
};

export default reducerTodo;
