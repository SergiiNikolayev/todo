import { combineReducers } from 'redux';
import reducer from './reducer';
import reducerFilter from './reducerFilter'

export default combineReducers({
  reducer,
  reducerFilter
})
