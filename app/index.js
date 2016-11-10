import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import { Provider } from 'react-redux';
import { configureStore, runSagas } from './store';
import App from 'containers/App';

/* Sagas */
import { appData } from 'containers/App/sagas';

const initialState = {};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/* MOUNT SAGAS */
runSagas([
  appData,
]);
