import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {Provider,connect} form 'react-redux';
import {searchRobots} from './reducers.js';
import {createStore} from 'redux';

const store=createStore(searchRobots);      //store for redux
ReactDOM.render(
	<App store={store} />
, document.getElementById('root'));  //to render,name should start with uppercase
registerServiceWorker();

