import './assets/style.scss';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import baseReducer from "./reducers/baseReducer";

const store = createStore(
    baseReducer,
    applyMiddleware(logger, thunk)
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#app'),
);
