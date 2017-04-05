import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import Page from './components/Page';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(apiMiddleware, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Page />
  </Provider>
  , document.querySelector('.container'));
