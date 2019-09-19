import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import store from "./store";
import './icon/my/iconfont.css';
import filter from "./filter";

import {
    Provider
} from "react-redux";
axios.interceptors.request.use(config=>{
    config.url="/music163"+config.url;
    return config;
})
React.Component.prototype.$filter=filter;
React.Component.prototype.$axios=axios;
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
