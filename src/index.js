import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from "./redux/combinereducers";
const store=createStore(reducer);
const app =
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>;
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
