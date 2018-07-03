import * as actionTypes from  './actionTypes'

export const changeFilter = (filter) => {
  return {
    type: actionTypes.CHANGE_FILTER,
    filter: filter
  }
};
