import React, { Component } from 'react'
import axios from 'axios'

import Restaurants from '../components/Restaurants'
import { BASE_URL } from '../utilities'
import SearchBar from '../components/SearchBar'
import backgroundImage from '../assets/background.jpg'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			restaurants: {},
		}
	}

	onSearch = searchValue => {
		window.localStorage.searchValue = searchValue
		axios
			.post(`${BASE_URL}/restaurants`, { location: searchValue })
			.then(results => {
				if (results.status === 200) {
					this.setState({ restaurants: results.data })
				} else {
					console.error("Can't get the restaurants because of an error")
				}
			})
			.catch(error => {
				console.error(error)
			})
	}

	render() {
		return (
			<div
				style={{
					height: '100vh',
					width: '100vw',
					backgroundImage: `url(${backgroundImage})`,
				}}
			>
				<div
					style={{
						margin: '0 auto',
						fontSize: '50px',
						textAlign: 'center',
						verticalAlign: 'center',
					}}
				>
					Home Page
				</div>
				<div>
					<SearchBar onSearch={this.onSearch} />
				</div>
				<div>
					<Restaurants restaurants={this.state.restaurants} />
				</div>
			</div>
		)
	}
}

export default Home
