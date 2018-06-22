import * as actionTypes from './actions';

const initialState = {
  item: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        item: {
          ...state.item,
          [action.itemContent]: state.item[action.itemContent]
        }
      }
    case actionTypes.REMOVE_ITEM:
      return {}
    case actionTypes.FILTER_ALL:
      return {}
    case actionTypes.FILTER_UNDONE:
      return {}
    case actionTypes.FILTER_DONE:
      return {}
    default:
      return state;
  }
};

export default reducer;
