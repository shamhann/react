import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './style.css'
import store from "./redux";
import App from "./components/App";


ReactDOM.render(
    <Provider store={store}>
        <div className='basis'>
           <App/>
        </div>
    </Provider>,
    document.getElementById('root')
);
























