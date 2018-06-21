import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/';
import { Provider } from "react-redux";
import Store from "./store/";

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
