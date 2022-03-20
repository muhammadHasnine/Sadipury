import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './App.css'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'


ReactDom.render(
    <>
    <BrowserRouter>
    <Provider store ={store}>
    <App />
    </Provider>
    </BrowserRouter>
       

    </>,document.getElementById('root')
);