//типы действий
export const ADD = 'ADD';
export const MARK_DONE = 'MARK_DONE';
export const CHANGE_FILTER = 'CHANGE_FILTER';

//другие константы

export const VisibilityFilters = {
  SORT_RED : 'SORT_RED',
  SORT_BLACK : 'SORT_BLACK',
  SORT_ALL : 'SORT_ALL'
};

//генераторы действий, action creators

export const add = () => {
  return {
    type: ADD
  }
};

export const markDone = () => {
  return {
    type: MARK_DONE
  }
};

export const changeFilter = () => {
  return {
    type: CHANGE_FILTER
  }
};

/*export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}*/
