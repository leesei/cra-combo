import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app';

import 'sanitize.css/sanitize.css';
import './index.css';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);

registerServiceWorker();
