import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import '../node_modules/modern-normalize/modern-normalize.css';
import './styles/base.scss';

console.log(store);

ReactDOM.render(
    <Provider store={store}>
           <App/>  
    </Provider>,
    document.querySelector('#root'),
);
