import React, { Component } from 'react'
import axios from 'axios'

import Restaurants from '../components/Restaurants'
import { BASE_URL, isUserSignedIn, registerForRestaurant } from '../utilities'
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

	onRegister = id => {
		if (isUserSignedIn()) {
			registerForRestaurant(id)
				.then(result => {
					if (result.status === 200) {
						const newRestaurants = JSON.parse(JSON.stringify(this.state.restaurants))
						const currentCount = newRestaurants[id].count
						newRestaurants[id].count =
							result.data === 'increased' ? currentCount + 1 : currentCount - 1
						this.setState({ restaurants: newRestaurants })
					} else {
						console.error("Couldn't register to restaurant: ", result.status)
					}
				})
				.catch(error => {
					console.error(error)
				})
		} else {
			window.location.replace(`${BASE_URL}/login`)
		}
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
						color: 'white',
						paddingTop: 50,
					}}
				>
					Free Code Camp Nightlife App
				</div>
				<div
					style={{
						padding: '100px 0 20px 0',
						textAlign: 'center',
					}}
				>
					<SearchBar onSearch={this.onSearch} />
				</div>
				<div>
					<Restaurants restaurants={this.state.restaurants} register={this.onRegister} />
				</div>
			</div>
		)
	}
}

export default Home
