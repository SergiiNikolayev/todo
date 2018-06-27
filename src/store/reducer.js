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
            /*currentFilter: VisibilityFilters.SORT_ALL,*/
            name: action.payload.name,
            id: action.payload.id
          }
        ])
      };

    case actionTypes.MARK_DONE:
      return state.items.map(item =>
        (item.id === action.id)
          ? {...item, isDone: !item.isDone}
          : {...item});

/*    case actionTypes.SORT_REDX:
      return state.items.filter(item => item.isDone);
    /!*      const newState = [ ...state ];
          const fltr = state.filter(item => item.isDone);
          const newNewState = [ ...newState];
          return newNewState;*!/
    /!*      return state.filter(item => item.isDone);*!/

    /!* black case is dangerous because it returns cut state *!/
    case actionTypes.SORT_BLACKX:
      return state.items.filter(item => !item.isDone);
    case actionTypes.SORT_ALLX:
      return {...state};*/
    default:
      return state;
  }
  /*
    return state;*/
};

export default reducerTodo;
