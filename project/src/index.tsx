import React from 'react';
import ReactDOM from 'react-dom';
import {offers} from './mocks/offers';
import App from './components/app/app';
import { Provider } from 'react-redux';
import {store} from './store/store';
import { fetchOffersAction, fetchCommentsAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
