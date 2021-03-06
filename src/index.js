import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import queryApp from './reducers'
import App from './components/App'
// import registerServiceWorker from './registerServiceWorker';


// Logger with default options
import logger from 'redux-logger'

let store = createStore(queryApp, applyMiddleware(thunk, logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()