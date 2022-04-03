/*
 * @Author: hanchengji
 * @Date: 2022-04-03
 * @LastEditors: hanchengji
 * @LastEditTime: 2022-04-03
 * @FilePath: /react-demo/src/App.tsx
 * @Description:
 *
 * Copyright (c) 2022 by hanchengji/公司名, All Rights Reserved.
 */
import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
