import './assets/style.scss';
import React from 'react';
import {default as ReactDOM, render} from 'react-dom';
import App from './components/App';
import allReducers from "./reducers";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#app'),
);
