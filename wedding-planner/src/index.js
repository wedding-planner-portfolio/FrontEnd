import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import {applyMiddleware, createStore } from "redux";
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore (
    rootReducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
