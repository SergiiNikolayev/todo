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
  return dispatch => {
    setTimeout( () => {
      dispatch(saveAdd({id, name}));
    }, 3000 );
  }
};


export const markDone = (getId) => {
  return {
    type: actionTypes.MARK_DONE,
    id: getId
  }
};
