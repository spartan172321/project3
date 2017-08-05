// Include React
import React, { Component } from 'react'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Main from './components/Main.jsx'
import Header from './components/Header.jsx'


class App extends Component {
	render() {
		return(
			<div className="App">

			<Header />
			<Main />

			</div>
		
	)
	}
}


// Export the component back for use in other files
export default App;
