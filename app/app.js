/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
// import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import history from 'utils/history';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css/sanitize.css';
import './antd.css';
import './bootstrap.css';
import { I18nextProvider } from 'react-i18next';
import App from 'containers/App';
import i18n from './i18n';
// Import root app

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

import configureStore from './configureStore';
import { defaultTheme } from './res/theme/defaultTheme';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router history={history}>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </Router>
    </I18nextProvider>
  </Provider>,
  MOUNT_NODE,
);
