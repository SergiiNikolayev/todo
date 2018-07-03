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

export const add = ({id, name}) => {
  return {
    type: ADD,
    id: id,
    name: name
  }
};

export const markDone = (getId) => {
  return {
    type: MARK_DONE,
    id: getId
  }
};

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    filter: filter
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
