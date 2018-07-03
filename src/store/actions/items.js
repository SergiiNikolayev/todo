import * as actionTypes from './actionTypes'

//генераторы действий, action creators

/** video #269:6minute of react 16 course **/
export const saveAdd = ({id, name}) => {
  return {
    type: actionTypes.ADD,
    id: id,
    name: name
  }
};

export const add = ({id, name}) => {
  return (dispatch, getState) => {
    setTimeout( () => {
/*      const oldName = getState().items;
      console.log(oldName);*/
      dispatch(saveAdd({id, name}));
    }, 1108 );
  }
};

export const markDone = (getId) => {
  return {
    type: actionTypes.MARK_DONE,
    id: getId
  }
};
