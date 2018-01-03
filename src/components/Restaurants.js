import React from 'react'
import PropTypes from 'prop-types'
import { restaurantProps } from '../utilities/propTypes'
import Restaurant from './Restaurant'

const Restaurants = ({ register, restaurants }) => (
	<div
		style={{
			padding: '0 20px 0 20px',
			height: '100vh',
			overflow: 'hidden',
			overflowY: 'scroll',
		}}
	>
		{Object.values(restaurants).map(restaurant => (
			<Restaurant key={restaurants.id} register={register} {...restaurant} />
		))}
	</div>
)

Restaurants.propTypes = {
	register: PropTypes.func.isRequired,
	restaurants: PropTypes.shape(restaurantProps),
}

Restaurants.defaultProps = {
	restaurants: {},
}

export default Restaurants
