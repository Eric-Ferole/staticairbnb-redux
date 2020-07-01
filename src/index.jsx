import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import flatsReducer from './reducers/flats_reducer';

import '../assets/stylesheets/application.scss';
import App from './components/App/App';

const reducers = combineReducers({
  flats: flatsReducer
});

const root = document.getElementById('root');
debugger
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>, root
  );
}
