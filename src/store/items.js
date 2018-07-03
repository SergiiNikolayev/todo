import * as actionTypes from './actions';
import {VisibilityFilters} from './actions';

const initialState = {
  list: [],
};

const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        list: state.list.concat([
          {
            isDone: false,
/*            currentFilter: VisibilityFilters.SORT_BLACK,*/
            name: action.payload.name,
            id: action.payload.id
          }
        ])
      };

    case actionTypes.MARK_DONE:
      return {
        list: state.list.map( element =>
          (element.id === action.id )
          ? {...element, isDone: !element.isDone}
          : { ...element})
      };

    default:
      return state;
  }
  /*
    return state;*/
};

export default reducerTodo;
