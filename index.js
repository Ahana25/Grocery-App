import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ContextProvider from './Context/ContextProvider';
import {Provider} from 'react-redux'
import store from './Redux/Store'


ReactDOM.render(
  <Provider store={store}>
  <ContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextProvider>
    </Provider>,
  document.getElementById('root')
);


