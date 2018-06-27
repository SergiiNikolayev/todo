import {CHANGE_FILTERS, VisibilityFilters} from './actions';

const initialState = {
    currentFilter: VisibilityFilters.SORT_ALL
}

const reducerFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTERS:
      return {
        ...state,
        currentFilter: action.filter
      };
    default:
      return state;
  }
};

export default reducerFilter;
