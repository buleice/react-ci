/*
 * @Author: hanchengji
 * @Date: 2022-04-03
 * @LastEditors: hanchengji
 * @LastEditTime: 2022-04-04
 * @FilePath: /react-demo/src/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by hanchengji/跨越新科技, All Rights Reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './app/store';
import { Provider } from 'react-redux';

// Create a root.

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
