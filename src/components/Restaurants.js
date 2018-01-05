import React from 'react'
import PropTypes from 'prop-types'
import { restaurantProps } from '../utilities/propTypes'
import Restaurant from './Restaurant'

const Restaurants = ({ register, render, restaurants }) => (
	<div
		style={{
			padding: '0 20px 0 20px',
			height: '100vh',
			overflow: 'hidden',
			overflowY: 'scroll',
		}}
	>
		{Object.values(restaurants).map(restaurant => (
			<Restaurant key={restaurants.id} register={register} render={render} {...restaurant} />
		))}
	</div>
)

Restaurants.propTypes = {
	register: PropTypes.func.isRequired,
	render: PropTypes.func,
	restaurants: PropTypes.shape(restaurantProps),
}

Restaurants.defaultProps = {
	render: null,
	restaurants: {},
}

export default Restaurants
