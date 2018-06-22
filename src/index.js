import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import reducerTodo from './store/reducer'

const store = createStore(reducerTodo,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

/*store.subscribe(() => {
  console.log('subscribe', store.getState());
});*/

/*store.dispatch({type: 'ADD', payload: 'something'});
store.dispatch({type: 'ADD', payload: 'something 2'});*/

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render( app, document.getElementById('root'));
