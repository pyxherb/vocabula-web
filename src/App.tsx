import React from 'react';
import './App.css';
import { serverConfig } from './model/srvcfg';
import { Loading } from './view/Loading';
import { Home } from './view/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	if (serverConfig === undefined)
		return (
			<Loading />
		);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Home}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
