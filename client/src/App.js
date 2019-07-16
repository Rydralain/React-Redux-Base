import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import rootReducer from './components/rootReducer';

import Sample from './components/sample';


const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

function App() {
  return (
    <Provider store={store}>
      <Sample />
    </Provider>
  );
}

export default App;
