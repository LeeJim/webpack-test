// import 'core-js/fn/object/assign';
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import App from './components/Main';
// import StockList from './components/StockList';

// // Render the main component into the dom
// ReactDOM.render(<StockList />, document.getElementById('app'));


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'


let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
