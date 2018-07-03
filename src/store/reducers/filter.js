import {CHANGE_FILTER, VisibilityFilters} from '../actions/actionTypes';

const initialState = {
    currentFilter: VisibilityFilters.SORT_ALL
};

const reducerFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        currentFilter: action.filter
      };
    default:
      return state;
  }
};

export default reducerFilter;
