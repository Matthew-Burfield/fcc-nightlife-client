import axios from 'axios'
import StarRating from 'react-stars'
import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import { BASE_URL, getSavedSearch, isUserSignedIn, registerForRestaurant } from '../utilities'
import SearchBar from '../components/SearchBar'

import Moon from '../assets/svg/Moon'
import CityOne from '../assets/svg/CityOne'
import CityTwo from '../assets/svg/CityTwo'
import CityThree from '../assets/svg/CityThree'
import CityFour from '../assets/svg/CityFour'
import Diners from '../assets/svg/Diners'
import Star from '../assets/svg/Star'

import './home.scss'

const parallaxSpeed = val => ({
	transform: `translateZ(${val * -1}px) scale(${1 + val})`,
})

const getStyles = (val, top) => Object.assign({}, { top: `${top}px` }, parallaxSpeed(val))

class Home extends Component {
	constructor(props) {
		// If there is a saved search, retrieve it
		const restaurants = getSavedSearch()
		super(props)
		this.state = {
			restaurants,
			isLoading: false,
		}
	}

	onSearch = searchValue => {
		window.localStorage.searchValue = searchValue
		this.setState({ isLoading: true })
		axios
			.post(`${BASE_URL}/restaurants`, { location: searchValue })
			.then(results => {
				this.setState({ isLoading: false })
				if (results.status === 200) {
					this.setState({ restaurants: results.data })
				} else {
					console.error("Can't get the restaurants because of an error")
				}
			})
			.catch(error => {
				this.setState({ isLoading: false })
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
			// Before logging in, save the current search
			window.localStorage.restaurants = JSON.stringify(this.state.restaurants)
			window.location.replace(`${BASE_URL}/login`)
		}
	}

	restaurantRender = props => (
		<div
			className="parallaxLayerSearch restaurant"
			style={getStyles(2.2, props.index * 700 + 1300)}
		>
			<div className="restaurantContainer">
				<div>
					<div className="restaurantImage">
						<img
							style={{ borderRadius: 2 }}
							height={100}
							alt={'restaurant thumbnail'}
							src={props.image_url && props.image_url.length > 0 ? props.image_url : ''} // TODO: add placeholder
						/>
					</div>
					<div className="restaurantInfo">
						<div className="restaurantName">Name: {props.name}</div>
						<div className="innerContainer">
							<StarRating className="starRating" value={props.rating} edit={false} />
							<button className="restaurantButton" onClick={() => props.register(props.id)}>
								Current count: {props.count}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

	render() {
		return (
			<div>
				<div className="parallax">
					<div className="parallaxGroup">
						<div
							className="parallaxLayer"
							style={Object.assign({}, getStyles(2.8, 30), {
								textAlign: 'left',
								left: '40vw',
							})}
						>
							<Moon />
						</div>
						<div className="parallaxLayer" style={getStyles(2.4, 29)}>
							<CityFour />
						</div>
						<div className="parallaxLayer" style={getStyles(2.3, 129)}>
							<CityThree />
						</div>
						<div className="parallaxLayer" style={getStyles(2.2, 209)}>
							<CityTwo />
						</div>
						<div className="parallaxLayer" style={getStyles(2.1, 207)}>
							<CityOne />
						</div>
						<div className="skyGradient" />
						{/* // black floor board */}
						<div className="parallaxLayer blackFloorboard" style={getStyles(2.2, 0)} />
						<div className="parallaxLayer" style={getStyles(1.5, 170)}>
							<Diners />
						</div>
						<div className="parallaxLayerSearch heading" style={getStyles(2.2, 600)}>
							Nightlife
							<SearchBar onSearch={this.onSearch} />
						</div>
						{this.state.isLoading ? (
							<div className="parallaxLayer" style={getStyles(2.2, 1100)}>
								Loading...
							</div>
						) : (
							<div>
								{Object.values(this.state.restaurants).map((restaurant, index) => (
									<Restaurant
										key={restaurant.id}
										index={index}
										register={this.onRegister}
										render={this.restaurantRender}
										{...restaurant}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
}

export default Home
