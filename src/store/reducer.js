import * as actionTypes from './actions';
import {VisibilityFilters} from './actions';

const initialState = {
  items: [],
};

const testState = {
  items: [
    {
      id: 1529937741380,
      name: "test01",
      isDone: false,
      currentFilter: VisibilityFilters.SORT_ALL
    },
    {
      id: 1529937741381,
      name: "test02",
      isDone: false,
      currentFilter: VisibilityFilters.SORT_ALL
    },
    {
      id: 1529937741382,
      name: "test03",
      isDone: false,
      currentFilter: VisibilityFilters.SORT_ALL
    },
    {
      id: 1529937741383,
      name: "test04",
      isDone: false,
      currentFilter: VisibilityFilters.SORT_ALL
    }
  ]
};

const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        items: state.items.concat([
          {
            isDone: false,
            currentFilter: VisibilityFilters.SORT_BLACK,
            name: action.payload.name,
            id: action.payload.id
          }
        ])
      };

    case actionTypes.MARK_DONE:
      return {
        items: state.items.map( element =>
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
