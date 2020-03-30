import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
import './styles/custom.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
