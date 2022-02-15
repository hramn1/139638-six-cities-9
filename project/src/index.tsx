import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const numberRent = 666;

ReactDOM.render(
  <React.StrictMode>
    <App numberRent={numberRent} />
  </React.StrictMode>,
  document.getElementById('root'));
