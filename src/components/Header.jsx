import React, { Component } from 'react'
// import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div className="Header">
			
				<nav>
					<div class="toggle-wrap">
						<span class="toggle-bar"></span>
					</div>			
				</nav>

				<aside>
					<a href="/">View Map</a>
					<a href="/edit">Add Note</a>
				</aside>

					<div class="add-note">
					<button type="button" class="btn btn-danger btn-circle" ><span class="glyphicon glyphicon-plus"></span></button>
					</div>
			
			</div>
		)
	}
}

export default Header