import React from 'react'
import PropTypes from 'prop-types'
import { restaurantProps } from '../utilities/propTypes'
import Restaurant from './Restaurant'

const Restaurants = ({ restaurants }) => (
	<div>
		{Object.values(restaurants).map(restaurant => (
			<Restaurant key={restaurants.id} {...restaurant} />
		))}
	</div>
)

Restaurants.propTypes = {
	restaurants: PropTypes.shape(restaurantProps),
}

Restaurants.defaultProps = {
	restaurants: {},
}

export default Restaurants
