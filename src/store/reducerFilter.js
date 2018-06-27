import {VisibilityFilters} from './actions';

const reducerFilter = (filter) => {
  switch (filter) {
    case VisibilityFilters.SORT_RED:
      return state.items.filter(item => state.items.isDone);
    case VisibilityFilters.SORT_BLACK:
      return state.items.filter(item => state.items.isDone);
    case VisibilityFilters.SORT_ALL:
      return state.items.filter(item => state.items.isDone);
    default:
      return state;
  }
};

export default reducerFilter;
